import React from "react";

function Portfolio(){
  return(
    <div>
      <div class="col-md-9">
        <div class="col">
          <br />
            <article class="block">
              <h3 class="block-header">Portfolio</h3>
              <hr />              
              <div class="row">
                <div class="col-md-3">
                  <a href="https://github.com/Thewa55">
                    <img src="assets/images/Github.png" alt ="" class="ri" /> 
                    <div class="MI">My Github</div>
                  </a>
                </div>
                <div class="col-md-3  offset-md-2">
                  <a href="https://www.linkedin.com/in/kenny-lam-214a1428/">
                    <img src="assets/images/linkedin.jfif" alt ="" class="ri rr" />
                    <div class="MI IR">My Linkedin</div>
                  </a>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-3">
                  <a href="https://thewa55.github.io/HW-Wireframe.github.io/">
                    <img src="assets/images/wire.jfif" alt =""  class="ri" /> 
                    <div class="MI">Wireframe</div>
                  </a>
                </div>
                <div class="col-md-3  offset-md-2">
                  <a href="https://github.com/Thewa55/PasswordGenerator">
                    <img src="assets/images/password.jfif" alt ="" class="ri rr" />
                    <div class="MI IR">PW Generator</div>
                  </a>
                </div>
              </div>
              <div>
                 <h1>Work in Progress!!!!</h1> 
              </div>
            </article>
          </div>
        </div>
     </div> 
  )
}

export default Portfolio;