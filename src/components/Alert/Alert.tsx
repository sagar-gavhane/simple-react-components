import React, { Fragment, FC, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import noop from './../../utils/noop'

const Alert: FC<{
  isOpen?: boolean
  children: any
  applyEffects?: Function
}> = props => {
  const { children } = props
  const [state, setState] = useState({ isOpen: props.isOpen })

  const dismissAlert = () => {
    setState({ isOpen: !state.isOpen })
  }

  useEffect(() => {
    return props.applyEffects && props.applyEffects(state, props)
  })

  if (!state.isOpen) {
    return null
  }

  return <Fragment>{children({ ...props, dismissAlert })}</Fragment>
}

Alert.defaultProps = {
  isOpen: true,
  children: null,
  applyEffects: noop,
}

Alert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  applyEffects: PropTypes.func.isRequired,
}

export default Alert
