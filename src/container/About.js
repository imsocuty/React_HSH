import React from 'react';
import jQuery from "jquery";
import $ from "jquery"
import '../App.css';
import Image from 'react-image'
window.$ = window.jQuery = jQuery;

        const About = () => {
          return(
        
                    
            <div id="preId">

            <div class="jb-wrap">
  
              <div class="jb-image">
                <Image src= "https://i.ibb.co/yNZSVHq/1.png"
                  align="left" vspace="30" hspace="10" class="intro"/>
                <p>  MAIL: <a href="pppp4710@naver.com" target="_black">pppp4710@naver.com</a> | BLOG : <a href="http://kingsman5.tistory.com" target="_black">kingsman5.tistory.com</a> </p>
              </div>
              
              <div class="jb-text">
              
              </div>
            </div>
          </div>
        )

    }


export default About;
