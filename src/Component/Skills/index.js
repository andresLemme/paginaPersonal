import React from 'react'
import Lottie from 'react-lottie'
import code from '../../Assets/Lottie/code.json'


const defaultOptions = {
  loop: true,
  autoplay: true,
  
}

export default function Skill() {
  return (
    <section className="container-main contaninerSkill">
       <div className="block-division">
         
        <div className="block-left">
        

        </div>
        <div className="block-right">
        <Lottie options={{animationData: code, ...defaultOptions}} />
        {/* <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF-raMfGj5OqA/profile-displayphoto-shrink_800_800/0/1518585170510?e=1632960000&v=beta&t=J0hAAKWLrunPnfmmVNvulbr1e8v-CgYzpUumXh7pFbg" alt="Andres Lemme" /> */}
       
        </div>
        
      </div>
    </section>
  )
}
