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

    // return (
    //     <div className="section cover" style={{ overflow: "scroll" }}>
    //         <Controller>
    //             <Scene
    //                 duration={"30%"}
    //                 pin={{ pushFollowers: false }}
    //                 triggerHook={0}
    //             >
    //                 <div className="sticky cover center">
    //                     <h1 style={{ color: "white" }}>Pin Test</h1>
    //                 </div>
    //             </Scene>
    //             <div className="Content">
    //                 <Scene
    //                     duration={200}
    //                     pin={{ pushFollowers: false }}
    //                     triggerHook={0.9}
    //                 >
    //                     <div className="sticky">
    //                         <div>Pin Test</div>
    //                     </div>
    //                 </Scene>
    //             </div>
    //             {/* <Scene duration={300} pin={true} offset={100}>
    //                 <div className="sticky blue">
    //                     <div>Pin Test</div>
    //                 </div>
    //             </Scene> */}
    //         </Controller>
    //     </div>
    // );

    return (
        <div className="bonarja cover finishIntro">
            {ShowIntroVideo.get ? <Intro onFinish={onFinishVid}></Intro> : ""}
            <Hero ref={$hero}></Hero>
            <div className="Content"></div>
            {/* <div id="trigger" className="cover">
                <div className="coverHero cover"></div>
                <div className="Content"></div>
               <Controller>
                    <Scene
                        triggerElement="#trigger"
                        duration={500}
                        pin={false}
                        indicators={true}
                    >
                        {(progress) => (
                            <Tween
                                from={{
                                    css: {
                                        marginTop: 0,
                                    },
                                    // ease: "Strong.easeOut",
                                }}
                                to={{
                                    css: {
                                        marginTop: -300,
                                    },
                                    // ease: "Strong.easeOut",
                                }}
                                totalProgress={progress}
                                paused
                            >
                                <div className="Content"> hola mundo</div>
                            </Tween>
                        )}
                    </Scene>
                </Controller> 
            </div> */}
        </div>
    );
    return (
        <div className="bonarja cover finishIntro">
            {/* <Loader></Loader> */}

            {ShowIntroVideo.get ? <Intro onFinish={onFinishVid}></Intro> : ""}
            <Controller>
                <div className={`HERO cover`} style={{ height: "100vh" }}>
                    <Scene
                        duration={"30%"}
                        pin={{ pushFollowers: true }}
                        // indicators={true}
                        // triggerHook={0}
                        // enabled={true}
                        // triggerElement={".HERO"}
                    >
                        {/* <Hero ref={$hero}></Hero> */}
                        <div className="sticky cover center">
                            <div style={{ color: "white" }}>Pin Test</div>
                        </div>
                        {/* <div className={`HERO cover`}>
                        <Hero ref={$hero}></Hero>
                        <h1>hola </h1>
                    </div> */}
                    </Scene>
                </div>
                {/* <div className={`Content`}> */}
                {/* <div> */}
                {/* <Scene
                    duration={400}
                    pin={true}
                    // offset={100}
                    // reverse={true}
                >
                    <div className={`Content cover`}></div>
                </Scene> */}
                {/* </div> */}
                {/* <Scene duration={300} pin={true} offset={100}>
                    <h1>hola mundo</h1>
                </Scene> */}
                {/* </div> */}
                {/* <div className={`Content`}>
                    <Scene triggerElement="#trigger" pin={true}>
                        <h2 id="#trigger">hola mundo</h2>
                    </Scene>
                </div> */}
            </Controller>
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
