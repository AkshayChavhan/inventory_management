import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../form_comp/index";
import { useForm } from "react-hook-form";
import API from "../../services/API";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const handleLogin = async (data) => {
    setError("");
    console.log("data => ", data);
    API.post("/user/login", data)
      .then((response) => {
        // Handle the successful response
        const { accessToken, refreshToken, message , username } = response.data;

        // Store tokens securely (e.g., in localStorage or secure cookie)
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);


        dispatch(login({ username, accessToken }));


        console.log("username => ", username);
        navigate("/");
      })
      .catch((error) => {
        navigate("/signup");
        // Handle errors
        console.error("Error fetching data:", error);
      });
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
        <h2 className="text-center text-2xl font-bold leading-tight">Log in</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Do not have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
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
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
