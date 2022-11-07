import React from 'react'
import style from './style'
import {Navbar,NewHero,Stats,Hero,Bussiness,Billing,CardDeal,Testimonials,Clients,CTA,Footer, Roadmap} from './components';
import {} from './assets'


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
            <div className={`xl:max-w-[100%] w-full`}>
              <Navbar/>
              more <nav></nav>
            </div>
        </div>


    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`xl:max-w-[1280px] lg:max-w-[1280px] m:max-w-[1280px] w-full`}>
        {/* uncomment */}
        {/* <Hero/> */}
        <NewHero/>
      </div>
    </div>

    <div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
      <div className={`${style.boxWidth}`}>
        {/* <Stats/> */}

        {/* uncomment */}
        {/* <Bussiness/> */}
        
        
        {/* <Billing/> */}

        {/* uncomment */}
        {/* <Roadmap/> */}


        {/* <CardDeal/> */}

        {/* uncomment */}
        {/* <Testimonials/> */}
        
        
        {/* <Clients/> */}
        {/* <CTA/> */}

        <Footer/>
      </div>
    </div>

    </div>
  )
}

export default App