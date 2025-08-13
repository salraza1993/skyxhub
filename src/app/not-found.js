import Layouts from "../layouts/Layouts";
import Link from "next/link";

export const metadata = {
  title: '404 - Page Not Found | SKYXHUB',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <Layouts>
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="mil-mb-30" style={{ fontSize: '6rem', fontWeight: 'bold' }}>
                404
              </h1>
              <h2 className="mil-mb-30">Page Not Found</h2>
              <p className="mil-mb-60">
                Sorry, the page you are looking for could not be found. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
              <Link href="/" className="mil-button mil-border">
                <span>Go Back Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

// export default function NotFound() {
//   return (
//     <html lang="en">
//       <head>
//         <title>404 - Page Not Found</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </head>
//       <body>
//         <div style={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center', 
//           justifyContent: 'center', 
//           minHeight: '100vh', 
//           padding: '2rem',
//           textAlign: 'center',
//           fontFamily: 'system-ui, sans-serif'
//         }}>
//           <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
//           <h2 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Page Not Found</h2>
//           <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>
//             Sorry, the page you are looking for does not exist.
//           </p>
//           <a 
//             href="/" 
//             style={{ 
//               display: 'inline-block',
//               padding: '0.75rem 1.5rem',
//               backgroundColor: '#0070f3',
//               color: 'white',
//               textDecoration: 'none',
//               borderRadius: '0.5rem',
//               fontSize: '1rem'
//             }}
//           >
//             Go Home
//           </a>
//         </div>
//       </body>
//     </html>
//   );
// }
