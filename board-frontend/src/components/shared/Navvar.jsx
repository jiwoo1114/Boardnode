import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import { Link, useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { logoutUserThunk } from '../../featurs/signupSlice'


const Navbar = ({ isAuthenticated,user }) => {
      
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleLogout = useCallback(() => { 
      dispatch(logoutUserThunk())
         .unwrap() //Thunk의 결과를 추출
         .then(() => { 
            navigate('/login') //로그아웃 완료 후 로그인페이지로 이동
            console.log('로그아웃 성공');
         })
         .catch((error) => { 
            alert(error)
         })
    },[dispatch,navigate])
   return (
      <AppBar position="static" style={{ backgroundColor: '#fff' }}>
         <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
               <Link to="/">
                  <img src="/images/마메고마.jpg" alt="로고" width="100" height="80"style={{ display: 'inline-block', marginTop: '15px' }} />
               </Link>
            </Typography>

            {isAuthenticated ? (
               <>
                  <Link to="/posts/create">
                     <IconButton aria-label="글쓰기">
                        <CreateIcon />
                     </IconButton>
                  </Link>
                  <Link to="/my" style={{ textDecoration: 'none' }}>
                     <Typography variant="body1" style={{ marginRight: '20px', color: 'black' }}>
                        {user?.nick}  님
                     </Typography>
                  </Link>
                  <Button onClick={handleLogout} variant="outlined">
                     로그아웃
                  </Button>
               </>
            ) : (
               <Link to="/login">
                  <Button variant="contained">로그인</Button>
               </Link>
            )}
         </Toolbar>
      </AppBar>
   )
}

export default Navbar