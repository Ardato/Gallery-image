import React from 'react'
import GalleryItem from './GalleryItem'
import Spinner from './Spinner'


function GalleryGrid({isLoading,items}) {
    
    return    isLoading ? (<Spinner/>) : (<section className="cards">
            {items.map(item=>(
                <GalleryItem key={item.id} item ={item}></GalleryItem>
            ))}
        </section>)
    
       
    
}

export default GalleryGrid
