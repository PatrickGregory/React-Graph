import React from 'react'

function Register() {
    return (
        <div>
            <div></div>
            <div className='d-flex justify-content-center'>
                <div className='card shadow border-none p-4'>
                    <h4 className='text-primary-emphasis text-center mt-4 mb-2'>Create an Account</h4>
                    <p className='text-center'>Enter your personal details to create account</p>
                    <form>
                        <div className='mb-4'>
                            <label className='form-label'>Full Name</label>
                            <input type='text' className='form-control' required />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Email Address</label>
                            <input type='email' className='form-control' required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Username</label>
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Password</label>
                            <input type='password' className='form-control' required />
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label fs-6" for="flexCheckDefault">
                                I agree and accept the <a href="#" className='text-decoration-none text-primary'>terms and conditions</a>
                            </label>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type='submit' className='btn btn-primary w-100 my-3'>Register</button>
                        </div>
                        <p>Already have an account? <a href="/login" className='text-decoration-none text-primary'>Log in</a></p>
                    </form>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='fs-6'>Designed by <a href="https://www.linkedin.com/in/patrick-emeka/" className='text-decoration-none' target='_blank'>Kantee Da Dev</a></p>
            </div>
        </div>
    )
}

export default Register