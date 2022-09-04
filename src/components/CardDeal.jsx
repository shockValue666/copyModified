import React from 'react'
import {card} from '../assets';
import styles,{layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Find a better car dealership <br className='sm:block hidden' /> in a few steps</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>some other shit lol</p>
          <Button styles="mt-10" />
        </div>

        <div className={layout.sectionImg}>
          <img src={card} alt="card" className='w-[100%] h-[100%]' />
        </div>

    </section>
  )
}

export default CardDeal