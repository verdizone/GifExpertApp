import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
        
    const [categories, setCategories] = useState([
        // 'Samurai X', 'Dragon Ball', 'Digimon'
    ]);

    
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="container main-container">
                <h2 className="display-3 animate__animated animate__bounce">GifExpertApp</h2>
                <AddCategory 
                    setCategories={setCategories}
                />
                <hr/>


                {
                    /* categories.map( category =>(
                        <li key={category}> {category} </li>
                    )) */
                        categories.map( category=>(
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                        ))

                }

            </div>
        </div>
    )
}

export default GifExpertApp
