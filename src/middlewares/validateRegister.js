export const validateEmail = (req, res, next) => {
    const { Email } = req.body;

    console.log(Email)

    if (!Email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    next();
}