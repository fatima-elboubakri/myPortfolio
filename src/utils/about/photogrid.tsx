import Image from 'next/image'
import React from 'react'
import { useTypedText } from '..'
import {
  barcelonaSagradaPhoto,
  bowlingPhoto,
  climbingTopPhoto,
  franceLaSalttePhoto,
  giewontPhoto,
  icelandWaterfallPhoto,
  londonArsenalPhoto,
  londonCanaryPhoto,
  londonChelsea,
  londonTowerBridgePhoto,
  londonVictoryPhoto,
  manchesterUnitedPhoto,
  mazuryDawnPhoto,
  mclarenPhoto,
  notreDamePhoto,
  parisEiffelPhoto,
  playingIEMPhoto,
  rysiankaPhoto,
  skiSwissPhoto,
  sushiPhoto,
  swissMurrenPhoto,
  walesPhoto
} from '../../assets'
import styles from './photogrid.module.scss'

export function VPhotoGrid() {
  return (
    <div className={styles.photoGrid}>
    {/*   <div className={styles.barca}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Sagrada Familia, Barcelona', 50)}
          <br/>
          {useTypedText('Date: 08.2018', 50)}
        </h2>
        <Image alt="Photo of Sagrada Familia" src={barcelonaSagradaPhoto} layout="fill"/>
      </div> */}
      <div className={styles.bridge}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Tisouka mountain, Chefchaouen', 50)}
          <br/>
          {useTypedText('Date: 01.2023', 50)}
        </h2>
        <Image alt="Tisouka mountain" src={londonTowerBridgePhoto} layout="fill"/>
      </div>
      <div className={styles.climb}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Classmate, Marrakech', 50)}
          <br/>
          {useTypedText('Date: 03.2018', 50)}
        </h2>
        <Image alt="Photo of climbing Fatima" src={climbingTopPhoto} layout="fill"/>
      </div>
      <div className={styles.eiffel}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Road to Tisouka mountain, Chefchouen', 50)}
          <br/>
          {useTypedText('Date: 01.2023', 50)}
        </h2>
        <Image alt="Photo of Road to Tisouka mountain" src={parisEiffelPhoto} layout="fill"/>
      </div>
 {/*      <div className={styles.murren}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Smile at Norsys, Marrakech', 50)}
          <br/>
          {useTypedText('Date: 05.2018', 50)}
        </h2>
        <Image alt="Photo of Smile at Norsys" src={swissMurrenPhoto} layout="fill"/>
      </div> */}
      <div className={styles.church}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Notre-Dame, Paris', 50)}
          <br/>
          {useTypedText('Date: 08.2018', 50)}
        </h2>
        <Image alt="Photo of Notre-Dame" src={notreDamePhoto} layout="fill"/>
      </div>
      {/* <div className={styles.alps}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: La Salette-Fallavaux, France', 50)}
          <br/>
          {useTypedText('Date: 08.2018', 50)}
        </h2>
        <Image alt="Photo of Alps in La Salette-Fallavaux" src={franceLaSalttePhoto} layout="fill"/>
      </div> */}
    {/*   <div className={styles.wales}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Cardiff, Wales', 50)}
          <br/>
          {useTypedText('Date: 02.2020', 50)}
        </h2>
        <Image alt="Photo of Cardiff" src={walesPhoto} layout="fill"/>
      </div> */}
      <div className={styles.chelsea}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Laser game , Marrakech', 50)}
          <br/>
          {useTypedText('Date: 04.2019', 50)}
        </h2>
        <Image alt="Photo of laser game " src={londonChelsea} layout="fill"/>
      </div>
      {/* <div className={styles.arsenal}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Emirates Stadium, London', 50)}
          <br/>
          {useTypedText('Date: 01.2020', 50)}
        </h2>
        <Image alt="Photo of Emirates Stadium" src={londonArsenalPhoto} layout="fill"/>
      </div> */}
      <div className={styles.manchester}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Azourki mountain, Azilal', 50)}
          <br/>
          {useTypedText('Date: 03.2022', 50)}
        </h2>
        <Image alt="Photo of Azourki mountain" src={manchesterUnitedPhoto} layout="fill"/>
      </div>
      {/* <div className={styles.bowling}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Bowling Club, Żywiec', 50)}
          <br/>
          {useTypedText('Date: 07.2018', 50)}
        </h2>
        <Image alt="Photo of Fatima bowling" src={bowlingPhoto} layout="fill"/>
      </div> */}
     {/*  <div className={styles.cross}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Giewont 1895 m MSL, Zakopane', 50)}
          <br/>
          {useTypedText('Date: 04.021', 50)}
        </h2>
        <Image alt="Photo of climbing on Giewont in winter" src={giewontPhoto} layout="fill"/>
      </div> */}
      <div className={styles.waterfall}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Safihat talj mountain, Chefchaouen', 50)}
          <br/>
          {useTypedText('Date: 01.2023', 50)}
        </h2>
        <Image alt="Photo of Safihat talj mountain" src={icelandWaterfallPhoto} layout="fill"/>
      </div>
      {/*
      <div className={styles.boots}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Rysianka 1290 m MSL, Beskid Żywiecki', 50)}
          <br/>
          {useTypedText('Date: 06.2019', 50)}
        </h2>
        <Image alt="Photo of mountains seen from Rysianka" src={rysiankaPhoto} layout="fill"/>
      </div>
       <div className={styles.sushi}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Momo Cafe, London', 50)}
          <br/>
          {useTypedText('Date: 10.2019', 50)}
        </h2>
        <Image alt="Photo of sushi" src={sushiPhoto} layout="fill"/>
      </div> 
      <div className={styles.monument}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Victoria Memorial, London', 50)}
          <br/>
          {useTypedText('Date: 07.2019', 50)}
        </h2>
        <Image alt="Photo of Victoria Memorial" src={londonVictoryPhoto} layout="fill"/>
      </div>
      <div className={styles.lake}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Tajty Lake, Wilkasy', 50)}
          <br/>
          {useTypedText('Date: 05.2021', 50)}
        </h2>
        <Image alt="Photo of lake" src={mazuryDawnPhoto} layout="fill"/>
      </div>
       <div className={styles.skyscrapper}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Canary Wharf, London', 50)}
          <br/>
          {useTypedText('Date: 01.2020', 50)}
        </h2>
        <Image alt="Photo of Canary Wharf" src={londonCanaryPhoto} layout="fill"/>
      </div>
      <div className={styles.car}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: McLaren, London', 50)}
          <br/>
          {useTypedText('Date: 06.2019', 50)}
        </h2>
        <Image alt="Photo of Formula One car" src={mclarenPhoto} layout="fill"/>
      </div>
      <div className={styles.ski}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Eiger, Switzerland', 50)}
          <br/>
          {useTypedText('Date: 02.2021', 50)}
        </h2>
        <Image alt="Photo of Fatima skiing" src={skiSwissPhoto} layout="fill"/>
      </div>
      <div className={styles.game}>
        <h2 className={styles.photoInfo}>
          {useTypedText('Place: Intel Extreme Masters, Katowice', 50)}
          <br/>
          {useTypedText('Date: 03.2019', 50)}
        </h2>
        <Image alt="Photo of Fatima plaing game" src={playingIEMPhoto} layout="fill"/>
      </div> */}
    </div>
  )
}

//TO-DO refactoring of VPhotoGrid