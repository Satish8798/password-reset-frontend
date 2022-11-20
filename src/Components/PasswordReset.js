const PasswordReset = () => {
    return ( 
        <div>
            <form className="mt-4 p-2 w-25 ms-5 w-md-100">
                    <div className="form-floating mb-3 ">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="password-change">
                        <div className="form-floating  mb-3">
                            <input type="password" name="email" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">New Password</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name="confirm" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Reset</button>
            </form>
        </div>
     );
}
 
export default PasswordReset;