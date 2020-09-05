let Resources = {};
const Preload = (data = {}) => {
    return new Promise((done) => {
        try {
            const entries = Object.entries(data);
            Resources = Object.assign(Resources, data);

            var count = entries.length;

            const checkDone = () => {
                count--;
                count === 0 && done(Resources);
            };

            entries.forEach((x) => {
                fetch(x[1])
                    .then((resp) => resp.blob())
                    .then((blob) => {
                        try {
                            Resources[x[0]] = URL.createObjectURL(blob);
                        } catch (error) {
                            console.error(error);
                        }
                        checkDone();
                    })
                    .catch((error) => {
                        console.error(error);
                        checkDone();
                    });
            });
        } catch (error) {
            console.error(error);
            done(Resources);
        }
    });
};
module.exports = {
    Preload,
    Resources,
};
