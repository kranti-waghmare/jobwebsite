import React, { useEffect, useState } from "react";

const AdvPagination = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);

  const pagination = async () => {
    const res = await fetch("https://dummyjson.com/carts?limit=100");
    const data = await res.json();

    setCart(data.carts);
    console.log(data, "ddd");
  };

  const selectPage = (selectedpages) => {
    if (
      selectedpages >= 1 &&
      selectedpages <= Math.ceil(cart.length / 5) &&
      selectedpages !== page
    ) {
      setPage(selectedpages);
    }
  };

  useEffect(() => {
    pagination();
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {cart?.slice(page * 10 - 10, page * 10)?.map((item) => (
            <div key={item.id}>
              <img
                src={item?.products[0]?.thumbnail}
                alt={item.title}
                className="w-16"
              />
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => selectPage(page - 1)}
              className={`border bg-black text-white rounded-md py-2 px-4 p-2 ${page === 1 ? "cursor-not-allowed" : ""}`}
            >
              Prev
            </button>
            <button className="">
              {[...Array(cart.length / 10)].map((_, i) => {
                return (
                  <span
                    onClick={() => selectPage(i + 1)}
                    className={`border p-2 rounded-md hover:bg-black hover:text-white ${page === i + 1 ? "bg-purple-500 text-white" : ""}`}
                    key={i}
                  >
                    {i + 1}
                  </span>
                );
              })}
            </button>
            <button
              onClick={() => selectPage(page + 1)}
              className={`border bg-black text-white rounded-md py-2 px-4 p-2 ${page === cart.length / 10 ? "cursor-not-allowed" : ""}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AdvPagination;
