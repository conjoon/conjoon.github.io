import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const stackItems = [{
    title: "Sencha Ext JS",
    link: "https://sencha.com",
    description: "Sencha Ext JS is a JavaScript framework for building data-intensive, cross-platform web and mobile applications.",
    img: "./img/logos/sencha.png"
}, {
    title: "coon.js",
    link: "https://github.com/coon-js",
    description: "coon.js is a toolset for rapid Sencha Ext JS application building, providing the fundament for conjoon's frontend architecture.",
    img: "./img/logos/coonjs.png"
}, {
    title: "l8.js",
    link: "https://github.com/l8js/l8",
    description: "l8.js is a small and lightweight JavaScript library and provides wrappers and thin abstraction layers to ease the process of accessing and manipulating data in JavaScript.",
    img: "./img/logos/l8js.png"
},  {
    title: "Siesta",
    link: "https://bryntum.com",
    description: "Siesta is a JavaScript unit and UI testing tool which can run tests in web pages or in Node.js processes. Siesta has a powerful event recorder & player and a scalable automation package with cloud testing support.",
    img: "./img/logos/bryntum.png"
}, {
    title: "NPM",
    link: "https://npmjs.org",
    description: "All packages used in and with conjoon are available via NPM, making dependency management and builds easy.",
    img: "./img/logos/npm.png"
}, {
    title: "Lumen",
    link: "https://lumen.laravel.com/",
    description: "\"rest-api-email\" is the reference backend for conjoon and written in PHP & built with Lumen ",
    img: "./img/logos/lumen.png",
    imgStyle: {background:"white",borderRadius:20}
}/*, {
    title: "ddev",
    description: "",
    img: ""
}, {
    title: "Docker",
    description: "",
    img: ""
}*/]


function Item({img, title, link, description, imgStyle}) {
  return (

        <div className={styles.stackItem}>
            <span className={styles.icon}><img style={imgStyle ? imgStyle : {}} src={img}/></span>
            <h4><a class={styles.link} target="_blank" href={link}>{title}</a></h4>
            <p className="text--justify">{description}</p>
        </div>

  );
}

export default function TechStack() {
  return (
    <section className={styles.techStack}>
        <h1 className={styles.header}>Tech Stack</h1>
        <div className={styles.grid}>
           {stackItems.map((props, idx) => (
            <Item key={idx} {...props} />
          ))}
        </div>
    </section>
  );
}
