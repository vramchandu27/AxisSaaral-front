import React from "react";
import { ReactDOM } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ContactUs from "./Pages/Contactus";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserDashboard from "./Components/UserDashboard";
import GeneralDocs from "./Components/GeneralDocs";
import Projects from "./Components/Projects";
import SpecificDocs from "./Components/SpecificDocs";
import NewsFeed from "./Components/NewsFeed";
import EmployeeData from "./Components/EmployeeData";
import ManagerDashboard from "./Components/ManagerDashboard";
import SalarySlips from "./Components/SalarySlips";
import DeleteUser from "./Components/DeleteUser";
import VerifyData from "./Components/VerifyData";
import AdminDashboard from "./Components/AdminDashboard";
import DocumentsUpload from "./Components/DocumentsUpload";
import ProductsUpload from "./Components/ProductsUpload";
import NewsfeedUpload from "./Components/NewsfeedUpload";
import ManagerData from "./Components/ManagerData";
import ProjectUpload from "./Components/ProjectUpload";
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/UserDashboard/*" element={<UserDashboard />}>
          <Route path="GeneralDocs" element={<GeneralDocs />} />
          <Route path="SpecificDocs" element={<SpecificDocs />} />
          <Route path="NewsFeed" element={<NewsFeed />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
        <Route path="/ManagerDashboard/*" element={<ManagerDashboard />}>
          <Route path="GeneralDocs" element={<GeneralDocs />} />
          <Route path="SpecificDocs" element={<SpecificDocs />} />
          <Route path="NewsFeed" element={<NewsFeed />} />
          <Route path="EmployeeData" element={<EmployeeData />} />
        </Route>
        <Route path="/AdminDashboard/*" element={<AdminDashboard />}>
          <Route path="VerifyData" element={<VerifyData />} />
          <Route path="DeleteUser" element={<DeleteUser />} />
          <Route path="SalarySlips" element={<SalarySlips />} />
          <Route path="EmployeeData" element={<EmployeeData />} />
          <Route path="ManagerData" element={<ManagerData />} />
          <Route path="DocumentsUpload" element={<DocumentsUpload />} />
          <Route path="ProductsUpload" element={<ProductsUpload />} />
          <Route path="NewsfeedUpload" element={<NewsfeedUpload />} />
          <Route path="ProjectUpload" element={<ProjectUpload />} />


        </Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;