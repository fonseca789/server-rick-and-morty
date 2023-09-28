let myFavorites = [];

const postFav = (req,res) => {
    const chart = req.body
    myFavorites.push(chart);
    res.json(myFavorites)
}
const deleteFav = (req, res) => {
    const id = Number(req.params.id);
    let deleteMyFav = myFavorites.filter(chart => chart.id !== id)
    myFavorites = deleteMyFav;
    res.status(200).json(myFavorites)
}
module.exports = {
    postFav,
    deleteFav
}