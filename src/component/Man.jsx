import React, { useEffect, useState } from 'react'

function Man() {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(response =>
            response.json()
        ).then(data => {
            //   console.log(data);
            setfirst(data)

        }).catch(error => {
            console.log(error);
        })
    }, [])

    const [first, setfirst] = useState([])
 
  
    let finddata = first.find(item => item.category === "men's clothing")
    console.log(finddata);

    return (<>

        <div className='Man'>
            <h1>{finddata.category}? Man</h1>
            <p>{finddata.description}</p>
            <img className='Images' src={finddata.image} alt="My Image" />
            <div className='price'>{finddata.price}</div>
            <ul>
                <li className='title'>{finddata.title}</li>
            </ul>
            <div>
            </div>
        </div>


    </>)



}

export default Man