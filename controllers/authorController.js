// controller for the authorRouter.js

const mockedDB = require("../db");

// importing custom made error class
const CustomNotFoundError = require("../errors/CustomNotFoundError");

// async function getAuthorById(req, res) {
  
//     const { authorId } = req.params;

//     try {

//     const author = await mockedDB.getAuthorById(Number(authorId));

//     if (!author) {
//       res.status(404).send("Author not found in mocked database");
//       return;
//     }

//     res.send(`Author Name: ${author.name}`);
//   } catch (error) {
//     console.error("Error retrieving author: "+error);
//     res.status(500).send("Internal Server Error");
//   }
// }

// refactored async controller WITH custom error for error middleware
const getAuthorById = async (req, res) => {
    const {authorId} = req.params;

    const author = await mockedDB.getAuthorById(Number(authorId));

    if(!author) {
        throw new CustomNotFoundError("Author not Found");
    }

    res.send(`Author Name: ${author.name}`);
};




module.exports = { getAuthorById };
