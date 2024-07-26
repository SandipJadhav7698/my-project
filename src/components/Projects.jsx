import React from 'react';

function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of project 1', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Project 2', description: 'Description of project 2', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Project 3', description: 'Description of project 3', image: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;