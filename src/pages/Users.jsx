import axios from "axios";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({
    fullName: "",
    email: "",
  });
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/users/allusers",
          {
            withCredentials: true,
          },
        );

        // console.log(response.data.users);
        setUsers(response.data.users);
      } catch (err) {
        console.log("Error on Users page: ", err);
      }
    };
    getUsers();
  }, []);
  console.log("Users: ", users);

  //    Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:5000/users/delete/${id}`, {
        withCredentials: true,
      });

      setUsers((prev) => prev.filter((u) => u._id !== id));
      console.log("Deleted");
    } catch (err) {
      console.log("Delete handler error: ", err.message);
    }
  };

  //      Handle Edit
  const handleEdit = (user) => {
    setSelectedUser(user);
    setSingleUser({
      fullName: user.fullName + " ",
      email: user.email,
    });
  };

  //      Handle Datachange
  const handleChange = async (e) => {
    setSingleUser({ ...singleUser, [e.target.name]: e.target.value });
    console.log("Input edit data: ", singleUser);
  };

  // Handle Edit -> Save button
  const handleSaveBtn = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/users/editprofile/${selectedUser._id}`,
        singleUser,
        {
          withCredentials: true,
        },
      );

      const updatedUser = res.data.user;
      setUsers((prev) =>
        prev.map((u) => (u._id === updatedUser._id ? updatedUser : u)),
      );

      setSelectedUser(null);
    } catch (err) {
      console.log("Save Error: ", err);
    }
  };

  return (
    <Layout title="Users">
      {/* Controls */}
      <div className="flex items-center justify-end gap-4 mb-6">
        <input
          type="search"
          placeholder="Search users..."
          className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none w-64"
        />

        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-white">
          <thead className="bg-gray-800 text-gray-400 text-sm">
            <tr>
              <th className="px-4 py-3">S.no.</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Edit</th>

              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-800/50">
                <td className="px-4 py-3">{index + 1 + "."}</td>
                <td className="px-4 py-3">{user.fullName}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user._id}</td>
                <td>
                  <button
                    className="px-4 py-1 rounded-lg bg-green-600"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="px-4 py-1 rounded-lg bg-red-600"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedUser && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="flex flex-col justify-center gap-6 bg-gray-900 w-80 h-70 rounded-xl">
              <h2 className="text-2xl text-center font-semibold text-white  ">
                Edit User
              </h2>
              <input
                name="fullName"
                type="text"
                placeholder="Name"
                className="bg-gray-800 px-2 py-1 mx-3"
                value={singleUser.fullName}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="bg-gray-800 px-2 py-1 mx-3"
                value={singleUser.email}
                onChange={handleChange}
              />
              <button
                className="bg-blue-600 rounded-xl w-20 ml-30 px-5 py-1"
                onClick={handleSaveBtn}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Users;
