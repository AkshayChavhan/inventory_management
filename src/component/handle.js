import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/authSlice";
import API from "../services/API";

const fetchUserDetailsAsync = ({username}) => async () => {
    try {
        const dispatch = useDispatch();
        const response = await API.get(`/user/get_userdetails/${username}`);
        dispatch(setUserDetails(response.userdata));
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
};

export { fetchUserDetailsAsync }