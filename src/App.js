import { useNavigate, useRoutes } from 'react-router-dom'
import routes from './config/routes'
import './App.less'
import { Button } from 'antd'
import 'antd/dist/antd.min.css'
function App() {
  const elementRoute = useRoutes(routes)
  const navigate = useNavigate()
  const jump2OtherPage = (page) => {
    navigate(`/${page}`)
  }
  return (
    <div className="App">
      <div className='outer-layout'>
        <div className='outer-layout-left'>
          <div className='outer-layout-title left-button'>通信协议选择</div>
          <div><Button className='left-button' type="primary" onClick={()=>jump2OtherPage('quantumKeyDistribution')}>Key Distribution</Button></div>
          <div><Button className='left-button' type="primary" onClick={()=>jump2OtherPage('quantumIdentityAuthentication')}>Identity Authentication</Button></div>
        </div>
        <div className='outer-layout-right'>{elementRoute}</div>
      </div>
    </div>
  );
}

export default App;
