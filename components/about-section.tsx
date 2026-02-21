 import { GraduationCap } from "lucide-react"

const education = [
  {
    period: "2025",
    title: "Ciência da Computação",
    institution: "Universidade Presbiteriana Mackenzie",
    description: "Durante o periodo cursado, desenvolvi uma base sólida em Lógica de Programação e desenvolvimento utilizando as linguagens Python e C. Adquiri competências em Análise de Dados com bibliotecas de Python e a linguagem R. Também realizei projetos práticos de hardware com Circuitos Elétricos e Eletrônicos"
  },
  {
    period: "2026 - 2029",
    title: "Engenharia de Software",
    institution: "FIAP",
    description: "Atualmente, estou aprendendo fundamentos de Web Development, Front-End Design, desenvolvimento de soluções voltadas para Software & Total Experience Design, unindo visão técnica e empreendedora para a resolução de problemas complexos."
  },
]

 export function AboutSection() {
   return (
       <section id="about" className="py-24 px-6">
         <div className="mx-auto max-w-5xl">
           <h2 className="mb-2 text-sm font-mono uppercase tracking-widest text-accent">
             Quem eu sou
           </h2>

           <div className="mt-8 grid gap-12 md:grid-cols-2">
             {/* Bio text */}
             <div className="space-y-4">
               <p className="text-muted-foreground leading-relaxed">
                 Sou estudante de Engenharia de Software com um grande interesse por desenvolvimento Full-Stack.
                 Em 2025, cursei o primeiro ano de Ciência da Computação, porém decidi mudar para Engenharia de Software por me identificar mais com o curso.
                 Atualmente, estou em busca da minha primeira oportunidade de emprego.
               </p>
               <p className="text-muted-foreground leading-relaxed">
                 Meu foco principal hoje está no ecossistema Java com Spring Boot para o desenvolvimento de API e,
                 recentemente, tenho buscado expandir meu repertório para o ecossistema JavaScript e seus frameworks, visando construir interfaces modernas e intuitivas para as aplicações que desenvolvo.
                 Além do desenvolvimento tradicional, tenho explorado a criação de automações com n8n, integrando diferentes ferramentas para otimizar fluxos de trabalho e criar soluções mais eficientes.
               </p>
               <p className="text-muted-foreground leading-relaxed">
                 Estou ansioso para aplicar meu conhecimento em um ambiente profissional onde eu possa contribuir com meus conhecimentos e evoluir como desenvolvedor Full-Stack.
               </p>
             </div>

             {/* Education timeline */}
             <div>
               <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
                 <GraduationCap size={20} className="text-accent" />
                 Educação
               </h3>

               <div className="relative border-l-2 border-accent pl-6 space-y-8">
                 {education.map((item, index) => (
                     <div key={index} className="relative">
                       {/* Timeline dot */}
                       <div className="absolute -left-[calc(1.5rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                       <span className="font-mono text-xs text-accent">
                    {item.period}
                  </span>
                       <h4 className="mt-1 text-sm font-semibold text-foreground">
                         {item.title}
                       </h4>
                       <p className="text-sm text-muted-foreground">
                         {item.institution}
                       </p>
                       <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                         {item.description}
                       </p>
                     </div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>
   )
 }
