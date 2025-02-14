import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


export default function Signup() {
  return (
    <div className="flex h-screen">
      {/* Left Side (Form) */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        {/* SeaXChange Logo */}
        <h1 className="absolute top-6 left-10 text-2xl font-bold mb-6 text-teal-700">SeaXChange</h1>
        <form className="w-full max-w-sm">
            <div className="mb-4">
                <Label htmlFor="email" className="text-teal-800 text-sm">
                    Email
                </Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full h-16"
                />
            </div>
          <div className="mb-4">
            <Label htmlFor="password" className="text-teal-800 text-sm">
                Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full h-16"
            />
          </div>
          <Button className="w-full bg-teal-800 hover:bg-teal-900">
            Sign Up
          </Button>
        </form>
        <p className="mt-8 text-gray-500">or sign up with</p>
        <div className="flex space-x-4 mt-8">
          <button className="border border-teal-700 p-2 w-20 h-12 rounded">Fisher</button>
          <button className="border border-teal-700 p-2 w-20 h-12 rounded">Supplier</button>
          <button className="border border-teal-700 p-2 w-20 h-12 rounded">Retailer</button>
        </div>
        <p className="absolute bottom-10 left-4 mt-4 text-gray-500">
          Have an account? <Link href="/login" className="text-teal-700">Sign in</Link>
        </p>
      </div>
      {/* Right Side (Image/Graphic) */}
      <div className="w-1/2 bg-teal-800 flex items-center justify-center text-white">
        <p>Picture/Graphic</p>
      </div>
    </div>
  );
};