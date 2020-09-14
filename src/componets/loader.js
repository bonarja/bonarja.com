import React, { useEffect } from "react";
import css from "./loader.module.scss";
import { Preload } from "../modules/prelaod";
import Glitch from "./glitch";
import Logo from "../assets/logo3.png";
import { IsMobile } from "../modules/utility";
import StateController from "../modules/stateController";

import sfx from "../assets/sfx.mp3";
import introVideo from "../assets/intro.mp4";
import introGif from "../assets/intro.gif";
import introSound from "../assets/intro.mp3";
import heroVid from "../assets/hero3.mp4";
import heroImg from "../assets/hero.jpg";
import illustration from "../assets/illustration3.png";
import wallpaperApp from "../assets/uiux.jpg";
import logoOrange from "../assets/logo4.png";
const Loader = ({ onEnter }) => {
    const isMobile = IsMobile();

    const loading = StateController(true);

    let resoruces = null;

    useEffect(() => {
        const data = {
            sfx: sfx,
            illustration: illustration,
            wallpaperApp: wallpaperApp,
            logoOrange: logoOrange,
        };
        if (isMobile) {
            data.introGif = introGif;
            data.introSound = introSound;
            data.heroImg = heroImg;
        } else {
            data.introVideo = introVideo;
            data.heroVid = heroVid;
        }
        Preload(data).then((r) => {
            loading.set(false);
            resoruces = r;
        });
    }, []);

    return (
        <div className={`${css.Loader} cover center y`}>
            <div className="animated zoomIn">
                <Glitch
                    img={Logo}
                    width={250}
                    variation1={1.8}
                    variation2={3}
                    layers={6}
                    inside={false}
                    skew={false}
                    opacity={0.5}
                    filter={
                        "invert(20%) sepia() saturate(100000%) hue-rotate($200deg) brightness(4)"
                    }
                ></Glitch>
            </div>
            {loading.get ? (
                <div className={css.title}>CARGANDO</div>
            ) : (
                <div
                    className={`${css.btn} animated zoomIn`}
                    onClick={() => onEnter(resoruces)}
                >
                    ENTRAR
                </div>
            )}
        </div>
    );
};
export default Loader;
