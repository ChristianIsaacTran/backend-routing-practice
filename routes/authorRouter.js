const {Router} = require("express");

// importing controller that handles the specific action of getting the author by id
const {getAuthorById} = require("../controllers/authorController");

// creates a router through the destructured router function from express
const authorRouter = Router();

authorRouter.get("/",(req,res) => {
    res.send("All authors");
});

// authorRouter.get("/:authorId", (req, res) => {
//     const {authorId} = req.params;
//     res.send(`Author ID:  ${authorId}`);
// });

// replacing .get() route above with route with imported controller
authorRouter.get("/:authorId", getAuthorById);

authorRouter.post("/post/:authorId", (req,res) => {
    const {authorId} = req.params;

    res.send(authorId);
});

module.exports = authorRouter;