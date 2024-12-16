import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL
console.log(BASE_URL)
//axios 인스턴스 생성
const boardApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
   withCredentials: true, // 세션 쿠키를 요청에 포함
})
//회원가입
export const registerUser = async (userData) => {
   try {
      // userData: 회원가입 창에서 입력한 데이터
      const response = await boardApi.post('/auth/join', userData)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error //request할 때 오류 발생시 에러를 registerUser() 함수를 실행한 곳으로 던짐
   }
}

//로그인
export const loginUser = async (credentials) => {
   try {
      const response = await boardApi.post('/auth/login', credentials)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error
   }
   
}

//로그아웃
export const logoutUser = async () => {
   try {
      const response = await boardApi.get('/auth/logout') //백엔드의 loacalhost:8000/auth/logout 을 requset
      return response //
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error
   }
}
   
//로그인 상태 확인
export const checkAuthStatus = async () => {
   try {
      const response = await boardApi.get('/auth/status')
      return response
   } catch (error) {
      console.error(`API 오류 출력:${error.message}`)
   }
}