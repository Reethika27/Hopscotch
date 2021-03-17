import React, { Component } from 'react';
import './Static/CSS/style.css';
import SearchAni from'./SearchAni';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
function Header() {
    const style = {
        color: 'white',
        fontSize: 15 ,  
      };
        return(
             <div >
                
                <div class="headertop">
                    
                    <a  href="#" style={style}><b>24X7 customer care</b></a>
                    <a href="#" style={style}><b>Account</b> <span>&nbsp;&nbsp;&nbsp;</span></a>
                       <br/>
                     </div>
                    
                <div class="header">
                    <a><img src="https://static.hopscotch.in/web2/images/hs-logo.0680bd42238592f47642c6a6df726546.svg" alt="" /><br/> </a>
                    <a href="#" style={style}><b>Discover </b>
                    <span>&nbsp;&nbsp;</span>
                            <select name="opt" id="opt" >
                            <option value="All">ALL</option>
                            <option value="Boy">BOY</option>
                            <option value="Girl">GIRL</option>
                            <option value="Sale">Sale</option>
                            </select>
                             </a>
                        
                    <a  href="#" style={style}><b>Moments</b></a>
                    <a href="#" style={style}><b>Blog</b></a>
                    <div  class="search">
                        <div class="searchbox">
                      <SearchAni/>
                      </div>
                      </div>
                    </div>
                  
              </div>


     
        )
    }

export default Header;