import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Statistics } from './pages/Statistics/Statistics'
import { Home } from './pages/Home/Home'
import {NotFoundPage} from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/tasks/:id/settings/delete" component={Home}/>
          <Route path="/tasks/:id/settings/edit" component={Home}/>
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
