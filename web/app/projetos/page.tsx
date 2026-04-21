import { FadeIn } from "../components/FadeIn";

export default function ProjetosPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold">Projetos</h1>

      {/* PROJETO 1 */}
      <FadeIn>
        <div className="bg-zinc-900/70 border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold">Backend Completo (FinTab)</h2>

          <p className="text-zinc-400 mt-3">
            API completa com autenticação, autorização, testes automatizados e
            CI/CD. Projeto focado em arquitetura de código, organização e boas
            práticas de backend.
          </p>

          <div className="flex flex-wrap gap-2 mt-4 text-xs text-zinc-400">
            <span className="bg-zinc-800 px-2 py-1 rounded">Node.js</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">Next.js</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">PostgreSQL</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">Docker</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">Jest</span>
          </div>

          <a
            href="/projetos/curso-dev"
            className="inline-block mt-6 text-sm border border-zinc-700 px-4 py-2 rounded hover:bg-zinc-800 transition"
          >
            Ver detalhes do projeto
          </a>
        </div>
      </FadeIn>

      {/* PROJETO 2 */}
      <FadeIn>
        <div className="bg-zinc-900/70 border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Infraestrutura AWS com Terraform
          </h2>

          <p className="text-zinc-400 mt-3">
            Infraestrutura provisionada na AWS utilizando Terraform, incluindo
            EC2, Application Load Balancer, Auto Scaling Group e controle de
            acesso com IAM. Projeto focado em confiabilidade, escalabilidade e
            práticas de SRE.
          </p>

          <div className="flex flex-wrap gap-2 mt-4 text-xs text-zinc-400">
            <span className="bg-zinc-800 px-2 py-1 rounded">Terraform</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">AWS</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">EC2</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">ALB</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">Auto Scaling</span>
            <span className="bg-zinc-800 px-2 py-1 rounded">IAM</span>
          </div>

          <a
            href="/projetos/infra-aws"
            className="inline-block mt-6 text-sm border border-zinc-700 px-4 py-2 rounded hover:bg-zinc-800 transition"
          >
            Ver detalhes do projeto
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
