import Image from "next/image";
import Head from "next/head";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { VMenuBar, VPhotoGrid, VFooter } from "../../utils";
import {
  belayTheCppLogo,
  bonoboPressLogo,

  cssTricksLogo,
  dribbbleLogo,
  freeCodeCampLogo,
  hashnodeLogo,

  sitePointLogo,
} from "../../assets";
import styles from "./about.module.scss";
import { useTranslation } from "react-i18next";

export default function VAbout() {
  const { t } = useTranslation();
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title> {t('home.aboutme.title')}</title>
        <meta name="description" content="Fatima Elboubakri Portfolio Page" />
        <meta name="author" content="Fatima Elboubakri" />
        <meta
          name="keywords"
          content="Fatima, Elboubakri, Portfolio, Frontend"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="About" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>{t('aboutme.title')}</h1>
            <p className="text-lg mb-3 text-gray-500 dark:text-gray-400 font-mono leading-8 leading-loose">
            {t('aboutme.description')}
            </p>
          </Fade>
        </div>
   
        <Fade>
          <div className={styles.photoGallery}>
            <h1>{t('aboutme.gallery')}</h1>
         
            <VPhotoGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
