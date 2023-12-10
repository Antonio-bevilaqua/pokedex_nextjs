import React from 'react'
import Spinner from '../../components/Spinners/Spinner'

const Preloader = ({ ready }) => {
  return (
    <div className="flex justify-center items-center w-full z-50 fixed h-full" style={{
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      transition: "all 0.4s ease-in-out",
      opacity: `${ready ? 0 : 1}`,
      pointerEvents: "none",
    }}>
      <Spinner type="primary" size="w-20 h-20" />
    </div>
  )
}

export default Preloader