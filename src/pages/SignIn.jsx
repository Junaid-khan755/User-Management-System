import { useState } from "react";

function SignIn() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Submitted: ", userData);
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto lg:max-w-lg">
        <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <p className="m-0 text-[25px] font-semibold">
                Login to your Account
              </p>
              <span className="m-0 text-sm max-w-[90%] text-center text-[#8B8E98]">
                Get started with our app, just start section and enjoy
                experience.
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-sm text-gray-400 ">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    className="border border-gray-200 rounded-lg px-3 py-3 mb-5 text-sm w-full outline-none mt-2"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-sm text-gray-400">
                  Password
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    className="border border-gray-200 rounded-lg px-3 py-3 mb-5 mt-2 text-sm w-full outline-none"
                    placeholder="••••••••"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="mt-5 w-full">
                <button className="py-2 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
