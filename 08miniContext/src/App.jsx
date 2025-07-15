
import './App.css'
import Login from './comonents/Login'
import Profile from './comonents/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
