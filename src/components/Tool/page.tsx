import React from 'react'
import "../../style/Tool.css"

import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";





const Tool = () => {
  return (
    <div>
      <div className="container-tool">
        <h1>skills</h1>
        <p className="text-sm text-white text-center">Unlocking My Hidden Talent</p>
      <div className="icon">
        <h1>Programming Languages</h1>
<div className="icons">
<FaHtml5 className="text-sky-700 text-6xl " />
<span className="mt-2 text-lg text-black">HTML5</span>
</div>

<div className="icons">
                <TbBrandJavascript  className="text-pink-700 text-6xl" />
                <span className="mt-2 text-lg text-black" >Javascript</span>
                </div>
<div className="icons">
<FaCss3Alt className="text-sky-700 text-6xl" />
<span className="mt-2 text-lg text-black">CSS3</span>
</div>

<div className="icons">
<SiTypescript className="text-pink-700 text-6xl" />
<span className="mt-2 text-lg text-black">Typescript</span>
</div>

<div className="icons">
<FaBootstrap className="text-sky-700 text-6xl" />
<span className="mt-2 text-lg text-black">Bootstrap</span>
</div>

 </div>
 <div className="icon-1">
    <div className="icons-1">
    <SiVisualstudiocode className="text-sky-700 text-6xl" />
    <span className="mt-2 text-xs text-black">Visual studio </span>
    </div>
    <div className="icons-1">
    <FaGithub className="text-black text-6xl" />
    <span className="mt-2 text-lg text-black">GitHub </span>
    </div>
    <div className="icons-1">
    <IoLogoVercel className="text-black text-6xl" />
    <span className="mt-2 text-lg text-black">Vercel </span>
    </div>
    <h1>Developement Tools And Frame Works</h1>
 </div>
      
      </div>
    </div>
  )
}

export default Tool
