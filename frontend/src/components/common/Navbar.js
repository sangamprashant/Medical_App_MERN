import React from 'react';
import "../css/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  const firstSectionLinks = [
    { to: "/link1", text: 'fab fa-github' },
    { to: "/link2", text: 'fab fa-github' },
    { to: "/link3", text: 'fab fa-github' },
  ];

  const secondSectionLinks = [
    { to: "/buy-medicines", text: "Buy Medicines" },
    { to: "/find-doctors", text: "Find Doctors" },
    { to: "/lab-tests", text: "Lab Tests" },
    { to: "/circle-membership", text: "Circle Membership" },
    { to: "/health-records", text: "Health Records" },
    { to: "/compare-insurance", text: "Compare Insurance" },
  ];

  const thirdSectionLinks = [
    { to: "/link4", text: "Link 4" },
    { to: "/link5", text: "Link 5" },
    { to: "/link6", text: "Link 6" },
    { to: "/link6", text: "Link 6" },
    { to: "/link6", text: "Link 6" },
    { to: "/link6", text: "Link 6" },
    { to: "/link6", text: "Link 6" },
    { to: "/link6", text: "Link 6" },
  ];

  return (
    <div className='Nav_bar'>
      <div className='navbar_first'>
        <nav className="navbar ">
          <div className="container-fluid">
            <div className='mx-3 p-2'>
              <a className="navbar-brand">Navbar</a>
            </div>
            <form className=" search">
              <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div>
              <ul className="container-fluid" >
            {firstSectionLinks.map((link, index) => (
              <Link key={index} to={link.to} className=' link-style mx-4 my-2'><a><i className={link.text}></i></a></Link>
            ))}
          </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className='navbar_second'>
        <nav className="navbar " style={{ height: "50px" }}>
          <ul className="container-fluid" >
            {secondSectionLinks.map((link, index) => (
              <li key={index}><Link to={link.to} className="link-style">{link.text}</Link></li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='navbar_third'>
        <nav className="navbar " style={{ height: "50px" }}>
          <ul className="container-fluid" >
            {thirdSectionLinks.map((link, index) => (
              <li key={index}><Link to={link.to} className="third-link-style">{link.text}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
