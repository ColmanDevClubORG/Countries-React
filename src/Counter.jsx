import { useEffect, useState } from "react";


export function Counter(){
    const [counter, setCounter] = useState(0);

    const handleClicked =()=>{setCounter(10)};

    useEffect(() => {
        let timerId=setTimeout(() => {
            if(counter !==0){
                setCounter(counter-1);
            }
        },1000);
        return () => {clearTimeout(timerId);}
    }, [counter]);


return(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button onClick={handleClicked}> Click me </button>
        <p>{counter}</p>
    </div>
)
};


