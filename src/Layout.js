import React from "react"

import { Link, Outlet } from "react-router-dom"
import Img1 from "./Photos/25231.png"
import Img2 from "./Photos/702300.png"
import Img3 from "./Photos/Instagram_logo_2016.svg.webp"
import Img4 from "./Photos/Logo_of_Twitter.svg.png"



export default function Layout() 
{
    return (
        <>
            <div className="body">
                
                <header className="bg-green-100 shadow-xl">
                    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                        <Link to="/">
                            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap"> 
                                <span className="text-green-900">FOOD</span>
                                <span className="text-green-600">MAFIA</span>
                            </h1>
                        </Link>

                        <ul className='flex gap-4'>
                            <Link to='/'>
                                <li className='font-bold sm:inline text-green-900 hover:underline' >Home</li>
                            </Link>

                            <Link to='/about'>
                                <li className='font-bold sm:inline text-green-900 hover:underline' >About</li>
                            </Link>
                        </ul>
                    </div>
                </header>

                <div className="container">
                    <Outlet />
                </div>

                <footer className="bg-green-900 shadow-sm mt-3">
                    <div className="flex justify-center items-center max-w-6xl mx-auto p-3">
                        <div className="flex gap-4">
                            <Link to="https://github.com/Shrut2210">
                                <li className="font-bold sm:inline hover:underline"><img src={Img1} className="h-10 w-10"/></li>
                            </Link>
                            <Link to="https://github.com/Shrut2210">
                                <li className="font-bold sm:inline hover:underline"><img src={Img2}  className="h-10 w-10"/></li>
                            </Link>
                            <Link to="https://github.com/Shrut2210">
                                <li className="font-bold sm:inline hover:underline"><img src={Img4}  className="h-10 w-10"/></li>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto p-3">
                        {/* <div className="flex-col"> */}
                            <div className="text-red-400 font-bold justify-center p-3">Collabration :</div>
                            <div className='font-bold sm:inline text-white hover:underline'> <span className="text-green-100">Shruti Vadgama : </span >shrut2210@gmail.com</div>
                            <div className='font-bold sm:inline text-white hover:underline'><span className="text-green-100">Hetvi Deshani : </span>hetudeshani5@gmail.com</div>
                            <div className="font-bold text-black p-3">Copyrights 2023 - All Rights Reserved</div>
                        {/* </div> */}
                    </div>
                </footer>
            </div>
        </>
    )
}