import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Statistics } from './pages/Statistics/Statistics'
import { NotFoundPage } from './pages/NotFoundPage'
import { HomeContainer } from './pages/Home/HomeContainer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/tasks/:id/settings/delete" component={HomeContainer} />
          <Route path="/tasks/:id/settings/edit" component={HomeContainer} />
          <Route path="/tasks/:id" component={HomeContainer} />
          <Route path="/tasks" component={HomeContainer} exact />
          <Redirect from="/" to="/tasks" exact />
          <Route path="/statistics" component={Statistics} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
