
import './App.css';

import Particles from "react-tsparticles";
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails/ProjectDetails';
import Blogs from './Pages/Blogs/Blogs';
function App() {
  return (
    <>
      <BrowserRouter>
        <div >

          <Particles
            id="tsparticles"

            options={{

              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 10,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/home" element={<Home />}>

          </Route>
          <Route path="/blogs" element={<Blogs />}>

          </Route>
          <Route path="/:id" element={<ProjectDetails />}>

          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
