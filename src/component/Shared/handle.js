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

const handleUpdateProfileInfo = async(data) => {
  try {
    console.log("data =>",data);
    const response = await API.put("/user/update_profile",data);

    // Handle the successful response
    return response.data
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    // navigate("/login");
  }
};



export { handleUpdateProfile, handleSubmitSignup, handleUpdateProfileInfo  }