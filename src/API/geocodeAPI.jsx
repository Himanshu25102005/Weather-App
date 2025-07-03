const key = import.meta.env.VITE_API_KEY;

const getCord = async (city) => {

    try{
       

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)},+CA&key=${key}`

    const response = await fetch(url);
    const data = await response.json();

    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;

    console.log(lat)
    console.log(lng)
    
    return { lat, lng };
    } catch(error){
        console.log(error)
        throw error
    }

};

export default getCord;
