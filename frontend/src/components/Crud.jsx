import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Crud = () => {
 const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchAllData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await res.json();
    setUser(data);
  };

  // useEffect(() => {
  //   fetchAllData();
  // }, []);

  // 🔥 handle updated data

const deleteData = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  // 🔥 remove from UI
  setUser((prev) => prev.filter((item) => item.id !== id));
};

  return (
    <div>
      <div className="flex justify-end p-4">
        <button
          onClick={() => navigate("/add")}
          className="bg-purple-500 text-white p-2 rounded"
        >
          Add Employee
        </button>
      </div>

      <table className="border w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.body}</td>
              <td className="flex gap-2">
                <button
                  onClick={() => EditData(val)}
                  className="bg-purple-500 text-white p-1"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteData(val.id)}
                  className="bg-red-500 text-white p-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;