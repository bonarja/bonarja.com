export default (type, inside, variation1 = 1, variation2 = 1) => {
    if (type == 2) {
        return /*css*/ `
            @keyframes Glitch1 {
                0% {
                    transform: translate(0)
                }
                20% {
                    transform: translate(${-1 * variation1}%, ${
            1 * variation1
        }%)
                }
                40% {
                    transform: translate(${-1 * variation1}%, ${
            -1 * variation1
        }%)
                }
                60% {
                    transform: translate(${1 * variation1}%, ${1 * variation1}%)
                }
                80% {
                    transform: translate(${1 * variation1}%, ${
            -1 * variation1
        }%)
                }
                to {
                    transform: translate(0)
                }
            }

            @keyframes Glitch2 {
                0% {
                    transform: translate(0)
                }
                20% {
                    transform: translate(${-1 * variation2}%, ${
            1 * variation2
        }%)
                }
                40% {
                    transform: translate(${-1 * variation2}%, ${
            -1 * variation2
        }%)
                }
                60% {
                    transform: translate(${1 * variation2}%, ${1 * variation2}%)
                }
                80% {
                    transform: translate(${1 * variation2}%, ${
            -1 * variation2
        }%)
                }
                to {
                    transform: translate(0)
                }
            }
        .Glitch.active .wrapImage {
            animation-name: Glitch1;
            opacity: 1;
            z-index: ${inside ? 2 : 0};
            
        }
        .Glitch.active .wrapImageBase {
            animation-name: Glitch2;
        }
        `;
    } else {
        return /*css*/ `
            @keyframes Glitch1 {
                0% {
                    margin-left: ${1 * variation1}%;
                    margin-bottom: ${0.05 * variation1}%;
                    opacity: 1;
                }
                20% {
                    margin-left: ${-3 * variation1}%;
                    margin-bottom: ${-0.1 * variation1}%;
                }
                40% {
                    margin-left: ${3 * variation1}%;
                    margin-bottom: ${0.05 * variation1}%;
                }
                60% {
                    margin-left: ${-1 * variation1}%;
                    margin-bottom: ${0.1 * variation1}%;
                }
                74% {
                    opacity: 1;
                }
                75% {
                    opacity: 0;
                }
                80% {
                    margin-left: 0;
                    margin-bottom: 0;
                }
                85% {
                    opacity: 1;
                }
                100% {
                    margin-left: ${0.35 * variation1}%;
                    margin-bottom: ${-0.05 * variation1}%;
                }
            }
            @keyframes Glitch2 {
                0% {
                    margin-left: ${-3 * variation1}%;
                    opacity: 1;
                }
                20% {
                    margin-left: ${2 * variation1}%;
                }
                34% {
                    opacity: 1;
                }
                35% {
                    opacity: 0;
                }
                40% {
                    margin-left: 0;
                }
                45% {
                    opacity: 1;
                }
                60% {
                    margin-left: ${3 * variation1}%;
                }
                80% {
                    margin-left: ${-3 * variation1}%;
                }
                100% {
                    margin-left: ${3.2 * variation1}%;
                }
            }

            @keyframes GlitchBase1 {
                0% {
                    margin-left: ${0.5 * variation2}%;
                }
                20% {
                    margin-left: ${-1 * variation2}%;
                }
                40% {
                    margin-left: ${1 * variation2}%;
                }
                60% {
                    margin-left: ${-1 * variation2}%;
                }
                80% {
                    margin-left: 0;
                }
                100% {
                    margin-left: ${0.35 * variation2}%;
                }
            }
            @keyframes GlitchBase2 {
                0% {
                    margin-left: ${-1 * variation2}%;
                }
                20% {
                    margin-left: ${1 * variation2}%;
                }
                40% {
                    margin-left: 0;
                }
                60% {
                    margin-left: ${1 * variation2}%;
                }
                80% {
                    margin-left: ${-1 * variation2}%;
                }
                100% {
                    margin-left: ${0.5 * variation2}%;
                }
            }
            .Glitch.active .wrapImage {
                animation-name: Glitch1;
                opacity: 1;
                z-index: ${inside ? 2 : 0}
            }
            .Glitch.active .wrapImage:nth-child(odd) {
                animation-name: Glitch2;
            }
            .Glitch.active .wrapImageBase {
                animation-name: GlitchBase1;
            }
            .Glitch.active .wrapImageBase:nth-child(odd) {
                animation-name: GlitchBase2;
            }
        `;
    }
};
