import React from 'react';

function Introduction() {
  return (
    <section id="introduction" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-4">About Me</h2>
            <p className="lead">Hello! I'm a passionate web developer with experience in React and other modern technologies.</p>
            <p>I love creating beautiful and functional websites that solve real-world problems.</p>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/400x400" alt="Your Name" className="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;