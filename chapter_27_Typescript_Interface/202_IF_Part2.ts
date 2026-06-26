interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number
}

// ? - optional parameters

let respobse1: APIResponse = {
    body: 'Hi'
}

let respobse2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
}

