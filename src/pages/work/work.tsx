import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMenuBar, VTimelineGrid } from "../../utils";
import styles from "./work.module.scss";

export default function VWork() {
  return (
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Karolina Hudziec Portfolio Page" />
        <meta name="author" content="Karolina Hudziec" />
        <meta
          name="keywords"
          content="Karolina, Hudziec, Portfolio, Frontend"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="Work" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>My work history</h1>
            <h4>
              My name is Fatima El Boubakri, and I am a software engineer with
              diverse experience. I graduated as an engineer in Information and
              Communication Technologies and Embedded Systems (TICSE) in
              September 2018.
              <br />
              I began my career working on the "RECRUTE_SOURCING" project at
              Norsys Afrique, where I contributed to the analysis, development,
              and bug fixing of a cross-platform recruitment and sourcing
              management application.
              <br />
              Later, in March 2020, I joined M2MGROUP as a study and development
              engineer. I worked on projects such as BMCE and MAUBANK, where I
              developed customized solutions and wrote technical documents.
              <br />
              In February 2021, I joined Techtrend Solutions as a software
              engineer. I contributed to the development of new features and bug
              fixing for the "07ZR" client project.
              <br />
              Since August 2021, I have been working at Payment Center for
              Africa as a software engineer. I have participated in various
              projects, including CHAABI PAY, BPAY, and SWIPE, providing IT
              solutions, developing new features, and ensuring solution
              maintenance.
              <br />
              In addition, I have been mentoring students in PHP/Symfony
              application development projects at OpenClassrooms since January
              2021.
              <br />
              I have acquired a diverse set of skills, including working with
              tools such as React JS/Native, Git, SQL, Keycloak, REST API, Java,
              Scrum, as well as having a strong knowledge of Symfony, PHP,
              MySQL, and other technologies.
              <br />
              I am passionate about software development and have demonstrated
              my ability to adapt to different projects and work effectively in
              a team.
              <br />
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
