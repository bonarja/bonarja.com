import React, { useEffect } from "react";
import "./glitch.scss";
import StateController from "../modules/stateController";
import DrawGlithKeyframes from "./glitch.keyframes";

const Glitch = ({
    img,
    width = 300,
    layers = 3,
    interval = 2000,
    time = 500,
    variation1 = 1.1,
    variation2 = 1,
    type = 1,
    inside = true,
    opacity = 0.3,
    brightness = 2,
    skew = true,
    filter = true,
}) => {
    const prom = 100 / layers;
    const $active = StateController("");
    const getFilter = (index) => {
        if (filter === true) {
            return `hue-rotate(${Math.floor(
                Math.random() * 250
            )}) brightness(${brightness})`;
        } else if (typeof filter === "string") {
            return filter
                .replace(/\$250/g, Math.floor(Math.random() * 250))
                .replace(/\$200/g, Math.floor(Math.random() * 200))
                .replace(/\$100/, Math.floor(Math.random() * 100))
                .replace(/\$50/, Math.floor(Math.random() * 50));
        } else if (Array.isArray(filter)) {
            return filter[index] || filter[0];
        }
    };
    useEffect(() => {
        // setInterval(() => {
        //     $active.set("active");
        //     setTimeout(() => {
        //         $active.set("");
        //     }, time);
        // }, interval);
    }, []);

    return (
        <div className={`Glitch ${$active.get}`} style={{ width }}>
            <style>
                {DrawGlithKeyframes(type, inside, variation1, variation2)}
            </style>

            <img src={img} style={{ visibility: "hidden" }} />

            {Array(layers)
                .fill(0)
                .map((x, i) => (
                    <div
                        key={i}
                        className={`wrapImage`}
                        style={{
                            height: `${prom}%`,
                            marginTop: `${prom * i}%`,
                        }}
                    >
                        <img
                            src={img}
                            style={{
                                filter: filter ? getFilter(i) : "",
                                marginTop: `-${prom * i}%`,
                                transform: `skewY(${
                                    skew ? Math.floor(Math.random() * 45) : 0
                                }deg)`,
                                opacity,
                            }}
                        />
                    </div>
                ))}

            {Array(layers)
                .fill(0)
                .map((x, i) => (
                    <div
                        key={i}
                        className={`wrapImageBase`}
                        style={{
                            height: `${prom}%`,
                            marginTop: `${prom * i}%`,
                        }}
                    >
                        <img
                            src={img}
                            style={{
                                marginTop: `-${prom * i}%`,
                            }}
                        />
                    </div>
                ))}
        </div>
    );
};
export default Glitch;
