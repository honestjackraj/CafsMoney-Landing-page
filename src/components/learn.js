import React from 'react';
import "../components/learn.css"
// import backdrp from "../assest/backdrp.webp"
import Girl from "../assest/girl.jpg"
import pinkbasics from "../assest/pinkbasics.png"
import pinkbeginner from "../assest/pinkbeginner.png"
import pinkexpert from "../assest/pinkexpert.png"



const learn = () => {
  return (
    <>
     <div className='learn-all'>
     <div className="container text-start  ">
  <div className="row">
    <div className="col-6">
    <div className='abt-left'>


<div className='awesome'>
  <h4 className='learnmf'>Learn MF</h4>

  <p className=' about-content'>Doesn’t matter what you know about mutual funds, you can start from the basics and become an expert mutual fund investor today.</p>
  <button type='button' className='getbutton '>Start Today</button>
                      <img className="girl-imge" src={Girl}/>


</div>





    </div> 
    </div>
   
   
   
   
   
   
   
   
   
    <div class="col">

 <div className='learn-right'>
    

    <div>


    <div className="container text-center pjc-sec-box">
  <div className="row">
    <div className="col">
    <h6 className="m-2 p-2">Basics</h6>
    <img src={pinkbasics} alt="" className=""/>
    </div>


    
    <div className="col">
        <p className='learn-right-content'>Take your first step towards mutual fund investments, and create a bright future with financial stability.</p>




    </div>  
    </div>   
  <div className="row">
    <div className="col">
    <h6 className="m-2 p-2">Beginner</h6>
    <img src={pinkbeginner} alt="" className=""/>
    </div>


    
    <div className="col">
    <p className='learn-right-content'>Understand mutual funds and their types to choose the best one that suits your investment goals.</p>




    </div>  
    </div>   
  <div className="row">
    <div className="col">
    <h6 className="m-2 p-2">Advanced</h6>
    <img src={pinkexpert} alt="" className=""/>
    </div>


    
    <div className="col">

    <p className='learn-right-content'>Expand your mutual fund portfolio through advanced analysis and predict the market movement to gain the best out of it.</p>



    </div>  
    </div>   
    </div>

    </div>





 </div>

  
     
    </div>
  </div>
  </div>

  </div>
    
    </>
 
  )
}

export default learn