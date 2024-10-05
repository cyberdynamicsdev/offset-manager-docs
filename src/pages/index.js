import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Offset Manager to system do zarządzania produkcją w drukarni
          offsetowej, który automatyzuje i optymalizuje procesy od przyjęcia
          zlecenia po finalizację produkcji. Umożliwia pełną kontrolę nad
          procesami produkcyjnymi, zarządzanie stanami magazynowymi,
          automatyzację zamówień oraz analizę wydajności.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/web/intro"
          >
            Poradnik aplikacji webowej
          </Link>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/mobile"
          >
            Poradnik aplikacji mobilnej
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Dokumentacja programu`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
