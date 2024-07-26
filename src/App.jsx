import React from 'react';
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;