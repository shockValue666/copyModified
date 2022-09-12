import React from 'react'
import style from './style'
import {Navbar,Stats,Hero,Bussiness,Billing,CardDeal,Testimonials,Clients,CTA,Footer, Roadmap} from './components';


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
            <div className={`${style.boxWidth}`}>
              <Navbar/>
              more <nav></nav>
            </div>
        </div>


    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
      <div className={`${style.boxWidth}`}>
        <Stats/>
        <Bussiness/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>

        <Roadmap/>

        <Footer/>
      </div>
    </div>

    </div>
  )
}

export default App