import { Route, Routes } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<PublicLayout/>}/>
      </Routes>
    </main>
  )
}

export default App