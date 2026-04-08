import React, { useState } from "react";
import axios from "axios"; // ✅ import axios

const FormPage = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNum: "",
    password: "",
    compName: "",
  });

  const postData = async (e) => {
    e.preventDefault(); // ✅ stop page reload

    try {
      const res = await axios.post(
        "http://localhost:5000/crud/users",
        form
      );

      console.log(res.data);

      // ✅ reset form after submit
      setForm({
        fname: "",
        lname: "",
        email: "",
        phoneNum: "",
        password: "",
        compName: "",
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={postData}>
        <div className="p-2">

          {/* First Name */}
          <div className="flex flex-col">
            <label>First Name :</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="p-2 py-2 w-1/2 border"
              value={form.fname}
              onChange={(e) =>
                setForm({ ...form, fname: e.target.value })
              }
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label>Last Name :</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="p-2 py-2 w-1/2 border"
              value={form.lname}
              onChange={(e) =>
                setForm({ ...form, lname: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label>Email :</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 py-2 w-1/2 border"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label>Phone Number :</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="p-2 py-2 w-1/2 border"
              value={form.phoneNum}
              onChange={(e) =>
                setForm({ ...form, phoneNum: e.target.value })
              }
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label>Company Name :</label>
            <input
              type="text"
              placeholder="Enter company name"
              className="p-2 py-2 w-1/2 border"
              value={form.compName}
              onChange={(e) =>
                setForm({ ...form, compName: e.target.value })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="p-2 rounded-lg border bg-purple-800 text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormPage;