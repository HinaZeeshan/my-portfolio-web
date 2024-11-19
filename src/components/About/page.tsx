import React from "react";
import Image from "next/image";
import "../../style/About.css";
const About = () => {
  return (
    <div>
      <div className="container-about">
      <div className="pic">
        <Image src="/my pic.jpeg" alt=""
        width={300}
        height={300} />
      </div>
        <p>{`hello, it's Me`}</p>
        <h1>hina zeeshan</h1>
        
        
        <h4>{`And I'm`}<span>Front-End-Developer</span></h4>
          <p>I am a passionate and dedicated Frontend Developer with expertise in HTML, CSS, and JavaScript, and a deep understanding of TypeScript. Currently, I am exploring advanced frontend technologies, with a strong focus on Next.js to build dynamic, modern web applications.

I am actively pursuing hands-on learning and development in my role as a student at Techforce Pakistan, where I am continuously enhancing my skills in web development. My journey also extends into the exciting realm of AI through the Applied Generative AI Engineering (GenEng) program at GH Cloud, where I am delving into AI technologies to bring innovation into the web development space.</p>  
             
    
        
      </div>
     
    </div>
  );
};

export default About;
