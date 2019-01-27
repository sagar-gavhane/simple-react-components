import React, { Fragment, FC, useState } from 'react'

const Alert: FC<{ isOpen?: boolean; children: any }> = props => {
  const { children } = props
  const [state, setState] = useState({ show: props.isOpen || true })

  const dismissAlert = () => {
    setState({ show: !state })
  }

  if (!state.show) {
    return null
  }

  return <Fragment>{children({ ...props, dismissAlert })}</Fragment>
}

export default Alert
