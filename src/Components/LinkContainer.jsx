import React, { useContext } from 'react'
import LinkItem from './LinkItem'
import LinkContext from '../Context/LinkContext'

const LinkContainer = () => {

    const { links } = useContext(LinkContext)

    return (
        <div className='my-3 p-3 w-3/4 rounded-sm '>
            {
                links.map((link) => <LinkItem key={link.id} link={link} />)
            }
        </div>
    )
}

export default LinkContainer