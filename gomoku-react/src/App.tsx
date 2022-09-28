import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, UserProvider } from './components/Index'
import { Home, Game, Games, GameLog, Login, Signup } from './pages/Index'

import style from './App.module.css'

function App() {
  return (
    <UserProvider>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="game" element={<Game />} />
            <Route path="games" element={<Games />} />
            <Route path="game-log/:gameId" element={<GameLog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </UserProvider>
  )
}

export default App
