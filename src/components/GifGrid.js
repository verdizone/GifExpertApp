import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    useEffect( () => {
        getGifs();
    }, [] );
    
    const [images, setImages] = useState([]);

    // const [counter, setCounter] = useState(0);
    
    const getGifs = async () => {

        // api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=gkhsLHR49YXapUod7mfJCmsWBzph0Mvq
        // gkhsLHR49YXapUod7mfJCmsWBzph0Mvq
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=gkhsLHR49YXapUod7mfJCmsWBzph0Mvq`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        //console.log(  data  );

        const gifs = data.map(img =>{
            return {
                id : img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        });
        

        console.log(gifs);
        setImages(gifs);


    }

   
    
    return (
        
        <div className="card-grid">
            { category }
{/*             <h3>{counter}</h3>
            <button
                onClick={ (e)=>{setCounter(counter + 1) }}
            >
                Aumentar

            </button> */}
            
                {
                    images.map(  img =>(
                        //<li key={id}>{title}</li>
                         <GifGridItem 
                             key = {img.id}
                             {...img}
                        />
                    ))
                }
            

        </div>
    )
}

export default GifGrid
