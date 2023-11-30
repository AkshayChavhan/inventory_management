import API from "../../services/API";

const handleSubmitSignup = async (data, setError, navigate) => {
  setError("");
  console.log("data => ", data);
  API.post("/user/register", data)
    .then((response) => {
      // Handle the successful response
      console.log(response.data);
      navigate("/login");
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
    });
};

const handleUpdateProfile = async (data , setError, navigate) => {
  console.log("handleprfole  -> " , data);
};

const handleGetProfileData = async ({data :username}, setError, navigate) => {
  try {
    const response = await API.get(`/user/get_user/${username}`);

    // Handle the successful response
    console.log(response);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    // navigate("/login");
  }
};

// const currentUserController = async (req, res) => {
//   try {
//       const user = await userModel.findOne({ _id: req.body.userId });
//       return res.status(200).send({
//           success: true,
//           message: "User fetched successfully.",
//           user
//       })

//   } catch (error) {
//       console.log(error);
//       res.status(500).send({
//           success: false,
//           message: "Unable to get user"
//       })
//   }
// }

export { handleUpdateProfile, handleSubmitSignup, handleGetProfileData }