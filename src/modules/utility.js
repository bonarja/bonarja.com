export default {
    orderBy(data, p, number = false) {
        return data.slice(0).sort(function (a, b) {
            if (!number) {
                a[p] = a[p].toLowerCase();
                b[p] = b[p].toLowerCase();
            } else {
                a[p] = Number(a[p]);
                b[p] = Number(b[p]);
            }
            return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
        });
    },
};
