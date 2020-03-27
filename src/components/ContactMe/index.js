import React from "react";

function ContactMe() {
  return(
    <div className="col-md-9">
      <div className="col">
        <br />
        <article className="block">
          <h1 className="block-header">Contact Me</h1>
          <hr />              
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name </label>
              <input type="name" className="form-control" id="name1" placeholder="John Doe" onfocus="this.placeholder = ''" onblur="this.placeholder = 'John Doe'" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">E-Mail </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" onfocus="this.placeholder = ''" onblur="this.placeholder = 'example@gmail.com'" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Comments or questions</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{resize: "none"}}></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </article>
      </div>
    </div>
  )
}

export default ContactMe;