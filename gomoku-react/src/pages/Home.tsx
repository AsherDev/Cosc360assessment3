import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Index'
import { AVAILABLE_GAME_SIZES } from '../constants'
import { UserContext } from '../context'

import style from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [size, setSize] = useState(10)
  const { user } = useContext(UserContext)

  const getActions = () => {
    if (user) {
      return (
        <>
          <Button onClick={() => navigate('game')}>Start</Button>
        </>
      )
    } else {
      return (
        <>
          <Button onClick={() => navigate(`login`)}>Start</Button>
        </>
      )
    }
  }

  return (
    <>
      <label className={style.label}>
        Game size
        <select
          className={style.select}
          value={size.toString()}
          onChange={(event) => setSize(parseInt(event.target.value))}
        >
          {AVAILABLE_GAME_SIZES.map((value) => (
            <option key={`size-${value}`} value={value.toString()}>
              {value}
            </option>
          ))}
        </select>
      </label>
      {getActions()}
    </>
  )
}
