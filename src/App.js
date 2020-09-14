import React, { useEffect, useRef } from "react";

import "./App.scss";
import Hero from "./sections/hero";
import Loader from "./componets/loader";
import Intro from "./componets/introVideo";
import StateController from "./modules/stateController";
import Uiux from "./sections/uiux";
import Me from "./sections/me";
import Skills from "./sections/skills";
import Menu from "./componets/menu";

const App = () => {
    const $hero = useRef();
    const $main = useRef();
    const $bonarja = useRef();
    const ShowIntroVideo = StateController(true);
    const ShowPage = StateController(false);

    let menuIsOpen = false;

    const onFinishVid = () => {
        ShowIntroVideo.set(false);
        $hero.current.active();
        $bonarja.current.addClass("finishIntro");
    };

    const toggleMenu = () => {
        menuIsOpen = !menuIsOpen;
        $main.current[menuIsOpen ? "addClass" : "removeClass"]("openMenu");
    };
    useEffect(() => {
        //FIXME: TESTING
        console.log("SITIO EN DESARROLLO | TESTING");
    }, 4000);

    return (
        <>
            {!ShowPage.get ? (
                <Loader onEnter={(r) => ShowPage.set(true)}></Loader>
            ) : (
                <div className={`MainWrap`} ref={$main}>
                    <div className={`btnMenu center y`} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Menu toggleMenu={toggleMenu}></Menu>
                    <div ref={$bonarja} className={`bonarja cover`}>
                        {ShowIntroVideo.get ? (
                            <Intro onFinish={onFinishVid}></Intro>
                        ) : (
                            ""
                        )}
                        <Hero ref={$hero}></Hero>
                        <div className="Content">
                            <Me></Me>
                            <Uiux></Uiux>
                            <Skills></Skills>
                            <div className="cover center construction">
                                <h1>
                                    En <br></br> Construcción
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
