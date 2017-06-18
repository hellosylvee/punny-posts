import React from 'react'
import { Redirect } from 'react-router-dom'

export default function isAuthenticated(WrappedComponent){
  return function (props) {
    if (!localStorage.getItem('jwt')) {
      return < Redirect to='/login' />
    }
    return < WrappedComponent {...props} />
  }
}
