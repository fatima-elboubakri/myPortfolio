import Link from 'next/link'
import styles from './menubar.module.scss'

type MenuBarProps = {
  activeTab: "Home" | "Work" | "About"
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <div className={styles.squareInitials}>
            FB
          </div>
          <h3 className={styles.name}>
            Fatima Elboubakri
          </h3>
        </a>
      </Link>
      <Link href={`/`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Home" ? {color: "orange"} : {color: "#D5D5D5"}}>
            Home
          </h3>
        </a>
      </Link>
      <Link href={`/work`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Work" ? {color: "orange"} : {color: "#D5D5D5"}}>
            Work
          </h3>
        </a>
      </Link>
      <Link href={`/about`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "About" ? {color: "orange"} : {color: "#D5D5D5"}}>
            About
          </h3>
        </a>
      </Link>
    </nav>
  )
}