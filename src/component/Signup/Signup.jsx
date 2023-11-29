import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../form_comp/index";
// import {useDispatch} from "react-redux"
// import authService from "../appwrite/auth"
import { useForm } from "react-hook-form";
import axios from "axios";
import API from "../../services/API";

function Signup() {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    console.log("data => ", data);
    API
      .post("/user/register",data)
      .then((response) => {
        // Handle the successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
    // try {
    //     const session = await authService.Signup(data)
    //     if (session) {
    //         const userData = await authService.getCurrentUser()
    //         if(userData) dispatch(authLogin(userData));
    //         navigate("/")
    //     }
    // } catch (error) {
    //     setError(error.message)
    // }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            {/* <Logo width="100%" /> */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Input
              label="Username: "
              type="username"
              placeholder="Enter your Username"
              {...register("username", {
                required: true,
              })}
            />
            <Input
              label="Temparory Address Line1: "
              type="text"
              placeholder="Enter your Temporary Address"
              {...register("permenentAddress.address1", {
                required: false,
              })}
            />
            <Input
              label="Temparory Address Line2: "
              type="text"
              placeholder="Enter your Temporary Address"
              {...register("permenentAddress.address2", {
                required: false,
              })}
            />
            <Input
              label="Temparory City: "
              type="text"
              placeholder="Enter your City"
              {...register("permenentAddress.city", {
                required: false,
              })}
            />
            <Input
              label="Temparory State: "
              type="text"
              placeholder="Enter your State"
              {...register("permenentAddress.state", {
                required: false,
              })}
            />
            <Input
              label="Temparory Country: "
              type="text"
              placeholder="Enter your Country"
              {...register("permenentAddress.city", {
                required: false,
              })}
            />
            <Input
              label="Mobile "
              type="Number"
              placeholder="Enter your Mobile Number"
              {...register("contact.mobile", {
                required: false,
              })}
            />
            <Input
              label="Phone "
              type="Number"
              placeholder="Enter your Phone"
              {...register("contact.phone", {
                required: false,
              })}
            />
            <Input
              label="Job Position "
              type="text"
              placeholder="Enter your Job Position"
              {...register("position", {
                required: false,
              })}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
