import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Form from "./Form.tsx";
import FormSuccess from "./FormSuccess.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/success' element={<FormSuccess/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
