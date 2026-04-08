import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState([]);
  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/users");
    const result = await data.json();
    setForm(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      const result = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
      });

      const res = await result.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-end px-4 py-5">
        <button
          onClick={() => navigate("/addemp")}
          className="border rounded-lg p-2 bg-purple-800 text-white"
        >
          Add Employee
        </button>
      </div>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
        {/* Header */}
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Phone</th>
            <th className="px-6 py-3 text-left">Role</th>
            <th className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="bg-white">
          {form.map((val) => (
            <tr
              key={val}
              className="border-t hover:bg-gray-100 transition duration-200"
            >
              <td className="px-6 py-3">{val.name}</td>
              <td className="px-6 py-3">{val.email}</td>
              <td className="px-6 py-3">{val.phone}</td>
              <td className="px-6 py-3">{val.role}</td>
              <td>
                <button
                  onClick={() => navigate("/addemp", { state: { user: val } })}
                  className="border rounded-lg p-2 bg-purple-800 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteData(val._id)}
                  className="border rounded-lg p-2 bg-red-500 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Post;
