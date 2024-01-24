import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Welc from './components/welc.jsx'
import Mean from './components/mean.jsx'
import Howplay from './components/howplay.jsx'
import Find from './components/find.jsx'
import Compare from './components/compare.jsx'
import PeriodicTable from './components/periodicTable.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welc />
  },
  {
    path: "/mean",
    element: <Mean />
  },
  {
    path: "/compare",
    element: <Compare />
  },
  {
    path: "/howplay",
    element: <Howplay />
  },
  {
    path: "/find",
    element: <Find />
  },
  {
    path: "/periodicTable",
    element: <PeriodicTable />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
