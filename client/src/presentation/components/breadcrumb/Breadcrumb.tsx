import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className={styles.breadcrumb}>
            <Link to="/" className={styles.crumb}>Գլխավոր էջ</Link>
            {pathnames.map((value, index) => {
                if (value === "category") return null;
                if (value === "details") return null;

                const path = `/${pathnames.slice(0, index + 1).join("/")}`;
                let label = decodeURIComponent(value);
                if (value === "products") {
                    label = "Ապրանքներ"
                } else if (value === "comparison") {
                    label = "Համեմատություն"
                }

                return (
                    <span key={index}>
            <span className={styles.separator}>/</span>
            <Link to={path} className={styles.crumb}>
                {label}
            </Link>
            </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
