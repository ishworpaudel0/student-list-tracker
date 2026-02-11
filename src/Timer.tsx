import { useEffect, useState } from "react"

const SimpleTimer =() =>{
    const [second, setsecond] = useState(new Date());
    useEffect(() => {
        setInterval(() =>{
        setsecond(new Date);
        }, 1000);

    },[]);
return(
    <div>
        <h1> Timer </h1>
        <p> Date : {second.toLocaleString()}</p>
    </div>
)
}
export default SimpleTimer;