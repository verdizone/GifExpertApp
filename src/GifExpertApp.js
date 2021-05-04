import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
        
    const [categories, setCategories] = useState([
        // 'Samurai X', 'Dragon Ball', 'Digimon'
    ]);

/*     const handleAdd = (e) => {
        console.log(e);
        e.preventDefault();

        setCategories([
            'HunterXHunter',
            ...categories,

            // cats => [...cats, 'HunterXHunter']
            
        ]); */


    
    return (
        <div>
            <div className="container main-container">
                <h2 className="display-3">GifExpertApp</h2>
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
