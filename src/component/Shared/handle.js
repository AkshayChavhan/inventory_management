import API from "../../services/API";

const handleSubmitSignup = async (data, setError, navigate) => {
  setError("");
  API.post("/user/register", data)
    .then((response) => {
      // Handle the successful response
      navigate("/login");
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
    });
};

const handleUpdateProfileInfo = async(data) => {
  try {
    const response = await API.put("/user/update_profile",data);

    // Handle the successful response
    return response.data
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    // navigate("/login");
  }
};



export { handleSubmitSignup, handleUpdateProfileInfo  }