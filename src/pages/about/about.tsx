import Image from "next/image";
import Head from "next/head";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { VMenuBar, VPhotoGrid, VFooter } from "../../utils";
import {
  belayTheCppLogo,
  bonoboPressLogo,
  comicCommission1,
  comicCommission2,
  cssTricksLogo,
  dribbbleLogo,
  freeCodeCampLogo,
  hashnodeLogo,
  logoCommission,
  posterCommission,
  schemeCommission,
  sitePointLogo,
} from "../../assets";
import styles from "./about.module.scss";

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Karolina Hudziec Portfolio Page" />
        <meta name="author" content="Karolina Hudziec" />
        <meta
          name="keywords"
          content="Karolina, Hudziec, Portfolio, Frontend"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="About" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>About me</h1>
            <p className="text-lg mb-3 text-gray-500 dark:text-gray-400 font-mono leading-8 leading-loose">
              I started my career as a backend developer using PHP and Symfony.
              PHP remains my preferred language, and Symfony is the framework I
              adore. </p>
              <p className="text-lg mb-3 text-gray-500 dark:text-gray-400 font-mono leading-8 leading-loose">
              I make an effort to stay up-to-date with the latest Symfony
              developments. However, in the past couple of years, I discovered
              React, and that's where my passion for frontend development
              ignited. Every day, I strive to improve myself and learn new
              things in this field. </p>
              <p className="text-lg mb-3 text-gray-500 dark:text-gray-400 font-mono leading-8 leading-loose">
              My passion for development has given me two
              things: the joy of learning and the pleasure of sharing knowledge.</p>
              <p className="text-lg mb-3 text-gray-500 dark:text-gray-400 font-mono leading-8 leading-loose">
              
              To unwind, I find hiking to be a rejuvenating activity. There's a
              sense of challenge and productivity when I ascend mountains,
              making me appreciate life even more. Moreover, I have had the
              opportunity to explore precious places through image galleries.
              These experiences have left a profound impact on me and have
              helped me develop a deeper appreciation for the beauty of our
              world.
            </p>
          </Fade>
        </div>
   
        <Fade>
          <div className={styles.photoGallery}>
            <h1>Photo Gallery</h1>
         
            <VPhotoGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
