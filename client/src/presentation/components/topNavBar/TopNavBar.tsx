import React, { useState } from "react";
import styles from "./TopNavBar.module.css";
import { useTranslation } from "react-i18next";

const TopNavbar: React.FC = () => {
    const { t, i18n } = useTranslation<'translation'>();
    const [language, setLanguage] = useState("am"); // Default to Armenian

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className={styles.topNavbar}>
            <div className={styles.navigation}>
                <a href="#" className={styles.navButton}>{t("about_us")}</a>
                <a href="#" className={styles.navButton}>{t("bestDeals")}</a>
                <a href="#" className={styles.navButton}>{t("bestsellers")}</a>
                <a href="#" className={styles.navButton}>{t("newProducts")}</a>
            </div>
            <div className={styles.languageSelector}>
                <button
                    className={`${styles.languageButton} ${language === "am" ? styles.active : ""}`}
                    onClick={() => changeLanguage("am")}
                >
                    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g>
                            <path fill="#D90012" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path>
                            <path fill="#F2A800" d="M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4z"></path>
                            <path fill="#0033A0" d="M0 13h36v10H0z"></path>
                        </g>
                    </svg>
                </button>
                <button
                    className={`${styles.languageButton} ${language === "ru" ? styles.active : ""}`}
                    onClick={() => changeLanguage("ru")}
                >
                    <svg viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#f5f5f5"
                                  strokeWidth="0.5"></rect>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z"
                                  fill="#0C47B7"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 20H28V13.3333H0V20Z"
                                  fill="#E53B35"></path>
                        </g>
                    </svg>
                </button>
                <button
                    className={`${styles.languageButton} ${language === "en" ? styles.active : ""}`}
                    onClick={() => changeLanguage("en")}
                >
                    <svg viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <rect width="28" height="20" rx="2" fill="white"></rect>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z"
                                  fill="#D02F44"></path>
                            <rect width="12" height="9.33333" fill="#46467F"></rect>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TopNavbar;
