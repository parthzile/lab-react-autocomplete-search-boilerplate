import { useState } from 'react'
import countryData from '../../resources/countryData.json'

function SearchBox () {
    const [data, setData] = useState([])

    function handleChange(e){
        const matchingCountries = countryData.filter(
            (country) => country.name.includes(e.target.value)
            );
        
        setData(matchingCountries)
        
    }    

    function handleKeyPress(e){
        
        if(e.code == "Escape"){
            setData([])
            console.log(e.code)
        }
    }

    return(
        <div>
            <input type="text" onChange={handleChange} onKeyDown={handleKeyPress}/>
            { 
                data.map((element,index)=> {
                    return <p key={index}>{element.name}</p>
                }

                )
            }
        </div>
    )

}

export default SearchBox