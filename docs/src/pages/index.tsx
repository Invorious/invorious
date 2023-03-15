import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
<<<<<<<< HEAD:docusaurus/src/pages/index.tsx
            to="/docs/category/setup-project"
          >
            See ecosystem ⏱️
========
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
>>>>>>>> main:docs/src/pages/index.tsx
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
<<<<<<<< HEAD:docusaurus/src/pages/index.tsx
========
      <main>
        <HomepageFeatures />
      </main>
>>>>>>>> main:docs/src/pages/index.tsx
    </Layout>
  );
}
