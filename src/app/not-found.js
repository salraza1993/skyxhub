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
