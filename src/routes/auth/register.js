import express from "express";
import { validateEmail } from "../../middlewares/validateRegister.js";
import { hassPassword } from "../../middlewares/hassPassword.js"
import register from "../../controlers/auth/registerControler.js"
import bcrypt from "bcrypt";
const router = express.Router();

router.post('/register', validateEmail, hassPassword,async (req,res) => {
    const { name, email,phone,password } = await req.body;

    try {
        const salt = await bcrypt.genSalt(10); 

        const hashedPassword = await bcrypt.hash(password, salt);
        
        await register(email,hashedPassword,name,phone)
        res.status(200).send("Se registro corratamente")
        
    } catch (error) {
        res.status(500).send("Errro al regsitrar el usuario")
    }
    
});


export default router;