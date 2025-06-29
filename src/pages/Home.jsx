"use client"

import { useEffect } from "react"
import Hero from "../components/hero"
import Projects from "../components/Project"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"
import Teke from "../components/Teke"
import Education from "../components/Education"
import Blog from "../components/Blog"


const Home = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const offset = 80
          const elementPosition = element.offsetTop - offset
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="w-full">
      <section id="Home" className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Hero />
        </div>
      </section>

      <section id="Projects" className="min-h-screen ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Projects />
        </div>
      </section>
      <section id="Projects" className="min-h-screen ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Education />
        </div>
      </section>

      <section id="Blog" className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Blog />
        </div>
      </section>

      <section id="Skills" className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <TechStack />
        </div>
      </section>

      

      
      <section id="Contact" className="min-h-screen ">
          <Contact />
      </section>
    </div>
  )
}

export default Home

