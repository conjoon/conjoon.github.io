import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    /*{
        title: 'Modular White-Label solution',
        description: (
            <>
                Providers can use conjoon as a webmail solution for their clients
                by white-labeling the client to their likes. Modules can be simply enabled/disabled
                by the switch of a configuration line.
            </>
        ),
    },
    {
        title: 'Extensible',
        description: (
            <>
                With the its open architecture, conjoon provides many interfaces for adding
                and adjusting functionality.
            </>
        ),
    },*/
    {
        title: 'Powered by JavaScript',
        img: "",
        Svg: require('@site/static/img/logos/javascript.svg').default,
        description: (
            <>
                Along with modern tooling powerhouses like NPM, ddev and Docker, conjoon provides a well known
                ecosystem for users and developers alike.
            </>
        ),
    },
  {
    title: 'Minimal Footprint',
      img: "",
      Svg: require('@site/static/img/feather.svg').default,
    description: (
      <>
        The client is pure JavaScript and works out of the box with a modern web browser. REST endpoints can be
        connected by simply configuring a base url.
      </>
    ),
  },
    {
        title: 'Open Source',
        Svg: "",
        img: './img/logos/opensource.png',
        description: (
            <>
                conjoon is Open Source, providing a solid, tested and extendable foundation for
                individual messaging and groupware solutions.
            </>
        ),
    }
];


function Feature({Svg, img, title, description}) {
    return (
        <div className={clsx('col col--4')}>
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

export default function HomepageFeatures() {
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
