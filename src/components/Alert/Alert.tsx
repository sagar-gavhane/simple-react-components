import React, { Fragment, FC, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import noop from './../../utils/noop'

export interface AlertProps {
  children?: any
  isOpen?: boolean
  isDismissible?: boolean
  applyEffects?: Function
}

const Alert: FC<AlertProps> = (props: AlertProps) => {
  const { children, isOpen, isDismissible } = props
  const [state, setState] = useState({ isOpen })

  const dismissAlert: Function = () => {
    if (isDismissible) {
      setState({ isOpen: !state.isOpen })
    }
  }

  useEffect(() => {
    return props.applyEffects && props.applyEffects(state, props)
  }, [])

  if (!state.isOpen) {
    return null
  }

  return <Fragment>{children({ ...props, dismissAlert })}</Fragment>
}

Alert.defaultProps = {
  isOpen: true,
  children: null,
  applyEffects: noop,
  isDismissible: true,
}

Alert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  applyEffects: PropTypes.func.isRequired,
  isDismissible: PropTypes.bool.isRequired,
}

export default Alert
