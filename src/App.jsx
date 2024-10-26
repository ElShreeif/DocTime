import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";

function App() {
 return (
  <Router>
   <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-grow">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/about" element={<About />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="*" element={<Error />} />
     </Routes>
    </div>
    <Footer />
   </div>
  </Router>
 );
}

export default App;
