import React, { useState } from 'react'

export default function Portfolio() {

    const [modalvalue, setModalvalue] = useState("hidden")
    const [modalimg, setModalimg] = useState("")
    function showModal(y,x) {
        setModalvalue(y)
        setModalimg(x)
    }

    return (
        <>
            <div className='mb-10 porfolio bg-white text-center text-[#2C3E50] mt-28  '>
                <div className=''>
                    <h2 className='font-bold text-[2.5rem] uppercase  pt-5'>portfolio component</h2>
                    <div className='w-[70%] mx-auto flex flex-wrap gap-4 h-6 items-center justify-center py-3'>
                        <div className="beforIcon h-1 w-20 bg-[#2C3E50]"></div>
                        <i class="fa-solid fa-star"></i>
                        <div className="beforIcon h-1 w-20 bg-[#2C3E50]"></div>

                    </div>
                    <div className="grid md:grid-cols-3 w-[85%] mx-auto gap-12 mt-5 " >
                        <div className=" relative cursor-pointer group/term overflow-hidden" onClick={()=>showModal("flex","https://routeegy.github.io/startFramework/assets/images/poert1.png") }>
                            <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" className='w-full rounded-xl ' />
                            <div className='w-full h-full bg-[rgba(74,154,139,0.83)] rounded-xl flex items-center justify-center  absolute top-0 left-0  opacity-0 group-hover/term:opacity-100 transition-all duration-500'>
                                <i class="fa-solid fa-plus text-white text-[96px]   "></i>
                            </div>
                        </div>
                        <div className=" relative cursor-pointer group/term overflow-hidden" onClick={()=>showModal("flex","https://routeegy.github.io/startFramework/assets/images/port2.png")}>
                            <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" className='w-full rounded-xl ' />
                            <div className='w-full h-full bg-[rgba(74,154,139,0.83)] rounded-xl flex items-center justify-center  absolute top-0 left-0  opacity-0 group-hover/term:opacity-100 transition-all duration-500'>
                                <i class="fa-solid fa-plus text-white text-[96px]   "></i>
                            </div>
                        </div>
                        <div className=" relative cursor-pointer group/term overflow-hidden" onClick={()=>showModal("flex","https://routeegy.github.io/startFramework/assets/images/port3.png")}>
                            <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" className='w-full rounded-xl ' />
                            <div className='w-full h-full bg-[rgba(74,154,139,0.83)] rounded-xl flex items-center justify-center  absolute top-0 left-0  opacity-0 group-hover/term:opacity-100 transition-all duration-500'>
                                <i class="fa-solid fa-plus text-white text-[96px]   "></i>
                            </div>
                        </div>
                        <div className=" relative cursor-pointer group/term overflow-hidden" onClick={()=>showModal("flex","https://routeegy.github.io/startFramework/assets/images/poert1.png") }>
                            <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" className='w-full rounded-xl ' />
                            <div className='w-full h-full bg-[rgba(74,154,139,0.83)] rounded-xl flex items-center justify-center  absolute top-0 left-0  opacity-0 group-hover/term:opacity-100 transition-all duration-500'>
                                <i class="fa-solid fa-plus text-white text-[96px]   "></i>
                            </div>
                        </div>
                        <div className=" relative cursor-pointer group/term overflow-hidden" onClick={()=>showModal("flex","https://routeegy.github.io/startFramework/assets/images/port2.png")}>
                            <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" className='w-full rounded-xl ' />
                            <div className='w-full h-full bg-[rgba(74,154,139,0.83)] rounded-xl flex items-center justify-center  absolute top-0 left-0  opacity-0 group-hover/term:opacity-100 transition-all duration-500'>
                                <i class="fa-solid fa-plus text-white text-[96px]   "></i>
                            </div>
                        </div>
                        <div className=" relative cursor-pointer group/term overflow-hidden" onClick={()=>showModal("flex","https://routeegy.github.io/startFramework/assets/images/port3.png")}>
                            <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" className='w-full rounded-xl ' />
                            <div className='w-full h-full bg-[rgba(74,154,139,0.83)] rounded-xl flex items-center justify-center  absolute top-0 left-0  opacity-0 group-hover/term:opacity-100 transition-all duration-500'>
                                <i class="fa-solid fa-plus text-white text-[96px]   "></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className={modalvalue}>
                <div id='modal' className='bg-[rgba(13,109,253,0.34)] flex  items-center justify-center fixed  top-0 bottom-0 left-0 right-0 z-[99] 'onClick={(e)=>e.target.id == "modal" ? showModal("hidden"):""}>
                    <div className='w-[50%]  '>
                        <img src={modalimg} alt="" className='w-[80%] mx-auto  ' />
                    </div>
                </div>

            </div>




        </>
    )
}
