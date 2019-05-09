import * as React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      There is home.
      <Link to="/contact">another route</Link>
    </div>
  );
};

export default Home;
