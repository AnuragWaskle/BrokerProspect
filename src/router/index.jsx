import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';

// Platform Pages
import Prospect from '../pages/platform/Prospect';
import Review from '../pages/platform/Review';
import Place from '../pages/platform/Place';
import Execute from '../pages/platform/Execute';
import Integrations from '../pages/platform/Integrations';
import Features from '../pages/platform/Features';

// Solution Pages
import SoloBrokers from '../pages/solutions/SoloBrokers';
import GrowingAgencies from '../pages/solutions/GrowingAgencies';
import EnterpriseTeams from '../pages/solutions/EnterpriseTeams';
import SpecialtyBrokers from '../pages/solutions/SpecialtyBrokers';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'pricing', element: <Pricing /> },
            { path: 'blog', element: <Blog /> },
            { path: 'about', element: <About /> },
            { path: 'careers', element: <Careers /> },
            { path: 'contact', element: <Contact /> },

            // Platform Routes
            { path: 'platform/prospect', element: <Prospect /> },
            { path: 'platform/review', element: <Review /> },
            { path: 'platform/place', element: <Place /> },
            { path: 'platform/execute', element: <Execute /> },
            { path: 'platform/integrations', element: <Integrations /> },
            { path: 'platform/features', element: <Features /> },

            // Solution Routes
            { path: 'solutions/solo-brokers', element: <SoloBrokers /> },
            { path: 'solutions/growing-agencies', element: <GrowingAgencies /> },
            { path: 'solutions/enterprise-teams', element: <EnterpriseTeams /> },
            { path: 'solutions/specialty-brokers', element: <SpecialtyBrokers /> },
        ],
    },
]);
