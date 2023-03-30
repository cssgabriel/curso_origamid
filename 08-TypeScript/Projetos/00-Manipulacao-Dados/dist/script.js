import { URL_API } from "./config.js";
import fetchData from "./model.js";
const state = {
    payments: [],
};
async function getData() {
    const dataPayments = await fetchData(URL_API);
    const ent = Object.keys(dataPayments[0]);
}
getData();
