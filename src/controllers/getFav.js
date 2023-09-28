const { User } = require("../DB_connection");
module.exports = async (req, res) => {
  try {
    const user = await User.findByPk(process.env.SESSION);
    const favorites = await user.getFavorites();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
