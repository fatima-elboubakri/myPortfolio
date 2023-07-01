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
import { trans } from "../../i18n";

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title> {trans('home.aboutme.title')}</title>
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
            <h1>{trans('aboutme.title')}</h1>
            <p className="text-lg mb-3 text-gray-500 dark:text-gray-400 font-mono leading-8 leading-loose">
            {trans('aboutme.description')}
            </p>
          </Fade>
        </div>
   
        <Fade>
          <div className={styles.photoGallery}>
            <h1>{trans('aboutme.gallery')}</h1>
         
            <VPhotoGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
