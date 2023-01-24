import { useState } from 'react';
import {Router,Routes,Route,BrowserRouter} from 'react-router-dom'
import ArtistSignIn from './components/ArtistSignIn';

import Scanner from './components/Scanner';

function App() {
  const [islogin,setIslogin]=useState(false);
  const [role,setRole]=useState("");
  const backend= "http://localhost:8080"
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Scanner  backend={backend} islogin={islogin} role={role} />}/>
        <Route path='/SignIn' element={<ArtistSignIn backend={backend} setIslogin={setIslogin} setAdmin = {setRole}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
