import { Globe, ShoppingCart, Code, RefreshCw, CheckCircle } from 'lucide-react';
import { services } from '@/lib/config';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  Code,
  RefreshCw,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
            Mes Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Des solutions adaptées à{' '}
            <span className="gradient-text">vos besoins</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Que vous ayez besoin d&apos;un simple site vitrine ou d&apos;une application web complexe,
            je vous accompagne de A à Z.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <Card key={service.id} hover className="group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-secondary-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
