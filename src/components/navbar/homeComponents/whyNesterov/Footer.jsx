import React from 'react'
import Button from '../../../Button'

const Footer = () => {
  return (
    <div className="why-footer">
      <div className="why-footer__des">
        <h3>Стоимость квартиры легко рассчитать с помощью нашего калькулятора</h3>
      </div>
      <div className="why-footer__content">
        <Button text={"А с ремонтом?"} color='#ffffff'/>
      </div>
    </div>
  )
}

export default Footer