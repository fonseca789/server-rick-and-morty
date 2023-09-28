const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = async (req, res) => {
  const idfind = req.params.id;

  try {
    const data = await axios.get(URL + idfind);
    // console.log(URL + idfind);
    const { id, status, name, species, origin, image, gender } = data.data;
    if (name) {
      res
        .status(200)
        .json({ id, status, name, species, origin, image, gender });
    } else {
      res.status(404).send("Not fount");
    }
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

module.exports = getCharById;
