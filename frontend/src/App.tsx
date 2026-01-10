// import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import BrowsePage from './pages/BrowsePage';
import ItemDetailPage from './pages/ItemDetailPage';
import ListItemPage from './pages/ListItemPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SignUpPage from './pages/SignUpPage';
import HelpPage from './pages/HelpPage';

const AppLayout = () => (
  <div className="min-h-screen bg-eco-cream flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/browse", element: <BrowsePage /> },
      { path: "/item/:id", element: <ItemDetailPage /> },
      { path: "/list-item", element: <ListItemPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/help", element: <HelpPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;