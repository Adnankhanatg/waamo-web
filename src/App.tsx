import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/shared/AboutUs";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import RegistrationForm from "./components/shared/RegistrationForm";
import VolunteerForm from "./components/shared/VolunteerForm";
import Home from "./components/shared/Home";
import EducationalProgram from "./components/shared/EducationalProgram";
import VolunteerProgram from "./components/shared/VolunteerProgram";
import Contact from "./components/shared/Contact";
import ScrollToTop from "./components/shared/ScrollToTop";
import NoticeBanner from "./components/shared/NoticeBanner";


const App: React.FC = () => {
  return (
    
    <Router>
      {/* Navigation */}
      <div className="">
        <NoticeBanner />
      </div>
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<EducationalProgram />} />
        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Contact />{" "}
            </>
          }
        />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
        <Route
          path="/volunteer-program"
          element={
            <>
              {" "}
              <VolunteerProgram />{" "}
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
      <ScrollToTop />
  
      <Footer />
    </Router>
  );
};

export default App;
