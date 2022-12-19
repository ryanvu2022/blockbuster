import User from "../models/user.js"
import bcrypt from "bcryptjs";

export const signin = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email: email });
      if (!user) return res.status(404).json({message: "User doesn't exist!"});
      
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) return res.status(400).json({message: "Your password is not correct."});

      res.status(200).json({user})      
   } catch (error) {
      res.status(500).json({message: "Something went Wrong."});
   }
}

export const signup = async (req, res) => {
   const { firstName, lastName, email, password, confirmPassword } = req.body;
   try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) return res.status(400).json({message: "User already exists!"});
      
      if (password !== confirmPassword) return res.status(400).json({message: "Password didn't match!"});
      
      const hashPassword = await bcrypt.hash(password, 10);

      const user = new User({ email: email, password: hashPassword, given_name: `${firstName} ${lastName}` });

      await user.save();
      res.status(201).json({user});
   } catch (error) {
      res.status(500).json(error);
   }
}