import userModel from "../models/user.js";
import bcrypt from 'bcrypt';

class userController {
  static home = (req, res) => {
    res.render("index");
  };
  static register = (req, res) => {
    res.render("register");
  };
  static login = (req, res) => {
    res.render("login");
  };
  static createDoc = async (req, res) => {
    const { name, email } = req.body;
    const hashP = await bcrypt.hash(req.body.password, 10)
    try {
      const doc = new userModel({
        name: name,
        email: email,
        password : hashP
      });
      await doc.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  static readDoc = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email });
      if (result != null) {
        const ismatch = await bcrypt.compare(password, result.password)
        if (result.email == email && ismatch) {
          res.send(`Thanks for logging in ----- ${result}`);
          // console.log(result);
        } else {
          res.send("wrong password");
        }
      } else {
        res.send("not registered");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default userController;
