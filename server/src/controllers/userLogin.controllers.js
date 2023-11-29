import User from "../models/user.model.js";


const userRegister = async (req, res) => {
    try {
        const {
            username,
            password,
            email,
            tempAddress,
            permentAddress,
            contact,
            position
        } = req.body;
        console.log(username,
            password,
            email,
            tempAddress,
            permentAddress,
            contact,
            position);
        if (!username |
            !password |
            !email |
            !position) {
            return res.status(401).
                json({ message: "Please enter the required details" })
        }

        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (existingUser) {
            return res.status(409).json({ message: "Email already exists!" })
        }

        const user = new User(req.body);
        await user.save();

        if (user) {
            return res.status(200).json({ message: "User Created Successfully." })
        }

        return res.status(500).json({ message: "Something went wrong on server side." })

    } catch (error) {
        console.log(`Error occurs in controller as ${error}`);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const userLogin = async (req, res) => {
    try {
        const {
            password,
            email,
        } = req.body;
        console.log(password,email);
        if (!password |!email) {
            return res.status(401).
                json({ message: "Please enter the required details" })
        }

        const existingUser = await User.findOne({
            $or: [{ email }]
        })

        return res.status(200).json({ message: "All good." })

    } catch (error) {
        console.log(`Error occurs in controller as ${error}`);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export { userRegister , userLogin }