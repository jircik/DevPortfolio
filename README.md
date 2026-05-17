# Portfolio — Arthur Jircik

Site de portfólio pessoal de **Arthur Jircik**, Engenheiro de Software FullStack de São Paulo, Brasil. Uma single-page application com design experimental, animações fluidas e suporte bilíngue (PT/EN).

🔗 **Live:** [jircik.dev](https://jircik.dev) <!-- ajuste para a URL real de produção -->

## Sobre

Portfólio de página única dividido em seções:

- **Hero** — apresentação, role, localização e links sociais
- **Tech Stack** — back-end, front-end, DevOps e bancos de dados
- **Projects** — projetos em destaque (Calorie Tracker, URL Shortener, DB Backup CLI, datagen, Discord GPT Bot)
- **About** — bio e formação acadêmica
- **Footer / Contact** — e-mail, redes sociais e status de disponibilidade

## Tecnologias

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[Radix UI](https://www.radix-ui.com/)** — primitivos de componentes acessíveis
- **[Framer Motion](https://www.framer.com/motion/)** + **[GSAP](https://gsap.com/)** — animações
- **[Lenis](https://lenis.darkroom.engineering/)** — smooth scroll
- **[next-themes](https://github.com/pacocoursey/next-themes)** — tema dark
- **[Vercel Analytics](https://vercel.com/analytics)**

## Recursos

- 🌐 **Internacionalização** — toggle PT/EN via React Context (`lib/i18n`)
- 🎨 **Animações de texto** — efeitos scramble, split-flap, draw e bitmap
- 🖱️ **Smooth scroll** e navegação lateral por seções
- 📄 **Download de CV** integrado
- ♿ Componentes acessíveis baseados em Radix UI

## Como rodar

Pré-requisitos: **Node.js 18+** e um gerenciador de pacotes (`pnpm` recomendado — há `pnpm-lock.yaml`).

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento (http://localhost:3000)
npm run dev

# build de produção
npm run build

# rodar build de produção
npm run start

```

## Estrutura do projeto

```
app/
  layout.tsx        # layout raiz, fontes, providers, metadata
  page.tsx          # composição das seções
  globals.css       # estilos globais e tema
components/
  *-section.tsx     # seções da página (hero, stack, projects, about, footer)
  *-text.tsx        # componentes de animação de texto
  ui/               # componentes base (Radix + shadcn-style)
lib/
  i18n/             # contexto de idioma e traduções (PT/EN)
  utils.ts
hooks/              # hooks customizados
public/             # ícones, favicon e cv.pdf
```

## Internacionalização

Os textos ficam em `lib/i18n/translations.ts`, organizados por seção e idioma (`pt` / `en`). O idioma é controlado pelo `LanguageProvider` (`lib/i18n/language-context.tsx`) e alternado pelo componente `LanguageToggle`.

## Contato

- **E-mail:** oarthurjircik@gmail.com
- **GitHub:** [@jircik](https://github.com/jircik)
- **LinkedIn:** [arthur-jircik](https://www.linkedin.com/in/arthur-jircik/)

---

© 2026 Arthur Jircik. All rights reserved.
