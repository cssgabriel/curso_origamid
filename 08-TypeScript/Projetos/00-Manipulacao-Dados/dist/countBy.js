export default function countBy(arr) {
    return arr.reduce((acc, payment) => {
        acc[payment] ? (acc[payment] += 1) : (acc[payment] = 1);
        return acc;
    }, {});
}
