import React, { useEffect, useState } from "react";

const Api = () => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("data is here ::", data);
        setForm(data);
      })

      .catch((error) => reject(error));
  }, []);

  return (
    <>
      <table className="border border-collapse w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Street</th>
          </tr>
        </thead>

        <tbody>
          {form.map((user) => {
            return (
              <tr key={user.id}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user?.address?.street}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Api;
