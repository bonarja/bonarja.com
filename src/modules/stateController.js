import { useState } from "react";
const StateController = (value = null, onSet = null) => {
    const s = useState(value);
    return {
        get: s[0],
        set(v) {
            onSet && s[0] !== v && onSet(v);
            s[1](v);
        },
    };
};

export default StateController;
