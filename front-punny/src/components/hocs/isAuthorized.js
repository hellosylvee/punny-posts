import React from 'react'

export default function isAuthorized(WrappedComponent, authorized){
  return class extends React.Component {

    render(){
      if ( !authorized() ) {
        return null
      }

      return < WrappedComponent {...this.props} />
    }
  }
}
