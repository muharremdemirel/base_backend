class CustomError extends Error{
    constructor(code, title, description){

        super(`{"code": "${code}", "message": "${message}", "description": "${description}"}`);
        this.code = code;
        this.message = message;
        this.description = description;
    }


}


module.exports = CustomError;