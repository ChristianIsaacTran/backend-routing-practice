const express = require("express");

const app = express();

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");


// middleware to test error handler middleware

// app.use((req, res, next) => {
//     throw new Error("OH NO!");
// })

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);



// error middleware function to handle any errors from the other middelwares
app.use((err, req, res, next) => {

    // note: error middleware REQUIRES ALL 4 parameters, err, req, res, next, even if they aren't used. 
    // note: the "error" object MUST be the first parameter in the callback in order for it to be considered an error middleware.

    console.log(err);

    // res.status(500).send(err.message);

    res.status(err.statusCode || 500).send(err.message);
});

const port = 3000;

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    }

    console.log(`Listening for requests on port ${port}`)
});


