import axios from "axios"

const filterPeruPlaces = (places = []) => {
  return places.filter(place => {
    const lastContext = place.context[place.context.length - 1]
    return lastContext &&  lastContext.short_code == 'pe'
  })
}

export const searchPlaces = async ({ text = '' }) => {
  if(!text || text.length < 5) return []
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`
  const { data, status } = await axios.get(url, {
    params: {
      access_token: process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
      language: 'es',
      country: 'PE'
    }
  })
  if(status != 200) return []
  console.log(filterPeruPlaces(data.features || []));
  return filterPeruPlaces(data.features || [])
}