import React from "react";
import { PrismicRichText, PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ButtonLink } from "../../components/ButtonLink";
import styles from "./styles.module.css";

const TestSlice = ({ slice }) => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>{slice.primary.title}</div>
      <div className={styles.description}>
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div className={styles.image}>
        <PrismicNextImage field={slice.primary.TestImage} />
      </div>

      <div className={styles.githubLink}>
        {slice?.items?.map((item, i) => (
          <ButtonLink
            field={item.CtaLink}
            type={item.buttonStyle === "Filled" ? "filled" : "outlined"}
          >
            {item.CtaText}
          </ButtonLink>
        ))}
      </div>
    </section>
  );
};

export default TestSlice;
