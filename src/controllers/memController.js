let axios = require('axios');

let getMeme = async function (req, res) {
   try {
    let options = {
        method: "get",
        url:`https://api.imgflip.com/get_memes`
    }

    let get_memes = await axios(options)

    let data = get_memes.data
    res.status(200).send({msg: data, status: true})
    }
    catch (err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}

let createMeme = async function (req, res) {
    try{
            let tmplete_id = req.query.templete_id
            let text0 = req.query.text0
            let text1 = req.query.text1
            let username = req.query.username
            let pass = req.query.password

            let options = {
                method: "post",
                url: `https://api.imgflip.com/caption_image?template_id=${tmplete_id}&text0=${text0}&text1=${text1}&username=${username}&password=${pass}`
            }

            let result = await axios(options)

            let data = result.data
            res.status(200).send({msg: data, status: true})

        }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}

module.exports.getMeme = getMeme
module.exports.createMeme = createMeme