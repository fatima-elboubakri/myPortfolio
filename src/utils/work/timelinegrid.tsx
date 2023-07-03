import Image from "next/image";
import { nobleLogo, usLogo, waskoLogo, tellyoLogo, m2mLogo, openclassrooms, techtrend, pcaLogo } from "../../assets";
import { getDate } from "../date";
import styles from "./timelinegrid.module.scss";
import { useTranslation } from "react-i18next";


export function VTimelineGrid() {
  const { t } = useTranslation();
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2018</h1>
        <div className={styles.timelinePoint} />
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>Intership.</h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
            <Image
                alt="norsys company logo."
                src={waskoLogo}
                height={70}
                width={30}
                objectFit="cover"
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Norsys</h1>
              <h2 className={styles.cardContentDetails}>Marrakech</h2>
              <h2 className={styles.cardContentDetails}>03.2018 - 06.2018</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
      
            {t('work.intership')}
          </p>
        </div>
      </div>
    

      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <h1 className={styles.companyTitle}>Graduation</h1>
      </div>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="norsys company logo."
                src={waskoLogo}
                height={80}
                width={50}
                objectFit="cover"
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Norsys</h1>
              <h2 className={styles.cardContentDetails}>Marrakech</h2>
              <h2 className={styles.cardContentDetails}>08.2018 - 02.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>

            {t('work.norsys')}
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Wasko company logo."
                src={m2mLogo}
                height={13}
                width={55}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>M2MGroup</h1>
              <h2 className={styles.cardContentDetails}>Casablanca</h2>
              <h2 className={styles.cardContentDetails}>03.2020 - 11.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
      
            {t('work.m2m')}
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div
              className={styles.companyLogo}
              style={{ backgroundColor: "#0E2245" }}
            >
              <Image
                alt="Noble Systems company logo."
                src={openclassrooms}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Openclassroom</h1>
              <h2 className={styles.cardContentDetails}>Paris</h2>
              <h2 className={styles.cardContentDetails}>01.2021 - 12.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
         
            {t('work.oc')}
            <br />
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div
              className={styles.companyLogo}
              style={{ backgroundColor: "#0E2245" }}
            >
              <Image
                alt="Noble Systems company logo."
                src={techtrend}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Techtrend solution</h1>
              <h2 className={styles.cardContentDetails}>Casablanca</h2>
              <h2 className={styles.cardContentDetails}>02.2021 - 07.2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
     
            {t('work.techtrend')}
            <br />
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Tellyo company logo."
                src={pcaLogo}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Payment center for africa</h1>
              <h2 className={styles.cardContentDetails}>Casablanca</h2>
              <h2 className={styles.cardContentDetails}>08.2022 - now</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            
            {t('work.pca')}
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint} />
        <h1>{getDate()}</h1>
      </div>
    </div>
  );
}
