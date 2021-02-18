import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Alert from './Alert'
import noop from './../../utils/noop'

test('mount and unmount without crashing', () => {
  const { container, unmount, queryByTestId } = render(
    <Alert>
      {(props: any) => (
        <div onClick={props.dismissAlert} data-testid="alert-container">
          This is alert text goes.
        </div>
      )}
    </Alert>
  )
  expect(container).toBeInTheDocument()

  // unmount alert
  unmount()
  expect(queryByTestId('alert-container')).not.toBeInTheDocument()
})

test('prop dismissAlert works properly', () => {
  const { container, getByTestId, queryByTestId } = render(
    <Alert isOpen isDismissible>
      {(props: any) => (
        <div onClick={props.dismissAlert} data-testid="alert-container">
          This is alert text.
        </div>
      )}
    </Alert>
  )

  expect(container).toBeInTheDocument()
  fireEvent.click(getByTestId('alert-container'))
  expect(queryByTestId('alert-container')).not.toBeInTheDocument()
})

test('prop isDismissible works properly', () => {
  const { container, getByTestId, queryByTestId } = render(
    <Alert isOpen isDismissible={false}>
      {(props: any) => (
        <div onClick={props.dismissAlert} data-testid="alert-container">
          This is alert text.
        </div>
      )}
    </Alert>
  )

  expect(container).toBeInTheDocument()
  fireEvent.click(getByTestId('alert-container'))
  expect(queryByTestId('alert-container')).toBeInTheDocument()
})

test('prop isOpen work properly', () => {
  const { queryByTestId } = render(
    <Alert isOpen={false} isDismissible>
      {(props: any) => (
        <div onClick={props.dismissAlert} data-testid="alert-container">
          This is alert text.
        </div>
      )}
    </Alert>
  )
  expect(queryByTestId('alert-container')).toBeInTheDocument()
})

test('prop applyEffects work properly', () => {
  const applyEffects = jest.fn(noop)
  const { getByTestId } = render(
    <Alert isOpen applyEffects={applyEffects}>
      {(props: any) => (
        <div data-testid="alert" onClick={props.dismissAlert}>
          Lorem ipsum dolor sit amet consectetur.
        </div>
      )}
    </Alert>
  )

  fireEvent.click(getByTestId('alert'))
  expect(applyEffects).toHaveBeenCalled()
  expect(applyEffects).toHaveBeenCalledTimes(1)
})

export {}
