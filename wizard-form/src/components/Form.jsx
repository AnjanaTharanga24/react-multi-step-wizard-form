import React from 'react'
import '../css/form.css'
export default function Form() {
    return (
        <div>
            <form className='p-5 w-75 form-body bg-danger'>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Age</label>
                    <input
                        type="number"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Enter age"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email Address</label>
                    <input
                        type="email"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contact Number</label>
                    <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Enter Mobile"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control mt-2"
                        id="exampleInputPassword1"
                        placeholder="Enter Mobile"
                    />
                </div>

                <div className='btn-div d-flex d-flex justify-content-between mt-3'>

                    <button type="submit" className="btn btn-primary mt-2">
                        Next
                    </button>
                </div>


            </form>

        </div>
    )
}
