import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Modal from './Modal'

const Home = () => {
    const [openmodal, setopenmodal] = useState(false)
    const url = "http://localhost:4007/user/home"
    const [allUsers, setallUsers] = useState("")
    const [activeID, setactiveID] = useState("")
    const [userContent, setuserContent] = useState([])
    useEffect(() => {
        if(localStorage.userDetail){
            setallUsers(JSON.parse(localStorage.userDetail))
        }
    }, [])
    useEffect(() => {
        if(localStorage.userDetail){
            setactiveID(JSON.parse(localStorage.userDetail)._id)
        }
    }, [])
    useEffect(() => {
        // const activeuserID = {activeID}
      axios.get(url).then((res)=> {
        //   console.log(res.data.result)
          const postData = res.data.result
          const checkPosted = postData.filter(check => check.userPostID === activeID)
          localStorage.userContentPosted = JSON.stringify(checkPosted)
        })  
    })
    useEffect(() => {
        if (localStorage.userContentPosted) {
            setuserContent(JSON.parse(localStorage.userContentPosted))
        }
    }, [])
    console.log(userContent.length)

    

  return (
    <div>
            < Modal open={openmodal} onClose={()=>setopenmodal(false)} />
            <Navbar/>
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-1 col-md-2"></div>
                <div className="col-10 col-md-8">
                    <div className="row">
                        <div className="col-12 col-md-2" >
                            <img src={allUsers.user_avatar }alt="" className='ms-4 ms-md-1 rounded-circle' style={{width:"150px", height:"150px"}} />
                            
                        </div>
                        <div className="col-12 col-md-8 mt-3 mt-md-0" >
                            <div className="display-5 fs-3 ms-4">{allUsers.username}</div>
                            <div className='d-flex mt-3'>
                                <div className='d-flex ms-4'><h6>{userContent.length}</h6><p  className='ms-2'>post</p></div>
                                <div className='d-flex ms-5'><h6>0</h6><p  className='ms-2'>followers</p></div>
                                <div className='d-flex ms-5'><h6>0</h6><p  className='ms-2'>following</p></div>
                            </div>
                            <div className='d-flex' >
                            <h6 className=" ms-4">{allUsers.fullname}</h6>
                            <button onClick={()=>setopenmodal(true)}  className="ph-gear-six bg-white fs-3 me-4 border-0" style={{color:"#808080", margin:"-4px 0 0 20px "}}></button>
                            </div>
                        </div>
                        <div className="col-12 col-md-2" ></div>
                    </div>
                </div>
                <div className="col-1 col-md-2" ></div>
            </div>
        </div>
        
        <div className="container-fluid mt-3">
            <div className="row">
                <div className=" col-1 col-md-2"></div>
                <div className="col-10 col-md-8">
                    
                       
                    <div className="row">
                         {
                            userContent.map((content, i)=>(

                                <div style={{width:"298px",}}>
                                    <img src={content.imageurl} className=" img-fluid mt-3 mb-3" alt='' style={{width:"298px", height:"298px"}}/>
                                    
                                </div>
                            ))
                        }
                    </div>
                    

                </div>
                <div className="col-1 col-md-2" ></div>
            </div>
        </div>

        
    </div>
  )
    }

export default Home