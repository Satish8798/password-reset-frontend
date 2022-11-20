import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import PasswordReset from "./Components/PasswordReset";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Dashboard />}> */}
            <Route
              path="create-account"
              element={<CreateAccount />}
            />
            <Route path="reset-password" element={<PasswordReset />} />
        </Routes>
    </div>
  );
}

export default App;
