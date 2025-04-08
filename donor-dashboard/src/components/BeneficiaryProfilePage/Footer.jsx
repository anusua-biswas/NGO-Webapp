import React from "react";
import styles from "./InputDesign.module.css";

const FooterColumn = ({ title, links }) => (
  <div className={styles.footerColumn}>
    <h3 className={styles.footerTitle}>{title}</h3>
    {links.map((link, index) => (
      <a key={index} href="#" className={styles.footerLink}>
        {link}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h2 className={styles.footerLogo}>WebApp</h2>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <svg className="w-[24px] h-[24px]" />
            </a>
            <a href="#" className={styles.socialLink}>
              <svg className="w-[24px] h-[24px]" />
            </a>
            <a href="#" className={styles.socialLink}>
              <svg className="w-[24px] h-[24px]" />
            </a>
            <a href="#" className={styles.socialLink}>
              <svg className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <FooterColumn title="Topic" links={["Page", "Page", "Page"]} />
          <FooterColumn title="Topic" links={["Page", "Page", "Page"]} />
          <FooterColumn title="Topic" links={["Page", "Page", "Page"]} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
