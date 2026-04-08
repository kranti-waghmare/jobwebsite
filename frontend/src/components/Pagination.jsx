import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pagination = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const SelectPage = (selectedpages) => {

    if (

      selectedpages >= 1 && 
      selectedpages <= product.length / 10 && 
      selectedpages !== page

    )
    
    setPage(selectedpages)
  };



  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const res = await data.json();

    // if (res && res.products) {
    //   setProduct(res.products);
    // }

          setProduct(res.products);

  };
  console.log(product);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Pagination</h1>

      
        <div className="grid grid-cols-4 gap-5 p-2 w-full">
          {product?.slice(page * 10 - 10, page * 10)?.map((user) => {
            return (
              <div key={user.id} className="border p-3 text-center">
                <img
                  src={user.thumbnail}
                  className="w-20 h-20 mx-auto"
                  alt={user.title}
                />
                <span>{user.title}</span>
              </div>
            );
          })}
        </div>
      

      {/* <div className='flex gap-4 justify-center items-center'>

<button onClick={goPrev} className='border p-2 px-4 py-2 rounded-md bg-black text-white'>Prev</button>
<button onClick={goNext} className='border p-2 px-4 py-2 rounded-md bg-black text-white'>Next</button>
</div> */}

      {product.length > 0 && (
        <div className="flex gap-4 justify-center items-center py-4">
          <button onClick={() => SelectPage(page - 1)} className={`border p-2 px-4 py-2 rounded-md bg-black text-white  ${page > 1 ? "" : "cursor-not-allowed"}`}>
            Prev
          </button>
          {[...Array(product.length / 10)].map((_, i) => {
            return (
              <span
                onClick={() => SelectPage(i + 1)}
                className={`cursor-pointer hover:bg-black hover:text-white p-2 rounded-md border  ${page === i + 1 ? "bg-red-400 text-white" : ""}`}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}

          <button onClick={() => SelectPage(page + 1)} className={`border p-2 px-4 py-2 rounded-md bg-black text-white ${page < product.length / 10 ? "" : "cursor-not-allowed"}`}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
