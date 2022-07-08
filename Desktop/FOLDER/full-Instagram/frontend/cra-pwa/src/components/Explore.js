import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Explore = () => {
    const url = "http://localhost:4007/user/home"
    const [userExplore, setuserExplore] = useState([])
    const [userPostname, setuserPostname] = useState("")
    const [likeCount, setlikeCount] = useState("")
    // const [CountLike, setCountLike] = useState("")
    useEffect(() => {
        axios.get(url).then((res)=> {
                setuserExplore(res.data.result)
                if (localStorage.userDetail) {
                    setuserPostname(JSON.parse(localStorage.userDetail).username)
                }
                else {
                    console.log("Invalid connection")
                }
            
        })
    }, [])
    
    // const lik = (i) => {
    //     setlikeCount(i)
    // }
    handleId = (e) => {
        /*Well if the elements are nested event.target won't always work
          since it refers to the target that triggers the event in the first place.*/
         console.log(e.target.id);
         console.log(e.currentTarget.id);
    }
    

  return (
    <>  
        <Navbar />
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-2">...</div>
                    {/* All post */}
                    <div className="col-12 col-md-5 ">
                        {
                            userExplore.map((plore, i)=>(

                                <div className="card rounded-3 mb-3">
                                    <div className='d-flex bg-white rounded-3'>
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"className='rounded-circle mx-3 mt-2 mb-2 ' style={{width:"40px", height:"40px"}} alt="Fissure in Sandstone"/>
                                    <h6 className='bg-white mt-3 fs-6' >{plore.activePostname}</h6>
                                    </div>
                                    <img src={plore.imageurl} className='img-fluid' alt="Fissure in Sandstone" style={{width:"453px", height:"453px"}}/>
                                    <div className='d-flex'>
                                        {/* {likeCount ? */}
                                         {/* <button id="yourID" onClick={this.handleId} className="uil uil-heart-alt border-0 fs-4 mx-2" style={{color:"#E41200"}}></button> */}
                                         {/* : */}
                                        <button id="yourID" onClick={this.handleId} className="uil uil-heart-alt border-0 fs-4 mx-2" style={{color:"#801080"}}></button>
                                        
                                        {/* } */}
                                        <button className="uil uil-comment border-0 fs-4 " style={{color:"#801080"}}></button>
                                        <button className="uil uil-telegram-alt border-0 fs-4 " style={{color:"#801080"}}></button>
                                    </div>
                                    <div className="">
                                        <h6 className='fs-6 mx-3'>{plore.activePostname}</h6>
                                        <p className=" mx-3">{plore.postmessage}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="col-12 col-md-3">...</div>
                    <div className="col-12 col-md-2">...</div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Explore