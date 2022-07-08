import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Post from './Post'

const Navbar = () => {
    const navigate = useNavigate()
    const uploadPost = () => {
        if (uploadPost) {
            navigate("/post")
        }
    }

    const goHome = () => {
        if (goHome) {
            navigate("/explore")
        }
    }
    const goProfile = () => {
        if (goProfile) {
            navigate("/home")
        }
    }
    const logOut = () => {
        if (logOut) {
            navigate("/")
        }
    }
  return (
    <div>
        <div className='' style={{borderBottom:"thin solid #e9e9e9", backgroundColor:"#fff"}}>
            <nav className="navbar navbar-light bg-white" >
                <div className="container-fluid bg-white" >
                    <div className='ms-1 ms-md-5' >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/120px-Instagram_logo.  svg.png?20160616034027"   alt="" style={{backgroundColor:"white"}} />
                    </div>
                    <form className="d-flex bg-white  ">
                        <button onClick={goHome} className="ph-house-fill bg-white fs-3 me-4 my-3 border-0" style={{color:"#808080"}}></button>
                        <button onClick={uploadPost} className="uil uil-plus bg-white fs-3 me-4 border-0" style={{color:"#808080"}}></button>
                        {/* <button  className="uil uil-tachometer-fast bg-white fs-3 me-4 border-0" style={{color:"#808080"}}></button> */}
                        {/* <button className="uil uil-comment-alt-lines bg-white fs-3 me-4 border-0" style={{color:"#808080"}}></button> */}
                        <button onClick={logOut} className="ph-sign-out-fill bg-white fs-3 me-4 my-3 border-0" style={{color:"#808080"}}></button>
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" onClick={goProfile} alt="" className='rounded-circle img-fluid me-3 me-md-5 mt-3' style={{width:"40px", height:"40px"}} />
                    </form>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar