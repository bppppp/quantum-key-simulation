import { Navigate } from 'react-router-dom'
import QuantumIdentityAuthentication from '../page/QuantumIdentityAuthentication/index.jsx'
import QuantumKeyDistribution from '../page/QuantumKeyDistribution/index.jsx'

const routes = [
  {
    path: '/quantumKeyDistribution',
    element: <QuantumKeyDistribution />
  },

  {
    path: '/quantumIdentityAuthentication',
    element: <QuantumIdentityAuthentication />
  },

  {
    path: '/',
    element: <Navigate to='/quantumKeyDistribution' />
  }
]
export default routes