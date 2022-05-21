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
import styles from "./styles.module.css";
import DesktopIcon from "@site/static/img/desktop.svg";


const FeatureList = [
    {
        title: "Powered by JavaScript",
        img: "",
        Svg: require("@site/static/img/logos/javascript.svg").default,
        description: (
            <>
                Along with modern tooling powerhouses like NPM, ddev and Docker, conjoon provides a well known
                ecosystem for users and developers alike.
            </>
        )
    },
    {
        title: "Minimal Footprint",
        img: "",
        Svg: require("@site/static/img/feather.svg").default,
        description: (
            <>
        The client is pure JavaScript and requires only a modern web browser on <DesktopIcon class="desktopIcon" title="Desktops" />. REST endpoints can be
        connected by simply configuring a base url.
            </>
        )
    },
    {
        title: "Open Source",
        Svg: "",
        img: "./img/logos/opensource.png",
        description: (
            <>
                conjoon is Open Source, providing a solid, tested and extendable foundation for
                individual messaging and groupware solutions.
            </>
        )
    }
];


function Feature ({Svg, img, title, description}) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {img ? <img className={styles.featureSvg} src ={img} /> : <Svg className={styles.featureSvg} role="img" />}
            </div>
            <div className="padding-horiz--md">
                <h3 className="text--center">{title}</h3>
                <p className="text--justify">{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures () {
    return (
        <section data-theme="dark" className={styles.features}>
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
