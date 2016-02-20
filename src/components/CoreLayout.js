import React, { PropTypes } from 'react'

const CoreLayout = ({ children }) => {
  return (
    <div className="page-container">
      { children }
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
