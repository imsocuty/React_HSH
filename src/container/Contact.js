import React, { Component } from 'react';
import jQuery from "jquery";
import $ from "jquery"
import '../App.css';
import Image from 'react-image'
window.$ = window.jQuery = jQuery;

class Contact extends Component {

    render() {
        return (

            <div id="preId3" class="contInner">

                <p id="ENG"> I naver dreamed about success, I worked for it </p>
                <br /><br /><br />
                <p id="EMAIL">이메일</p>
                <p id="EMAIL2">ppppp4710@naver.com</p> <br /><br /><br />
                <p id="EMAIL"> 연락처 </p>
                <p id="EMAIL2">010-9022-8199</p> <br /><br /><br />
                <a href="https://github.com/imsocuty?tab=repositories" target="_black">
                    <Image src="https://i.imgur.com/3byEipA.png" class="github" /> </a>
            </div>
        )

    }
}


export default Contact;

