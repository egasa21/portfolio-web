import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { Hero } from './pages/hero/Hero'
import { Layout } from './pages/layouts/Layout'
import { Projects } from './pages/projects/Projects'
import './App.css'
import {useRef} from "react";

function App() {

    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        switch (section) {
            case 'hero':
                heroRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about':
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

  return (
    <Layout scrollToSection={scrollToSection}>
        <>
            <div ref={heroRef}><Hero/></div>
            <div ref={aboutRef}><About/></div>
            <div ref={projectsRef}><Projects/></div>
            <div ref={contactRef}><Contact/></div>
        </>
    </Layout>
  )
}

export default App
