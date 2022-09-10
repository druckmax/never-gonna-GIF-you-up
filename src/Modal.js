import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './context/context'
import './Modal.scss'

const MODAL_LINKS = {
    margin: "2rem 0",
    fontSize: "3rem",
    textDecoration: "none",
    color: "white",
}

export default function Modal({show, onClose}) {

    const context = useContext(MainContext)
    const [item, setItem] = useState()

    useEffect(() => {
        switch (context.from) {
            case "trending":
                setItem(...(context.dataTrending.filter(x => x.id === context.idTransfer)))
                break
            case "searchResults":
                setItem(...(context.dataSearch.filter(x => x.id === context.idTransfer)))
                break
            case "random":
                setItem(context.dataRandom)
                break
            default:
                break
        }
    }, [context.idTransfer])

    if (!show) return null

  return (
    <div>
        <div className='modal-overlay' onClick={onClose}/>
        <div className='modal-main'>
            <div className='modal-content'>
                <img src={item?.images?.original.url} alt={item?.slug}/>
                <div className='modal-info'>
                    <h1>{item?.title}</h1>
                    <a href="#" className='modal-links'><span><i className="fa-solid fa-share-nodes"></i> Share</span></a>
                    <a href="#" className='modal-links'><span><i className="fa-solid fa-code"></i> Embed</span></a>
                    <a href={item?.url} className='modal-links'><span><i className="fa-solid fa-arrow-up-right-from-square"></i> On Giphy</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}
