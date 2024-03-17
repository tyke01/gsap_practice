
import './App.css'
import GsapFrom from './pages/GsapFrom'
import GsapFromTo from './pages/GsapFromTo'
import GsapTimeline from './pages/GsapTimeline'
import GsapTo from './pages/GsapTo'

function App() {

  return (
    <main className='w-full h-full px-10 py-5'>
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />

      <GsapTimeline />
    </main>
  )
}

export default App
