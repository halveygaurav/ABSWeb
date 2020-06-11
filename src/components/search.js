import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import searchIcon from '../images/searchIcon.jpg'
const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setLoading(false)
                setSearchData(response.data)

            })
            .catch(error => console.log(error))

    }, [])

    const searchingFor=(query)=>{
        return (row) => {
            return row.name.toLowerCase().indexOf(query.toLowerCase())!==-1

        }
    }
    const handlerChange = (e) => {
        setSearchQuery(e.target.value);
         
      
    }

    return (

        <div className="App-search">
            <img className="App-imagesearch" src={searchIcon} />
            <input type="text" onChange={handlerChange} />



            {
                searchData.filter(searchingFor(searchQuery)).map((data, index) => (
                    loading ? <h1>loading....</h1> : <li key={index}>{data.name}</li>
                ))
            }

        </div>
    )
}
export default Search;