import React, { useEffect, useState } from 'react';
import styles from './CartScreen.module.css';
import { useNavigate } from 'react-router-dom';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from '../../../presentation/components/header/Header';
import Breadcrumb from '../../../presentation/components/breadcrumb/Breadcrumb';
import { Product } from 'model/productModel';

const stripePromise = loadStripe(
  'pk_test_51R6oAbFLPEQ7E5VhHrRH2Pfv9Tz1bj5n80Qpej3eTrZOayzrJCt4oACyu1mu5dCno5DXImE4Uhe606XFnIkJGwdt00anS8AGEy'
);
stripePromise.then(stripe => console.log('Stripe loaded:', stripe));

const CartScreen: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleProductDetailNavigation = (product: Product) => {
    console.log(product.id);
    navigate(
      `/products/details/${encodeURIComponent(product.name)}?id=${product.id}`
    );
  };

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.origin !== 'https://checkout.stripe.com') return;

      if (event.data?.payload?.paymentStatus === 'paid') {
        alert('✅ Payment successful!');
        localStorage.removeItem('cartProducts');
        navigate('/');
      }
    };

    window.addEventListener('message', listener);

    return () => window.removeEventListener('message', listener);
  }, [navigate]);

  useEffect(() => {
    const stored = localStorage.getItem('cartProducts');
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const handleRemoveProduct = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = cartItems.filter(p => p.id !== id);
    setCartItems(updated);
    localStorage.setItem('cartProducts', JSON.stringify(updated));
    fetch(`${import.meta.env.VITE_API_URL}/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: updated.map(item => ({
          name: item.name,
          price: parseInt(item.price.replace(/[^\d]/g, '')), // convert price string like '11,900 ֏' to integer
          quantity: 1,
        })),
      }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error('❌ Checkout session error:', err));
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      console.log('Sending to backend:', cartItems);
      fetch(`${import.meta.env.VITE_API_URL}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems.map(product => ({
            name: product.name,
            price: product.price_new || product.price,
            quantity: 1,
          })),
        }),
      })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(err => console.error('Checkout session error:', err));
    }
  }, [cartItems]);

  return (
    <div className={styles.cartPage}>
      <languages />
      <Header />
      <Breadcrumb />

      <div className={styles.cartDetails}>
        <div className={styles.cartItems}>
          <h2>Գնումների Զամբյուղ</h2>
          <div className={styles.horizontalLine}></div>
          {cartItems.map((product, idx) => (
            <div
              key={idx}
              className={styles.cartItemRow}
              onClick={() => handleProductDetailNavigation(product)}
            >
              <div>
                <img
                  src={product.image_main}
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.details}>
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p>x1</p>
                </div>
              </div>
              <button
                onClick={e => handleRemoveProduct(product.id, e)}
                className={styles.removeButton}
                title="Remove from comparison"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6zm2 .5a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2H5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h2.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM5 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V3H5v-.5z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className={styles.checkoutSection}>
          <h2>Checkout</h2>
          {clientSecret && (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
