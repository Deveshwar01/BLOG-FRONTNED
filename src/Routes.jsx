import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/User/Home";
import NotFound from "pages/User/NotFound";


// user routes
const BloggerDetails = React.lazy(() => import("pages/User/Podcasts"));
const ContactUs = React.lazy(() => import("pages/User/ContactUs"));
const BlogDetails = React.lazy(() => import("pages/User/SingleBlox"));
const LandingPage = React.lazy(() => import("pages/User/LandingPage"));
const AllBogs = React.lazy(() => import("pages/User/BlogsPage/index"));



// admin routes
const AdminHomePage = React.lazy(() => import("pages/Admin/Home"));
const AddPodcast = React.lazy(() => import("./components/admin/Podcast/index"));
const AddBlog = React.lazy(() => import("./components/admin/Blog/blog"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/podcasts" element={<BloggerDetails />} />
          <Route path="/allblogs" element={<AllBogs />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />


          <Route>
            <Route path="/admin/dashboard" element={<AdminHomePage />} />
            <Route path="/admin/addblog" element={<AddBlog />} />
            <Route path="/admin/addpodcast" element={<AddPodcast />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
