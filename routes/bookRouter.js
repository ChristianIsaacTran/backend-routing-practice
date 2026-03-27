const {Router} = require("express");

const bookRouter = Router();

bookRouter.get("/", (req,res) => {
    res.send("This is the book router");
});


module.exports = bookRouter;