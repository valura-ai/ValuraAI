/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        WORKOS_API_KEY: process.env.WORKOS_API_KEY,
        WORKOS_APP_SECRET: process.env.WORKOS_APP_SECRET,
        WORKOS_COOKIE_PASSWORD: process.env.WORKOS_COOKIE_PASSWORD,
        TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
        TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
        TWILIO_VERIFY_SERVICE_SID: process.env.TWILIO_VERIFY_SERVICE_SID,
        DATABASE_URL: process.env.DATABASE_URL,
    }
};

module.exports = nextConfig;
