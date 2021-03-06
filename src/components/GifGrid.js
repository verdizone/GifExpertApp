import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem";

const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className="alert alert-info">{ category }</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
  
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
        </>
    )
}

export default GifGrid
