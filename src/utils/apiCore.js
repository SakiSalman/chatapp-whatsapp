
import { server } from '../config/serverPoint';

export async function getData({ url, token }) {
    const headers = {};
    headers['Content-Type'] = 'application/json'
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(server + 'api/v1/' + url, { headers, cache: "no-cache" });
    return await response.json();
}

export async function postData({ url, token, body }) {
    const headers = {};
    headers['Content-Type'] = 'application/json'
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    };

    const response = await fetch(server + 'api/v1/' + url, options);
    return await response.json();
}

export async function patchData({ url, body, token }) {
    const headers = {};
    headers['Content-Type'] = 'application/json';
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const options = {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body),
    };

    const response = await fetch(server + 'api/v1/' + url, options);
    return await response.json();
}

export async function deleteData({ url, token }) {
    const headers= {};
    headers['Content-Type'] = 'application/json';
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const options= { method: 'DELETE', headers };

    const response = await fetch(server + 'api/v1/' + url, options);
    return await response.json();
}

// Form data

// export function generateBoundary() {
//     return `----boundary${Math.random().toString(36).substring(7)}`;
// }
// const boundary = generateBoundary();
// headers["Content-Type"] = `multipart/form-data; boundary=${boundary}`;

export async function postFormData({ url, token, body }) {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const options = { method: 'POST', headers, body };

    const response = await fetch(server + 'api/v1/' + url, options);
    return await response.json();
}

export async function patchFormData({ url, body, token }) {
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const options= { method: 'PATCH', headers, body };

    const response = await fetch(server + 'api/v1/' + url, options);
    return await response.json();
}