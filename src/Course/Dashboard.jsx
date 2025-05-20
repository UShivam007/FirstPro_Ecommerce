import React from 'react'
import { useState } from 'react';



const Dash = () => {
  const [cName,setcoursename] =useState("Course Name");
  const [price] = useState(2000);
  const[Quantity,setquantity] = useState(0);

  const IncreaseQuantity = ()=>{
  setquantity(Quantity + 1);
  }


  return (
    <div>
      {/* {console.log(cName)}
      {console.log(setcoursename)} */}
      
      <a href="#" className="relative block rounded-3xl border border-gray-700 ">
        <span
          className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase"
        >
          Save 25%
        </span>

        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt=""
          className="h-60 w-full rounded-tr-3xl rounded-tl-3xl object-contain"
        />
        <hr />
        <div className="p-4 text-center">
          <strong className="text-xl font-medium text-gray-900"> {cName}</strong>


          <p className="mt-2 text-pretty text-gray-700">
              Discription :-
          </p>
          <p className="mt-2 text-pretty text-gray-700">
              
            Price : { Quantity == 0 ? price : price*Quantity }
          </p>
              {price * Quantity >=6000 && <p>25% Discount</p>}
              
          <p className="mt-2 text-pretty text-gray-700">
            Quantity : {Quantity ==0 ? "Null" : Quantity}
          </p>

          <span
            className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
         
                  onClick={ IncreaseQuantity}
         >
           Add Product
          </span>
          <span
            className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
          >
            Learn More
          </span>
        </div>
      </a>
    </div>
  )
}

export default Dash;