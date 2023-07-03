import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMenuBar, VTimelineGrid } from "../../utils";
import styles from "./work.module.scss";
import { useTranslation } from "react-i18next";


export default function VWork() {
  const { t } = useTranslation();
  return (
    <div className={styles.workContainer}>
      <Head>
        <title>  {t('home.Workhistory.title')}</title>
        <meta name="description" content="Fatima Elboubakri Portfolio Page" />
        <meta name="author" content="Fatima Elboubakri" />
        <meta
          name="keywords"
          content="Fatima, Elboubakri, Portfolio, Frontend"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="Work" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>{t('work.title')}</h1>
            <h4>
            {t('work.description')}
            </h4>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
