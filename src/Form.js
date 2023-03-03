import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Form.css';


function Form() {

  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [number, setNumber] = useState("");
  const [numberErr, setNumberErr] = useState("");

  const [id, setid] = useState('')
  const navigate = useNavigate();

  var { paramId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!username) {
      setUsernameErr("Please enter a username");
      hasError = true;
    } else {
      setUsernameErr("");
    }

    if (!email) {
      setEmailErr("Please enter email");
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErr("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailErr("");
    }

    const phoneNumberRegex = /^\d{10}$/;

    if (!phoneNumberRegex.test(number)) {
      setNumberErr("Please enter a valid phone number");
      hasError = true;
    } else {
      setNumberErr("");
    }

    if (!hasError) {

      if ((paramId)) {
        fetch('https://63cfb75b8a780ae6e67b1f01.mockapi.io/user/' + paramId, {
          method: 'PUT',
          body: JSON.stringify({
            'username': username,
            'email': email,
            'number': number,
            'id': id

          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
          .then((res) => {
            console.log('res :', res)
            navigate('/Table')
          })

      } else {
        fetch('https://63cfb75b8a780ae6e67b1f01.mockapi.io/user', {
          method: 'POST',
          body: JSON.stringify({
            'username': username,
            'email': email,
            'number': number

          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
          .then((response) => response.json()
            .then((data) => {
              console.log(data)
              navigate('/Table');
            })
            .catch((err) => {
              alert(err.message)
            })
          )
      }
    }
  }

  useEffect(() => {
    if (paramId) {
      fetch(`https://63cfb75b8a780ae6e67b1f01.mockapi.io/user/${paramId}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setUsername(data.username);
          setEmail(data.email);
          setNumber(data.number);
          setid(data.id);
        })
    }
  }, [paramId]);

  return (
    <div>
      <>
        <div className="container  mt-5 mx-auto d-block">
          <div className="row justify-content-center ">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card shadow">
                <div className="card-title text-center border-bottom">
                  <h2 className="p-3"> Employee form</h2>
                </div>
                <div className="card-body ">

                  <form onSubmit={handleSubmit} >

                    <div className="mb-4">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                      {usernameErr && <p className="error">{usernameErr}</p>}
                    </div>


                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control" value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      {emailErr && <p className="error">{emailErr}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="number" className="form-label">
                        PhoneNumber
                      </label>
                      <input
                        type="number"
                        className="form-control" value={number} onChange={e => setNumber(e.target.value)}
                      />
                      {numberErr && <p className="error">{numberErr}</p>}
                    </div>

                    <div className="d-grid mb-4">
                      <button type="submit" className="btn text-light main-bgg">
                        SUBMIT
                      </button>

                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Form;