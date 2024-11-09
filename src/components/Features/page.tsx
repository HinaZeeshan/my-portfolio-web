import React from 'react'
import "../../style/Features.css"
import { FaRegCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <div>
      <div className="container-features">
        <h1>Projects Features & commands</h1>
      <p>Explore the essential features of each Typescript project and easily run them using npx command provided below :</p>
      <div className='program-container'>
      <div className='programs'> <FaRegCheckCircle /><h3>npx h1z2-simplecalculator</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx a1t2-cli-number-guessing</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx hzq-05-currency-converter-project</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx q-hina07-word-counter</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx new008-student-management-system</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx hzq-quiz-project</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx hq09_adventure_game</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx hzq-object-oriented-programming</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx hzq_my_bank-account-oop</h3></div>
      <div className='programs'><FaRegCheckCircle/><h3>npx hqz-atm-4</h3></div>
      
      
      </div>
      </div>
    </div>
  )
}

export default Features
