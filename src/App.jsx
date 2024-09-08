import { About } from './pages/about/About'
import { Hero } from './pages/hero/Hero'
import { Layout } from './pages/layouts/Layout'

function App() {

  return (
    <Layout>
      <>
        <Hero />
        <About/>
      </>
    </Layout>
  )
}

export default App
