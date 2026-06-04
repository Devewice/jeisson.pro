import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import CvViewer from './pages/CvViewer.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cv/dev" element={<CvViewer variant="dev" />} />
        <Route path="cv/creativo" element={<CvViewer variant="creativo" />} />
      </Route>
    </Routes>
  )
}
