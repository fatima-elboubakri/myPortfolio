import React, { useEffect } from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'
import  {getLanguage} from '../../i18n'
import { useTranslation } from 'react-i18next';



export function VMainHeader() {
  const { t } = useTranslation();
  useEffect(()=>{console.log(getLanguage()),[]})
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {(t("home.intro.title"))}
        <br/>
        {t("home.intro.subtitle")}
      </h1>
      <h2>
        {t("home.intro.description")}
      </h2>
    </div>
  )
}