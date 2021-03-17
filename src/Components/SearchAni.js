import React, { useEffect, useState } from "react";
import Fade from 'react-bootstrap/Fade';
import { BiCart ,BiSearch} from "react-icons/bi";
import './Static/CSS/style.css';

function SearchAni() {
    const [open, setOpen] = useState(false);
    const style = {
        color: 'white',
        fontSize: 20 ,
        float: 'left',
        display:'flex',  
      };
    return (
      <>
        <span
          onClick={() => setOpen(!open)}
         
          aria-expanded={open}
        >
       <b></b> <BiSearch style={style} /></span>
      <Fade in={open}>
        
        <input type="text" class="searchbox" placeholder="Search for products" style={style}/>
        
      </Fade>
      <span> <BiCart style={style}/></span>
      </> 
    );
  }
  
  export default SearchAni;