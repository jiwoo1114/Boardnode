import { Route,Routes } from 'react-router-dom';
import './style/common.css';
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import Navbar from './components/shared/Navvar';
import LoginPage from './pages/LoginPage'
import { checkAuthStatusThunk } from './featurs/signupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() { 
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.signup) 
  //로그인 상태 가져오기
  //새로고침 시 redux 데이터가 사라지거나 서버에서 문제 발생 가능성이 있으므로
  //지속적인 로그인 상태 확인을 위해 이용

  
  useEffect(() => {
    dispatch(checkAuthStatusThunk())
  },[dispatch])
  
  return (  
    <>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path='/' element={<Home  isAuthenticated={isAuthenticated} user={user}/>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
