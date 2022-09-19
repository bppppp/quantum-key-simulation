import './QuantumToClass.less'
import { Steps, Button } from 'antd'
import { useState } from 'react'
import { UserOutlined } from '@ant-design/icons';

const { Step } = Steps
const QuantumToClass = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentStatus, setCurrentStatus] = useState('process') //指定当前步骤的状态，可选 wait process finish error
  
  const stepsList = [['第 1 步','第一步'],['第 2 步','第一步'],['第 3 步','第一步'],['第 4 步','第一步'],['第 5 步','第一步'],['第 6 步','第一步'],['第 7 步','第一步'],['第 8 步','第一步'],['第 9 步','第一步']]

  const nextSucceseStep = () => {
    if (currentStep < 0) {
      return 
    }
    if (currentStep === stepsList.length - 1) {
      return 
    }
    setCurrentStep(currentStep + 1)
  }
  const errorHappen = () => {
    setCurrentStatus('error')
  }
  const restart = () => {
    setCurrentStep(0)
    setCurrentStatus('process')
  }
  return <div className="quantum-to-class-container">
    <div className="quantum-to-class-content">
      <div className='steps-line'>
        <Steps current={currentStep} size="small" labelPlacement="vertical" status={currentStatus}>
          {stepsList.map((value) => <Step title={value[0]} description={value[1]} key={value[0]} />)}
        </Steps>
      </div>
      <div className="quantum-to-class-content-up">
        <div className="user-container">
          <div className="user-container-left"><UserOutlined style={{ fontSize: '150px', color: '#08c' }} />
            <div>Alice</div>
            <div className="user-describe">量子方</div>
          </div>
          <div>123</div>
        </div>
        <div className="user-container">
          <div className="user-container-left"><UserOutlined style={{ fontSize: '150px', color: '#08c' }} />
            <div>Cindy</div>
            <div className="user-describe">第三方</div>
          </div>
          <div>123</div>
        </div>
        <div className="user-container">
          <div className="user-container-left"><UserOutlined style={{ fontSize: '150px', color: '#08c' }} />
            <div>Bob</div>
            <div className="user-describe">经典方</div>
          </div>
          <div>123</div>
        </div>
      </div>
      <div className="quantum-to-class-content-down">
        <div></div>
        <Button onClick={nextSucceseStep} disabled={currentStatus === 'error'} size='large'>下一步</Button>
        <Button onClick={restart} size='large'>重新开始</Button>
        {/* <Button onClick={errorHappen}>发生错误</Button> */}
      </div>
    </div>
    <div className="quantum-to-class-operation">
      <div className='unilateral-attack'>
        <div className='attact-title'>单边攻击</div>
        <div className='attact-type'>
          <Button danger disabled={false}>拦截攻击</Button>
          <Button danger>测量重发攻击</Button>
          <Button danger>纠缠测量攻击</Button>
          <Button danger>篡改攻击</Button>
        </div>
      </div>
      <div className='bilateral-attack'>
      <div className='attact-title'>双边攻击</div>
        <div className='attact-type'>
          <Button danger disabled={false}>拦截攻击</Button>
          <Button danger>测量重发攻击</Button>
          <Button danger>纠缠测量攻击</Button>
          <Button danger>篡改攻击</Button>
        </div>
      </div>
    </div>
  </div>
}

export default QuantumToClass