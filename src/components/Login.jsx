import React from 'react'
import Header from "./Header";



const Login = () => {
  return (
    <div>
      <Header />

       <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
          <div class="card card-4">
            <div class="card-body">
              <h2 class="title">Logga in</h2>

              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Din e-post</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
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
                  Logga in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
