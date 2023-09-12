import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="Something went wrong" />
        <h3>Oops! Something went wrong</h3>
        <p>Please retry again, go back to home page</p>
        <Link to="/">back to home</Link>
      </div>
    </Wrapper>
  )
}

export default Error