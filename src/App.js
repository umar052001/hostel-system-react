import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./components/home/home-page";
import Navbar from "./components/navbar/navbar.component";
import SignIn from "./components/sign-in/sign-in.component";
import Owner from "./components/owner/owner.component";
import Tenant from "./components/tenant/tenant.component";
import Error from "./components/Error/error.page";
function App() {
  const [isOwnerSignedIn, setIsOwnerSignedIn] = useState(false);
  const [isTenantSignedIn, setIsTenantSignedIn] = useState(false);
  const [doSignIn, setDoSignIn] = useState({
    email: "",
    password: "",
    type: "owner",
  });

  console.log(isTenantSignedIn);
  return (
    <div>
      <Navbar
        isOwnerSignedIn={isOwnerSignedIn}
        isTenantSignedIn={isTenantSignedIn}
        setIsOwnerSignedIn={setIsOwnerSignedIn}
        setIsTenantSignedIn={setIsTenantSignedIn}
      />
      <Routes>
        {isOwnerSignedIn || isTenantSignedIn ? (
          <>
            <Route
              path="/owner"
              element={<Owner userEmail={doSignIn.email} />}
            />
            <Route path="/tenant" element={<Tenant />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/signin"
              element={
                <SignIn
                  setIsOwnerSignedIn={setIsOwnerSignedIn}
                  setIsTenantSignedIn={setIsTenantSignedIn}
                  doSignIn={doSignIn}
                  setDoSignIn={setDoSignIn}
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
