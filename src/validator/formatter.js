let trim = function(){
    let a = "     Function      ";
    let b = a.trim();

    return b

};

let changetoLowerCase = function(){
    let a = "FUNCTION";
    let b = a.toLocaleLowerCase();

    return b
};

let changetoUpperCase = function(){
    let a = "function";
    let b = a.toUpperCase();

    return b
};

module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changetoUpperCase = changetoUpperCase;