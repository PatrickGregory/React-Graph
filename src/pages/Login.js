import React from 'react'

function Login() {
    return (
        <div>
            <div></div>
            <div className='d-flex justify-content-center'>
                <div className='card shadow border-none p-4'>
                    <h4 className='text-primary-emphasis text-center mt-4 mb-2'>Login to Your Account</h4>
                    <p className='text-center'>Enter your username and password to login</p>
                    <form>
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
                                Remember me
                            </label>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type='submit' className='btn btn-primary w-100 my-3'>Register</button>
                        </div>
                        <p>Don't have an account? <a href="/register" className='text-decoration-none text-primary'>Create an Account</a></p>
                    </form>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='fs-6'>Designed by <a href="https://www.linkedin.com/in/patrick-emeka/" className='text-decoration-none' target='_blank'>Kantee Da Dev</a></p>
            </div>
        </div>
    )
}

export default Login