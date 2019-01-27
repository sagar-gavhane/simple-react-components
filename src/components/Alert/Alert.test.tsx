import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Alert from './Alert'

test('mount and unmount without crashing', () => {
  const { container, unmount, queryByTestId } = render(
    <Alert>
      {(props: any) => (
        <div onClick={props.dismissAlert} data-testid='alert-container'>
          This is alert text goes.
        </div>
      )}
    </Alert>,
  )
  expect(container).toBeInTheDocument()

  // unmount alert
  unmount()
  expect(queryByTestId('alert-container')).not.toBeInTheDocument()
})

test('props works properly', () => {
  const { container, getByTestId, queryByTestId } = render(
    <Alert isOpen isDismissible>
      {(props: any) => (
        <div onClick={props.dismissAlert} data-testid='alert-container'>
          This is alert text.
        </div>
      )}
    </Alert>,
  )

  // prop dismissAlert testing
  expect(container).toBeInTheDocument()
  fireEvent.click(getByTestId('alert-container'))
  expect(queryByTestId('alert-container')).not.toBeInTheDocument()
})

export {}
