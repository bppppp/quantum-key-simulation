import React, {useState} from "react"
import './index.less'
import { Tabs } from 'antd';
import ClassToClass from "./page/ClassToClass";
import QuantumToClass from "./page/QuantumToClass";
const QuantumKeyDistribution = () => {
  const [modelSelect, setModelSelect] = useState('1')
  console.log(123)
  return <div className="key-distribution-container">
    <div className="key-distribution-tab">
      <div className="tab-inner">
        <Tabs 
          defaultActiveKey="1"
          activeKey={modelSelect}
          onTabClick={(key) => setModelSelect(key)}
          size='large'
          items={
            [
              {
                label: '123',
                key: '1',
              },
              {
                label: '456',
                key: '2',
              }
            ]
          }
        />
      </div>
    </div>
    <div className="key-distribution-content">
      {modelSelect === '1'? <QuantumToClass />:modelSelect === '2'? <ClassToClass />: null}
    </div>
  </div>
}
export default QuantumKeyDistribution