import React from 'react'

function GalleryItem({item}) {
   // console.log(item);
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.largeImageURL} alt='' />
        </div>
       <div className='card-back'>
          <ul>
          <li><strong>comments:</strong></li> {item.comments}
          <li><strong>likes:</strong></li>{item.likes}
          <li><strong>downloads:</strong></li>{item.downloads}
          </ul>
      </div>

      </div>
    </div>
    )
}

export default GalleryItem
