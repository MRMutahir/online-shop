import React from "react";
import Main from "./Main";
import { useEffect, useState } from "react";

function Ui() {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setfirst(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(first);

  // let update =(e)=>{
  // console.log( e.target.value);
  // setfirst(e.target.value)

  // }
  return (
    <>
      <Main />
      <div id="Container">
        {first.map((List, index) => {
          //  console.log(List);

          // console.log(index);
          // console.log(List.title);
          // console.log(List.id);

          return (
            <>
              {/* <Main/> */}

              <div className="flex">
                <div className="Main">
                  <h1>{List.category}</h1>
                  <p>{List.description}</p>
                  <img className="Images" src={List.image} alt="My Image" />
                  <div className="price">{List.price}</div>
                  <ul>
                    <li className="title" key={index}>
                      {List.title}
                    </li>
                  </ul>
                  <div></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Ui;
