import React, { Component } from 'react';
import jQuery from "jquery";
import $ from "jquery"
import '../App.css';
import Image from 'react-image'
window.$ = window.jQuery = jQuery;

class Project extends Component {

    render() {
        return (


            <div id="preId2" class="contInner">
                <div>
                    <div>
                        <div>
                            <a href="https://github.com/imsocuty/Rock-paper-scissors" target="_black"> <Image src=
                                "https://i.imgur.com/3Pk8K1U.jpg"
                                class="project_img" /> </a>
                            <div>
                                <h1> 회사키우기 </h1>

                                <p> 컴퓨터와 가위바위보를 하며 회사를 성장시키는 CUI 게임 </p> <br />

                                <h2> 개발 기간 </h2>
                                <p> 2017.11.25 ~ 2017.11.26 </p>
                                <a href="https://github.com/imsocuty/Rock-paper-scissors" target="_black">
                                    <Image src="https://i.imgur.com/3byEipA.png" class="github" /> </a>
                            </div>
                        </div>



                        <div>
                            <a href="https://github.com/imsocuty/Movie" target="_black"><Image src=
                                "https://i.imgur.com/Eu6rhlz.png"
                                class="project_img" /> </a>
                            <div>
                                <h1> 영화 관리 사이트 </h1>

                                <p> JSP, MYSQL을 이용하여 로그인 기능이 구현된 영화 관리 사이트 </p> <br />

                                <h2> 개발 기간 </h2>
                                <p> 2019.08.25 ~ 2019.08.25 </p>
                                <a href="https://github.com/imsocuty/Movie" target="_black">
                                    <Image src="https://i.imgur.com/3byEipA.png" class="github" /> </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <a href="https://github.com/imsocuty/FPS" target="_black"><Image src=
                                "https://i.imgur.com/v7OdOkS.png"
                                class="project_img" /> </a>
                            <div>
                                <h1> 1인칭 FPS </h1>

                                <p> 유니티를 이용하여 개발한 1인칭 FPS 게임 </p> <br />

                                <h2> 개발 기간 </h2>
                                <p> 2019.06.01 ~ 2019.06.30 </p>
                                <a href="https://github.com/imsocuty/FPS">

                                    <Image src="https://i.imgur.com/3byEipA.png" class="github" /> </a>
                            </div>
                        </div>


                        <div>
                            <a href="https://github.com/imsocuty/TowerDefense" target="_black"><Image src=
                                "https://i.imgur.com/OAOIiB0.png"
                                class="project_img" /> </a>
                            <div>
                                <h1> 3D 타워 디펜스 </h1>

                                <p>  타워를 건설하여 지켜내는 3D 타워디펜스 게임 </p> <br />

                                <h2> 개발 기간 </h2>
                                <p> 2019.12.16 ~ 2019.12.19 </p>
                                <a href="https://github.com/imsocuty/TowerDefense" target="_black">
                                    <Image src="https://i.imgur.com/3byEipA.png" class="github" /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default Project;

