"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = (data: Inputs) => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/login");
      });
  };
  return (
    <div className="mx-auto max-w-[1200px]">
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto bg-slate-800 p-10 mt-10 w-[400px] ">
          <h1 className="text-3xl mx-auto  text-center text-white">Registration</h1>
          <input
            className="border p-3 bg-blue-300 w-full rounded-lg mt-10 text-black"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          <br />
          <input
            type="email"
            className="border p-3 bg-blue-300 w-full rounded-lg mt-5 text-black"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            type="password"
            className="border p-3 bg-blue-300 w-full rounded-lg mt-5 text-black"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          <button className="bg-green-500 p-4 w-full rounded-lg mt-5 text-black mb-10" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
