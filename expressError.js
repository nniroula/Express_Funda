class ExpressError extends Error{
    cosntructor(message, status){
        // super();
        Super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

module.exports = ExpressError;