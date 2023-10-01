const { User } = require("../DB_connection");

const login = async (req, res) => {
    // const { email, password } = req.query;
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Falta datos");
    return
  }
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {      
      return res.status(404).json({access: false});
    }
    if (user.password === password) {
      process.env.SESSION = user.id;
      res.json({ access: true });
    } else {
      res.status(403).json({access: false});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = login;
