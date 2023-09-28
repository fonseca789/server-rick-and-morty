const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    res.status(401).send("Falta Datos");
  }
  try {
    const [favorite, created]=await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });
    const user = await User.findByPk(process.env.SESSION);
    await user.addFavorites(favorite);
    const favorites = await user.getFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = postFav;
