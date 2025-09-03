import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Card from "./card";

export default function Home() {
  const { count, increment, decriment } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(false);
  // const prodId = 1;
  useEffect(() => {
    const dataFetch = async function () {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const proData = await res.json();
      console.log(proData);
      setData(proData);
      setLoading(false);
    };
    dataFetch();
  }, []);

  return (
    <>
      <div className=" bg-linear-to-r from-[#4f46e5] to-[#9333ea]  px-7 py-10 rounded-4xl mt-10">
        <h1 className="text-3xl font-bold mb-3 text-white">
          Discover and showcase amazing creative work
        </h1>
        <p className="text-lg mb-10 text-white ">
          Join our community of creators to share your portfolio and get
          inspired.
        </p>
        <Link
          to="login"
          className="bg-white p-2 border-1 border-amber-100 rounded-xl text-blue-700">
          Share Your Project
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        {isloading ? (
          <p>Loadind.....</p>
        ) : (
          data.map((el, id) => <Card elData={el} />)
        )}
      </div>
      <p>{count}</p>
      <button className="px-5  border border-black me-2" onClick={increment}>
        +
      </button>
      <button className="px-5  border border-black" onClick={decriment}>
        -
      </button>
    </>
  );
}
