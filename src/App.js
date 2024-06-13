import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './componentes/Tabla';  
import App from "./App"
const tabData = [
  {
    label: 'Tab 1',
    content: <div>Content of Tab 1</div>,
    onClick: () => console.log('Tab 1 clicked')
  },
  {
    label: 'Tab 2',
    content: <div>Content of Tab 2</div>,
    onClick: () => console.log('Tab 2 clicked')
  },
  {
    label: 'Tab 3',
    content: <div>Content of Tab 3</div>,
    onClick: () => console.log('Tab 3 clicked')
  }
];

ReactDOM.render(<Tabs tabs={tabData} />, document.getElementById('root'));
export default App;