import { Home } from "./pages/home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { PageNav } from "./components/pageNav";
import { SinglePost} from "./pages/singlePage";
import { ErrorPage } from "./pages/error";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {

  const {user} = useContext(Context)

return (
  <BrowserRouter>
   <PageNav />
    <Routes>      
          <Route path='/' element={ <Home />} />
          <Route path='/dashboard' element={user ? <Dashboard /> : <Home />} />
          <Route path='/login' element={user ? <Dashboard /> : <Login />} />
          <Route path='/register' element={user ? <Dashboard /> : <Register />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>  
    
  </BrowserRouter>
  
  )
}

export default App;