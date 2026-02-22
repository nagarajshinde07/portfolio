import React from 'react'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'
import { Instagram } from 'lucide-react'

function Home() {
  return (
    <div className='papa'>
        <div className="pic">
            <img src="https://th.bing.com/th/id/OIP.TiS24Vlvp4OHRLbF1qdL-gHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
        <div className="home">
            <h4>welcome to my profile</h4>
          
                <h1> <a >Hey, I'm  </a>Nagaraj Shinde </h1>
                <br />
                <h2>Full Stack Developer. & AI Automation </h2>
                <br />
                <p>I use animation as a third dimension by which to simplify experiences and
                        kuiding thro each and every interaction. I'm not adding motion just to
                        spruce things up, but doing it in ways that.</p>
                        <br />
                           <h6>Find me in</h6>
                    <div className="social">
                  
                    <h3><a href="https://github.com/dashboard"><Github size={48} color="#c1c1c3" absoluteStrokeWidth /> </a></h3>
                    <h3><a href='https://www.linkedin.com/in/nagaraj-shinde-19587b383/'><Linkedin size={36} color="#c1c1c3" absoluteStrokeWidth /></a></h3>
                    <h3><a href="https://www.instagram.com/raj_shinde034/"> <Instagram size={48} color="#c1c1c3" absoluteStrokeWidth /></a></h3>
                    </div>

        </div>

    </div>
  )
  }

export default Home