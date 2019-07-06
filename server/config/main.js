module.exports = {
    // Secret key for JWT signing and encryption
    secret: 'super secret passphrase',
    // Database connection information
    database: 'mongodb://localhost:27017',
    // Setting port for server
    port: 3000,
    // necessary in order to run tests in parallel of the main app
    test_port: 3001,
    test_db: 'mern-starter-test',
    test_env: 'test'
};
