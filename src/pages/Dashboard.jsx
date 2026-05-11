import Card from "../components/Card";
import Layout from "../components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";

function Dashboard() {
  const [total, setTotalUsers] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    totalActiveUsers: 0,
  });
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users/allusers", {
          withCredentials: true,
        });
        // console.log("Response of card users: ", res.data.totalUsers);
        console.log("Total Users: ", res.data.totalUsers);
        console.log("Total Admins: ", res.data.countAdmins);
        setTotalUsers({
          totalUsers: res.data.totalUsers,
          totalAdmins: res.data.countAdmins,
          totalActiveUsers: res.data.totalActiveUsers,
        });
      } catch (err) {
        console.log("Card Total users Error: ", err);
      }
    };
    getUsers();
  }, []);
  return (
    <Layout title="Your Dashboard">
      <div className="flex justify-center gap-5">
        <Card name="Total Users" total={total.totalUsers} />
        <Card name="Admins" total={total.totalAdmins} />
        <Card name="Active Users" total={total.totalActiveUsers} />
      </div>
    </Layout>
  );
}

export default Dashboard;
