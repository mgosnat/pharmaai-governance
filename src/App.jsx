import { Routes, Route } from 'react-router-dom'
import GovernancePage from './pages/GovernancePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GovernancePage lang="en" />} />
      <Route path="/fr" element={<GovernancePage lang="fr" />} />
    </Routes>
  )
}
