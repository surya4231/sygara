import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from './Router';

// menghubungkan react-router-dom
import { BrowserRouter } from 'react-router-dom';

// menghubungkan react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// menghubungkan css pribadi
import "./style.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
