import Link from "next/link";
import styles from "./menubar.module.scss";
import { changeLanguage, getLanguage } from "../i18n";
import { useState } from "react";

type MenuBarProps = {
  activeTab: "Home" | "Work" | "About";
};

export function VMenuBar(props: MenuBarProps) {
  const [lang, setLang] = useState(getLanguage());

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);

    changeLanguage(selectedLang);
    console.log("current lang", selectedLang);
  };

  //const selected = getLanguage() === 'fr'
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <div className={styles.squareInitials}>FB</div>
          <h3 className={styles.name}>Fatima Elboubakri</h3>
        </a>
      </Link>
      <Link href={`/`}>
        <a className={styles.tab}>
          <h3
            style={
              props.activeTab === "Home"
                ? { color: "orange" }
                : { color: "#D5D5D5" }
            }
          >
            Home
          </h3>
        </a>
      </Link>
      <Link href={`/work`}>
        <a className={styles.tab}>
          <h3
            style={
              props.activeTab === "Work"
                ? { color: "orange" }
                : { color: "#D5D5D5" }
            }
          >
            Work
          </h3>
        </a>
      </Link>
      <Link href={`/about`}>
        <a className={styles.tab}>
          <h3
            style={
              props.activeTab === "About"
                ? { color: "orange" }
                : { color: "#D5D5D5" }
            }
          >
            About
          </h3>
        </a>
      </Link>

      <div className={styles.tab}>
        <select
          id="states"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={lang}
          onChange={handleChangeLang}
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </nav>
  );
}
