import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"

export const Greek = () => {

    const [items, setItems] = useState([]);
    const param = useParams();

    useEffect(() => {
        axios.get("http://localhost:3030/Greek").then((res) => setItems(res.data)).catch((err) => console.log(err))
    }, [])

  return (

    <>
        <div className="flex flex-wrap justify-center m-5 mb-2 p-5 w-128">
                <input type="search" placeholder="Enter food item..." className="flex border-none text-sm pt-2 pe-5 pb-2 ps-2 outline-none" 
                onChange={(e) => {setItems(items.filter((x) => x.TranslatedRecipeName.toLowerCase().includes(e.target.value)))}
            }/>
        </div>

        <div className='flex flex-wrap justify-center items-center text-lg text-teal-900'>
            <div className='grid grid-cols-1 m-5 p-5 justify-center items-center'>
                {items.map(t => {
                    return (
                        <>
                            <Link to={"/" + t._id}>{t.TranslatedRecipeName} <br /></Link>
                        </>
                    )
                })}
            </div>
        </div>
    </>
  )
}
