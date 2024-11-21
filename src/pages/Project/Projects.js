import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
// import CreateButton from './CreateButton';
import CreateModal from '../..//components/Modals/CreateModal';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  console.log(projects,"projects");
  

  const handleCreateProject = (newProjectName) => {
    setProjects([...projects, newProjectName]);
    setIsModalOpen(false);
  };


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/project/list');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        setProjects(data);  // Assuming the response is an array of projects
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);  // Empty dependency array ensures this effect runs only once on mount


  return (
    <div className='projects-page'>
      <Header
      // title='Projects'
      // onButtonClick={() => setIsModalOpen(true)}
      // buttonText='Create New Project'
      />
      <main className='projects-main'>
        <div className='projects-actions'>
          <h2>Projects</h2>
          <button className='create-btn' onClick={() => setIsModalOpen(true)} >
          <span className='button-icon'>➕</span> {'Create New Project'}
            </button>
        </div>
        <div className='project-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <div className='project-icon'>
                {project
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .toUpperCase()}
              </div>
              <Link to="/dashboard">
              <div className='project-details'>
                <h3 className='project-name'>{project}</h3>
                <p className='project-info'>4 Files</p>
                <p className='project-date'>Last edited a week ago</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      {isModalOpen && (
        <CreateModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateProject}
        />
      )}
    </div>
  );
};

export default Projects;
