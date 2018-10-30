function makeApiRequest(endpoint, body, method) {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'token 733dbc1e0cc227c664c8d1f9c60b99e191d2904b');
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Accept', 'application/vnd.github.v3+json');

    const options = {
        method,
        mode: 'no-cors',
        headers,
        body: JSON.stringify(body),
    };

    return fetch(endpoint, options)
        .then(response => response.json())
        .then(data => {
            return {
                ...data,
                ok: true,
            }
        })
        .catch(error => ({
            error,
            ok: false,
        }));
}

export function postApiRequest(endpoint, body) {
    return makeApiRequest(endpoint, body, 'POST');
}

export function getApiRequest(endpoint, body) {
    return makeApiRequest(endpoint, body, 'GET');
}

export function deleteApiRequest(endpoint, body) {
    return makeApiRequest(endpoint, body, 'DELETE');
}

export function patchApiRequest(endpoint, body) {
    return makeApiRequest(endpoint, body, 'PATCH');
}