/**
 * conjoon
 * conjoon.github.io
 * Copyright (C) 2022 Thorsten Suckow-Homberg https://github.com/conjoon/conjoon.github.io
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import TechStack from "@site/src/components/TechStack";


function HomepageHeader () {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header data-theme="dark" className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <div className="col left">
                    <div className="hero__title">
                        {siteConfig.title}
                    </div>
                    <p className="hero__subtitle">
                        {siteConfig.tagline}.
                    </p>
                    <div style={{marginTop: 30}}>
                  Lightweight, feature rich email client.
                    </div>
                    <div>
                  Built with JavaScript for the web.
                    </div>
                    <div  style={{marginTop: 60}} className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                             Get Started ⚡️
                        </Link>
                    </div>
                    <div  style={{marginTop: 20}} className={styles.buttons}>
                        <Link
                            className="button prom button--secondary button--lg"
                            to="/demo/index.html">
                            Try a Demo 🎬️
                        </Link>
                    </div>
                </div>
                <div style={{position: "relative"}}  className="col right">
                    <img className="screenshot" src="./img/screens/3.png" />
                    <div style={{textAlign: "right",marginTop: 4,fontSize: 10}}>
                  Handcrafted with ☕ &amp; ❤
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home () {
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
