import Image from "next/image";
import { Manrope } from "@next/font/google";
import signUpImg from "../public/img/signup-img.webp";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function Home() {
  return (
    <div className={`${manrope.className} h-screen w-screen flex`}>
      <div className="w-1/2 h-full flex justify-center items-start flex-col">
        <div className="w-3/5 mx-auto">
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-400 font-light text-sm">
            Welcome back! Please enter your details.
          </p>

          <div className="flex flex-col gap-y-3 mt-4">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="p-2 border-2 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="p-2 border-2 rounded-md"
                placeholder="*********"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-x-1">
                <input type="checkbox" className="w-4 h-4" />
                <label>Remember me</label>
              </div>
              <div>
                <p className="text-sky-400 text-semibold">Forgot Password</p>
              </div>
            </div>
            <div className="flex flex-col mt-3 gap-y-5">
              <Link href={"/dashboard"}>
                <button className="w-full bg-blue-500 rounded-md py-3 text-white">
                  Sign in
                </button>
              </Link>
              <p className="opacity-80 text-sm">
                Don't have any account?{" "}
                <Link
                  href={"/register"}
                  className="text-sky-500 font-semibold underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={signUpImg}
          className="w-full h-full object-cover "
          alt="Sign up Image"
          title="Image by Unsplash"
          quality={80}
          loading="lazy"
        />
      </div>
    </div>
  );
}
