import Button from "../../Common/Button"
// import jwt_decode from 'jwt-decode'
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function Text() {

// const navigate=useNavigate()
// const [user,setUser]=useState('loginusers')
// useEffect(() => {
//   const token = localStorage.getItem('x-access-token')
//   if (token) {
//     const authUser = jwt_decode(token)
//     console.log(authUser.id);
//     if (!authUser) {
//       localStorage.removeItem('x-access-token')
      
//       navigate('/login')
//     } else {
//       setUser(authUser)
//     }
//   } else {
//     alert('Please Login')
//     navigate('/login')
//   }
// }, [])


  return (
    <div className=" ">
      <div className=" ">
        {" "}
        <p className=" font-nomal text-sm pb-4 text-[#c26739]">
          {/* <h3>Hii{user.userName}</h3> */}
          WELCOME TO CEYLON PRODUCTS
        </p>
        <p className=" font-bold text-2xl"> Vineyards Of </p>
        <p className=" font-bold text-2xl"> Distinction </p>
        <p className="">---</p>
        <br></br>
        <p className="text-gray-600 pb-3 ">
          Pioneers of importing authentic and premium products directly from
          across Sri Lanka to the consumers of Europe and worldwide. Our
          diversified range of products are equitably sourced from our partner
          suppliers who are the most knowledgeable and passionate farmers and
          cooperatives in the island. We specialise in importing genuine
          single-origin products ensuring that the quality and standard are of
          prime regard.{" "}
        </p>
        <p className="text-gray-600 ">
          Our partners get access to a diverse international market while you
          get access to the finest of Sri Lankan products right at your
          fingertips!
        </p>
        <br></br>
        <Button name="about us" path="#" />
      </div>
    </div>
  );
}
