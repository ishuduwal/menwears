import User from '../model/User.js'

export const Signup = async (req, res) => {
    const { username, email, mobilenumber, password } = req.body
    try {
        let user = await User.findOne({ email: email });
        if (user) { res.status(200).json({ message: "Account registered" }) }
        else {
            const newUser = new User({
                username,
                email,
                mobilenumber,
                password
            })
            await newUser.save()
            res.status(201).json({message:"Account created", user:newUser})
        }
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const Login = async (req, res) => {
    const user = req.body;
    try {
        const userdb = await User.findOne({ email: user.email, password: user.password })
        if (!userdb) return res.status(404).json(false);
        res.status(201).json(userdb);
    } catch (error) {
        res.status(404).json(false);
    }
}