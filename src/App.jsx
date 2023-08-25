import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat-bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
        <Experience />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

// The Tech component needs fixing. Currently getting an error that says
//"Fast refresh only works when a file only export components. Move your component(s) to a separate file.eslint(react-refresh/only-export-components)"
// Look into this

//24-08 Projects section working!! Need to retore About section, but also tech bobbles if I can be assed
