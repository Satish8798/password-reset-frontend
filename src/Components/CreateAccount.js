import { useState } from "react";
import axios from "axios";

const CreateAccount = () => {
  const [accountData, setData] = useState({
    email: "",
    password: "",
  });

  const [createStatus, setCreateStatus] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post("https://password-reset-zen.herokuapp.com/create-account", {
        ...accountData
      });
      setCreateStatus(response.data.msg);
      setData({
        email: "",
    password: "",
      })
      setInterval(()=>{
        setCreateStatus(false);
      },3000)
    } catch (error) {
      console.log(error);
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
            value={accountData.email}
            onChange={(e) => {
              setData({ ...accountData, email: e.target.value });
            }}
            className="form-control"
            id="floatingInput"
            required
          />
          <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            onChange={(e) => {
              setData({ ...accountData, password: e.target.value });
            }}
            value={accountData.password}
            className="form-control"
            id="floatingPassword"
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Create
        </button>
      </form>
        {createStatus &&
            <div class="alert alert-success w-25 ms-5" role="alert">
            account created!!
        </div>
        }
    </div>
  );
};

export default CreateAccount;
