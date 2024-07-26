import React from 'react';

function Header() {
  return (
    <header className="bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">Your Name</h1>
            <p className="lead">Web Developer & Designer</p>
          </div>
          <div className="col-md-6">
            
            <nav>
              <ul className="nav justify-content-end">
                <li className="nav-item"><a className="nav-link text-white" href="#introduction">About</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;