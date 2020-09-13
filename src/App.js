import React, { useEffect, useRef } from "react";
// import { Controller, Scene } from "scrollmagic";
// import { TweenLite as Tween, TimelineMax as Timeline } from "gsap";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
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

    // return ;
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
                            <div className="cover"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
