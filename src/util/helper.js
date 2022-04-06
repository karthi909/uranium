let printDate = function (){

    let today = new Date();
    let date = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;

    return date;
     
};

let printMonth = function(){

    let today = new Date();
    let date = (today.getMonth()+1);

    switch(date){
        case 1: return "Jan";
        case 2: return "Feb";
        case 3: return "March";
        case 4: return "Apr";
        case 5: return "May";
        case 6: return "june";
        case 7: return "July";
        case 8: return "Aug";
        case 9: return "Sep";
        case 10: return "Oct";
        case 11: return "Nov";
        case 12: return "Dec";
    }
};

let getBatchInfo = function(){

    return `Uranium, W3D3, the topic is NodeJs module system`

};

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;

