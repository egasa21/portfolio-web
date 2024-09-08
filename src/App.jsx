import { About } from './pages/about/About'
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
      </>
    </Layout>
  )
}

export default App
