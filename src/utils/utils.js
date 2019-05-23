export const request = (url, init) => {
    return fetch(url, init).then(res => res.json());
}