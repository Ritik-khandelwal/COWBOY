import React from 'react'

const Hamburger = ({onClick}) => {
  return (
    <>
        <button onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[2rem] h-[1rem]" viewBox="-8 -5 100 80" fill="black">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
        </button>

    </>
  )
}

export default Hamburger