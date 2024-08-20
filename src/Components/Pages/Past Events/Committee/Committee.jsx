import React from "react"
import CommitteeContainer from "./CommitteeContainer.jsx"
import CommitteeData from "../../../../data/committee.js"
import './Committee.css'

export default function Committee(){
    return(
        <div className="committee-main">
            <div className="left-arrow">&lt;</div>
      <div className="committee">
        <div className="head">COMMITTEES</div>
        <div className="committee-contain">
            {CommitteeData.map((item)=>{
                return <CommitteeContainer name={item.name}/>
            })}
        </div>
        </div>
        <div className="right-arrow">&gt;</div>
        </div>
    )
}