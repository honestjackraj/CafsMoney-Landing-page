import React from 'react'
import "../components/animation.css"
import Educateorange from "../assest/educate-orange.png";
import Step1 from "../assest/step1.png";
import Step3 from "../assest/step3.png";
import Step4 from "../assest/step4.png";
import Grouporangegh from "../assest/grouporange (2).png";
import Smsearch from "../assest/smsearch.png";
import Smnfo from "../assest/smnfo.png";
import Smcompare from "../assest/smcompare.png";
import Smcalculator from "../assest/smcalculator.png";
import Smenjoy from "../assest/smenjoy.png";
import Safeorange03 from "../assest/safeorange03.png";
import Supportorangefiln from "../assest/supportorangefiln.png";

import No1 from "../assest/lastimg/no1.png"
import No2 from "../assest/lastimg/no2.png"
import No3 from "../assest/lastimg/no3.png"
import No4 from "../assest/lastimg/no4.png"
import No5 from "../assest/lastimg/no5.png"
import No7 from "../assest/lastimg/no7.png"
import No6 from "../assest/lastimg/no6.png"
import No8 from "../assest/lastimg/no8.png"
import No9 from "../assest/lastimg/no9.png"
import No10 from "../assest/lastimg/no10.png"
import No11 from "../assest/lastimg/no11.png"
import No12 from "../assest/lastimg/no12.png"
import No13 from "../assest/lastimg/no13.png"
import No14 from "../assest/lastimg/no14.png"
import No15 from "../assest/lastimg/no15.png"
import No16 from "../assest/lastimg/no16.png"
import No17 from "../assest/lastimg/no17.png"
import No18 from "../assest/lastimg/no18.png"
import No19 from "../assest/lastimg/no19.png"
import No20 from "../assest/lastimg/no20.png"
import No21 from "../assest/lastimg/no21.png"
import No22 from "../assest/lastimg/no22.png"
import No23 from "../assest/lastimg/no23.png"
import No24 from "../assest/lastimg/no24.png"
import No25 from "../assest/lastimg/no25.png"
import No26 from "../assest/lastimg/no26.png"
import No27 from "../assest/lastimg/no27.png"
import No28 from "../assest/lastimg/no28.png"
import No29 from "../assest/lastimg/no29.png"
import No30 from "../assest/lastimg/no30.png"
import No31 from "../assest/lastimg/no31.png"


const animation = () => {

  return (
    <>
           {/* 1 */}

      <div class="container">
        <div class="row row-cols-4">
          <div class="col">
            <img className='animate-img1' src={Educateorange} alt='...' />

            <span class="qualification__line"></span>
          </div>

          <div class="col">
            <p className=' animation-para'>Doesn’t matter what you know about mutual funds, you can start from the basics and become an expert mutual fund investor today.</p>
          </div>

          <div class="col-6">
            <div className='animation-right1'>
              <img className='animate-stepimg1' src={Step1} alt='...' />


            </div>
          </div>
        </div>


        {/* 2 */}

        <div class="row row-cols-4">
          <div class="col">
            <img className='animate-img1' src={Grouporangegh} alt='...' />

            <span class="qualification__line"></span>
          </div>

          {/* <div class="col">
            <h6 className='ani-2firstcont'>Choose across 1000+ Mutual Funds from 40+ AM      
Cs with our mutual fund recommendations.</h6>


  <span>          
      <img className='animate-img1' src={Grouporangegh} alt='...' />
</span>   
   <p className=' animation-para'>Doesn’t matter what you know about mutual funds, you can start from the basics and become an expert mutual fund investor today.</p>
          </div> */}

          <div class="col-9">

            <div className='ani-2firstcont'>
              <h6 className='m-4 p-3'>Choose across 1000+ Mutual Funds from 40+ AM Cs with our mutual fund recommendations.</h6>
              </div>
              <div className='ani-2contant'>
                <div>
                <img className='ani-smimage' src={Smsearch} alt='...' /><span>Search mutual funds by filtering your preferred category, AMC, risk appetite and much more.</span>
                <br/><img className='ani-smimage' src={Smnfo} alt='...' /><span>Invest in freshly launched New fund offerings (NFOs) launched by Asset Management Companies (AMC).</span>
                <br/> <img className='ani-smimage' src={Smcompare} alt='...' /><span>Compare any mutual fund of your choice with its past performance, market and much more.</span>
                <br/> <img className='ani-smimage' src={Smcalculator} alt='...' /><span>Forecast your mutual fund investment’s performance using  fund calculators for SIP, Exit load and much more.</span>
                <br/><img className='ani-smimage' src={Smenjoy} alt='...' /><span>Enjoy mutual fund recommendations from experts to choose the mutual fund that suits you the best.</span>

                </div>

              </div>

       
          </div>
        </div>

 {/* 3 */}

 <div class="row row-cols-4">
          <div class="col">
            <img className='animate-img1' src={Safeorange03} alt='...' />

            <span class="qualification__line"></span>
          </div>

          <div class="col">
            <p className='animation-para'>SafeView all your investments in one place, visualized in detail to help you understand your investment’s growth.</p>
          </div>

          <div class="col-6">
            <div className='animation-right1'>
              <img className='animate-stepimg1' src={Step3} alt='...' />


            </div>
          </div>
        </div>

{/* 4 */}

<div class="row row-cols-4">
          <div class="col">
            <img className='animate-img1' src={Supportorangefiln} alt='...' />

            <span class="qualification__line"></span>
          </div>

          <div class="col">
            <p className=' animation-para'>Reach out to our customer support to solve your query anytime between Mon to Fri (10:00 to 19:00 Hrs).</p>
          </div>

          <div class="col-6">
            <div className='animation-right1'>
              <img className='animate-stepimg1' src={Step4} alt='...' />


            </div>
          </div>
        </div>















        <div className='lastbankiconbacdrop-all'>
        <div className='lastbankiconbacdrop'>
          <h6 className='amc-head'><b>AMC</b> </h6>
          <h6  className='amc-head-des'>Park your investments in the hands of professionals by investing in mutual funds offered by profound asset management companies.</h6>


           <div className="container px-4 text-center icon-all-box">
                 <div className="row gx-5">
                     <div className="col">
                         <div className="p-3">
                             <img src={No1} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No2} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No3} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No4} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No5} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No6} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No7} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No8} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No9} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No10} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No11} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No12} alt='loading' className='skill-icons' />
                             
                         </div>
                     </div>
                  
                     <div className="col">
                         <div className="p-3">
                             <img src={No13} alt='loading' className='skill-icons' />
                             
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No14} alt='loading' className='skill-icons' />
                            
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No14} alt='loading' className='skill-icons' />
                           
                         </div>
                     </div>
              
                     <div className="col">
                         <div className="p-3">
                             <img src={No15} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No16} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No17} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No18} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No19} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No20} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No21} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No22} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No23} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No24} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No25} alt='loading' className='skill-icons' />
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No26} alt='loading' className='skill-icons' />
                             
                         </div>
                     </div>
                  
                     <div className="col">
                         <div className="p-3">
                             <img src={No27} alt='loading' className='skill-icons' />
                             
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No28} alt='loading' className='skill-icons' />
                            
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No29} alt='loading' className='skill-icons' />
                           
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No30} alt='loading' className='skill-icons' />
                           
                         </div>
                     </div>
                     <div className="col">
                         <div className="p-3">
                             <img src={No31} alt='loading' className='skill-icons' />
                           
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

export default animation