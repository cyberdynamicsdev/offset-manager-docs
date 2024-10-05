import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Zintegrowane zarządzanie",
    Svg: require("@site/static/img/features-work.svg").default,
    description: (
      <>
        Pełna obsługa zleceń od momentu ich złożenia, poprzez planowanie
        produkcji, aż po finalizację i dostawę. Użytkownicy mogą monitorować
        postęp zleceń w czasie rzeczywistym
      </>
    ),
  },
  {
    title: "Optymalizacja produkcji",
    Svg: require("@site/static/img/features-process.svg").default,
    description: (
      <>
        Planowanie i zarządzanie pracą maszyn, uwzględniając dostępność zasobów,
        priorytety, efektywne wykorzystanie materiałów oraz minimalizacja
        odpadów, co przekłada się na oszczędności i większą wydajność.
      </>
    ),
  },
  {
    title: "Monitorowanie postępu i wydajności",
    Svg: require("@site/static/img/features-statistics.svg").default,
    description: (
      <>
        Dzięki modułowi raportowania, użytkownicy mogą na bieżąco monitorować
        postęp prac oraz wydajność maszyn i pracowników.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
