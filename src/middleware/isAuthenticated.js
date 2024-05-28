function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        res.redirect('/account/info');
    } else {
        next();
    }
}
module.exports = isAuthenticated;
