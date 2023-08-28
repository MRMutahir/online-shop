import React, { useEffect, useState } from "react";
import "../../src/man.css"
// import a from "../../src"

function Man() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, "This is the data from the API");
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Uncomment the following code to display data related to "men's clothing"
  // const finddata = data.find((item) => item.category === "men's clothing");

  return (
    <div>
     <center id="center"> <h1 >Men's Clothing</h1></center>
      <ul  id="Container">
        {data
          .filter((item) => item.category === "men's clothing")
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
    </div>
  );
}

export default Man;
