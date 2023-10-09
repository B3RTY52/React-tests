import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Button } from './App';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

// Теперь попрубуем Bootstrap:
import 'bootstrap/dist/css/bootstrap.min.css';


const BigButton = styled(Button)`
  margin: 0 auto;
  width: 230px;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* если мы хотим переделать тег баттон в тег а, то используем 'as', например: */}
    <BigButton as="a"> Отправить всех домой </BigButton>
    <BootstrapTest />
  </React.StrictMode>
);

