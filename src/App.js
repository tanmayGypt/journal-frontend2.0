import "./App.css";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Policy from "./components/policy/policy";

import BasicInfo from "./components/info about bbj/bbj";
import AimAndScope from "./components/aim & scope/aim";
import Objectives from "./components/objective/objective";
import Guidelines from "./components/guidlines/guidelines";
import IssuePlagia from "./components/Issue and plagiarism/issuepl";
import AdBoard from "./components/Boards/AdvisoryBoard/AdBoard";
import Members from "./components/Boards/Members/members";
import Editorial from "./components/Boards/editorial board/eb";
import Faq from "./components/FAQ/faq";
import ManuScript from "./components/aim & scope/aim";
// import ManuScriptForm from "./components/submit_menuscript form/smf";
import AuthorGuideLines from "./components/author Guidelines/All";
// import Contacts from "./components/contact us/contact";
import AimandScopePage from "./components/aim page/aim";
import MemberForm from "./components/Board Form/Board";
import Contact from "./components/contact us/contact";
import PeerReview from "./components/peer reviews/PeerReview/Pr";
import JoinAsPeerForm from "./components/peer reviews/JoinAsPeerReview/pr";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AdvisoryBoard() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />

      <AdBoard />
      <Members />
    </>
  );
}
function EditorialBoard() {
  return (
    <>
      <br />
      <br />
      <br />
      <Editorial />
    </>
  );
}

function AimandScope() {
  return (
    <>
      <AimandScopePage />
    </>
  );
}

function ManuScr() {
  return (
    <>
      <ManuScript />
    </>
  );
}

function AuthorGuides() {
  return (
    <>
      <AuthorGuideLines />
    </>
  );
}

function PeerReviewFunction() {
  return (
    <>
      <PeerReview />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

function Faqfunction() {
  return (
    <>
      <br />
      <br />
      <br />
      <Faq />
    </>
  );
}

function Home() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <BasicInfo />
      <AimAndScope />
      <Objectives />
      <Guidelines />
      <IssuePlagia />
      <br />
      <br />
      <br />
    </>
  );
}

function ContactFunction() {
  return (
    <>
      <Contact />
    </>
  );
}

function PolicyFunction() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Policy />
    </>
  );
}

function AuthorGuidelines() {
  return (
    <>
      <br />
      <br />
      <br />
      <AuthorGuideLines />
    </>
  );
}

function JoinAsPeer() {
  return (
    <>
      <br />
      <br />
      <br />
      <JoinAsPeerForm />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdvisoryBoard" element={<AdvisoryBoard />} />
          <Route path="/EditorialBoard" element={<EditorialBoard />} />
          <Route path="/Aim" element={<AimandScope />} />
          <Route path="/Policy" element={<PolicyFunction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Faqs" element={<Faqfunction />} />

          <Route path="/guidelines" element={<AuthorGuides />} />
          <Route path="/submitManuscript" element={<ManuScr />} />

          <Route path="/PeerReview" element={<PeerReviewFunction />} />
          <Route path="/joinReviewer" element={<JoinAsPeer />} />

          <Route path="/addContact" element={<ContactFunction />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
