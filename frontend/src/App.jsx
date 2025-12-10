import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentProfilePage from "./pages/etudiant/profil/page";
import LoginPage from "./pages/auth/page";
import StudentOffersPage from "./pages/etudiant/offres/page";
import StudentDetailsOfferPage from "./pages/etudiant/offres/[id]/page";
import CompanyOffersPage from "./pages/entreprise/offres/page";
import CompanyProfilePage from "./pages/entreprise/profil/page";
import CompanyOfferDetailsPage from "./pages/entreprise/offres/[id]/page";
import CompanyOfferApplicationsPage from "./pages/entreprise/offres/candidatures/page";

import { OffersProvider } from "./hooks/useoffers";
import { SnackbarProvider } from "notistack";
// Pages communes
// import Home from './pages/Home';

function AppRoutes() {
  const { isAuthenticated, isStudent, isCompany, user } = useAuth();

  return (
    <div className="app-content">
      {/* <Header /> */}
      <main className="page-content">
        <Routes>
          {/* Routes publiques */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                user?.role === 'STUDENT' ? (
                  <Navigate to="/etudiant/profil" replace />
                ) : (
                  <Navigate to="/entreprise/profil" replace />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />
            }
          />

          {/* Routes pour les étudiants */}
          <Route
            path="/etudiant/profil"
            element={
              <ProtectedRoute requiredRole="STUDENT">
                <StudentProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/etudiant/offres"
            element={
              <ProtectedRoute requiredRole="STUDENT">
                <StudentOffersPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/etudiant/offres/:id"
            element={
              <ProtectedRoute requiredRole="STUDENT">
                <StudentDetailsOfferPage />
              </ProtectedRoute>
            }
          />

          {/* ... */}

          {/* Routes pour les entreprises */}

          <Route
            path="entreprise/profil"
            element={
              <ProtectedRoute requiredRole="COMPANY">
                <CompanyProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="entreprise/offres"
            element={
              <ProtectedRoute requiredRole="COMPANY">
                <CompanyOffersPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="entreprise/offres/:id"
            element={
              <ProtectedRoute requiredRole="COMPANY">
                <CompanyOfferDetailsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="entreprise/offres/candidatures/:id"
            element={
              <ProtectedRoute requiredRole="COMPANY">
                <CompanyOfferApplicationsPage />
              </ProtectedRoute>
            }
          />

          {/* ... */}

          {/* Routes partagées - redirigent vers le bon composant selon le rôle */}
          <Route
            path="/applications"
            element={
              isStudent ? (
                <ProtectedRoute requiredRole="STUDENT">
                  {/* page candidature */}
                </ProtectedRoute>
              ) : isCompany ? (
                <ProtectedRoute requiredRole="COMPANY">
                  {/* page candidats */}
                </ProtectedRoute>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* ... */}

          {/* Route 404 */}
          <Route path="*" element={<>{/* à implémenter */}</>} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <OffersProvider>
          <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <AppRoutes />
          </SnackbarProvider>
        </OffersProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
