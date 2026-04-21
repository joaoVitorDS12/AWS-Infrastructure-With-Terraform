import { FadeIn } from "./components/FadeIn";
import {
  Server,
  Activity,
  ShieldCheck,
  Database,
  CheckCircle2,
  Code,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      {/* HERO */}
      <FadeIn>
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">João Vitor Santos</h1>

            <p className="text-zinc-400 mt-3 max-w-xl">
              Desenvolvedor com foco em infraestrutura e backend, especializado
              em provisionamento de ambientes na AWS com Terraform,
              escalabilidade com Load Balancer e Auto Scaling, e construção de
              APIs robustas com Node.js.
            </p>

            <p className="text-sm text-zinc-500 mt-3">
              Contato: jvitor1569@gmail.com
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/joaoVitorDS12"
              target="_blank"
              className="  border border-zinc-700 px-4 py-2 rounded text-sm transition-all 
              duration-200 hover:bg-zinc-800 hover:border-zinc-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/joao-vitor12/"
              target="_blank"
              className="  border border-zinc-700 px-4 py-2 rounded text-sm 
              transition-all duration-200 hover:bg-zinc-800 hover:border-zinc-500"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </FadeIn>

      {/* INFRA - PRINCIPAL */}
      <FadeIn>
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Server size={18} />
            Infraestrutura (SRE / DevOps)
          </h2>

          <div
            className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30 backdrop-blurtransition-all 
            duration-300 hover:border-zinc-600 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.6)]hover:-translate-y-1"
          >
            <p className="font-medium text-lg">
              Infraestrutura AWS com Terraform
            </p>

            <p className="text-zinc-400 text-sm mt-3 max-w-2xl leading-relaxed">
              Ambiente provisionado com foco em escalabilidade e confiabilidade,
              simulando um cenário real de produção com Load Balancer, Auto
              Scaling e separação entre aplicação e infraestrutura.
            </p>

            <ul className="text-zinc-400 text-sm mt-5 space-y-3">
              <li className="flex items-center gap-2">
                <Code size={16} className="text-zinc-500" />
                Provisionamento automatizado com Terraform
              </li>

              <li className="flex items-center gap-2">
                <Activity size={16} className="text-zinc-500" />
                Load Balancer com health checks
              </li>

              <li className="flex items-center gap-2">
                <Server size={16} className="text-zinc-500" />
                Auto Scaling Group
              </li>

              <li className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-zinc-500" />
                IAM e controle de acesso
              </li>
            </ul>

            <a
              href="/projetos/infra-aws"
              className="inline-block mt-6 text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Ver detalhes da infraestrutura →
            </a>
          </div>
        </section>
      </FadeIn>
      {/* BACKEND */}
      <FadeIn>
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Database size={18} />
            Projeto Backend
          </h2>

          <div
            className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30 backdrop-blurtransition-all 
            duration-300 hover:border-zinc-600 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.6)]hover:-translate-y-1"
          >
            <p className="font-medium text-lg">
              Backend em produção com autenticação, testes e envio de e-mails
            </p>

            {/* BADGE */}
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded border border-green-800">
                ✅ 59 tests passing
              </span>
            </div>

            <p className="text-zinc-400 text-sm mt-3 max-w-2xl leading-relaxed">
              API completa com autenticação, autorização baseada em features,
              testes automatizados e envio de e-mails, rodando em ambiente real.
            </p>

            <ul className="text-zinc-400 text-sm mt-5 space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-zinc-500" />
                59 testes automatizados (Jest) garantindo confiabilidade
              </li>

              <li className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-zinc-500" />
                Fluxo completo de autenticação (E2E)
              </li>

              <li className="flex items-center gap-2">
                <Activity size={16} className="text-zinc-500" />
                Sistema de envio de e-mail de ativação
              </li>

              <li className="flex items-center gap-2">
                <Database size={16} className="text-zinc-500" />
                Docker + PostgreSQL
              </li>
            </ul>

            <p className="text-zinc-500 text-xs mt-5">
              Aplicação focada em backend — interface atual contém apenas uma
              página de teste.
            </p>

            <div className="flex gap-5 mt-5">
              <a
                href="/projetos/curso-dev"
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Ver detalhes →
              </a>

              <a
                href="https://codebyjoaovitor.com.br"
                target="_blank"
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Acessar API →
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* FORMAÇÃO */}
      <FadeIn>
        <section>
          <h2 className="text-xl font-semibold mb-4">Formação</h2>
          <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:shadow-md transition-all duration-200">
            <ul className="text-zinc-400 space-y-2">
              <li>🎓 Análise e Desenvolvimento de Sistemas</li>
              <li>🎓 MBA em Desenvolvimento Full Stack</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* EXPERIÊNCIA */}
      <FadeIn>
        <section>
          <h2 className="text-xl font-semibold mb-4">Experiência</h2>

          <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:shadow-md transition-all duration-200">
            <p className="font-medium">
              Desenvolvedor Front-end — CompreSuaPeça
            </p>

            <p className="text-xs text-zinc-500 mb-3">2024 • 6 meses</p>

            <p className="text-zinc-400 text-sm">
              Desenvolvimento de interfaces para e-commerce utilizando React.js
              e VTEX, com foco em componentização, manutenção de layouts e
              integração com APIs.
            </p>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
