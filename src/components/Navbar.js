import React from 'react';
import logo from "../logo.png"

const Navbar = () => {
  return (
    // <div className='container d-flex p-2 '>
    //   <div className='navcon'>
    //   <div className='inputimg'>
    //     <div className='toggelIcon'>
    //       <i className="bi bi-list m-2" ></i>
    //     </div>
    //     <img src={logo} alt='...' className='logoimg' />
    //     <input type='search' className='form-control' placeholder='Search funds...' />
    //   </div>
    //   <div>
    //     <button type='button' className='login'>Login/Register</button>
    //   </div>

    //   </div>

    // </div>











    // <div className='container d-flex p-2 '>
    //   <div className='navcon'>
    //   <div className='inputimg'>
    //     <div className='toggelIcon'>
    //       <i className="bi bi-list m-2" ></i>
    //     </div>
    //     <img src={logo} alt='...' className='logoimg' />
    //     <input type='search' className='form-control' placeholder='Search funds...' />
    //   </div>
    //   <div>
    //     <button type='button' className='login'>Login/Register</button>
    //   </div>

    //   </div>

    // </div>













<nav class="navbar  navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <img src={logo} alt='...' className='logoimg' />
        <input type='search' className='form-control' placeholder='Search funds...' />
        <div>
       <button type='button' className='login'>Login/Register</button>
      </div>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
      </div>
      <div class="offcanvas-body">

        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">NFO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">EXPLORE FUNDS</a>
          </li>
         
          
        </ul>
       
      </div>
    </div>
  </div>
</nav>







  )
}

export default Navbar