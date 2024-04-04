import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const View404: React.FC = () => {
    var navigate = useNavigate();
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button onClick={() => navigate('/', {replace:true})}>Go Home1</button>

            <Link to="/" replace>Go Home2</Link>
        </div>
    );
};

export default View404;