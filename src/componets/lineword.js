import React, { forwardRef, useImperativeHandle, useRef } from "react";
import css from "./lineword.module.scss";
import RandomText from "./randomText";
import StateController from "../modules/stateController";

const DrawText = forwardRef(
    ({ text, time, lineTime, onFinish, finishInterval }, ref) => {
        const $content = useRef();
        const style = {
            width: 100 / text.length + "%",
        };
        const reverseText = text.split("").reverse();

        const createHoverFx = () => {
            const copy = $content.current.cloneNode(true);
            const parent = $content.current.parentNode;
            Object.assign(copy.style, {
                position: "absolute",
                alignItems: "flex-start",
                overflow: "hidden",
                height: "42%",
                top: 0,
                left: 0,
                display: "none",
            });
            parent.appendChild(copy);
        };

        useImperativeHandle(ref, () => ({
            active() {
                const list = [];
                const nodeList = [];
                $content.current.style.visibility = "unset";
                $content.current
                    .querySelectorAll("div")
                    .forEach((x) => nodeList.push(x));

                // init animated logic
                nodeList.reverse().forEach((x, i) => {
                    // lista de intervalos
                    list.push(
                        setInterval(() => {
                            x.innerHTML = RandomText(); // letra aletoria cada 70ms
                        }, 70)
                    );
                    // timeout para detener el intervalo correspondiente
                    // de la lista y asignar la letra
                    setTimeout(() => {
                        clearInterval(list[i]); //limpiar intervalo
                        x.innerHTML = reverseText[i]; // asignar la letra
                        if (i === text.length - 1) {
                            // create hover fx
                            createHoverFx();
                        }
                    }, (time / text.length) * i + lineTime); // calculo de tiempo  por cada index
                });

                // active onFinish percentage

                onFinish &&
                    setTimeout(() => {
                        onFinish();
                    }, (lineTime + time) * finishInterval);
            },
        }));

        return (
            <div ref={$content} className={`cover center ${css.contentLetter}`}>
                {text
                    .toUpperCase()
                    .split("")
                    .map((x, i) => (
                        <div key={i} style={style} className="center">
                            {RandomText()}
                        </div>
                    ))}
            </div>
        );
    }
);

const LineWord = forwardRef(
    (
        {
            text = "lineword",
            textColor = "black",
            lineColor = "coral",
            size = 9,
            left = 0,
            width = 100,
            lineTime = 250,
            textTime = 500,
            onFinish,
            finishInterval = 1,
            onPlay,
        },
        ref
    ) => {
        const closeLine = StateController("");
        const $drawText = useRef();
        const lineStyle = {
            backgroundColor: lineColor,
            transition: `all ease ${lineTime}ms`,
        };

        useImperativeHandle(ref, () => ({
            active() {
                closeLine.set("active");
                setTimeout(() => $drawText.current.active(), lineTime / 3);
                onPlay && onPlay();
            },
        }));

        return (
            <div
                style={{ height: `${size}vw` }}
                className={`${css.LineWord} ${closeLine.get ? css.active : ""}`}
            >
                <div
                    style={{
                        fontSize: `${size}vw`,
                        width: `${width}%`,
                        color: textColor,
                        left: `${left}%`,
                    }}
                    className={`${css.content} center`}
                >
                    <div
                        className={`${css.line} cover`}
                        style={lineStyle}
                    ></div>
                    <DrawText
                        text={text}
                        ref={$drawText}
                        time={textTime}
                        lineTime={lineTime}
                        onFinish={onFinish}
                        finishInterval={finishInterval}
                    ></DrawText>
                </div>
            </div>
        );
    }
);
export default LineWord;
