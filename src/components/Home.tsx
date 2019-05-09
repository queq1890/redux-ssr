import * as React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      This is home page.
      <Link to="/contact">another route</Link>
    </div>
  );
};

export default Home;
