



export const getGifs = async ( category ) => {

    // api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=gkhsLHR49YXapUod7mfJCmsWBzph0Mvq
    // gkhsLHR49YXapUod7mfJCmsWBzph0Mvq
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=gkhsLHR49YXapUod7mfJCmsWBzph0Mvq`;
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
    

    return gifs;
    // setImages(gifs);


}