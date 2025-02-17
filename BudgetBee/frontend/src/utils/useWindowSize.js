import { useEffect, useState } from "react"



export const useWindowSize = () =>{
    const [size, setSize] = useState({
        width: window.innerWidth,  
        height: window.innerHeight 
    });
    
    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}