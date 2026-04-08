import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import  { toast } from "react-hot-toast";
import { Toaster, toast } from "sonner";

const NewForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editUser = location.state?.user;
  const [error, setError] = useState({});                                         
  const [form, setForm] = useState({
    name: "",                                    
    email: "",
    role: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newError = {};  //we store all validation error here 

    if (!form.name.trim()) {
      newError.name = "name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newError.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newError.email = "invalid email address";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone) {
      newError.phone = "phone is required";
    } else if (!phoneRegex.test(form.phone)) {
      newError.phone = "Only number is allowed";
    }

    setError(newError)   // it returns error message in ui 

    return Object.keys(newError).length === 0   // it used to submit when the all requied filed is fill up 
  };



  const handleUpdate = async (e) => {
    e.preventDefault();
    if(!validate()){
      toast.error("All fields are required")   //we need to call fuction here like validate() not just checking like validate
      return
    }else{
      alert("Form Submitted succesfully!")
    }

   
    try {
      if (editUser) {
        await fetch(`http://localhost:5000/demo/user/${editUser._id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(form),
        });
          // alert("Form Updated successfully! ✅");
      } else {
        await fetch("http://localhost:5000/demo/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
          // alert("Form submitted successfully! ✅");
      }
      navigate("/table");
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
      <Toaster />
      <div className="p-4">
        <form action="" onSubmit={handleUpdate}>
          <div className=" flex flex-col">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              placeholder="Enter here name"
              value={form.name}
              onChange={handleChange}
              className="border p-3 w-1/2"
            />
            <p className="text-red-500"> {error.name}</p>
           
          </div>
          <div className=" flex flex-col">
            <label htmlFor="name">Email :</label>
            <input
              type="text"
              name="email"
              placeholder="Enter here email"
              value={form.email}
              onChange={handleChange}
              className="border p-3 w-1/2"
            />
              <p className="text-red-500"> {error.email}</p>
          </div>
          <div className=" flex flex-col">
            <label htmlFor="name">Role :</label>
            <input
              type="text"
              name="role"
              placeholder="Enter here role"
              value={form.role}
              onChange={handleChange}
              className="border p-3 w-1/2"
            />
            
          </div>
          <div className=" flex flex-col">
            <label htmlFor="name">Phone :</label>
            <input
              type="text"
              name="phone"
              maxLength={10}
              placeholder="Enter here phone"
              value={form.phone}
              onChange={handleChange}
              className="border p-3 w-1/2"
            />
             {error.phone &&
              <p className="text-red-500">
              {error.phone}
              </p>}
          </div>

             <div className=" flex flex-col">
            <label htmlFor="name">Phone :</label>
            <input
              type="text"
              name="phone"
              maxLength={10}
              placeholder="Enter here phone"
              value={form.phone}
              onChange={handleChange}
              className="border p-3 w-1/2"
            />
             {error.phone &&
              <p className="text-red-500">
              {error.phone}
              </p>}
          </div>


          <div className="py-2 flex justify-center">
            <button
            
              type="submit"
              className="p-2 border rounded-lg bg-purple-900 text-white "
            >
              {editUser ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewForm;
