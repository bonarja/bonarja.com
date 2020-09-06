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

const App = () => {
    const $hero = useRef();
    const ShowIntroVideo = StateController(true);
    const onFinishVid = () => {
        ShowIntroVideo.set(false);
        $hero.current.active();
    };
    // return <Loader></Loader>;
    return (
        <div className="bonarja cover finishIntro">
            {ShowIntroVideo.get ? <Intro onFinish={onFinishVid}></Intro> : ""}
            <Hero ref={$hero}></Hero>
            <div className="Content">
                <Me></Me>
                <Uiux></Uiux>
            </div>
        </div>
    );
};

export default App;
