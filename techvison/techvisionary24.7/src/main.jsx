
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import './Courses.css';
import './Contact.css';
import './Home.css';
import './Herosection.css';
import Layout from './componests/Layout';
import Home from './componests/Home';
import Contact from './componests/Contact';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';





// Define Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      
      <Route path="/Contact" element={<Contact />} />
    </Route>
  )
);

// Render Application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
);
