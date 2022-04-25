let axios = require('axios');

let getWeather = async function (req, res) {
   
    try{
        let city = req.query.q
        
        let options = {
            method:  "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fef91ece0149a12f947445a7a115e95`
        }

        let result = await axios(options)

        // console.log(result)
        
        let data = result.data

        res.status(200).send({msg: data, status: true})
    } 
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}


let getCitysWeatherSorted = async function (req, res) {
            
    try{         
            let cities =  [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
            let cityObjArray = [ ]

            for( i=0; i<cities.length; i++){
                let obj = { city: cities[i]}
                let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fee970de4efd04c133fc84695c62ad32`)

                
                obj.temp = resp.data.main.temp
                // console.log(obj.temp)
                // console.log(obj)
                cityObjArray.push(obj)

                // console.log(cityObjArray)
                
            }

            // console.log(cityObjArray)
            
            let sort = cityObjArray.sort( function (a, b) { return a.temp-b.temp})
        
            console.log(sort)
            res.status(200).send({status: true, data: sort})

        }
    catch (err){
        console.log(err)
        res.status(500).send({status: false, msg: err.message})
    }
    

    



}

module.exports.getWeather = getWeather
module.exports.getCitysWeatherSorted = getCitysWeatherSorted