export const validateEmail = (req, res, next) => {
    const { email } = req.body;


    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    next();
}