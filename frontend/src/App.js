import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/loginForm';
import ApplicationList from './pages/applicationList';
import MyForm from './pages/jobAppForm';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="/view" element={<ApplicationList/>} />
    {/* <Route path='/form' element={<MyForm/>}></Route> */}
            {/* <Route path="/signup" element={<SignupPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
