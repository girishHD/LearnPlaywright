const ENV = {
    BASE_URL: "https://staging.mayapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: {
            role: "admin",
            active: "true"
        }
    }
}

const config = {
    //Base URLs
    baseUrl: 'https://localhost:3000',
    apiBaseUrl: 'https://localhost:3000/api',

    testUser: {
        username: 'testuser@example.com',
        password: 'SecurePass123'
    },

    //Logging
    logLevel: 'INFO',

    //Retry confirguation
    retryCount: parseInt(Process.env.RETRY_COUNT || '3', 10)
};
