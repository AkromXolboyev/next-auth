"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface Inputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/profile",
    });
  };
  return (
    <div className="mx-auto max-w-[1200px]"
    style={{backgroundImage:"url('../assets/login.jpg')"}}
    // style={{ backgroundImage: "url('/assets/login.jpg')" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto w-[400px]  bg-slate-800 p-9 mt-10 rounded-xl">
          <h1 className="text-3xl mx-auto  text-center text-white">Login</h1>
          <input
            type="email"
            className="border p-3 bg-blue-300 w-full rounded-lg mt-10 text-black"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            type="password"
            className="border p-3 bg-blue-300 w-full rounded-lg mt-10 text-black"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          <button className="bg-green-500 p-4 w-full rounded-lg mt-5 mb-10 text-black" type="submit">
            LOGIN
          </button>
          
        </div>
        
      </form>
    </div>
  );
};

export default Login;
