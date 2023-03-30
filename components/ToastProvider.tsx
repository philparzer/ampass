"use client";

import { useEffect } from "react";
import {
  toast,
  ToastContainer,
  Slide,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
    message: React.ReactNode;
}

export default function ToastProvider({message}: Props) {
  useEffect(() => {
    toast(() => (
      <div className="group">
        <div className="h-5 bg-[#1D1D1D] w-full flex items-center justify-end ">
          <button className="text-white group-hover:bg-scorch-500 w-5 h-full flex pl-1.5 pt-0.5 pr-2 items-center justify-center">
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.63105 11.0052L3.01855 10.3927L6.3873 7.02391L3.01855 3.65516L3.63105 3.04266L6.9998 6.41141L10.3686 3.04266L10.9811 3.65516L7.61231 7.02391L10.9811 10.3927L10.3686 11.0052L6.9998 7.63641L3.63105 11.0052Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="flex gap-4 px-4 lg:px-0 lg:pl-4 lg:pr-10 pt-4 pb-7 font-body text-sm">
          <p>{">"}</p>{" "}
          <p className="text-[#7F7F7F]">
            {message}
          </p>
        </div>
        <div className="h-[8px] bg-lagoon-500"></div>
      </div>
    ));
  }, []);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={false}
        hideProgressBar={true}
        newestOnTop={true}
        rtl={false}
        pauseOnHover
        draggable={false}
        theme="dark"
        closeButton={<></>}
        transition={Slide}
      />
    </>
  );
}
