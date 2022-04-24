import React, { Component } from 'react';
import jQuery from "jquery";
import '../App.css';
import Image from 'react-image'
window.$ = window.jQuery = jQuery;

class Skill extends Component {

    render() {
        return (
            <div id="preId11" class="">
                <p class="Basic"> Basic   </p> <br/>
                <div>
                    <Image src= "https://i.ibb.co/pd9sZbN/spring-3-logo-png-transparent-removebg-preview.png" width="250" height="190" class="Basici" title="Spring"/>
                    <Image src= "https://i.imgur.com/HHPQN5k.png" width="190" height="190" class="Basici" title="React"/>
                    <Image src= "https://i.imgur.com/NZHCD9r.png" width="190" height="190" class="Basici" title="C#"/>
                    <Image src= "https://i.ibb.co/phZ9rJ4/images-removebg-preview-1.png" width="250" height="190" class="Basici" title="Unity"/>
                    <Image src= "https://i.imgur.com/CYsmYzI.png" width="190" height="190" class="Basici" title="Window"/>
                    <Image src= "https://i.imgur.com/Q4khk7A.png" width="190" height="190" class="Basici" title="Linux"/>
                </div>

                <p class="Intermediate"> Intermediate </p>
                <div>
                    <Image src= "https://i.imgur.com/lLFbSjn.png" width="190" height="190" class="Basici" title="JSP"/>
                    <Image src= "https://i.imgur.com/ovYkpUz.png" width="190" height="190" class="Basici" title="Mysql"/>
                    <Image src= "https://i.ibb.co/JC4kKLL/ORACLE-removebg-preview.png" width="190" height="190" class="Basici" title="ORACLE"/>
                    <Image src= "https://i.imgur.com/1hZMpis.png" width="190" height="190" class="Basici" title="JAVA"/>
                    <Image src= "https://i.imgur.com/42snnxa.png" width="190" height="190" class="Basici" title="JavaScript"/>
                    <Image src= "https://i.imgur.com/3byEipA.png" width="190" height="190" class="Basici" title="Github"/>
                </div>

            </div>
        )

    }
}


export default Skill;

