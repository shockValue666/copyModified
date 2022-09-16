import React from 'react'
import styles from '../style';
import {discount,robot,fuckedSociety} from "../assets";
// import GetStarted from './GetStarted';
import MintButton from './MintButton';

const Hero = () => {
  return (
    <section id="home" className= {`flex md:flex-row flex-col sm:py-16 py-1 mb-4`}>

      <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            De<span className='text-gradient' ></span>Scntsts
          </h1>
          
        </div>
        <h3 className={`font-poppins font-normal text-[28px] text-white max-w-[470px] mt-5`}>
          Sponsoring experiments against humanity
        </h3>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          minting soon 
        </p>
        <div className='ss:flex hidden md:mr-4  mt-5 '>
            {/* <MintButton /> */}
            <button type="button" className={`${styles.mintButton}`}>CLICK </button>
          </div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={fuckedSociety} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
          {/* <div className='pink__gradient absolute z-[0] w-[40%] h-[35%] top-0'></div>
          <div className='white__gradient absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40'></div>
          <div className='blue__gradient absolute z-[0] w-[50%] h-[50%] right-20 bottom-20'></div> */}
      </div>


      <div className={`ss:hidden ${styles.flexCenter} `}>
        <button type="button" className={`${styles.mintButton} m-4`}>CLICK </button>
      </div>

    </section>
  )
}

export default Hero