import React,{useState, useEffect} from 'react';

const URL = `http://api.weatherapi.com/v1/current.json?key=188dc82421fc44d195d34719242502&q=Jakarta&aqi=no`;

function API () {
    const [temp, setTemp] = useState(0)
    useEffect(()=>{
        const fecthdata = async () => {
            const result = await fetch(URL)
            result.json().then(json=> {
                setTemp(json.current.temp_f)
                console.log(json);
            })
        }
        fecthdata();

    },[]);
  return (
    <div className="bg-black-100 min-h-screen flex items-center justify-center">
        <div className="bg-gray p-8 rounded shadow-md">
            <h1 className='text-3x1 font-bold mb-4'> Wheater in Jakarta </h1>
            <div className="flex items-center">
                <span className="text-5x1 font-bold mr-2">{temp}</span>
                <span className="text-2x1">°F</span>
            </div>
        </div>
    </div>
  );
}

export default API;