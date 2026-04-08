import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Kranti = () => {
  const [form, setForm] = useState([]);
  const navigate = useNavigate()
  const fetchData = async () => {
    const getData = await axios.get("http://localhost:5000/crud/users"); //axios gives dataa directly without json format

    setForm(getData.data);
  };
  const deleteData = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/crud/users/${id}`);

    // ✅ remove deleted user from UI
    setForm(form.filter((val) => val._id !== id));

  } catch (err) {
    console.log(err);
  }
};
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <div className="flex justify-end  px-10 py-5">
      <button onClick={() => navigate("/data")} className="bg-purple-800 text-white border p-2 rounded-lg ">Add employee</button>
    </div>
      <table className="border w-full ">
        <thead className="bg-purple-800 text-white ">
          <tr className=" rounded-md  py-4 ">
            <th className="  py-2 ">Name</th>
            <th className=" py-2 ">Email</th>
            <th className=" py-2 ">PhoneNumber</th>
            <th className=" py-2 ">Company Name</th>
            <th className=" py-2 ">Action</th>
          </tr>
        </thead>
        <tbody className="w-full px-10">
          {form.map((val) => {
            return (
              <tr  key={val._id}>
              <td className="p-4  py-2">{val.fname} {val.lname}</td>
                <td className="p-4 px-4 py-2">{val.email}</td>
                <td className="p-4 px-4 py-2">{val.phoneNum}</td>
                <td className="p-4 px-4 py-2">{val.compName}</td>
                <td>
                  <button className="bg-purple-800 text-white p-2 rounded-lg border">Edit</button>
                  <button onClick={()=> deleteData(val._id)} className="bg-red-800 text-white p-2 rounded-lg border">delete</button>
                
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Kranti;
