function isAuthenticatedAPI(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ success: false, message: 'Utilisateur non authentifié' });
    }
}

module.exports = { isAuthenticatedAPI };
