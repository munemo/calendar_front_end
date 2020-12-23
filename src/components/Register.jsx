import React from 'react'

const Register = () => {
  return (
    <div>
      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
          <div class="card card-4">
            <div class="card-body">
              <h2 class="title">Registrera dig</h2>

              <form>
                <div class="form-group">
                  <label for="exampleInputName">Ditt namn</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInpuName"
                    aria-describedby="emailHelp"
                    
                  ></input>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Din e-post</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    
                  ></input>
                  <small id="emailHelp" class="form-text text-muted">
                    Ingen annnan får ta del av din e-post!
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputApartmentNumber">
                    Lägenhetsnummer
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleApartmentNumber"
                    aria-describedby="emailHelp"
                    
                  ></input>
                  
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Lösenord</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    
                  ></input>
                </div>
               
                <button type="submit" class="btn btn-primary">
                  Registrera
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register
