import React, { useContext } from 'react'
import LinkContext from '../Context/LinkContext'

const LinkItem = ({ link }) => {
    const { dispatch } = useContext(LinkContext)

    const handleRemove = (id) => {
        dispatch({
            type: "REMOVE_URL",
            payload: id,
        })


    }



    return (
        <div className='relative border bg-white rounded-sm p-3 flex items-center justify-between my-2'>
            <div>
                <a href={link.data} target='_blank' className='text-blue-700 text-xl font-bold flex flex-wrap'>{link.data}</a>
                <p className='text-sm text-gray-700 my-3 flex flex-wrap'>Original URL : {link.originalURL}</p>
                <div onClick={()=>handleRemove(link.id)} className='bg-red-700 h-17 w-7 text-center absolute -top-3 -right-3 rounded-full hover:bg-red-900'><p className="text-white font-bold">X</p></div>
            </div>
        </div>
    )
}

export default LinkItem