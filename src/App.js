import React, { useEffect, useRef } from "react";
// import { Controller, Scene } from "scrollmagic";
// import { TweenLite as Tween, TimelineMax as Timeline } from "gsap";

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "./App.css";
import Hero from "./sections/hero";
import Loader from "./componets/loader";
import Intro from "./componets/introVideo";
import StateController from "./modules/stateController";

const App = () => {
    const $hero = useRef();
    const ShowIntroVideo = StateController(true);
    const onFinishVid = () => {
        ShowIntroVideo.set(false);
        $hero.current.active();
    };

    useEffect(() => {
        // setTimeout(() => {
        //     $hero.current.active();
        // }, 1000);
    }, []);

    return (
        <div className="bonarja cover finishIntro">
            {/* <Loader></Loader> */}

            {ShowIntroVideo.get ? <Intro onFinish={onFinishVid}></Intro> : ""}

            <Hero ref={$hero}></Hero>
            {/* <div id="trigger">
                <Controller>
                    <Scene
                        triggerElement="#trigger"
                        duration={400}
                        pin={false}
                        indicators={true}
                    >
                        {(progress) => (
                            <Tween
                                from={{
                                    css: {
                                        width: "100%",
                                    },
                                    ease: "Strong.easeOut",
                                }}
                                to={{
                                    css: {
                                        width: "50%",
                                    },
                                    ease: "Strong.easeOut",
                                }}
                                totalProgress={progress}
                                paused
                            >
                                <div className="test"></div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </div> */}
        </div>
    );
};

export default App;
