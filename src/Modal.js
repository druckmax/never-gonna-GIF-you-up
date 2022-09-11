import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './context/context'
import { ImCross } from "react-icons/im";
import './Modal.scss'

export default function Modal({show, onClose}) {

    const context = useContext(MainContext)
    const [item, setItem] = useState()

    const shareCopyToClipboard = () => {
        navigator.clipboard.writeText(`${item?.images?.original.url}`)
        context.createNotificationClipboard()
    }

    const embedCopyToClipboard = () => {
        navigator.clipboard.writeText(`<iframe src="${item?.embed_url}" width="480" height="265" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nfl-sports-football-sport-bKwka5LaOGFSwgZOxK">via GIPHY</a></p>`)
        context.createNotificationClipboard()
    }

    useEffect(() => {
        switch (context.from) {
            case "trending":
                setItem(...(context.dataTrending.filter(x => x.id === context.idTransfer)))
                break
            case "searchResults":
                setItem(...(context.dataSearch.filter(x => x.id === context.idTransfer)))
                break
            case "favorites":
                setItem(...(context.dataFavorites.filter(x => x.id === context.idTransfer)))
                break
            case "random":
                setItem(context.dataRandom)
                break
            default:
                break
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [context.idTransfer])

    if (!show) return null

  return (
    <div>
        <div className='modal-overlay' onClick={onClose}/>
        <div className='modal-main'>
            <ImCross className='modal-remove-btn' onClick={onClose}/>
            <div className='modal-content'>
                <img src={item?.images?.original.url} alt={item?.slug}/>
                <div className='modal-info'>
                    <h1>{item?.title}</h1>
                    <div className="modal-links-group">
                        <h2 className='modal-links' style={{ cursor: 'pointer' }} onClick={shareCopyToClipboard}><span><i className="fa-solid fa-share-nodes"></i> Share</span></h2>
                        <h2 className='modal-links' style={{ cursor: 'pointer' }} onClick={embedCopyToClipboard}><span><i className="fa-solid fa-code"></i> Embed</span></h2>
                        <a href={item?.url} className='modal-links'><span><i className="fa-solid fa-arrow-up-right-from-square"></i> On Giphy</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
