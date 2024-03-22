import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Userlisting from './Components/Userlisting';
import Adduser from './Components/Adduser';
import Updateuser from './Components/Updateuser';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';


function App() {
  const notify = () => toast('waw beautify', {
    position: "bottom-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  return (
  <>
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><Link className="nav-link" to={'/'}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/user'}>User</Link></li>
          </ul>
        </header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/user' element={<Userlisting/>}></Route>
          <Route path='/user/add' element={<Adduser/>}></Route>
          <Route path='/user/edit/:code' element={<Updateuser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    <ToastContainer />
    </Provider>
  </>
  );
}

export default App;
