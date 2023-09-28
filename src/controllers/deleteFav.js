const { Favorite, User } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findByPk(process.env.SESSION);
    const favorite= await Favorite.findOne({ where: { id } });
    console.log(user)
    await user.removeFavorite(favorite)
    const favorites = await user.getFavorites();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = deleteFav;
