import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import notFound from "../assets/noooo.png";

const TableForm = () => {
  const location = useLocation();
  const editUser = location.state?.user;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const userData = await fetch(
        `http://localhost:5000/demo/user?page=${page}&limit=5&search=${search}`,
      );
      const jsonForm = await userData.json();
      setData(jsonForm.data);
      setTotalPages(jsonForm.totalPages);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchData();
  }, [page, search]);

  const deleteData = async (id) => {
    const confirmation = window.confirm("Are you sure to delete");

    if (!confirmation) {
      toast.error("deleted cancel");
      return;
    }
    try {
      const deleted = await fetch(`http://localhost:5000/demo/user/${id}`, {
        method: "DELETE",
      });

      const data = await deleted.json();
      console.log(data);
      toast.success("deleted successfully");

      setTimeout(() => {
        fetchData();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Toaster />
      <div className="flex justify-between w-full px-10 py-5">
        <div className="">
          <input
            type="text"
            placeholder="Search here ..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // 🔥 reset to first page when searching
            }}
            className="border w-1/2 p-2 py-2 absolute rounded-md"
          />
          {search && data.length === 0 && (
            <div className="w-full mx-auto mt-10 flex justify-center ">
              <img className="" src={notFound} alt="not found" />
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => navigate("/tableform")}
            className="border bg-purple-900 text-white rounded-lg p-2 "
          >
            Add Employee
          </button>
        </div>
      </div>
      <table className="  w-full">
        <thead className="border bg-purple-900 text-white">
          <tr className="">
            <th className="py-2 ">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map((val) => {
            return (
              <tr className="" key={val._id}>
                <td className="px-10 ">{val.name}</td>
                <td className="p-2">{val.email}</td>
                <td className="p-2">{val.role}</td>
                <td className="p-2">{val.phone}</td>
                <td className="p-2">
                  <button
                    onClick={() =>
                      navigate("/tableform", { state: { user: val } })
                    }
                    className="border bg-purple-900 text-white rounded-lg p-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteData(val._id)}
                    className="border bg-red-500 text-white rounded-lg p-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center gap-2">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          👈
        </button>
        <span>{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          👉
        </button>
      </div>
    </div>
  );
};

export default TableForm;
