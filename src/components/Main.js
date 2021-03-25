import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import Industries from './Industries';
import Services from './Services';
import About from './About';

const Main = () => {
  return (
    <div>
      {/*Render Different Component based on Route*/}
      <Route path='/' component={Landing} />
      <Route path='/industries' component={Industries} />
      <Route path='/services' component={Services} />
      <Route path='/about' component={About} />
    </div>
  );
};
//Export The Main Component
export default Main;
