import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmp = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const editUser = location.state?.user;   //data pass by another page 
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const Postdata = async (e) => {
    e.preventDefault();

    try {
      if (editUser) {
        // 🔥 UPDATE
        await fetch(`http://localhost:5000/api/users/${editUser._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      } else {
        // 🔥 CREATE
        await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
      }
      navigate("/post")
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    if (editUser) {
      setForm(editUser);
    }
  }, [editUser]);
  return (
    <>
      <div className="flex p-4 flex-col gap-2">
        {/* ✅ FORM START */}
        <form onSubmit={Postdata}>
          <div className="flex flex-col gap-2">
            <label>Name :</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 w-1/2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Email :</label>
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border p-2 w-1/2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Phone :</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border p-2 w-1/2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Role :</label>
            <input
              type="text"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="border p-2 w-1/2"
            />
          </div>

          {/* ✅ BUTTON MUST BE INSIDE FORM */}
          <div className="flex justify-center py-4">

          <button className="border  bg-purple-800 text-white p-2 rounded-lg" type="submit">{editUser ? "Update" : "Submit"}</button>
          </div>
        </form>
        {/* ✅ FORM END */}
      </div>
    </>
  );
};

export default AddEmp;
