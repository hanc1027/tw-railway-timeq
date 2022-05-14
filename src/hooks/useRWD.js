import { useState, useEffect } from 'react';

const useRWD=()=>{
    const [device,setDevice]=useState("mobile");

    const handleRWD=()=>{
        // Standard from Bootstrap
        if(window.innerWidth > 768)
            setDevice("desktop");
        else if (window.innerWidth > 576)
            setDevice("tablet");
        else
            setDevice("mobile");
    }

    useEffect(()=>{ 
        window.addEventListener('resize',handleRWD);
        handleRWD();

        // return will be called when componentWillUnmount
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })

        // using null array means componentDidMount (This function will be call at first)
    },[]);

    
    return device;
}

export default useRWD;