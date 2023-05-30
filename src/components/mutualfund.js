import React from 'react';
import "../components/mutualfund.css";
import securer from "../assest/securer.png";
import risktaker from "../assest/risktaker.png";
import balancer from "../assest/balancer.png";
import solutionist from "../assest/solutionist.png";



function mutualfund() {

    const data = [
        {
          id: 1,
          img: securer,
          name: "Securer",
          des: "A securer like you invests in mutual funds that keep the investment amount safe and are less volatile."
        },
        {
          id: 2,
          img: risktaker,
          name: "Risktaker",
          des: "Being a risk-taker lets you enjoy high returns though your investments could become highly volatile."
        },
        {
          id: 3,
          img: balancer,
          name: "Balancer",
          des: "You are a balancer when you prefer balanced investments which are neither too volatile nor very stable."
        },
        {
          id: 4,
          img: solutionist,
          name: "solutionlist",
          des: "The solutionist wants to achieve specific financial goals like tax savings, retirement planning, etc."
        },
       
      ]
    

   return (


          <>

           <div className="container text-center">
        <div className="row">
          <div className="col">
      <section className=" mutualfund-all">
                      <h5 className=" mutual-head">Choosing a mutual fund</h5>
                      <span  style={{ color: " #828c98" }}>Choosing a mutual fund that you could handle is an essential decision when you start your investment journey.</span>
                    
                     <br/>   <br/>  <button type='button' className='getbutton '>Being your journey</button>





        
                     <div className='container'>
      
      <div className='mutual-cardbox '>
        {
          data.map(({ id, name, des, img }) => {
            return (

              <div className= 'mutualcardbox'  key={id}>
                <div className='m-2'>
                <div className=''>
                  <img className='mutal-img' src={img} alt='...'  />
                </div>
                </div>
                <div className='textcon'>
                  <h6 className="m-2 p-2">{name}</h6>
                  <p className="m-2 p-2" style={{ color: " #828c98",fontSize:"17px" }}>{des}</p>
                  {/* <h6 type='button' className='view '>view </h6> */}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>








                  </section>











                  {/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}





                
                  
          </div>
          </div>
          </div>
          
          
          </>
  );
}

export default mutualfund;