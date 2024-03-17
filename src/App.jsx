
import './App.css'
import GsapFrom from './pages/GsapFrom'
import GsapFromTo from './pages/GsapFromTo'
import GsapTo from './pages/GsapTo'

function App() {

  return (
    <main className='w-full px-10 py-5 text-8xl text-lime-500'>
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
    </main>
  )
}

export default App
