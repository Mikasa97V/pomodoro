import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Statistics } from './pages/Statistics'
import { Home } from './pages/Home/Home'
import {NotFoundPage} from "./pages/NotFoundPage";

const App: React.FC = () => {

  // const test = location.pathname.includes('/settings/delete')
  // console.log('test', test)
  // console.log('location.pathname', location.pathname)



  // useEffect(() => {
  //   if (!location) return
  //   if (!location.pathname.includes('/settings/delete')) return
  //   setIsConfirmDelete(true)
  // }, [location])
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/tasks/:id/settings/delete" component={Home} />
          {/*<Route path="/tasks/:id/settings/delete" component={<Home isConfirmDelete={true}/>} />*/}
          <Route path="/tasks/:id" component={Home} />
          <Route path="/tasks" component={Home} exact />
          <Redirect from="/" to="/tasks" exact />
          <Route path="/statistics" component={Statistics} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
