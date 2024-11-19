import React from 'react'
import Image from 'next/image'
import  "../../style/Cards.css"
const Cards = () => {
  return (
    <div>
        <div className="container-card">
      <div className="cards">
         <Image src="/maxresdefault.jpg" 
            alt="imageof countdowntimer"
            width={300}
            height={80}/>
         <h3>Project 01 :Countdown Timer</h3>     
         <p>Description: A dynamic and fully functional countdown timer built
                 using Next.js, 
               showcasing my ability to manage states, handle events, and create interactive components and delivering seamless user experiences.
           </p>
      <button className='w-20'><a href="https://countdown-timer-lemon.vercel.app" rel="noopener noreferrer" target="_blank">Explore</a></button>
      </div>
{/* card2 */}
<div className="cards">
<Image src="/images (1).jfif" 
            alt="imageof calculator"
            width={300}
            height={80}/>
         <h3>Project 02 :calculator</h3>     
         <p>Description: fully functional calculator using JavaScript,
                 enabling basic arithmetic operation with a clean and responsive user interface. 
                 strengthened of event handling and DOM manipulation in JavaScript.
           </p>
           <button className='w-20'> <a href="https://github.com/HinaZeeshan/calculatorjavascript-functionality" rel="noopener noreferrer" target="_blank">Explore</a></button>
      </div>
      {/* card3 */}
      <div className="cards">
      <Image src="/images.jfif" 
            alt="imageof "
            width={300}
            height={80}/>
         <h3>Project 03 :Todo List</h3>     
         <p>Description:This project allowed me to work with 
                task management features, including adding, updating, and removing tasks.
                 It was a great exercise in using JavaScript for state management in a Next.js environment.</p>
           <button className='w-20'><a href="https://todo-list-sand-psi-69.vercel.app"  rel="noopener noreferrer" target="_blank">Explore</a></button>
      </div>
      {/* card4 */}
      <div className="cards">
      <Image src="/ATM_keypad_fb-1024x535.jpg" 
            alt="imageof atm"
            width={300}
            height={80}/>
         <h3>Project 04 :ATM</h3>     
         <p>Description:  CLI-based ATM machine using TypeScript, 
                simulating essential banking operations like balance inquiry, deposits, and withdrawals. 
                 enhanced  TypeScript’s type safety and control flow in real-world applications.
           </p>
           <button className='w-20'><a href="https://github.com/HinaZeeshan/atm-machine" rel="noopener noreferrer" target="_blank">Explore</a></button>
      </div>

      </div>
    </div>
  )
}

export default Cards
