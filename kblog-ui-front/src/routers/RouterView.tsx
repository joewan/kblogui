import { Navigate, useRoutes } from 'react-router-dom';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import WalletView from '../views/WalletView';
import AdminView from '../views/admin/AdminView';
import DashboardView from '../views/admin/DashboardView';
import OrderView from '../views/admin/OrderView';
import { Fragment } from 'react/jsx-runtime';
import TestView1 from '../views/test/TestView1';
import TestView from '../views/test/TestView';
import View404 from '../views/View404';
import LoginView from '../views/LoginView';
import PrivateComponent from '../views/PrivateComponent';


const RouterView: React.FC = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        { path: '/home', element: <HomeView /> },
        { path: '/about', element: <AboutView /> },
        { path: '/login', element: <LoginView /> },
        { path: '/test-about', element: <Navigate to="/about" state="{goodno:123}"/>},

        { path: '/wallet', element: <WalletView /> },
        { path: '/test/:id', element: <TestView /> },
        { path: '/test1', element: <TestView1 /> },
        { 
            path: '/admin', 
            element: <PrivateComponent><AdminView /></PrivateComponent>,
            children: [
                { path: '', element: <DashboardView /> },
                { path: 'dashboard', element: <DashboardView /> },
                { path: 'order', element: <OrderView /> },
            ]
        },
        { path: '*', element: <View404 />}
    ]);

    return <Fragment>{routes}</Fragment>;
};

export default RouterView;