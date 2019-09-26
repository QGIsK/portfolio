module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    mongoUri: process.env.MONGO_URI,
    ports: {
        portfolio: 3000,
        to: 3001
    }
};
