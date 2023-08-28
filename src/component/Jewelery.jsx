// import React from "react";
import React, { useEffect, useState } from "react";
import "../App.css";

function Jewelery() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) =>
        //   console.log(data)
        setdata(data)
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <center>
        {/* {" "} */}
        <h1 id="center">jeweleryul</h1>
      </center>
      <ul id="jeweleryul">
        {data
          .filter((item) => item.category === "jewelery")
          .map((item) => (
            <div key={item.id} id="Main">
              <p>{item.description}</p>
              <img className="Images" src={item.image} alt="Product Image" />
              <div className="price">{item.price}</div>
              <ul>
                <li className="title">{item.title}</li>
              </ul>
            </div>
          ))}
      </ul>
    </>
  );
}

export default Jewelery;
