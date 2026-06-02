import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  BrainCircuit, 
  BarChart3, 
  MessageSquare, 
  Zap, 
  Database, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">[Nombre de la empresa]</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
              <a href="#resultados" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Resultados</a>
              <a href="#testimonios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Casos de Éxito</a>
              <Button className="rounded-full px-6 font-semibold" onClick={() => document.getElementById('contacto')?.scrollIntoView()}>
                Diagnóstico Gratis
              </Button>
            </div>
            <div className="md:hidden">
              <button 
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border p-4 space-y-4">
            <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 font-medium">Servicios</a>
            <a href="#resultados" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 font-medium">Resultados</a>
            <a href="#testimonios" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 font-medium">Casos de Éxito</a>
            <Button className="w-full rounded-full" onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contacto')?.scrollIntoView(); }}>
              Diagnóstico Gratis
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-8">
              <Zap className="w-4 h-4 text-accent" />
              <span>Inteligencia Artificial para tu Negocio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
              Vende más. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Trabaja menos.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Al aplicar nuestras soluciones de IA, tu negocio genera más ingresos con menos esfuerzo. Automatiza, optimiza y escala sin contratar más personal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-semibold w-full sm:w-auto shadow-lg shadow-primary/20" onClick={() => document.getElementById('contacto')?.scrollIntoView()}>
                Reserva tu Demo Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-semibold w-full sm:w-auto" onClick={() => document.getElementById('servicios')?.scrollIntoView()}>
                Explorar Soluciones
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem / Reality */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              El crecimiento no debería significar agotamiento
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Como director o dueño, sabes que vender más normalmente implica contratar más personal, gastar más en herramientas y trabajar más horas. La IA cambia las reglas del juego.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Atención Lenta", desc: "Pierdes ventas porque tu equipo no puede responder rápido 24/7." },
                { title: "Leads Fríos", desc: "Tus vendedores pierden tiempo en prospectos que no están listos para comprar." },
                { title: "Caos Interno", desc: "Reportes manuales y procesos repetitivos consumen tu energía creativa." }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4 relative bg-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Escalera de Soluciones IA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desde contenido automatizado hasta un ecosistema predictivo completo. Implementa a tu ritmo.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  icon: MessageSquare,
                  title: "Scripts y Guiones para Video",
                  desc: "Contenido rápido y económico. Convierte ideas en guiones magnéticos listos para grabar.",
                  level: "Impacto Rápido"
                },
                {
                  icon: Bot,
                  title: "Generación de Contenido",
                  desc: "Posts, blogs y newsletters creados automáticamente manteniendo la voz de tu marca.",
                  level: "Impacto Rápido"
                },
                {
                  icon: PhoneCall,
                  title: "Chatbot de Ventas 24/7",
                  desc: "Atención automática en WhatsApp y web. Responde dudas, agenda citas y califica prospectos al instante.",
                  level: "Medio Impacto"
                },
                {
                  icon: TrendingUp,
                  title: "Lead Scoring Inteligente",
                  desc: "Clasificación automática en tu CRM. Tu equipo atiende primero a quienes tienen mayor probabilidad de compra.",
                  level: "Medio Impacto"
                },
                {
                  icon: MessageSquare,
                  title: "Seguimiento Automático",
                  desc: "Mensajes post-venta y nurturing hiper-personalizados para no dejar enfriar ninguna oportunidad.",
                  level: "Alto Impacto"
                },
                {
                  icon: BarChart3,
                  title: "Dashboards Narrativos",
                  desc: "Reportes claros en lenguaje natural. No más hojas de cálculo confusas, la IA te dice exactamente qué pasa.",
                  level: "Alto Impacto"
                },
                {
                  icon: Zap,
                  title: "Automatización de Procesos",
                  desc: "Cotizaciones, reportes y flujos internos conectados para eliminar el trabajo manual repetitivo.",
                  level: "Transformación"
                },
                {
                  icon: BrainCircuit,
                  title: "CRM Personalizado",
                  desc: "Un sistema completo con predicciones, sugerencias de venta y organización inteligente de toda tu empresa.",
                  level: "Transformación"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`md:flex items-center justify-between w-full md:mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-5/12" />
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="w-full md:w-5/12 ml-6 md:ml-0">
                    <div className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-accent uppercase tracking-wider">{service.level}</span>
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it generates Revenue */}
      <section id="resultados" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">El Motor de tu Crecimiento</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              No vendemos tecnología, vendemos resultados. Así es como nuestras soluciones impactan tu cuenta bancaria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Aumenta Ventas",
                desc: "El chatbot convierte conversaciones nocturnas en reservas confirmadas mientras duermes.",
                icon: TrendingUp
              },
              {
                title: "Mejora Cierre",
                desc: "El lead scoring asegura que tus mejores vendedores hablen con los prospectos más calientes.",
                icon: CheckCircle2
              },
              {
                title: "Reduce Costos",
                desc: "El CRM y la automatización hacen el trabajo de 3 asistentes administrativos sin errores.",
                icon: BarChart3
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-black/10 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
              >
                <item.icon className="w-10 h-10 mb-6 text-white" />
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-16">El Impacto Real en Sandy Life</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-secondary/50 border border-border relative text-left"
            >
              <div className="text-4xl text-primary/20 absolute top-4 left-4 font-serif">"</div>
              <p className="text-lg md:text-xl font-medium mb-8 relative z-10 pt-4 text-foreground/90">
                Gracias al chatbot y al lead scoring, en Sandy Life aumentamos nuestras reservas en un 35% en solo un mes. Fue como tener un equipo de ventas experto trabajando de madrugada.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">D</div>
                <div>
                  <h4 className="font-bold">Director Comercial</h4>
                  <p className="text-sm text-muted-foreground">Sandy Life</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-secondary/50 border border-border relative text-left"
            >
              <div className="text-4xl text-primary/20 absolute top-4 left-4 font-serif">"</div>
              <p className="text-lg md:text-xl font-medium mb-8 relative z-10 pt-4 text-foreground/90">
                El CRM con IA nos permitió organizar clientes y detectar oportunidades que antes se nos escapaban. Ahora generamos más ingresos con menos esfuerzo, tal como prometieron.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent text-xl">G</div>
                <div>
                  <h4 className="font-bold">Gerente General</h4>
                  <p className="text-sm text-muted-foreground">Sandy Life</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-foreground rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-50 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-50 mix-blend-screen" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
                Tu competencia ya está usando IA. <br/>¿Y tú?
              </h2>
              <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto">
                No necesitas ser experto en tecnología. En 30 minutos analizaremos tu negocio y te diremos exactamente por dónde empezar para automatizar tus ventas.
              </p>
              <Button size="lg" className="rounded-full h-16 px-10 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                Reserva tu demo gratis y empieza a vender más con IA
              </Button>
              <p className="mt-6 text-sm text-background/60">
                Diagnóstico de 30 min sin compromiso. Cupos limitados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">[Nombre de la empresa]</span>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} [Nombre de la empresa]. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
