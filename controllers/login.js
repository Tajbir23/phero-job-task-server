const { users } = require("../mongoDB/collections");
const { jwtSign } = require("./jwtSign");

const login = async(req, res) => {
    const {email, password} = req.body;
    const user = users.findOne({email});
    if(!user || user.status !== "active"){
        return res.status(401).json({message: "User is not active"});
    }
    const token = await jwtSign(user.name, user.email)
    res.json({token});
}

module.exports = {login};