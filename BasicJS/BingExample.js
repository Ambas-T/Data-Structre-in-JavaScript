class ValidationError extends Error {}
class NetworkError extends Error {}

function bingExample(query) {
    if (typeof query !== 'string') {
        throw new ValidationError("Query must be a string");
    }

    if (query === 'networkError') {
        throw new NetworkError("Network error occurred");
    }

    if (query === '') {
        throw new Error("Query cannot be empty");
    }

    return `Result for ${query}`;
}

module.exports = { bingExample, ValidationError, NetworkError };


