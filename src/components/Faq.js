import React,{ useEffect } from 'react';
import CryptoTaxFAQ from '../Faqdata.json';

function Faq (){
  return (
    <div className='w-[60%] lg:w-[70%] md:w-full sm:w-full sm:m-0 md:m-0 h-cover bg-white p-[2rem] ml-[4rem] mr-[4rem] mt-[1rem] rounded-2xl mb-[1rem]'>
      <ul >
        {CryptoTaxFAQ.cryptoTaxFAQ.map((faqItem, index) => (
          <li  key={index}>
            <strong>{faqItem.question}</strong>
            <p className='text-xs'>{faqItem.answer}</p>
            <div className='pb-[0.5rem] pt-[1rem]'>
            <div className='w-full h-[2px] border border-[#C9CFDD] shadow-md '></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq
