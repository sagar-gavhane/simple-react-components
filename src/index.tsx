import React from 'react'
import ReactDOM from 'react-dom'
import Alert from './components/Alert/Alert'

ReactDOM.render(
  <Alert isOpen={false}>
    {(props: any) => {
      return (
        <div className='alert alert-success' onClick={props.dismissAlert}>
          This is alert text goes.
        </div>
      )
    }}
  </Alert>,
  document.getElementById('root'),
)
