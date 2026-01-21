import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import Header from "./Header";
import DropdownAuthors from "./DropdownAuthors";
import Criteria from "./CriteriaPage";
import CaseStudyPage from "./CaseStudyPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <DropdownAuthors />
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
