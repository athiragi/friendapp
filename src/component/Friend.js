import React, { useState } from 'react'
import Header from './Header'

const Friend= () => {
    var [Name,setName]=useState("")
    var [friendname,setFname]=useState("")
    var [friendnickname,setFnickname]=useState("")
    var [describeyourfriend,setDescfr]=useState("")
    
    
    const subData=()=>{
    
        const data={"name":Name,"friendName":friendname,"friendNickName":friendnickname,"DescribeYourFriend":describeyourfriend}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">friendname</label>
                    <input type="text" className="form-control" onChange={(e)=>{setFname(e.target.value)}}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <label for="" className="form-label">friendnickname</label>
                    <input type="text" className="form-control" onChange={(e)=>{setFnickname(e.target.value)}} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Describe your friend</label>
                 <textarea name="" id="" cols="30" rows="15" class="form-control" onChange={(e)=>{setDescfr(e.target.value)}}/>
             </div>
            
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
        
    </div>
  )
}

export default Friend
