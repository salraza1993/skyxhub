'use client';

import { useEffect } from 'react';
import Layouts from "../layouts/Layouts";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App Router Error:', error);
  }, [error]);

  return (
    <Layouts>
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="mil-mb-30">Something went wrong!</h1>
              <p className="mil-mb-60">
                We apologize for the inconvenience. An error occurred while loading this page.
              </p>
              <div className="mil-buttons-group">
                <button 
                  onClick={reset}
                  className="mil-button mil-border mil-mr-30"
                >
                  <span>Try Again</span>
                </button>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="mil-button mil-accent-bg"
                >
                  <span>Go Home</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}
