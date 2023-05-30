import React from 'react'
import img1 from "../assest/img1.png";
import topno2 from "../assest/topimg/topno2.png";
import topno3 from "../assest/topimg/topno3.png";
import topno4 from "../assest/topimg/topno4.png";
import topno5 from "../assest/topimg/topno5.png";
import topno6 from "../assest/topimg/topno6.png";

const BoxCan = () => {

  const data = [
    {
      id: 1,
      img: img1,
      name: "Mutual Funds with Best Returns",
      des: "Invest in top-performing mutual funds today!"
    },
    {
      id: 2,
      img: topno2,
      name: "Mutual Funds with Rs.500 ",
      des: "Start your investment journey with just Rs.500!"
    },
    {
      id: 3,
      img: topno3,
      name: "Tax-saving mutual funds",
      des: "Save on taxes with our expert-recommended mutual funds"
    },
    {
      id: 4,
      img:topno4,
      name: "Instant redemption Liquid funds",
      
      des: "Quickly access your funds with Instant redemption liquid funds",
    },
    {
      id: 5,
      img:topno5,
      name: "Index mutual funds ",
      des: "Start your investment journey with just Rs.500!"
    },
    {
      id: 6,
      img: topno6,
      name: "Top rated Mutual Funds",
      des: "Save on taxes with our expert-recommended mutual funds"
    }
  ]





  return (
    <div className='container'>
      <div className='contents'>
        
        <p className='m-4 p-3' style={{ color: " #828c98" }}>Discover your perfect Mutual Fund with our financial expert and join hands with 14 crore mutual fund investors who are building an independent future.</p>
        <button type='button' className='getbutton '>Get Started</button>
      </div>
      <div className='cardbox '>
        {
          data.map(({ id, name, des, img }) => {
            return (

              <div className='cards mt-4 mb-3' key={id}>
                <div className='m-2'>
                  <img src={img} alt='...' style={{ width: "50px" }} />
                </div>
                <div className='textcon'>
                  <h6 className="m-2 p-2">{name}</h6>
                  <p className="m-2 p-2" style={{ color: " #828c98",fontSize:"17px" }}>{des}</p>
                  <h6 type='button' className='view '>view </h6>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BoxCan