import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'React 학습',
    link: "/docs/react/intro",
    Svg: require('@site/static/img/react-icon.svg').default,
    description: (
      <>
        리액트를 학습합니다.
      </>
    ),
  },
  {
    title: 'Javascript 학습',
    link: "/docs/javascript/intro",
    Svg: require('@site/static/img/Unofficial_JavaScript_logo_2.svg').default,
    description: (
      <>
        자바스크립트를 학습합니다.
      </>
    ),
  },
  {
    title: 'Java 학습',
    link: "/docs/java/intro",
    Svg: require('@site/static/img/java.svg').default,
    description: (
      <>
        자바를 학습합니다.
      </>
    ),
  },
  {
    title: 'Algorithm 학습',
    link: "/docs/algorithm/intro",
    Svg: require('@site/static/img/algorithm.svg').default,
    description: (
      <>
        알고리즘을 학습합니다.
      </>
    ),
  },
  {
    title: '무작정 따라하기',
    link: "/docs/tutorial/intro",
    Svg: require('@site/static/img/tutorial.svg').default,
    description: (
      <>
        개발 무작정 따라하기
      </>
    ),
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link
          className="button button--secondary button--lg"
          to={link}>
          {title}
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
