const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');
const userModel = require('../models/userModel')

const createOrder = async function (req, res) {
    let data = req.body
    let user= await userModel.findById(data.userId);
    if(user){
        let product = await productModel.findById(data.productId);
        if(product){
            if(req.header.isfreeappuser== 'true'){
                data['amount']=0;
                data['isFreeAppUser']=req.headers.isfreeappuser;
                let newData= await orderModel.create(data);
                res.send({msg: newData});
            } else{
                if(user.balance>=product.price){
                    await userModel.findOneAndUpdate({_id: data.userId}, {$set: {balance: user.balance-product.price}});
                    data['amount']=product.price;
                    data['isFreeAppUser']=req.headers.isfreeappuser;
                    let newData = await orderModel.create(data);
                    res.send({msg: newData});
                } else {
                    res.send("Insufficient balance")
                }

            }
        } else {
            res.send('Invalid ProductID');
        } 
    } else {
        res.send('Invalid UserId');
    }
    

}

module.exports.createOrder=createOrder