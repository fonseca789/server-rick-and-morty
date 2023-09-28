const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  
  if (email) {
    const findUser = users.find((user) => user.email === email);
    if (findUser) {
      if (email === findUser.email && password === findUser.password) {
        res.status(200).json({ access: true });
      } else res.status(200).json({ access: false });
    } else res.status(400).json({ message: "User Not Found" });
  } else {
    res.status(400).json({ access: false });
  }
};

module.exports = login;
