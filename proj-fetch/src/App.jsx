import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Motorcycles from "./Motorcycles"

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Motorcycles />} />
      </Routes>
    </Router>
  )
}

export default App;