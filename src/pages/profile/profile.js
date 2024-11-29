import { BsGithub, BsLinkedin, BsTwitter, BsUpload, BsWhatsapp } from "react-icons/bs"
import { Button, Tab, Tabs } from 'react-bootstrap'
import { FaTrashCan } from "react-icons/fa6"


export const BasicDetail = () => {
    return (
        <div>
            <div>
                <div><img src='./images/profile.jpg' className="rounded-circle w-50" alt="profile" /></div>
                <h3 className="text-primary-emphasis">Kantee Da Dev</h3>
                <p className="fs-6">MERN Stack Developer</p>
                <div className="fs-5 gap-2 d-flex justify-content-center"><a className="text-secondary text-decoration-none" href="#"><BsTwitter className="hover" /></a><a className=" text-secondary text-decoration-none" href="https://wa.me/2348115112841"><BsWhatsapp className="hover" /></a><a className=" text-secondary text-decoration-none" href="https://github.com/PatrickGregory"><BsGithub className="hover" /></a><a className=" text-secondary text-decoration-none" href="https://www.linkedin.com/in/patrick-emeka/"><BsLinkedin className="hover" /></a></div>
            </div>
        </div>
    )
}


export const ProfileTabs = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                className="mb-3 fs-6"
                variant="underline"
                fill
            >
                <Tab className="fs-6" eventKey="home" title="Overview">
                    <h5 className="text-primary-emphasis">About</h5>
                    <em className="mb-2">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                        Tempora libero non est unde veniam est qui dolor.
                        Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
                        Fuga sequi sed ea saepe at unde.</em>
                    <h5 className="text-primary-emphasis my-3">Profile Details</h5>
                    <div className="d-flex fs-6 gap-5"><p className="text-secondary">Full Name</p> <p className="ms-1">Patrick Gregory</p></div>
                    <div className="d-flex fs-6 gap-5"><p className="text-secondary">Company</p> <p className="ms-2">Ex-Student, IJAN Africa</p></div>
                    <div className="d-flex fs-6 gap-5"><p className="text-secondary">Job</p> <p className="ms-5">FullStack Developer</p></div>
                    <div className="d-flex fs-6 gap-5"><p className="text-secondary">Country</p> <p className="ms-3">Nigeria</p></div>
                    <div className="d-flex fs-6 gap-5"><p className="text-secondary">Address</p> <p className="ms-3">Somewhere in Lagos, Nigeria</p></div>
                    <div className="d-flex fs-6 gap-5"><p className="text-secondary">Phone</p> <p className="ms-4">(234) 0811-511-2841</p></div>
                    <div className="d-flex fs-6 gap-5"><p className="text-secondary">Email</p> <p className="ms-4">patrickgregoryekene@gmail.com</p></div>
                </Tab>
                <Tab className="fs-6" eventKey="profile" title="Edit Profile">
                    <div className="d-flex">
                        <h6 className="text-secondary w-50">Profile Image</h6>
                        <div className="ms-5">
                            <img src="./images/profile.jpg" className="w-25" alt="kantee" />
                            <div className="mt-1">
                                <Button size="sm" variant="primary me-1"><BsUpload /></Button>
                                <Button size="sm" variant="danger"><FaTrashCan /></Button>
                            </div>
                        </div>
                    </div>
                    <form className="my-3">
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Full Name</label>
                            <input type="text" defaultValue={`Patrick Gregory`} class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5">
                            <label for="exampleFormControlTextarea1" class="form-label text-secondary">About</label>
                            <textarea class="form-control w-75 ms-auto me-2" rows={4} defaultValue='Nesciunt totam et. Consequuntur magnam aliquid 
                                eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat.Itaque doloremque
                                 aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut 
                                 laboriosam voluptatum dicta.' id="exampleFormControlTextarea1"></textarea>
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Company</label>
                            <input type="text" defaultValue='Freelancer at Nigerian Tech Space' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Job</label>
                            <input type="text" defaultValue='FullStack Developer' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Country</label>
                            <input type="text" defaultValue='Nigeria' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Address</label>
                            <input type="text" defaultValue='Somewhere in Lagos' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Phone</label>
                            <input type="text" defaultValue='(+234) 811-511-2841' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Email</label>
                            <input type="email" defaultValue='patrickgregoryekene@gmail.com' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Twitter Profile</label>
                            <input type="text" defaultValue='https://x.com/#' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Facebook Profile</label>
                            <input type="text" defaultValue='https://facebook.com/#' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">Github Profile</label>
                            <input type="text" defaultValue='https://github.com/PatrickGregory' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <div class="mb-3 d-flex gap-5 fs-6">
                            <label for="floatingInputGroup1" className="text-secondary">LinkedIn Profile</label>
                            <input type="text" defaultValue='https://www.linkedin.com/in/patrick-emeka/' class="form-control w-75 ms-auto me-2" />
                        </div>
                        <button className="btn btn-primary center">Save Changes</button>
                    </form>
                </Tab>
                <Tab className="fs-6" eventKey="setting" title="Settings">
                    <div className="">
                        <div className="fs-6 row gap-4">
                            <p className="col-3">Email Notifications</p>
                            <div className="col-8">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Changes made to your account
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Information on new product and services
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Market promo offers
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                    <label className="form-check-label" for="flexCheckCheckedDisabled">
                                        Security alert
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary center">Save Changes</button>
                    </div>
                </Tab>
                <Tab className="fs-6" eventKey="password" title="Change Password">
                    <form>
                        <div class="row g-3 mb-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Current Password</label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 mb-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">New Password</label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Re-enter New Password</label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary center">Change Password</button>
                    </form>
                </Tab>
            </Tabs>
        </div>
    )
}