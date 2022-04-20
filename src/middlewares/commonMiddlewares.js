const isFreeAppUser = function (req, res, next) {
    let headers = req.headers
    if(headers["isfreeappuser"]){
        next();
    } else {
        res.send("Request is missing a mandatory HEADER!")
    }
};

const updatedValidator = function (req, res, next) {
    req.headers['isfreeappuser']=true;
    next();
}

module.exports.updatedValidator = updatedValidator
module.exports.isFreeAppUser=isFreeAppUser 





