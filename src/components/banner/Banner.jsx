import React from 'react'

import gif from "../../images/Animation - 1740302234327.gif"

import "./Banner.css"
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div className='banner'>

        <div className='banner-left'>
            <div className='banner-left-texts'>

            <div class="keyboard">
  <span class="key">W</span>
  <span class="key">e</span>
  <span class="key">b</span>
  <span class="key"> </span>
  <span class="key">D</span>
  <span class="key">e</span>
  <span class="key">v</span>
  <span class="key">l</span>
  <span class="key">o</span>
  <span class="key">p</span>
  <span class="key">m</span>
  <span class="key">e</span>
  <span class="key">n</span>
  <span class="key">t</span>
</div>


               {/* <h1 className='banner-title'>Web & <span>Mobile App</span> <br></br> Development</h1>
                 */}
               <Link to="/contactUs" style={{textDecoration:"none" , color: "black"}}  >

                <div className='banner-btn'>Request Consultantion  <span class="banner-dot"></span></div>
              


                </Link>


            </div>
            <div className='banner-design'> 
                    <div className='design-dots'>
                        <div className='design-dots-row'>
                            
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            </div>
                            
                            <div className='design-dots-row'>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            </div>
                            <div className='design-dots-row'>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            </div>
                            <div className='design-dots-row'>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                            <span className='deign-dot'></span>
                        </div>
                        <div className='design-dots-background'>

                        </div>
                    
                    </div>
                </div>
        </div>

        <div className='banner-right'>
        <img className='banner-img' src={gif} alt=""/>
        {/* <img className='banner-img' src={decoration} alt=""/>
        
        <img className='banner-dna' src={dna} alt=""/> */}

        {/* <img className='banner-mobile' src={mobile} alt=""/> */}

        </div>
    </div>
  )
}

export default Banner