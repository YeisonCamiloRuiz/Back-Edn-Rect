import express from "express";
import { validateEmail } from "../middlewares/validateRegister.js";
import { hassPassword } from "../middlewares/hassPassword.js"
import register from "../controlers/registerControler.js"
import bcrypt from "bcrypt";
const router = express.Router();

router.post('/register', validateEmail, hassPassword,async (req,res) => {
    const { Name, Email,Phone,Password } = await req.body;

    try {
        const salt = await bcrypt.genSalt(10); 

        
        const hashedPassword = await bcrypt.hash(Password, salt);
        
        await register(Email,hashedPassword,Name,Phone)
        
        console.log({ Name, Email, Phone, Password });
        
        res.status(200).send("Se registro corratamente")
        
    } catch (error) {
        res.status(500).send("Errro al regsitrar el usuario")
    }
    
});


export default router;