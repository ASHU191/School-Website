import React from 'react'

const Cards1 = (props) => {
    return (
        <div>
            <div className='text-blue w-64 bg-white py-11 rounded-3xl flex flex-col items-center gap-5'>
                <img className='w-28' src={props.icon} alt="" />
                <div className='flex gap-1'>
                    <h1 className='text-3xl font-bold'>{props.number}</h1>
                    <p className='text-3xl'>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards1
