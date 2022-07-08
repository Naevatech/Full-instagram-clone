import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'


const Post = () => {
    
    const [userPost, setuserPost] = useState("")
    const [activeID, setactiveID] = useState("")
    const [activePostname, setactivePostname] = useState("")
    useEffect(() => {
      if(localStorage.userDetail){
          setuserPost(JSON.parse(localStorage.userDetail))
        }
        
    }, [])
    // console.log(userPost._id)
    
    //file
    const [myfile, setmyfile] = useState("")
    //img url
    const [imageurl, setimageurl] = useState("")
    const [message, setmessage] = useState("")
    const [status, setstatus] = useState("")
    //post
    const [postmessage, setpost] = useState("")
    const url = "http://localhost:4007/user/post"
    
    const choseimage = (e) => {
        // console.log(e.target.files[0])
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload =()=>{
            setmyfile(reader.result)
            setactiveID(userPost._id)
            setactivePostname(userPost.username)

        }

    }

    console.log(activeID)
    const postMessage = () => {
        const postDetails = {postmessage, activeID, myfile, imageurl, activePostname}
        axios.post(url, postDetails).then((res)=> {
            console.log(res)
            setimageurl(res.data.image)
            setstatus(res.data.status)
            setmessage(res.data.message)
        })
        
    }

  return (
      <>
        <Navbar />
        <div>
            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-12 col-md-1"></div>

                    <div className="col-12 col-md-3">
                        <label for="formFileLg" class="form-label">Large file input example</label>
                        <input type="file" onChange={(e)=>choseimage(e)} class="form-control form-control-lg" id="formFileLg"/>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className='mt-3'>
                            {myfile && (
                                <img src={myfile} alt="" style={{width:"100px"}} />
                            )}
                        </div>

                        <textarea className="form-control mt-3" aria-label="With textarea" placeholder='Add post' onChange={(e)=>setpost(e.target.value)}></textarea>
                        
                        <button className='btn btn-primary mt-3 w-100' onClick={postMessage}>Post</button>

                        {status ? <div className='btn btn-primary w-100 mt-4'>{message}</div> : <div className='btn btn-gray w-100'>{message}</div>} 
                        
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            

        </div>

        
      </>
  )
}

export default Post