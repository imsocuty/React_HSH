import React from 'react';

const Gnb = () => (
    <ul className="gnb">
        
        <li>
            <button type="button" id="moveBtn" className="menu on"> 
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  
            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; 
            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  
            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; 
            
            자기소개</button>
        </li>
        <li>
            <button type="button" id="moveBtn2" className="menu on">
            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  
            &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; 
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  
                개인 프로젝트</button>
        </li>
        <li>
            <button type="button" id="moveBtn3" className="menu on"> &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; 
            팀 프로젝트</button>
        </li>


    </ul>
)

export default Gnb;