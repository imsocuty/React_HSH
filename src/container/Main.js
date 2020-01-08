import React, { Component } from 'react';
import Header from "../component/Header";
import Gnb from "../component/Gnb";
//import Footer from "../component/Footer";
import jQuery from "jquery";
import $ from "jquery"
import '../App.css';
import Image from 'react-image'
window.$ = window.jQuery = jQuery;

class Main extends Component {


  render() {

    return (

      <div className="main">
        <div id="premain" class="scroll">
	      </div>
        <div className="header-background">

          <div className="menu">
            <ul className="nav">
              <li className="Home" id="moveBtn1">홈으로.</li>
              <li className="myself" id="moveBtn2">자기소개</li>
              <li className="Skill" id="moveBtn3">스킬</li>
              <li className="project" id="moveBtn4">프로젝트</li>
              <li className="contact" id="moveBtn5">CONTACT</li>
            </ul>
          </div>
        <div className="text-wrap">
          <div className="text-box">
          <p id="title-text">안녕하세요! 홍석현의 포트폴리오입니다.</p>
          <p class="title"></p>
          </div>
          </div>
        </div>
        
        <div id="preId" class="">

          <div class="jb-wrap">

            <div class="jb-image">
              <Image src= "https://i.imgur.com/1BgwWRr.png"
                align="left" vspace="30" hspace="10" class="intro"/>
              <p> BLOG : <a href="http://kingsman5.tistory.com">kingsman5.tistory.com</a> | WEBSITE : <a href="http://www.clanfrs.com"> www.clanfrs.com</a> </p>
            </div>
            
            <div class="jb-text">
            
            </div>
          </div>
        </div>

        <div id="preId11" class="">
          <p class="Basic"> Basic   </p> <br/>
          
          <Image src= "https://i.imgur.com/Hkl9ITj.png" width="190" height="190" class="Basici" title="C"/> 
          <Image src= "https://i.imgur.com/NZHCD9r.png" width="190" height="190" class="Basici" title="C#"/> 
          <Image src= "https://i.imgur.com/1hZMpis.png" width="190" height="190" class="Basici" title="JAVA"/> 
          <Image src= "https://i.imgur.com/42snnxa.png" width="190" height="190" class="Basici" title="JavaScript"/>   
          <Image src= "https://i.imgur.com/CYsmYzI.png" width="190" height="190" class="Basici" title="Window"/> 
          <Image src= "https://i.imgur.com/Q4khk7A.png" width="190" height="190" class="Basici" title="Linux"/>
  
          <p class="Intermediate"> Intermediate </p>
          <Image src= "https://i.imgur.com/lLFbSjn.png" width="190" height="190" class="Basici" title="JSP"/> 
          <Image src= "https://i.imgur.com/ovYkpUz.png" width="190" height="190" class="Basici" title="Mysql"/> 
          <Image src= "https://i.imgur.com/0HXrAwV.png" width="250" height="190" class="Basici" title="Unity"/> 
          <Image src= "https://i.imgur.com/HHPQN5k.png" width="190" height="190" class="Basici" title="React"/>   
          <Image src= "https://i.imgur.com/3byEipA.png" width="190" height="190" class="Basici" title="Github"/> 
          <Image src= "https://i.imgur.com/5TgK2mc.png" width="250" height="190" class="Basici" title="gnuboard"/>
            
        </div>



        <div id="preId2" class="contInner">
          <div>
            <div>
              <div>
                <a href="https://github.com/imsocuty/Rock-paper-scissors"> <Image src=
                    "https://i.imgur.com/3Pk8K1U.jpg"
                    align="left" vspace="30" hspace="40" width="500" height="400" /> </a>

                  <br/><br/> <h1> 회사키우기 </h1> <br/>

                <p> 컴퓨터와 가위바위보를 하며 회사를 성장시키는 CUI 게임 </p> <br/> 

                <h2> 개발 기간 </h2> <br />
                <p> 2017.11.25 ~ 2017.11.26 </p> <br />
                <a href="https://github.com/imsocuty/Rock-paper-scissors"> 
                <Image src= "https://i.imgur.com/3byEipA.png" class="github"/> </a>  
              </div>



              <div>
                <a href="https://github.com/imsocuty/Movie"><Image src=
                  "https://i.imgur.com/Eu6rhlz.png"
                  align="left" vspace="30" hspace="40" width="500" height="400" /> </a>
              
              <br/> <br/> <h1> 영화 관리 사이트 </h1> <br />

                <p> JSP, MYSQL을 이용하여 로그인 기능이 구현된 영화 관리 사이트 </p> <br/> 

                <h2> 개발 기간 </h2> <br />
                <p> 2019.08.25 ~ 2019.08.25 </p> <br />
                <a href="https://github.com/imsocuty/Movie"> 
                <Image src= "https://i.imgur.com/3byEipA.png" class="github"/> </a>
              </div>
            </div>

            <div>
              <div>
                <a href="https://github.com/imsocuty/FPS"><Image src=
                  "https://i.imgur.com/v7OdOkS.png"
                  align="left" vspace="30" hspace="40" width="500" height="400" /> </a>

                <br/><br/> <h1> 1인칭 FPS </h1> <br />

                <p> 유니티를 이용하여 개발한 1인칭 FPS 게임 </p> <br/> 

                <h2> 개발 기간 </h2> <br />
                <p> 2019.06.01 ~ 2019.06.30 </p> <br />
                <a href="https://github.com/imsocuty/FPS"> 
                <Image src= "https://i.imgur.com/3byEipA.png" class="github"/> </a>
              </div>


              <div>
                <a href="https://github.com/imsocuty/TowerDefense"><Image src=
                  "https://i.imgur.com/OAOIiB0.png"
                  align="left" vspace="30" hspace="40" width="500" height="400" /> </a>

                <br/><br/> <h1> 3D 타워 디펜스 </h1> <br />

                <p>  타워를 건설하여 지켜내는 3D 타워디펜스 게임 </p> <br/> 

                <h2> 개발 기간 </h2> <br />
                <p> 2019.12.16 ~ 2019.12.19 </p> <br />
                <a href="https://github.com/imsocuty/TowerDefense"> 
                <Image src= "https://i.imgur.com/3byEipA.png" class="github"/> </a>
              </div>
            </div>
          </div>
        </div>
 
        <div id="preId3" class="contInner">

          <p id="ENG"> I naver dreamed about success, I worked for it </p> 
          <br/><br/><br/>
          <p id="EMAIL">이메일</p>
          <p id="EMAIL2">ppppp4710@naver.com</p> <br/><br/><br/>
          <p id="EMAIL"> 연락처 </p>
          <p id="EMAIL2">010-9022-8199</p> <br/><br/><br/>
          <a href="https://github.com/imsocuty?tab=repositories"> 
          <Image src= "https://i.imgur.com/3byEipA.png" class="github"/> </a>
        </div>
      </div>




    )
  }
}
$(document).ready(function () {
  $("#moveBtn1").on("click", function (event) {
    var offset = $("#premain").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn2").on("click", function (event) {
    var offset = $("#preId").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn3").on("click", function (event) {
    var offset = $("#preId11").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn4").on("click", function (event) {
    var offset = $("#preId2").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

$(document).ready(function () {
  $("#moveBtn5").on("click", function (event) {
    var offset = $("#preId3").offset();
    $('html, body').animate({ scrollTop: offset.top }, 1000);
  })
})

function changeText(cont1,cont2,speed){
	var Otext=cont1.text();
	var Ocontent=Otext.split("");
	var i=0;
	function show(){
		if(i<Ocontent.length)
		{		
			cont2.append(Ocontent[i]);
			i=i+1;
		};
	};
		var Otimer=setInterval(show,speed);	
};

$(document).ready(function(){
	changeText($("#title-text"),$(".title"),150);
});


$(function(){
  $('li').click(function(){ $('li').removeClass()
  $(this).addClass('on')})
})

export default Main;