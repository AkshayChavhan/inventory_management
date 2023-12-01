import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../form_comp/index";
import { useForm } from "react-hook-form";
import { handleSubmitSignup, handleUpdateProfileInfo } from "../Shared/handle";
import { useSelector } from "react-redux";
import useFetchUserDetails from "../useFetchUserDetails";

function Profile() {
  const navigate = useNavigate();

  const tempAddress = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  };

  const contactDetails = {
    countryCode: "",
    phone: "",
    mobile: "",
  };

  const {isAuthenticated, userdetail} = useFetchUserDetails();

  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState(userdetail);

  const [userdetails] = useState(userdetail);
  console.log("[profile] => ",userDetails)

  const handleSubmitUserData = async (e) =>{
    e.preventDefault();
    try {
      const response = await handleUpdateProfileInfo(userDetails);
      console.log(response);
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle errors if needed
    }
 }

  useEffect(() => {
    const { _id, __v, password, updatedAt, createdAt , ...restUserdetails } = userdetails;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      ...restUserdetails, 
      tempAddress: {
        ...prevUserDetails.tempAddress,
        ...restUserdetails.tempAddress,
      },
      permenentAddress: {
        ...prevUserDetails.permenentAddress,
        ...restUserdetails.permenentAddress,
      },
      contact: {
        ...prevUserDetails.contact,
        ...restUserdetails.contact,
      },
    }));
  }, [userdetails]);
  
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{
        height: "100% !important",
      }}
    >
      <div
        className={`mx-auto w-full w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        style={{
          height: "100% !important",
        }}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            {/* <Logo width="100%" /> */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          User Profile
        </h2>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form
           onSubmit={handleSubmitUserData}
          className="grid grid-cols-3 gap-10"
        >
          <div className="col-span-1">
            <Input
              label="Username: "
              type="username"
              placeholder="Enter your Username"
              value={(userDetails?.username !== "") ? userDetails?.username : userdetails?.username}
              required={true}
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              disabled={true}
              value={userdetails?.email}
              required={true}
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Address Line1: "
              type="text"
              placeholder="Enter your Address"
              value={(userDetails?.permenentAddress?.address1 !== "") ? userDetails?.permenentAddress?.address1 : userdetails?.permenentAddress?.address1}
              required={false}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  permenentAddress: {
                    ...userDetails?.permenentAddress,
                    address1: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Address Line2: "
              type="text"
              placeholder="Enter your Address"
              required ={false}
              value={(userDetails?.permenentAddress?.address2 !== "") ? userDetails?.permenentAddress?.address2 : userdetails?.permenentAddress?.address2}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  permenentAddress: {
                    ...userDetails?.permenentAddress,
                    address2: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="City: "
              type="text"
              placeholder="Enter your City"
              required ={false}
              value={(userDetails?.permenentAddress?.city !== "") ? userDetails?.permenentAddress?.city : userdetails?.permenentAddress?.city}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  permenentAddress: {
                    ...userDetails?.permenentAddress,
                    city: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="State: "
              type="text"
              placeholder="Enter your state"
              required ={false}
              value={(userDetails?.permenentAddress?.state !== "") ? userDetails?.permenentAddress?.state : userdetails?.permenentAddress?.state}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  permenentAddress: {
                    ...userDetails?.permenentAddress,
                    state: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Country: "
              type="text"
              placeholder="Enter your Country"
              required ={false}
              value={(userDetails?.permenentAddress?.country !== "") ? userDetails?.permenentAddress?.country : userdetails?.permenentAddress?.country}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  permenentAddress: {
                    ...userDetails?.permenentAddress,
                    country: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Postal Code: "
              type="text"
              placeholder="Enter your Postal Code"
              required ={false}
              value={(userDetails?.permenentAddress?.postalCode !== "") ? userDetails?.permenentAddress?.postalCode : userdetails?.permenentAddress?.postalCode}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  permenentAddress: {
                    ...userDetails?.permenentAddress,
                    postalCode: e.target.value,
                  }
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Temparory Address Line1: "
              type="text"
              placeholder="Enter your Temporary Address"
              required ={false}
              value={(userDetails?.tempAddress?.address1 !== "") ? userDetails?.tempAddress?.address1 : userdetails?.tempAddress?.address1}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  tempAddress: {
                    ...userDetails?.tempAddress,
                    address1: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Address Line2: "
              type="text"
              placeholder="Enter your Address"
              value={(userDetails?.tempAddress?.address2 !== "") ? userDetails?.tempAddress?.address2 : userdetails?.tempAddress?.address2}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  tempAddress: {
                    ...userDetails?.tempAddress,
                    address2: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="col-span-1">
            <Input
              label="Temparory City: "
              type="text"
              placeholder="Enter your City"
              value={(userDetails?.tempAddress?.city !== "") ? userDetails?.tempAddress?.city : userdetails?.tempAddress?.city}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  tempAddress: {
                    ...userDetails?.tempAddress,
                    city: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="col-span-1">
            <Input
              label="Temparory State: "
              type="text"
              placeholder="Enter your State"
              value={(userDetails?.tempAddress?.state !== "") ? userDetails?.tempAddress?.state : userdetails?.tempAddress?.state}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  tempAddress: {
                    ...userDetails?.tempAddress,
                    state: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="col-span-1">
            <Input
              label="Temparory Country: "
              type="text"
              placeholder="Enter your Country"
              value={(userDetails?.tempAddress?.country !== "") ? userDetails?.tempAddress?.country : userdetails?.tempAddress?.country}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  tempAddress: {
                    ...userDetails?.tempAddress,
                    country: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="col-span-1">
            <Input
              label="Country Code "
              type="Number"
              placeholder="Enter your Country Code"
              value={(userDetails?.contact?.countryCode !== "") ? userDetails?.contact?.countryCode : userdetails?.contact?.countryCode}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  contact: {
                    ...userDetails?.contact,
                    countryCode: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="col-span-1">
            <Input
              label="Mobile "
              type="Number"
              placeholder="Enter your Mobile Number"
              value={(userDetails?.contact?.mobile !== "") ? userDetails?.contact?.mobile : userdetails?.contact?.mobile}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  contact: {
                    ...userDetails?.contact,
                    mobile: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="col-span-1">
            <Input
              label="Phone "
              type="Number"
              required={false}
              value={(userDetails?.contact?.phone !== "") ? userDetails?.contact?.phone : userdetails?.contact?.phone}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  contact: {
                    ...userDetails?.contact,
                    phone: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="col-span-1">
            <Input
              label="Job Position "
              type="text"
              placeholder="Enter your Job Position"
              required={true}
              value={(userDetails?.position !== "") ? userDetails?.position : userdetails?.position}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  position: e.target.value
                })
              }
            />
          </div>
          <div className="col-span-1"></div>
          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
