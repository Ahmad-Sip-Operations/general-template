"use client";

import React, { useState, FocusEvent, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import IconComponent from "@/components/icon/Icon";

const LogInComponent = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocusedField(e.target.id);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFocusedField(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setFocusedField(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const autofillStyles = {
    backgroundColor: "white",
    WebkitBoxShadow: "0 0 0 30px white inset",
    boxShadow: "0 0 0 30px white inset",
    WebkitTextFillColor: "#858484",
  };

  //-------------------------------//
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true); // Set loading to true when the login request is sent

    const res = await fetch("/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setTimeout(() => {}, 5000);

      document.cookie = `token=${data.token}; path=/`;
      document.cookie = `userName=${data.user_name}; path=/`;
      document.cookie = `userId=${data.user_id}; path=/`;
      document.cookie = `userEmail=${data.email}; path=/`;

      router.push("/admin-dashboard");
    } else {
      alert(data.error);
      setLoading(false);
    }
  };

  // Listen for the Enter key to trigger the login
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [username, password]);

  return (
    <div ref={containerRef} className="max-w-[350px] m-auto">
      <div className="mt-11">
        <div
          className={`mb-4 flex justify-center items-center gap-4 py-1 px-4 border-[1.25px] rounded-xl bg-white
             ${
               focusedField === "email"
                 ? "border-[#31DFD4]"
                 : "border-[#EEEEF0]"
             }`}
        >
          <IconComponent name="email" size={25} color="#565656" />
          <div className="pl-3 w-full flex flex-col border-l border-l-[#EEEEF0]">
            <label
              htmlFor="email"
              className={`bg-white text-[16px] ${
                focusedField === "email" ? "text-[#858484]" : "text-[#989898]"
              }`}
            >
              Email Address
            </label>
            <input
              type="username"
              id="email"
              placeholder="*****@****.com"
              className="outline-none text-[#858484] transition-all text-[14px]"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              style={autofillStyles}
            />
          </div>
        </div>
        <div
          className={`mb-4 flex justify-center items-center gap-4 py-1 px-4 border-[1.25px] rounded-xl bg-white
             ${
               focusedField === "email"
                 ? "border-[#31DFD4]"
                 : "border-[#EEEEF0]"
             }`}
        >
          <IconComponent name="password" size={25} color="#565656" />
          <div className="pl-3 w-full flex flex-col border-l border-l-[#EEEEF0]">
            <label
              htmlFor="password"
              className={`bg-white text-[16px] ${
                focusedField === "password"
                  ? "text-[#858484]"
                  : "text-[#989898]"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="outline-none text-[#858484] transition-all text-[14px]"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              style={autofillStyles}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="font-semibold text-[10px] text-[#7E7E7E] cursor-pointer">
          Forget password?
        </p>
        <p className="font-semibold cursor-pointer text-[12px] text-[#7E7E7E]">
          Dont have an account?{" "}
          <span className="text-[#31DFD4] text-md">Sign Up</span>
        </p>
      </div>
      <button
        onClick={handleSubmit}
        className="cursor-pointer flex justify-center w-full text-[#7E7E7E] bg-white py-2 font-semibold rounded-lg mt-2"
      >
        {loading ? "" : "Log in"}
        {loading && (
          <div className=" w-6 h-6 border-4 border-t-transparent border-[#7E7E7E] rounded-full animate-spin"></div>
        )}
      </button>
    </div>
  );
};

export default LogInComponent;
