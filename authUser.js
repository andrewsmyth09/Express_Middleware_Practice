// 1. Import the users array from data.json
// 2. Create and export a function
// 3. Provide the three parameters that middleware can utilize
// 4-a. Create a conditional checking if the users array INCLUDES our request query
//     4-b. If true, call the next middleware in the stack
//     4-c. If false, REDIRECT the response to the forbidden route

const { users } = require("./data.json");

exports.authUser = (req, res, next) => {
  if (users.includes(req.query.username)) {
    next();
  } else {
    res.redirect("/forbidden");
  }
};
