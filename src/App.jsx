import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import AccessEntry from './pages/AccessEntry.jsx'
import AccessDenied from './pages/AccessDenied.jsx'

const Landing = lazy(() => import('./pages/Landing.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const CvHub = lazy(() => import('./pages/CvHub.jsx'))
const CvViewer = lazy(() => import('./pages/CvViewer.jsx'))

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/acceso/:token" element={<AccessEntry />} />
      <Route path="/acceso-invalido" element={<AccessDenied />} />
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="sobre-mi" element={<About />} />
        <Route path="servicios" element={<Services />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="contacto" element={<Contact />} />
        <Route
          path="interno"
          element={
            <ProtectedRoute>
              <CvHub />
            </ProtectedRoute>
          }
        />
        <Route
          path="cv/dev"
          element={
            <ProtectedRoute>
              <CvViewer variant="dev" />
            </ProtectedRoute>
          }
        />
        <Route
          path="cv/creativo"
          element={
            <ProtectedRoute>
              <CvViewer variant="creativo" />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}
