import axios from "axios";
import { useState } from "react";

const PasswordReset = () => {
  const [accountData, setData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: null,
  });
  const [passwordChangeStatus, setPasswordChangeStatus] = useState(false);
  const [alert , setAlert] = useState(false);
  const [matching, setMatching] = useState(true);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("arrived")
    if (!accountData.confirmPassword) {
      try {
        let response = await axios.post(
          "http://localhost:8000/search-account",
          {
            ...accountData,
          }
        );
        console.log(response)
        if(response.data.msg){
            setPasswordChangeStatus(true);
        }else{
            setAlert(true);
            setTimeout(()=>{
                setData({...accountData,email:""})
                console.log(accountData)
                setAlert(false);
                
            },3000);
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      setMatching(true);
      setSuccess(false);
      try {
        let response = await axios.post(
          "http://localhost:8000/reset-account",
          {
            ...accountData,
          }
        );
        console.log(response)
        if(response.data.msg){
          setMatching(true);
          setSuccess(true);

        }else{
          setMatching(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <form
        className="mt-4 p-2 w-25 ms-5 w-md-100"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-floating mb-3 ">
          <input
            type="email"
            onChange={(e) => {
              setData({ ...accountData, email: e.target.value });
            }}
            className="form-control"
            id="floatingInput"
            value={accountData.email}
            required
          />
          <label for="floatingInput">Email</label>
        </div>
        {passwordChangeStatus && (
          <div className="password-change">
            <div className="form-floating  mb-3">
              <input
                type="password"
                onChange={(e) => {
                  setData({ ...accountData, newPassword: e.target.value });
                }}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">New Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                onChange={(e) => {
                  setData({ ...accountData, confirmPassword: e.target.value });
                }}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Reset
            </button>
          </div>
        )}
        {!passwordChangeStatus && (
          <button type="submit" className="btn btn-success mt-3">
            Search
          </button>
        )}
        {
            alert &&
            (  
                <div class="alert alert-success w-75 mt-3 ms-1" role="alert">
                    account not found!!
                </div>

            )
        }
        {
            success &&
            (  
                <div class="alert alert-success w-75 mt-3 ms-1" role="alert">
                    password Changed successfully
                </div>

            )
        }
        {
          !matching &&
          (  
              <div class="alert alert-success w-75 mt-3 ms-1" role="alert">
                  passwords not matching
              </div>

          ) 
        }
      </form>
    </div>
  );
};

export default PasswordReset;
