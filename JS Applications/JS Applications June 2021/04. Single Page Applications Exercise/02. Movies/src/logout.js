import { router } from "./router.js";
import {reqUrls, removeUserToken } from "./helpers.js";
import { navigation } from "./navigation.js";

export async function logout() {
    const data = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token')
        }
    }
    fetch(reqUrls['logout'], data)
        .then(removeUserToken)
        .then(navigation)
        .then(router('/login'))
}

