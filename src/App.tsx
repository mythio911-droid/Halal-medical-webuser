import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth Protected Wrapper
const ProtectedRoute = ({ children, role }: { children: React.ReactNode, role?: string }) => {
  const savedUser = localStorage.getItem('currentUser');
  if (!savedUser) return <Navigate to="/" replace />;

  if (role) {
    const user = JSON.parse(savedUser);
    if (user.role !== role) return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

// Public Pages
import LandingPage from "./pages/Index";
import HospitalsLanding from "./pages/Hospitals";
import PatientStories from "./pages/PatientStories";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import MedicalInquiry from "./pages/MedicalInquiry";
import NotFound from "./pages/NotFound";
import ProfileSettings from "./pages/ProfileSettings";

// Auth Gateway (New Home)
import Auth from "./pages/Auth";

// Admin Portal Pages
import AdminLayout from "./components/layout/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminHospitals from "./pages/admin/Hospitals";
import AdminDoctors from "./pages/admin/Doctors";
import PendingApprovals from "./pages/admin/PendingApprovals";
import AuditLogs from "./pages/admin/AuditLogs";
import AdminLogin from "./pages/admin/AdminLogin";

// Hospital Portal Pages
import HospitalLayout from "./components/layout/hospital/HospitalLayout";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import DoctorAvailability from "./pages/hospital/DoctorAvailability";
import HospitalProfile from "./pages/hospital/HospitalProfile";
import ChangeRequests from "./pages/hospital/ChangeRequests";
import HospitalLogin from "./pages/hospital/HospitalLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default Gateway (Requirement: Login to see website) */}
          <Route path="/" element={<Auth />} />

          {/* Protected Website Routes */}
          <Route path="/home" element={<ProtectedRoute><LandingPage /></ProtectedRoute>} />
          <Route path="/hospitals" element={<ProtectedRoute><HospitalsLanding /></ProtectedRoute>} />
          <Route path="/patient-stories" element={<ProtectedRoute><PatientStories /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
          <Route path="/medical-inquiry" element={<ProtectedRoute><MedicalInquiry /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfileSettings /></ProtectedRoute>} />

          {/* Admin Routes (Protected by role) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminLayout><AdminDashboard /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/hospitals" element={
            <ProtectedRoute role="admin">
              <AdminLayout><AdminHospitals /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/doctors" element={
            <ProtectedRoute role="admin">
              <AdminLayout><AdminDoctors /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/approvals" element={
            <ProtectedRoute role="admin">
              <AdminLayout><PendingApprovals /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/audit" element={
            <ProtectedRoute role="admin">
              <AdminLayout><AuditLogs /></AdminLayout>
            </ProtectedRoute>
          } />

          {/* Hospital Routes (Protected by role) */}
          <Route path="/hospital/login" element={<HospitalLogin />} />
          <Route path="/hospital" element={
            <ProtectedRoute role="hospital">
              <HospitalLayout><HospitalDashboard /></HospitalLayout>
            </ProtectedRoute>
          } />
          <Route path="/hospital/availability" element={
            <ProtectedRoute role="hospital">
              <HospitalLayout><DoctorAvailability /></HospitalLayout>
            </ProtectedRoute>
          } />
          <Route path="/hospital/profile" element={
            <ProtectedRoute role="hospital">
              <HospitalLayout><HospitalProfile /></HospitalLayout>
            </ProtectedRoute>
          } />
          <Route path="/hospital/requests" element={
            <ProtectedRoute role="hospital">
              <HospitalLayout><ChangeRequests /></HospitalLayout>
            </ProtectedRoute>
          } />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
