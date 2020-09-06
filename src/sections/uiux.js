import React from "react";
import css from "./uiux.module.scss";
import "./uiux.phone.scss";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import StateController from "../modules/stateController";
const Uiux = () => {
    const menuPhone = StateController(false);

    const progressScrollPhone = (progress) => {
        if (progress > 0.5) {
            menuPhone.set(true);
        } else {
            menuPhone.set(false);
        }
    };

    return (
        <div className={`${css.Uiux} Uiux`}>
            <Controller>
                <div className={`${css.info} center`}>
                    <p className={css.title}>UI / UX</p>
                </div>
                <Scene
                    triggerElement=".Uiux"
                    duration={500}
                    pin={false}
                    // indicators={true}
                >
                    {(progress) => {
                        return (
                            <div className={`${css.interface} center`}>
                                <Tween
                                    totalProgress={progress}
                                    paused
                                    from={{
                                        css: {
                                            transform: `rotate3d(4, 148, -85, -55deg)`,
                                        },
                                    }}
                                    to={{
                                        css: {
                                            transform: `rotate3d(0, 0, 0, 0)`,
                                        },
                                    }}
                                >
                                    <div className={`${css.phone}`}>
                                        <div id="app">
                                            <div id="menu_btn">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div id="menu">
                                                <p> Menu </p>
                                                <p> Example </p>
                                                <p> Bonarja </p>
                                                <p> Coffe </p>
                                            </div>
                                            <Tween
                                                totalProgress={progress}
                                                paused
                                                from={{
                                                    css: {
                                                        left: 0,
                                                    },
                                                }}
                                                to={{
                                                    css: {
                                                        left: "160px",
                                                    },
                                                }}
                                            >
                                                <div
                                                    id="content"
                                                    className="cover"
                                                >
                                                    <div id="header"></div>
                                                    <p> My App </p>
                                                    <Tween
                                                        totalProgress={progress}
                                                        paused
                                                        from={{
                                                            css: {
                                                                transform: `translate3d(-46px, 12px, 13px)`,
                                                                boxShadow: `15px 15px 22px 1px rgba(0,0,0,0.57)`,
                                                            },
                                                        }}
                                                        to={{
                                                            css: {
                                                                transform: `translate3d(0, 0, 0) perspective(0)`,
                                                                boxShadow: `0px 9px 22px 1px rgba(0,0,0,0.57)`,
                                                            },
                                                        }}
                                                    >
                                                        <img src="https://colaborativo.net/wp-content/uploads/2018/11/mikaelgustafsson_mklgustafsson.gif" />
                                                    </Tween>
                                                </div>
                                            </Tween>
                                        </div>
                                    </div>
                                </Tween>
                            </div>
                        );
                    }}
                </Scene>
            </Controller>
        </div>
    );
};
export default Uiux;
