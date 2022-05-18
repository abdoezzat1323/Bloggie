import React,{useState} from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {NavLink,useNavigate,Link} from 'react-router-dom';


export default function Search({placeholder, data}) {
    const navigate =useNavigate()
    const [filteredData,setFilteredData] =useState([])
    const handleFilter =(event) =>{
        const searchWord = event.target.value
        const newFilter =data.filter((value)=>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
    } 

  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onChange={handleFilter}/>
            <div className="searchIcon">
                {filteredData.length === 0? <SearchIcon/>:<></>}
            </div>
        </div>
        {filteredData.length !=0 && (<div className="dataResult">
            {filteredData.map((value,key) =>{
                return <Link className='dataItem' to="/admin">
                <p>{value}</p>
                </Link> 
            })}
        </div>)}
    </div>
  )
}

