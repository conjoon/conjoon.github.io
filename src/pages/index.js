import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TechStack from '@site/src/components/TechStack';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header data-theme="dark" className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <div className="col left">
              <div className="hero__title">{siteConfig.title}</div>
              <p className="hero__subtitle">{siteConfig.tagline}.</p>
              <div style={{marginTop:30}}>
                  Lightweight, feature rich email client.
              </div>
              <div>
                  Built with JavaScript for the web.
              </div>
              <div  style={{marginTop:80}} className={styles.buttons}>
                  <Link
                      className="button button--secondary button--lg"
                      to="/docs/intro">
                      Get Started →️
                  </Link>
              </div>
          </div>
          <div style={{position:"relative"}}  className="col right">
              <img className="screenshot" src="./img/screens/3.png" />
              {/*<img style={{position:"absolute",width:341,top:164, left:296}} className="screenshot" src="./img/screens/5.png" />*/}
              <div style={{textAlign:"right",marginTop:4,fontSize:10}}>
                  Handcrafted with ☕ &amp; ❤
              </div>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <HomepageFeatures />
          <TechStack />
      </main>
    </Layout>
  );
}
