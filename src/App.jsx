import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import CvHub from './pages/CvHub.jsx'
import CvViewer from './pages/CvViewer.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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
