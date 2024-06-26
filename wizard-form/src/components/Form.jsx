import React, { useState } from 'react'
import '../css/form.css'
export default function Form() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = (e) => {
        setCurrentStep(currentStep + 1)
    }

    const handlePrev = (e) => {
        setCurrentStep(currentStep - 1)
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div className='mb-3'>
                            <h2>Basic details</h2>
                        </div>


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




                    </div>
                );
            case 2:
                return (
                    <div>

                        <div className='mb-3'>
                            <h2>Work details</h2>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Department Name</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter department name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Department Id</label>
                            <input
                                type="number"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter department id"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Category</label>
                            <input
                                type="email"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter category"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Position</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter Position"
                            />
                        </div>



                    </div>
                );

            case 3:
                return (
                    <div>
                        <div className='mb-3'>
                            <h2>Dependent details</h2>
                        </div>
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
                    </div>


                );
            default:
                return null;
        }
    };
    return (
        <div>
            <form className='p-5 w-75 form-body card shadow'>

                {renderStep()}

                <div className="btn-div d-flex d-flex justify-content-between mt-3">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            className="btn btn-secondary mt-2"
                            onClick={handlePrev}
                        >
                            Previous
                        </button>
                    )}


                    {currentStep < 3 && (
                        <button
                            type="button"
                            className="btn btn-primary mt-2"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    )}

                    {currentStep === 3 && (
                        <button type="submit" className="btn btn-primary mt-2">
                            Submit
                        </button>
                    )}
                </div>
            </form>

        </div>
    )
}
