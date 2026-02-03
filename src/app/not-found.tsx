import { Home } from 'lucide-react';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-secondary-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-secondary-600 mb-8 max-w-md mx-auto">
          Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/">
          <Home className="w-5 h-5 mr-2" />
          Retour à l&apos;accueil
        </Button>
      </div>
    </div>
  );
}
