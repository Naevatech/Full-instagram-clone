import React from 'react'
import './modalstyle.css'

const Modal = ({open, onClose}) => {
    if (!open) {
        return null
    }
  return (
    < >
      <div className='overlay'>
        <div className="container "  >
            <div className="row ">
                <div className="col-12 col-md-3"></div>
                <div className="col-12 col-md-6 ">
                    <div className="row mt-2 mb-3" id='modalContainer'>
                        <p className='mt-2 mb-5' onClick={onClose}>x</p>
                        <div className="col-12 col-md-3"  >
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" alt="" className='rounded-circle img-fluid me-3 me-md-5 mt-3' style={{width:"120px", height:"120px"}} />
                        <button className='btn btn-outline-primary mt-2'>Change</button>
                        </div>
                        <div className="col-12 col-md-9 mt-4">

                            <div class="mb-3 row">
                                <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="name" class="form-control" id="inputName"  />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputUsername" class="col-sm-2 col-form-label">username</label>
                                <div class="col-sm-10">
                                    <input type="name" class="form-control" id="inputUsername"  />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail"  />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputWebsite" class="col-sm-2 col-form-label">Website</label>
                                <div class="col-sm-10">
                                    <input type="website" class="form-control" id="inputWebsite"  />
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-8"></div>
                                <div className="col-4">
                                <button className='btn btn-success w-100'>Save</button>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3"></div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Modal