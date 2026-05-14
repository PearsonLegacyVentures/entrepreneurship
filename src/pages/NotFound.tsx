import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Seo } from "@/lib/seo";

export default function NotFound() {
  return (
    <PageLayout>
      <Seo title="Page not found" description="The page you requested could not be found." />
      <section className="content-container flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-charcoal">This page is not in the operating system yet.</h1>
        <p className="mt-4 max-w-xl text-muted-gray">Return to the Founder Lab home page or start with the setup path.</p>
        <div className="mt-8 flex gap-3"><Button asChild><Link to="/">Go home</Link></Button><Button asChild variant="outline"><Link to="/start-here">Start Here</Link></Button></div>
      </section>
    </PageLayout>
  );
}
