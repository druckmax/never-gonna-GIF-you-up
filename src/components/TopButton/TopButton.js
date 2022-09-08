import React,{useEffect, useState} from 'react'
import "./TopButton.scss"

export default function TopButton() {

   

    return(
        
      

      <div style={{height: '155rem'}}>

      
      <button className={'Top'}
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        Scroll to top
      </button>
    </div>
    )    
    
}
