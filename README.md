# Purpose of this repo

- This repo was created to practice the external file routing with express to
  import files and extend general routes through these enternal files so that we can scope the middlewear/request handlers
  to those routes.

- Goes over the routing section in The odin project Routes section of the express portion of the backend lessons.

https://www.theodinproject.com/lessons/nodejs-routes#routers

## note about external routers

- Creating routers in express requires the function "Router" destructured out of the express framework.

- Once extracted, making a router is as simple as creating the server. We just run the function and assign it to a variable we want to represent the router for that path.

- Once we have the external request ahandlers setup with middleware, we can export the router through module.exports = routerName (we do this because we are using commonJS instead of ES6 modules).

- In the main app.js, we then import all of the routers found in the routers folder (its by convention that we store the routes in the route folder) and then we add the routes onto the express server by using expressServer.use("/pathToExtend", routerName);

- Note: doing it this way will EXTEND the path so that the request handlers are scoped to that path specifically. For example, in the authorRouter.js, I use .use() to assign the authorRouter to the /authors path like so in app.js:
  - app.use("/authors", authorRouter);

inside the authorRouter.js I have request handlers such as a handler to handle the authorId route parameter if added:

    authorRouter.get("/:authorId", (req,res) => {
        const {authorId} = req.params;
        res.send(authorId);
    });

This handler in authorRouter.js will only be caught IF the main request URL is extending the authors path. For example:

    - A valid link hit: localhost:3000/authors/1231

    - A non valid link hit: localhost:3000/1231
    (This non-valid link is missing the /authors path)

## note on params

- There are two kinds of routing params. There is route parameters, and query parameters.

- Route parameters are denoted by the colon near their route, and they can be directly referenced and accessed through the request object. (req.params)

ex: route parameter

something.get("/:IamRouteParameter", (req,res) => {
    
    const {IamRouteParameter} = req.params;
});

- Query parameters are similar to route parameters, but they are denoted past the URL after the ? and separated by & symbols. They are each assigned through an object through key value pairs, and if there are multiple of the same keys, the object assigns the, to the same key through the use of an array. Can be accessed through the request object. (req.query)

ex: query parameter

** if the URL link for the get request was: 

localhost:3000/IamAPath?sort=date&key2=something&key2=somethingElse


something.get("/IamAPath", (req,res) => {
    
    console.log(req.query)
});

req.query would print: {sort: "date", key2: ["something", "somethingElse"]}

NOTE: query params are in the URL itself, not defined in the actual .get() method path. We can access those optional query parameters to handle in the middleware with req.query.

## Postman

- In the lesson, in order to send HTTP request to our express server without having to go to the browser every single time, the odin project mentioned using Postman, an application that allows us to send HTTP requests of all kinds (GET, POST, DELETE, PUT, etc.) to a specific link to test if the requests are handled and that the routing is correct.

## how to run

- Run node in the CLI:

node --watch app.js

- make sure to "npm install" all dependencies required for this project before running.
