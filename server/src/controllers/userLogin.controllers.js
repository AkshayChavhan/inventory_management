import User from "../models/user.model.js";


const userRegister = async (req, res) => {
    try {
        const {
            username,
            password,
            email,
            position
        } = req.body;

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

const updateProfileInfo = async (req, res) => {
    try {
        const {
            username,
            email,
            tempAddress,
            permenentAddress,
            contact,
            position
        } = req.body;

        if (!username || !email || !position) {
            return res.status(401).json({ message: "Please enter the required details" });
        }

        // Check if the user exists
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            // Update the existing user
            const updatedUser = await User.findOneAndUpdate(
                { email: email },
                {
                    $set: {
                        username: username,
                        tempAddress: tempAddress,
                        permenentAddress: permenentAddress,
                        contact: contact,
                        position: position
                    }
                },
                { new: true }
            );

            return res.status(200).json({
                message: "User updated successfully.",
                userdata: updatedUser,
            });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(`Error occurs in controller as ${error}`);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const userLogin = async (req, res) => {
    try {
        const {
            password,
            email,
        } = req.body;
        console.log(password, email);
        if (!password | !email) {
            return res.status(401).
                json({ message: "Please enter the required details" })
        }

        const existingUser = await User.findOne({
            $or: [{ email }]
        })

        // Check if the password is correct
        const isPasswordCorrect = await existingUser.isPasswordCorrect(password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate tokens
        const accessToken = existingUser.generateAccessToken();
        const refreshToken = existingUser.generateRefreshToken();

        return res.status(200).json({
            message: "Login successful",
            accessToken,
            username: existingUser,
            refreshToken,
        });

    } catch (error) {
        console.log(`Error occurs in controller as ${error}`);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getUserDetail = async (req,res) => {
    try {
        const { username } = req.params;

        if (!username) {
            return res.status(401).
                json({ message: "Username more found" })
        }

        const existingUser = await User.findOne({
            $or: [{ username }]
        })

        const { updatedAt , __v , _id , createdAt , ...userdata } = existingUser.toObject();

        return res.
        status(200).
        json({
            message: "User details fetch successfully.",
            userdata
     });

    }  catch (error) {
        console.log(`Error occurs in controller as ${error}`);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export { userRegister, userLogin, updateProfileInfo , getUserDetail }