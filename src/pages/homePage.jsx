import React from 'react'
import "../styles/home.scss"
import HomeContent from '../components/navbar/homeComponents/HomeContent'
import WhyNesterov from '../components/navbar/homeComponents/whyNesterov/WhyNesterov'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__content">
        <HomeContent />
        <WhyNesterov />
      </div>
    </div>
  )
}

export default HomePage