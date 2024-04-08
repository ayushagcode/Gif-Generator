import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

    const [tag,setTag] = useState('');
    // const [gif,setGif] = useState('');
    // const [loading,setLoading] = useState(false);

    // // this function basically api ko call karke uske andar se meme
    // // nikalkar gif ke andar add kar deta hai 
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data}  = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () =>{
    //     fetchData();
    // },[])

    const {gif,loading,fetchData} = useGif(tag);
  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random {tag} Gif</h1>

        {
            loading ? (<Spinner/>) :(<img src={gif} alt='gif' width="450"/>)
        }

        <input className='w-10/12 text-lg rounded-lg mb-[3px] text-center' 
        onChange={(event) => setTag(event.target.value)}
        value = {tag} />
        <button className='w-10/12 bg-yellow-100 text-lg rounded-lg hover:bg-yellow-300 py-2 mb-[20px]' 
            onClick={() => fetchData(tag)}>
            Generate
        </button>
       
    </div>
  )
}

export default Tag
