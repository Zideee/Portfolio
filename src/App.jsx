import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import BilanSAE from './components/BilanSAE'
import AutoEvaluation from './components/AutoEvaluation'
import Objectifs from './components/Objectifs'
import PasseportCulturel from './components/PasseportCulturel'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <BilanSAE />
                <AutoEvaluation />
                <Objectifs />
                <PasseportCulturel />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
