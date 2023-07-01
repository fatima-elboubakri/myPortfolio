import React, { useEffect } from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'
import  {getLanguage, trans} from '../../i18n'
import { useTranslation } from 'react-i18next';



export function VMainHeader() {
  useEffect(()=>{console.log(getLanguage()),[]})
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {(trans("home.intro.title"))}
        <br/>
        {trans("home.intro.subtitle")}
      </h1>
      <h2>
        {trans("home.intro.description")}
      </h2>
    </div>
  )
}