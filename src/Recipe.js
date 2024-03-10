import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Recipe = () => {

    const [item, setItem] = useState({});
    const param = useParams();

    useEffect(() => {
        axios.get("http://localhost:3030/" + param.id).then(res => setItem(res.data)).catch(err => console.log(err))
    }, [])

  return (
    <div className='flex flex-wrap justify-center items-center m-10 p-10'>
        <div className='grid grid-cols-1 gap-3'>
            <div className='text-teal-900 font-semibold'><span className=' w-24 text-red-400 font-extrabold'>RecipeName : </span>{item.TranslatedRecipeName}</div>
            <div className='text-teal-900 font-semibold'><span className=' w-24 text-red-400 font-extrabold'>Ingredients : </span>{item.TranslatedIngredients}</div>
            <div className='text-teal-900 font-semibold'><span className=' w-24 text-red-400 font-extrabold'>Servings : </span>{item.Servings}</div>
            <div className='text-teal-900 font-semibold'><span className=' w-24 text-red-400 font-extrabold'>Cuisine : </span>{item.Cuisine}</div>
            <div className='text-teal-900 font-semibold'><span className=' w-24 text-red-400 font-extrabold'>Diet : </span>{item.Diet}</div>
            <div className='text-teal-900 font-semibold'><span className=' w-24 text-red-400 font-extrabold'>Instructions : </span>{item.TranslatedInstructions}</div>
        </div> 
    </div>
  )
}
