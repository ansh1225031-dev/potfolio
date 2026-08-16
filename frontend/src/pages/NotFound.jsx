import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>

      <div className="not-found" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
        <motion.div 
          className="not-found__code"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '8rem', fontWeight: 'bold' }}
        >
          404
        </motion.div>
        
        <h1 className="not-found__title">LOST IN THE CODE?</h1>
        <p className="not-found__text" style={{ marginBottom: '2rem' }}>
          Looks like this page doesn't exist.
        </p>
        
        <Link to="/" className="btn btn--primary">
          BACK HOME →
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFound;
