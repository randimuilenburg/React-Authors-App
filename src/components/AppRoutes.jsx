import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./Header";
import AuthorDropdown from "./Dropdown";
import Criteria from "./CriteriaPage";
import CaseStudyPage from "./CaseStudyPage";
import authorData from "../data/AuthorData";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AuthorDropdown authors={authorData} />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/criteria" element={<Criteria />} />
        <Route path="/casestudy" element={<CaseStudyPage />} />
      </Routes>
    </>
  );
}
