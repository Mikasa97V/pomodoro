import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Statistics } from './pages/Statistics'
import { Home } from './pages/Home/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
