

export const Horizontal = () => (
    <form classNameName="fs-6">
        <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
            </div>
        </div>
        <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" />
            </div>
        </div>
        <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
            <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                    <label className="form-check-label" for="gridRadios1">
                        First radio
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                    <label className="form-check-label" for="gridRadios2">
                        Second radio
                    </label>
                </div>
                <div className="form-check disabled">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                    <label className="form-check-label" for="gridRadios3">
                        Third disabled radio
                    </label>
                </div>
            </div>
        </fieldset>
        <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label" for="gridCheck1">
                        Example checkbox
                    </label>
                </div>
            </div>
        </div>
        <div classNameName="ms-5">
            <button type="reset" className="btn btn-secondary me-2">Reset</button>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
)

export const MultiColumns = () => (
    <form className="row g-3 fs-6">
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
            <label for="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
            <label for="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
            <label for="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div className="col-md-2">
            <label for="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                    Check me out
                </label>
            </div>
        </div>
        <div className="col-12">
            <button type="reset" className="btn btn-secondary me-3">Reset</button>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
)

export const Vertical = () => (
    <form className="row g-3 fs-6">
        <div className="col-12">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
            <button type="reset" className="btn btn-secondary me-3">Reset</button>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
)

export const NoLabel = () => (
    <form className="row g-3 fs-6">
        <div className="col-12">
            <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
            <input type="email" placeholder="Email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
            <input type="password" placeholder="Password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
            <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
        </div>
        <div className="col-md-6">
            <input type="text" placeholder="City" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
            <select id="inputState" placeholder="Choose" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div className="col-md-2">
            <input type="text" placeholder="Zip" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
            <button type="reset" className="btn btn-secondary me-3">Reset</button>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
)

export const FloatingLabels = () => (
    <div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Your Name" />
            <label for="floatingInput">Your Name</label>
        </div>
        <div classNameName="row">
            <div className="form-floating col-6 mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Your Email" />
                <label for="floatingInput">Your Email</label>
            </div>
            <div className="form-floating col-6 mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
        </div>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="City" />
            <label for="floatingInput">City</label>
        </div>
        <div classNameName="row">
            <div className="form-floating col-5 mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Address" />
                <label for="floatingInput">Address</label>
            </div>
            <div className="form-floating col-4">
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="form-floating mb-3 col-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Zip" />
                <label for="floatingInput">Zip</label>
            </div>
        </div>
        <div className="col-12">
            <button type="reset" className="btn btn-secondary me-3">Reset</button>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </div>
)