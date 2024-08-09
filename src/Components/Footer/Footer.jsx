import React from 'react'

export default function Footer() {
  return (
    <> 
    
<footer className='' >
    <div className='bg-[#2C3E50] py-12'>
    <div className='w-[90%] mx-auto  '>
        <div className="grid md:grid-cols-3 text-center text-white">
            <div className=' py-10'>
                <h3 className='itemHeader'>LOCATION</h3>
                <p className='itemp'>2215 John Daniel Drive</p>
                <p className='itemp'>Clark, MO 65243</p>
            </div>
            <div className='py-10'>
                <h3 className='itemHeader'>AROUND THE WEB</h3>
                <div className='flex w-1/2 mx-auto justify-center gap-2'>
                <i class="fa-brands fa-facebook iconItem"></i>
                <i class="fa-brands fa-twitter iconItem"></i>
                <i class="fa-brands fa-linkedin-in iconItem"></i>
                <i class="fa-solid fa-globe iconItem"></i>
                </div>
            </div>
            <div className='py-10'>
                <h3 className='itemHeader'>ABOUT FREELANCER</h3>
                <p className='itemp'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    </div>
        <div className='bg-[#1A252F] text-center'>
            <p className='itemp text-white py-6'>Copyright © Your Website 2021</p>
        </div>
</footer>
    </>
  )
}
