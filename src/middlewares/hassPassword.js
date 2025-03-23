export const hassPassword = (req, res, next) => {
    const { password } = req.body;

    console.log(req.body)

    // if(!password){
    //     console.log(password)
    //     res.status(400).send("No exinte contraseña")
    //     return;
    // }

    next();
}