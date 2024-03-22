module.exports = function errorHandler(error) {
    if (error.status === 404) {
        return { error: 'Value not found for specified ID' };
    }

    if (error.status === 400) {
        return { error: 'Incorrect value in result; no ID specified; value is invalid' };
    }

    if (error.status === 503) {
        return { error: 'Error communicating with database' };
    }
}