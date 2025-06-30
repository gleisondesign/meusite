import React from 'react';

const services = [
  "Landing Pages", "Websites", "E-commerce", "SEO", "UI/UX Design",
  "Páginas de Vendas", "Identidade Visual", "Criativos para Ads",
  "Desenvolvimento Web", "Otimização de Performance", "Gestão de Tráfego",
  "Marketing Digital", "Páginas Rápidas", "Venda de Infoprodutos",
  "Automação de Marketing", "Sites Institucionais", "Página de Pagamento"
];

const NeonWordCloud = () => {
    const styles = [
        "text-lg text-purple-300",
        "text-xl text-fuchsia-400 font-bold",
        "text-base text-purple-200",
        "text-2xl text-fuchsia-500 font-bold",
        "text-md text-purple-300",
        "text-lg text-fuchsia-300",
        "text-xl text-purple-400 font-bold",
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3 sm:gap-x-4 max-w-4xl mx-auto p-4">
            {services.map((service, index) => (
                <span
                    key={index}
                    className={`
                        py-1.5 px-3 text-sm sm:text-base rounded-full border border-transparent 
                        cursor-default transition-all duration-300 ease-in-out
                        animate-fade-in-scale-up
                        hover:text-white hover:scale-110 hover:border-fuchsia-500/50 hover:shadow-[0_0_25px_theme(colors.fuchsia.500/50)]
                        ${styles[index % styles.length]}
                    `}
                    style={{ animationDelay: `${300 + index * 60}ms` }}
                >
                    {service}
                </span>
            ))}
        </div>
    );
};

const App: React.FC = () => {
    const whatsappNumber = "5511986912169";
    const whatsappMessage = "Olá! Tenho interesse em um projeto e gostaria de agendar uma conversa.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="bg-[#0A001F] text-slate-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden relative">
            <div className="absolute inset-0 -z-0 bg-no-repeat bg-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-[#0A001F] to-[#0A001F] animate-aurora-breathe"></div>

            <main className="relative z-10 flex flex-col items-center text-center space-y-12 md:space-y-16">
                <header className="flex flex-col items-center space-y-4 animate-fade-in-down">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-fuchsia-500">
                        Gleison Design
                    </h1>
                    <p className="max-w-xl text-lg md:text-xl text-purple-200/80 leading-relaxed">
                        Transformando ideias em realidade digital com design, tecnologia e marketing de impacto.
                    </p>
                </header>

                <div className="w-full">
                    <NeonWordCloud />
                </div>

                <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group relative inline-block text-lg font-bold
                            px-8 py-4 rounded-full transition-shadow duration-300
                            bg-gradient-to-r from-purple-600 to-fuchsia-600
                            text-white hover:shadow-[0_0_35px_theme(colors.fuchsia.500/80)]
                            focus:outline-none focus:ring-4 focus:ring-purple-500/50
                            animate-pulse-glow
                        "
                    >
                        <span className="relative flex items-center justify-center">
                            Agende seu Projeto
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default App;