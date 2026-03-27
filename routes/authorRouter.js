const {Router} = require("express");


// creates a router through the destructured router function from express
const authorRouter = Router();

authorRouter.get("/",(req,res) => {
    res.send("All authors");
});

authorRouter.get("/:authorId", (req, res) => {
    const {authorId} = req.params;
    res.send(`Author ID:  ${authorId}`);
});

authorRouter.post("/post/:authorId", (req,res) => {
    const {authorId} = req.params;

    res.send(authorId);
});

module.exports = authorRouter;