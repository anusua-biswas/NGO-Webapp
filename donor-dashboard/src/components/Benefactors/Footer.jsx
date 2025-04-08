import React from "react";
import styles from "./BenefactorPage.module.css";
import SocialIcon from "./SocialIcon";

function Footer() {
  const socialIcons = [
    { id: "26:588", fill: "#828282" },
    { id: "26:593", fill: "#828282" },
    { id: "26:598", fill: "#828282" },
    { id: "26:603", fill: "#828282" },
  ];

  const footerLinks = [
    {
      title: "Topic",
      pages: ["Page", "Page", "Page"],
    },
    {
      title: "Topic",
      pages: ["Page", "Page", "Page"],
    },
    {
      title: "Topic",
      pages: ["Page", "Page", "Page"],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h2 className={styles.footerLogo}>WebApp</h2>

        <div className={styles.socialIcons}>
          {socialIcons.map((icon, index) => (
            <div key={index} className={styles.socialIconWrapper}>
              <SocialIcon id={icon.id} fill={icon.fill} />
            </div>
          ))}
        </div>

        <div className={styles.footerLinksContainer}>
          {footerLinks.map((section, index) => (
            <div key={index} className={styles.footerLinkSection}>
              <h3 className={styles.footerLinkTitle}>{section.title}</h3>
              {section.pages.map((page, pageIndex) => (
                <a key={pageIndex} href="#" className={styles.footerLink}>
                  {page}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
