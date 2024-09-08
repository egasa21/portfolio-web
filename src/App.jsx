import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { Hero } from './pages/hero/Hero'
import { Layout } from './pages/layouts/Layout'
import { Projects } from './pages/projects/Projects'

function App() {

  return (
    <Layout>
      <>
        <Hero />
        <About/>
        <Projects/>
        <Contact/>
      </>
    </Layout>
  )
}

export default App
