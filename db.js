

// mocked database to test controller

const authors = [
    {id: 1, name: "Bryan"},
    {id: 2, name: "Christian"},
    {id: 3, name: "Jason"},
];

// a small query function that we can call to get the author id 
async function getAuthorById(authorId) {
    return authors.find(author => {
       return author.id === authorId
    });
}

module.exports = {getAuthorById};


