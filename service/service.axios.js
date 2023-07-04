import axios from "axios";

 export const getNewRelease = async ()=>{
        const  response = await axios.get('https://v1.nocodeapi.com/ryu_stha/spotify/mWCNWAJXiHKvDejY/browse/new')
        const data = response.data

        return data
 }
 

 export const getBrowseFeatured = async ()=>{
    const  response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8bab6fb009a45a203252c92e2d45640d')
    const data = response.data
    return data
}

export const getLatestMovies =  async () =>{
	const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8bab6fb009a45a203252c92e2d45640d')
	const data = response.data
	return data
}

export const getUpcomingMovies = async () =>{
	const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8bab6fb009a45a203252c92e2d45640d')
	const data = response.data
	return data
}

export const getTopRatedMovies = async () =>{
	const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8bab6fb009a45a203252c92e2d45640d')
	const data = response.data
	return data
}