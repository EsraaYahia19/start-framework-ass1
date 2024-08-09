import React from 'react'

export default function About() {
  return (
    <>
    <div className='h-[37.5rem] bg-[#1ABC9C] text-center text-white flex items-center justify-center mt-28 '>
                <div className=''>
                    <h2 className='font-bold text-[2.5rem] uppercase '>about component</h2>
                    <div className='w-[70%] mx-auto flex flex-wrap gap-4 h-6 items-center justify-center py-3'>
                        <div className="beforIcon h-1 w-20 bg-white"></div>
                        <i class="fa-solid fa-star"></i>
                        <div className="beforIcon h-1 w-20 bg-white"></div>

                    </div>
                    <div className="grid md:grid-cols-2 w-[75%] mx-auto gap-5 mt-5">
                        <div className='text-start'>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className='text-start'>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
    
    
    </>
  )
}
