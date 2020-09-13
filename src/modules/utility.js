const OrderBy = (data, p, number = false) => {
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
};
const IsMobile = () => {
    let isSaveData = false;
    let isSafariMobile = false;
    if (navigator.connection && navigator.connection.saveData)
        isSaveData = true;
    var userAgent = window.navigator.userAgent;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i))
        isSafariMobile = true;
    return isSaveData && isSafariMobile ? true : false;
};
module.exports = { OrderBy, IsMobile };
