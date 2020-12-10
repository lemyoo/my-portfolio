import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faAd } from "@fortawesome/free-solid-svg-icons";
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons'


import  ImageTestOne from '../images/imageTestOne.jpg'
function WhatIDo(){
    return (
        <div className="row">
            
            <div className="col-md-5 col-xl-4 ">
                <div className="view rounded z-depth-1">
                <img src={ImageTestOne} className="img-fluid" alt=""/>
                </div>
            </div>

            <div className="col-xl-7 col-md-6 ">
                <h3 className="mb-3">
                <strong>Status Saver</strong>
                </h3>
                <p>
                    Aliqua mollit duis exercitation id proident do adipisicing ad duis duis nisi eiusmod ullamco proident. Magna occaecat quis minim cillum ad enim duis elit incididunt. In eu proident ad incididunt aliqua occaecat. Dolore proident aliqua cillum consectetur voluptate ut do. Sunt officia aliqua Lorem qui enim eu tempor Lorem occaecat nostrud. Magna sint ex aute enim aliqua eiusmod. Sunt et cupidatat ullamco adipisicing fugiat ut sint aliquip ipsum cupidatat enim.
                </p>
                <a href="/#" className="btn ">
                    GooglePlay store &nbsp;
                    <FontAwesomeIcon icon={faGooglePlay} color="blue"/>
                </a>
            </div>
        </div>
    )
}

export default WhatIDo
