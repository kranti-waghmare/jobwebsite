import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FormCrud = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const editData = location.state; // 👈 get data from edit

  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  // 👇 Prefill form when editing
  // useEffect(() => {
  //   if (editData) {
  //     setForm({
  //       title: editData.title,
  //       body: editData.body,
  //     });
  //   }
  // }, [editData]);

  const PostData = async (e) => {
  e.preventDefault();

  let response;

  if (editData) {
    response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${editData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, id: editData.id }),
      }
    );
  } else {
    response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
  }

  const data = await response.json();

  // 🔥 send data back to CRUD
  navigate("/crud", { state: data });
};
  return (
    <form onSubmit={PostData}>
      <div className="flex flex-col items-center mt-10">
        <input
          className="border p-2 m-2"
          type="text"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          placeholder="Title"
        />

        <input
          className="border p-2 m-2"
          type="text"
          value={form.body}
          onChange={(e) =>
            setForm({ ...form, body: e.target.value })
          }
          placeholder="Body"
        />

        <button className="bg-purple-500 text-white p-2 rounded">
          {editData ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default FormCrud;