import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 rounded-[10px] px-6 bg-white font-poppins font-medium text-[18px] text-primary outline ${styles}`}>
      Get started
    </button>
  )
}

export default Button