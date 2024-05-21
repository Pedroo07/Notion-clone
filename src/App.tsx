import Aside from "./components/Aside"
import Main from "./components/Main"

const App = () => {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden">
        <Aside/>
        <Main/>
      </div>
    </div>
  )
}

export default App