

export const ContactIcon = ({ icon, heading, content, subContent }) => {
    return (
        <div>
            <i className="fs-1 text-primary">{icon}</i> <br />
            <h4 className="text-primary-emphasis">{heading}</h4>
            <p className="lh-1">{content}</p>
            <p className="lh-1">{subContent}</p>
        </div>
    )
}

export const Message = () => {
    return (
        <form className="h-100">
            <div class="row g-3 my-4">
                <div class="col">
                    <input type="text" class="form-control remove-round" placeholder="Your Name" aria-label="Your Name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control remove-round" placeholder="Your Email" aria-label="Your Email" />
                </div>
            </div>
            <div class="col mb-4">
                <input type="text" class="form-control remove-round" placeholder="Subject" aria-label="Subject" />
            </div>
            <div class="my-3">
                <textarea class="form-control remove-round" placeholder="Message" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className="d-flex justify-content-center my-3">
                <button className="btn btn-primary btn-lg">Send Message</button>
            </div>
        </form>
    )
}