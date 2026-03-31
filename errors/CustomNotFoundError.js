class CustomNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        // when stringified, looks nicer. Instead of "Error:", it will be "NotFoundError: "

        this.name = "NotFoundError";
    }
}


module.exports  = CustomNotFoundError;