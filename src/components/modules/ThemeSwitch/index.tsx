import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

import { Button, Wrapper } from './styles'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(document.body.dataset.theme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const dark = theme === 'dark'

  const circles = [
    {
      t: 'matrix(-0.500937 -0.865484 0.866566 -0.499062 6.64462 20.7636)'
    },
    {
      t: 'matrix(-0.500937 -0.865484 0.866566 -0.499062 25.9759 9.63059)'
    },
    {
      t: 'matrix(-0.707769 -0.706444 0.70777 -0.706443 26.0206 20.7624)'
    },
    {
      t: 'matrix(0.866668 -0.498885 0.501114 0.865381 6.69888 9.71487)'
    },
    {
      t: 'matrix(0.766698 -0.642008 0.643566 0.765391 16.1566 26.4215)'
    },
    {
      t: 'matrix(0.766698 -0.642008 0.643566 0.765391 16.1446 4.13456)'
    }
  ]

  const largeScreen = useMediaQuery('(min-width: 1366px)')

  return (
    <Button onClick={toggleTheme}>
      <Wrapper
        style={
          dark
            ? { left: '0.1875rem', bottom: `${largeScreen ? 0.065 : 0.045}rem` }
            : {
                left: `calc(${largeScreen ? 2.35 : 2}rem - 0.1875rem)`,
                bottom: '0',
                transform: 'rotate(60deg)'
              }
        }
      >
        <svg
          width="32"
          height="30"
          viewBox="0 0 32 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {dark && (
            <mask id="moon-mask">
              <rect width="25" height="30" fill="white"></rect>
              <circle cx="20.125" cy="11.875" r="11.875" fill="black" />
            </mask>
          )}
          <circle
            cx={dark ? '12.5' : undefined}
            cy={dark ? '17.25' : undefined}
            r={dark ? '12.5' : '7.43595'}
            fill={dark ? '#7FC0CF' : '#FCEB0F'}
            mask="url(#moon-mask)"
            transform={
              !dark
                ? 'matrix(-0.500937 -0.865484 0.866566 -0.499062 16.1206 15.0138)'
                : undefined
            }
          />
          {!dark &&
            circles.map((item, index) => {
              return (
                <circle
                  r="1.24932"
                  transform={item.t}
                  fill="#FCEB0F"
                  key={index}
                ></circle>
              )
            })}
        </svg>
      </Wrapper>
    </Button>
  )
}

export { ThemeSwitch }
