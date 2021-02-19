exports.showMap = async(req, res, next) => {
    res.render('index', { title: 'Carte de Nancy' });
}