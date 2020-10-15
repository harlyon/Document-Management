import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/auth";
import DashboardIndex from "./dashboard";
import CreateDocumentIndex from "./dashboard/documents/createDocument";
import PrivateDocumentIndex from "./dashboard/documents/privateDocument";
import PublicDocumentIndex from "./dashboard/documents/publicDocument";
import ProfileIndex from "./dashboard/profile";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Footer from "./pages/Footer";
import Main from "./pages/Main/index";
import AuthRoute from "./utils/authRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <AuthRoute exact path="/dashboard" component={DashboardIndex} />
          <AuthRoute exact path="/profile" component={ProfileIndex} />
          <AuthRoute exact path="/private" component={PrivateDocumentIndex} />
          <AuthRoute exact path="/public" component={PublicDocumentIndex} />
          <AuthRoute exact path="/create" component={CreateDocumentIndex} />
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
