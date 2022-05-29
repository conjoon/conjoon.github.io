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
import styles from "./styles.module.css";

const services = [{
    title: "Google Mail",
    link: "https://gmail.com",
    Svg: require("@site/static/img/logos/gmail.svg").default
}, {
    title: "Outlook.com",
    link: "https://outlook.com",
    Svg: require("@site/static/img/logos/outlook.svg").default
},  {
    title: "AOL",
    link: "aol.com",
    Svg: require("@site/static/img/logos/aol.svg").default
}, {
    title: "Yahoo Mail",
    link: "https://yahoo.com",
    Svg: require("@site/static/img/logos/yahoomail.svg").default
}, {
    title: "Freenet",
    link: "https://freenet.de",
    Svg: require("@site/static/img/logos/freenet.svg").default
}, {
    title: "GMX",
    link: "https://gmx.net/",
    Svg: require("@site/static/img/logos/gmx.svg").default
}, {
    title: "WEB.de",
    link: "https://web.de/",
    Svg: require("@site/static/img/logos/webde.svg").default
}];


function Item ({Svg,title, link, description, imgStyle}) {
    return (

        <div className={styles.item}>
            <a className={styles.link} target="_blank" href={link} rel="noreferrer"><Svg className={styles.serviceSvg} role="img" /></a>
        </div>

    );
}

export default function Freemailer () {
    return (
        <section className={styles.freemailer}>
            <h1 className={styles.header}>Works with</h1>
            <div className={styles.grid}>
                {services.map((props, idx) => (
                    <Item key={idx} {...props} />
                ))}
            </div>
            <div className={styles.description}>
                <p>conjoon comes pre-configured for accessing your email accounts
                    at <a target="_blank" href="https://gmail.com" rel="noreferrer">Google Mail</a>
                    , <a target="_blank" href="https://outlook.com" rel="noreferrer">Microsoft Outlook</a>
                    , <a target="_blank" href="https://aol.com" rel="noreferrer">AOL</a>
                    , <a target="_blank" href="https://yahoo.com" rel="noreferrer">Yahoo</a>
                    , <a target="_blank" href="https://freent.de" rel="noreferrer">Freenet</a>
                    , <a target="_blank" href="https://gmx.com" rel="noreferrer">GMX</a>
                    ,  and <a href="https://web.de">web.de</a> <sup>*</sup> without additional setup required.
                </p>
                <sub>* conjoon is not affiliated with any of these services. All logos and trademarks are the property of their respective owners.
                    <br />If you'd like to see your service listed here, let us know!
                </sub>
            </div>


        </section>
    );
}
