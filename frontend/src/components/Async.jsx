import React, { useState, useEffect } from "react";

const Async = () => {
  const [imges, setImges] = useState([]);
  console.log(imges, "okkkk")

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products")
      const result = await data.json();
      setImges(result.products);
    } catch (error) {
      console.log("error is here:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {imges.map((user) => (
        <div key={user.id} className="flex border h-full w-full">
          <h4>{user.title}</h4>
          <img src={user.thumbnail} className="h-14 w-14 " alt={user.title} />
        </div>
      ))}
    </>
  );
};

export default Async;