import { process } from '@/lib/config';

export default function Process() {
  return (
    <section id="processus" className="section-padding bg-secondary-900 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-600/20 rounded-full text-primary-400 font-medium text-sm mb-4">
            Processus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Comment ça{' '}
            <span className="text-primary-400">marche ?</span>
          </h2>
          <p className="text-lg text-secondary-400 max-w-2xl mx-auto">
            Un processus simple et transparent pour créer votre site web idéal.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-8">
          {process.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line */}
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-secondary-700">
                  <div className="absolute right-0 -top-1 w-3 h-3 border-t-2 border-r-2 border-secondary-700 transform rotate-45" />
                </div>
              )}

              {/* Step number */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-primary-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary-600/25">
                {item.step}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-secondary-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
