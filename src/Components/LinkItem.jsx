import React, { useContext } from 'react';
import LinkContext from '../Context/LinkContext';
import { Bounce, toast } from 'react-toastify';



const LinkItem = ({ link }) => {
    const { dispatch } = useContext(LinkContext);

    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE_URL',
            payload: id,
        });
    };

    // const copyPasswordToClipboard = useCallback(() => {
    //     // Use the link data directly for clipboard copying
    //     navigator.clipboard.writeText(link.data).then(() => {
    //         alert('Short URL copied to clipboard!');
    //     }).catch((err) => {
    //         console.error('Failed to copy: ', err);
    //     });
    // }, [link.data]);

    
        // Copy Function
        const copyIt = async (link) =>{
            await navigator.clipboard.writeText(link);
        toast.info("Copied, ", {
            position :"top-center",
            autoClose:2000,
            hideProgressBar:true,
            closeOnClick:true,
            pauseOnHover:false,
            draggable:true,
            progress:undefined,
            theme:"dark",
        })
        }
    

    return (
        <div className='relative z-10 border bg-white rounded-sm p-3 flex flex-wrap items-center justify-between my-2 overflow-hidden'>

        
            <div>
                <a href={link.data} target='_blank' rel='noopener noreferrer' className='text-blue-700 text-xl font-bold flex flex-wrap'>
                    {link.data}
                </a>
                <button onClick={()=> copyIt(link.data)} className='my-2 bg-blue-500 text-white px-2 py-1 rounded'>
                    Copy
                </button>
                <p className='text-sm text-gray-700 my-3 flex flex-wrap'>Original URL: {link.originalURL}</p>
                <div onClick={() => handleRemove(link.id)} className='bg-red-700 h-7 w-7 text-center absolute top-0 right-0  hover:bg-red-900 cursor-pointer z-40'>
                    <p className="text-white font-bold">X</p>
                </div>
            </div>
        </div>
    );
};

export default LinkItem;
