import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Thing, Alert } from '../.'

const App = () => {
  return (
    <div>
      <Thing />
      <Alert>{() => `Hey there!!`}</Alert>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
