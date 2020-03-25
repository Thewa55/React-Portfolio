import React from "react";

function ContactMe() {
  return(
    <div class="col-md-9">
      <div class="col">
        <br />
        <article class="block">
          <h1 class="block-header">Contact Me</h1>
          <hr />              
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Name </label>
              <input type="name" class="form-control" id="name1" placeholder="John Doe" onfocus="this.placeholder = ''" onblur="this.placeholder = 'John Doe'" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">E-Mail </label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" onfocus="this.placeholder = ''" onblur="this.placeholder = 'example@gmail.com'" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Comments or questions</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{resize: "none"}}></textarea>
            </div>
            <div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </article>
      </div>
    </div>
  )
}

export default ContactMe;