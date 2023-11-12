import React from 'react'
import Faq from './Faq'
import TaxCalculator from './TaxCalculator'
import Newsletter from './Newsletter'
import Getstarted from './getstarted'

function Main() {
  return (
    <div style={{ zIndex: -1 }}  className=' w-full h-auto bg-[#EFF2F5]  mt-[5rem] sm:mt-[4.2rem]'>
      <div className='flex justify-between'>
       <TaxCalculator />
       <Getstarted />
      </div>
       <Faq />
       <Newsletter />

    </div>
  )
}

export default Main
