import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../redux/authSlice';
import API from '../services/API';

// Custom hook for fetching user details
const useFetchUserDetails = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userdetail = useSelector((state) => state.auth.username);
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (isAuthenticated && userdetail) {
        try {
          const response = await API.get(`/user/get_userdetails/${userdetail.username}`);
          const userDetails = response.data.userdata;

          // Dispatch the user details to the Redux store
          dispatch(setUserDetails(userDetails));
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    fetchUserDetails();
  }, [isAuthenticated, userdetail, dispatch]);

  return { isAuthenticated, userdetail };
};

export default useFetchUserDetails;
