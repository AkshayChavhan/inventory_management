import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../form_comp/index";

import { useForm } from "react-hook-form";
import {  handleSubmitSignup  } from "./handle";
import { useSelector } from "react-redux";

function SharedForm({ type = "signup", ...options }) {
  options = {
    title: type === "profile" ? "User Profile" : "Sign Up",
    btnLabel: type === "profile" ? "Update Profile" : "Sign Up",
    showInfoMsg: type === "profile" ? false : true,
    arrengement: type === "profile" ? "grid" : "column", // grid / column
  };

  const navigate = useNavigate();
  const userName = useSelector((state) => state.auth.username);
  const { register, handleSubmit } = useForm();


  const [error, setError] = useState("");
  const [ userdetails ] = useState(userName);

  return (
    <div
      className="flex items-center justify-center w-full"
      style={{
        height: "100% !important",
      }}
    >
      <div
        className={`mx-auto w-full ${
          options.arrengement === "grid" ? "w-lg" : "max-w-lg"
        } bg-gray-100 rounded-xl p-10 border border-black/10`}
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
          {options.title}
        </h2>
        {options.showInfoMsg && (
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Login
            </Link>
          </p>
        )}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form
          onSubmit={handleSubmit((data)=>handleSubmitSignup(data,setError, navigate))}
          className={
            options.arrengement === "grid" ? "grid grid-cols-3 gap-10" : "mt-8"
          }
        >
          <div
            className={
              options.arrengement === "grid" ? "col-span-1" : "space-y-5"
            }
          >
            <Input
              label="Username: "
              type="username"
              placeholder="Enter your Username"
              defaultValue={type === "profile" ? userdetails?.username : ""}
              {...register("username", {
                required: true,
              })}
            />
          </div>
          <div
            className={
              options.arrengement === "grid" ? "col-span-1" : "space-y-5"
            }
          >
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              disabled={type === "profile"}
              defaultValue={type === "profile" ? userdetails?.email : ""}
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>
          {type === "signup" && (
          <div
            className={
              options.arrengement === "grid" ? "col-span-1" : "space-y-5"
            }
          >
            <Input
              label="Password: "
              type="password"
              disabled={type === "profile"}
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Address Line1: "
                type="text"
                placeholder="Enter your Address"
                defaultValue={type === "profile" ? userdetails?.permenentAddress?.address1 : ""}
                {...register("permenentAddress.address1", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Address Line2: "
                type="text"
                placeholder="Enter your Address"
                defaultValue={type === "profile" ? userdetails?.permenentAddress?.address2 : ""}
                {...register("permenentAddress.address2", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="City: "
                type="text"
                placeholder="Enter your City"
                defaultValue={type === "profile" ? userdetails?.permenentAddress?.city : ""}
                {...register("permenentAddress.city", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="State: "
                type="text"
                placeholder="Enter your state"
                defaultValue={type === "profile" ? userdetails?.permenentAddress?.state : ""}
                {...register("permenentAddress.state", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Country: "
                type="text"
                placeholder="Enter your Country"
                defaultValue={type === "profile" ? userdetails?.permenentAddress?.country : ""}
                {...register("permenentAddress.country", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Postal Code: "
                type="text"
                placeholder="Enter your Postal Code"
                defaultValue={type === "profile" ? userdetails?.permenentAddress?.postalCode : ""}
                {...register("permenentAddress.postalCode", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Temparory Address Line1: "
                type="text"
                placeholder="Enter your Temporary Address"
                defaultValue={type === "profile" ? userdetails?.tempAddress?.address1 : ""}
                {...register("tempAddress.address1", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Address Line2: "
                type="text"
                placeholder="Enter your Address"
                defaultValue={type === "profile" ? userdetails?.tempAddress?.address2 : ""}
                {...register("tempAddress.address2", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Temparory City: "
                type="text"
                placeholder="Enter your City"
                defaultValue={type === "profile" ? userdetails?.tempAddress?.city : ""}
                {...register("tempAddress.city", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Temparory State: "
                type="text"
                placeholder="Enter your State"
                defaultValue={type === "profile" ? userdetails?.tempAddress?.state : ""}
                {...register("tempAddress.state", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Temparory Country: "
                type="text"
                placeholder="Enter your Country"
                defaultValue={type === "profile" ? userdetails?.tempAddress?.country : ""}
                {...register("tempAddress.country", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Mobile "
                type="Number"
                placeholder="Enter your Mobile Number"
                defaultValue={type === "profile" ? userdetails?.contact?.mobile : ""}
                {...register("contact.mobile", {
                  required: false,
                })}
              />
            </div>
          )}
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            >
              <Input
                label="Phone "
                type="Number"
                defaultValue={type === "profile" ? userdetails.contact?.phone : ""}
                placeholder="Enter your Phone"
                {...register("contact.phone", {
                  required: false,
                })}
              />
            </div>
          )}
          <div
            className={
              options.arrengement === "grid" ? "col-span-1" : "space-y-5"
            }
          >
            <Input
              label="Job Position "
              type="text"
              placeholder="Enter your Job Position"
              defaultValue={type === "profile" ? userdetails?.position : ""}
              {...register("position", {
                required: false,
              })}
            />
          </div>
          {type === "profile" && (
            <div
              className={
                options.arrengement === "grid" ? "col-span-1" : "space-y-5"
              }
            ></div>
          )}
          <Button type="submit" className="w-full">
            {options.btnLabel}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SharedForm;
