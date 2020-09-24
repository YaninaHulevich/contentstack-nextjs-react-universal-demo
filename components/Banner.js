// import styles from './Banner.module.css'
import React from "react";

function Banner(item) {
    return (
        <React.Fragment>
            <img className="fullwidth" src={item.image.url} />
            <div className="banner-content-h">
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                {item.link.href != null && item.link.title != null ? (
                    <a className="button" href={item.link.href}>{item.link.title}</a>
                ) : null}

            </div>
        </React.Fragment>
    )
}

export default Banner