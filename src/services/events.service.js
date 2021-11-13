import auth from "../helper/auth";
require("dotenv").config();

const apiURL = process.env.REACT_APP_API_URL + "/events";
export default {
    async createEvent(event) {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...auth.getAuthHeader(),
            },
            body: JSON.stringify(event),
        };
        const response = await fetch(apiURL, requestOptions);
        return await response.json();
    },
};
