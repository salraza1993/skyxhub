'use client';

export default function Loading() {
  return (
    <div className="mil-loading-screen">
      <div className="mil-loading-content">
        <div className="mil-spinner">
          <div className="mil-dot1"></div>
          <div className="mil-dot2"></div>
          <div className="mil-dot3"></div>
        </div>
        <p>Loading...</p>
      </div>
      
      <style jsx>{`
        .mil-loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bodyBg, #1a1a1a);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        
        .mil-loading-content {
          text-align: center;
          color: var(--bodyColor, #e9e9e9);
        }
        
        .mil-spinner {
          display: inline-block;
          position: relative;
          width: 64px;
          height: 64px;
          margin-bottom: 20px;
        }
        
        .mil-spinner div {
          position: absolute;
          top: 27px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--accent, #2aea00);
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        
        .mil-dot1 {
          left: 6px;
          animation: mil-dot1 0.6s infinite;
        }
        
        .mil-dot2 {
          left: 6px;
          animation: mil-dot2 0.6s infinite;
        }
        
        .mil-dot3 {
          left: 26px;
          animation: mil-dot2 0.6s infinite;
        }
        
        @keyframes mil-dot1 {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        
        @keyframes mil-dot2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(19px, 0); }
        }
      `}</style>
    </div>
  );
}
