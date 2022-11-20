const CreateAccount = () => {
    return ( 
        <div>
            <form className="mt-4 p-2 w-25 ms-5 w-md-100">
                    <div className="form-floating mb-3 ">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Create</button>
            </form>
        </div>
     );
}
 
export default CreateAccount;