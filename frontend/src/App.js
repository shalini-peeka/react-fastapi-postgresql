
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/signIn/SignIn'
import SignUp from './components/signUp/SignUp'

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}> </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>




  )
}

export default App
