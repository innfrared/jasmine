import InteractiveProductCell from '@/features/catalog/components/InteractiveProductCell';
import Button from '@/shared/ui/button';
import type { EditorialManifestoProps } from '@/shared/types/landingHome';
import {
  CopyBlock,
  CtaWrap,
  Figure,
  Headline,
  Inner,
  Line,
  ProductRow,
  Section,
} from './EditorialManifesto.styles';

function EditorialManifesto({
  headline,
  line,
  image,
  ctaLabel,
  ctaHref,
  products,
}: EditorialManifestoProps) {
  const manifestoProducts = products.slice(0, 3);

  return (
    <Section aria-labelledby="editorial-manifesto-headline">
      <Inner>
        <CopyBlock>
          <Headline id="editorial-manifesto-headline">{headline}</Headline>
          {line ? <Line>{line}</Line> : null}
          {ctaLabel && ctaHref ? (
            <CtaWrap>
              <Button variant="link" size="sm" href={ctaHref}>
                {ctaLabel}
              </Button>
            </CtaWrap>
          ) : null}
        </CopyBlock>
      </Inner>
      <Figure>
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
      </Figure>
      {manifestoProducts.length > 0 ? (
        <ProductRow>
          {manifestoProducts.map((product, index) => (
            <InteractiveProductCell
              key={product.id}
              product={product}
              priority={index < 2}
            />
          ))}
        </ProductRow>
      ) : null}
    </Section>
  );
}

export default EditorialManifesto;
