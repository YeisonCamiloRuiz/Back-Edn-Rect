export const hassPassword = (req, res, next) => {
    const { Password } = req.body;

    if(!Password){
        res.status(400).send("No exinte contraseña")
        return;
    }

    next();
}