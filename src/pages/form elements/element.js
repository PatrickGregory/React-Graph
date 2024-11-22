import { DatePicker, Space, TimePicker } from 'antd';
import { useState } from 'react';

export const GeneralForm = () => {
    return (
        <div>
            <div class="mb-3 d-flex gap-2">
                <label for="floatingInputGroup1">Text</label>
                <input type="text" class="form-control" />
            </div>
            <div class="mb-3 d-flex gap-2">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3  d-flex gap-2">
                <label for="inputPassword5" class="form-label">Password</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
            </div>
            <div class="mb-3 d-flex gap-2">
                <label for="formFile" class="form-label">File Upload</label>
                <input class="form-control" type="file" id="formFile" />
            </div>
            <div className='d-flex gap-3'>
                <p className='fs-6'>Date</p>
                <Date />
            </div>
            <div className='d-flex gap-3 mb-3'>
                <p className='fs-6'>Time</p>
                <Time />
            </div>
            <div className='d-flex gap-3 mb-3'>
                <label for="exampleColorInput" class="form-label">Color picker</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" />
            </div>
            <div class="mb-3 d-flex gap-3">
                <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className='d-flex gap-4 mb-3'>
                <p className='fs-6'>Radios</p>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                            First radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Second radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                        <label class="form-check-label" for="flexRadioDisabled">
                            Third Disabled radio
                        </label>
                    </div>
                </div>
            </div>
            <div className='d-flex gap-4 mb-3'>
                <p className="fs-6">Checkboxes</p>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Example checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">
                            Example checkbox 2
                        </label>
                    </div>
                </div>
            </div>
            <div className='d-flex gap-4 mb-3'>
                <p className='fs-6'>Disabled</p>
                <input class="form-control" type="text" value="Disabled/readonly input" aria-label="Disabled input example" disabled readonly></input>
            </div>
            <div className='d-flex gap-4 mb-3'>
                <p className='fs-6'>Select</p>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='d-flex gap-4 mb-3'>
                <p className='fs-6'>Multi Select</p>
                <select class="form-select" multiple aria-label="Multiple select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='d-flex gap-4 mb-3'>
                <p className='fs-6'>Submit Button</p>
                <button type="submit" class="btn btn-primary mb-3">Submit Form</button>
            </div>
        </div>
    )
}

const onChange = (date, dateString) => {
    console.log(date, dateString);
};
export const Date = () => (
    <Space direction="vertical">
        <DatePicker onChange={onChange} />
    </Space>
);
export const Time = () => {
    const [value, setValue] = useState(null);
    const onChange = (time) => {
        setValue(time);
    };
    return <TimePicker value={value} onChange={onChange} />;
};

export const Switches = () => {
    return (
        <div className='d-flex gap-3'>
            <p className='fs-5'>Switches</p>
            <div className='fs-6'>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
                    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled />
                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                </div>
            </div>
        </div>
    )
}

export const Range = () => (
    <div className='d-flex gap-3'>
        <p className="fs-6">Ranges</p>
        <div className='fs-6'>
            <label for="customRange1" class="form-label">Example range</label>
            <input type="range" class="form-range" id="customRange1" />
            <label for="disabledRange" class="form-label">Disabled range</label>
            <input type="range" class="form-range" id="disabledRange" disabled />
            <label for="customRange3" class="form-label">Min and Max with steps</label>
            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" />
        </div>
    </div>
)
export const Labels = () => (
    <div className='fs-6 d-flex gap-3'>
        <p>Floating Labels</p>
        <div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
            </div>
        </div>
    </div>
)

export const InputGrps = () => (
    <div className='d-flex gap-3 fs-6'>
        <p>Input groups</p>
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>

            <div class="mb-3">
                <label for="basic-url" class="form-label">Your vanity URL</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                </div>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                <span class="input-group-text">.00</span>
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
            </div>

            <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
    </div>
)
export const Advanced = () => (
    <div>
        <Switches />
        <Range />
        <Labels />
        <InputGrps />
    </div>
)