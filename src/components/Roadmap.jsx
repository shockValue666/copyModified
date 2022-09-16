import React from 'react'
import styles,{layout} from '../style';

function Roadmap() {
  return (
    <div className='mt-[40px]'>
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Roadmap<br className='sm:block hidden' /></h2>
            </div>
        </section>
        <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-white-700 h-full border" style={{left:"50%"}}></div>
                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">Phase 1</h3>
                    <ul className='text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>
                        <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg'> - Build our social media presence</li>
                        <li className='px-6 py-2 border-b border-gray-200 w-full'> - Twitter and discord giveaways</li>
                        <li className='px-6 py-2 w-full rounded-b-lg'> - DAO collaborations</li>
                    </ul>
                </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div className="order-1 bg-black rounded-lg border-2 border-white shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-white text-xl">Phase 2</h3>
                    <ul className='text-sm leading-snug tracking-wide text-white text-opacity-100'>
                        <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg'> - Whitelist and Public Mint</li>
                        <li className='px-6 py-2 border-b border-gray-200 w-full'> - In case the collection doesn't sell out we will burn the remaining supply</li>
                        <li className='px-6 py-2 border-b border-gray-200 w-full'> - Holder Discord</li>
                        <li className='px-6 py-2 w-full rounded-b-lg'> - Staking Platform</li>
                    </ul>
                </div>
                </div>
                
                {/* <!-- right timeline --> */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 text-xl">Phase 3</h3>
                    <ul className='text-sm leading-snug tracking-wide text-gray-900 text-opacity-100'>
                        <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg'> - Creation of the depraved DAO </li>
                        <li className='px-6 py-2 border-b border-gray-200 w-full'> - Raffles and Auctions</li>
                        <li className='px-6 py-2 w-full rounded-b-lg'> - 1st Human Experiment</li>
                    </ul>
                </div>
                </div>

                {/* <!-- left timeline --> */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                </div>
                <div className="order-1 bg-black rounded-lg border-2 border-white shadow-xl w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-white text-xl">Phase 4</h3>
                    <ul className='text-sm leading-snug tracking-wide text-white text-opacity-100'>
                        <li className='px-6 py-2 border-b border-gray-200 w-full rounded-t-lg'> - Merch Store</li>
                        <li className='px-6 py-2 border-b border-gray-200 w-full'> - Revenue share model</li>
                        <li className='px-6 py-2 w-full rounded-b-lg'> - more soon ...</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Roadmap