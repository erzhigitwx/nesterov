import React from 'react'
import RightBlock from './rightBlock'
import LeftBlock from './LeftBlock'
import Footer from './footer'

const WhyNesterov = () => {
  return (
    <div className="why-nesterov">
      <h2 className='why-nesterov__title'>Почему ЖК Nesterov?</h2>

      <div className="why-nesterov__content">
        <RightBlock />
        <LeftBlock />
      </div>
      <Footer />
    </div>
  )
}

export default WhyNesterov