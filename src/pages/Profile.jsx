import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    try {
      const getProfile = async () => {
        const res = await axios.get("http://localhost:5000/users/profile", {
          withCredentials: true,
        });

        setUserData(res.data);
      };
      getProfile();
    } catch (err) {
      console.log("Profile Error:", err.message);
    }
  }, []);

  return (
    <Layout title="Profile">
      <div className="min-h-screen dark:bg-slate-800   ">
        <div className="bg-gray-100 dark:bg-gray-700 max-w-3xl relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform mx-5 top-10   ">
          <div className="flex items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <button
              className="px-3 py-1 bg-gray-600  absolute right-2 top-3 rounded-xl"
              onClick={() => alert("Edit")}
            >
              Edit Profile
            </button>
            <div className="w-fit transition-all transform duration-500">
              <h1 className="text-white text-xl font-semibold  ">
                Name: {userData.fullName}
              </h1>
              <p className="text-gray-300 text-sm">Role: {userData.role}</p>
              <a className=" text-gray-300 text-sm group-hover:opacity-100  transform transition-all delay-300 duration-500">
                Email: {userData.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
