import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/footer';

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold font-fira-code text-muted-foreground">
            404
          </h1>
          <h2 className="text-3xl font-semibold">Project Not Found</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The project you&apos;re looking for doesn&apos;t exist or may have
            been removed. Check out my other projects instead.
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button asChild size="lg">
              <Link href="/projects" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                All Projects
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
