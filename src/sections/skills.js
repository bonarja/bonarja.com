import React from "react";
import css from "./skills.module.scss";
import { Controller, Scene } from "react-scrollmagic";

import { Tween } from "react-gsap";
import iconReact from "../assets/react.png";
import iconAngular from "../assets/angular.png";
import iconGatsby from "../assets/gatsbyjs.png";
import iconElectron from "../assets/electron.png";
import iconNode from "../assets/node.png";
import iconRethink from "../assets/rethinkdb.svg";
import iconInflux from "../assets/influx.png";
import iconIonic from "../assets/ionic.png";
import iconPhp from "../assets/php.png";
import iconJs from "../assets/javascript.png";

const list = [].concat(
    ...Array(5).fill([
        { name: "react", color: "#6868ff", icon: iconReact },
        { name: "angular", color: "#ff6060", icon: iconAngular },
        { name: "gatsbyjs", color: "#663399", icon: iconGatsby },
        { name: "electronjs", color: "#30d7f5", icon: iconElectron },
        { name: "nodejs", color: "#8BC34A", icon: iconNode },
    ])
);
const list2 = [].concat(
    ...Array(5).fill([
        { name: "rethinkdb", color: "#4ac3b5", icon: iconRethink },
        { name: "influxdb", color: "#4a88c3", icon: iconInflux },
        { name: "php", color: "#0083ff", icon: iconPhp },
        { name: "ionic", color: "#4a88c3", icon: iconIonic },
        { name: "javascript", color: "#f0db4f", icon: iconJs, font: "black" },
    ])
);
const Duration = 2000;
const Skills = () => {
    return (
        <div
            className={`${css.WrapSkills} WrapSkills Transition Section`}
            style={{ height: Duration }}
        >
            <Controller>
                <Scene
                    pin={true}
                    enabled={true}
                    duration={Duration}
                    offset={0}
                    triggerHook={0}
                    // indicators={true}
                    classToggle={css.active}
                >
                    {(progress) => (
                        <div
                            className={`${css.Skills} skills Transition`}
                            style={{ marginTop: `${20 * progress}%` }}
                        >
                            <div className={`${css.g1}`}>
                                <Tween
                                    from={{
                                        css: {
                                            top: 0,
                                        },
                                        // ease: "Strong.easeOut",
                                    }}
                                    to={{
                                        css: {
                                            top: "-100%",
                                        },
                                        // ease: "Strong.easeOut",
                                    }}
                                    totalProgress={progress}
                                    paused
                                >
                                    <div
                                        className={`${css.collage} Transition`}
                                    >
                                        {list.map((x, i) => (
                                            <div
                                                key={i}
                                                className={`${css.item} center y`}
                                                style={{
                                                    backgroundColor: x.color,
                                                }}
                                            >
                                                <img
                                                    className={`${css.icon}`}
                                                    src={x.icon}
                                                />
                                                <p>{x.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Tween>
                                <Tween
                                    from={{
                                        css: {
                                            top: "-100%",
                                        },
                                        // ease: "Strong.easeOut",
                                    }}
                                    to={{
                                        css: {
                                            top: 0,
                                        },
                                        // ease: "Strong.easeOut",
                                    }}
                                    totalProgress={progress}
                                    paused
                                >
                                    <div
                                        className={`${css.collage} ${css.collage2} Transition`}
                                        style={{ left: 160 + 40 }}
                                    >
                                        {list2.map((x, i) => (
                                            <div
                                                key={i}
                                                className={`${css.item} center y`}
                                                style={{
                                                    backgroundColor: x.color,
                                                }}
                                            >
                                                <img
                                                    className={`${css.icon}`}
                                                    src={x.icon}
                                                />
                                                <p
                                                    style={{
                                                        color:
                                                            x.font || "white",
                                                    }}
                                                >
                                                    {x.name}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </Tween>
                            </div>
                            <div className={`${css.g2}`}>
                                <h1>SKILLS</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    )}
                </Scene>
            </Controller>
        </div>
    );
};
export default Skills;
