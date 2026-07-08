const authMiddleware = (req, res, next) => {


    if (!req.session.user) {

        return res.status(401).send({
            message: "Please login first"
        });

    }


    next();


};


module.exports = authMiddleware;