import Image from "next/image";
import { nobleLogo, usLogo, waskoLogo, tellyoLogo, m2mLogo, openclassrooms, techtrend, pcaLogo } from "../../assets";
import { getDate } from "../date";
import styles from "./timelinegrid.module.scss";

export function VTimelineGrid() {
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
            Projet : RECRUTE_SOURCING Conception et réalisation d'une
            application multiplateforme de gestion du recrutement et de sourcing
            dans les réseaux de professionnels (LinkedIn) en adoptant une
            architecture REST et une sécurisation JWT. Missions : Participation
            dans l’analyse et la répartition des tâches Développement des
            évolutions fonctionnelles. Correction des anomalies et réalisation
            des évolutions. Rédaction des différents documents accompagnant la
            livraison. Jeux et plan de tests. Outils : IONIC 3, Symfony 3.4,
            php, MySQL, REST API, JWT, Google Search API, PhpUnit, Bootstrap,
            Git, Composer, Trello.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
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
            Missions Client: ServiceNav http://coservit.com/servicenav/fr/,
            groupe Coservit , France Missions client: Réalisation des taches de
            chiffrage et d'analyse fonctionnelle Réalisation des POCs pour les
            clients potentiels Participation dans l’analyse et la répartition
            des tâches Développement des évolutions fonctionnelles. Correction
            des anomalies. Outils : Plugins Nagios, Perl, Powershell,
            Scriptshell, Php, Sql, Jira, Api Microsoft(Azure/office365), Git,
            Symfony, Vb Script, Scrum, Snmp, Rest Api Missions Interne:
            Formatrice en PHP dans le cadre de l'école technomacker PHP de
            Norsys Afrique Préparation des supports de formation Organisation et
            planification des formations interne des collaborateurs
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
            Projet: BMCE , MAUBANK Missions : Développement des solutions
            adaptées aux besoins des clients ; Analyse technique et Adaptation
            des composants logiciels existants ; Définition et l’implémentation
            de tests unitaires/fonctionnels; Rédaction des documents techniques
            des projets. Outils : VB .NET(.Net Framework 3.5), Pro*C, JAVA
            SE,JEE M2M framework ,rest api, git, svn, wildfly ,
            tomcat,maven,sql, oracle
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
            missions de mentoring et d'accompagnement pédagogique pour les
            projets du parcours "développeur des applications php/symfony"
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
            Projet Client: 07ZR Missions : Développement des nouvelles
            fonctionnalités Correction des Anomalies ; Définition et
            implémentation des tests unitaires &fonctionnels Outils: Symfony
            2.8/3.4 ,git,jira,mysql,elasticsearch,restapi,twig,css,js
            <br />
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard} />
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
            Projets wallets: CHAABI PAY, BPAY, SWIPE,... Clients : BCP, M2T
            Missions : • Conception et développement des solutions IT; •
            Participation dans la phase de l'estimation et de dénition des
            choix techniques. • Étude de faisabilité technique et dénition des
            règles de gestion. • Intégration des maquettes. • Développement des
            nouvelles fonctionnalités. • Participation dans la maintenance des
            solutions. • Dénition et réalisation des scénarios de tests; •
            Accompagnement du client durant l'étape de recette et d'intégration
            des solutions. • Partage des connaissances. Outils: React
            JS/Native,git,sql,keycloak,restapi,java,js
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint} />
        <h1>{getDate()}</h1>
      </div>
    </div>
  );
}
