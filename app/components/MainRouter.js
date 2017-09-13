import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export const routes = [
  {
    path: '/user',
    component: User
  },
  {
    path: '/token',
    component: Token
  },
  {
    path: '/home',
    component: Home
  }
]
