import Image from "next/image";

export default function CursoDevPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Plataforma Backend Completa</h1>

        <p className="text-zinc-400">
          Projeto completo focado no desenvolvimento de uma API robusta,
          aplicando boas práticas de arquitetura, testes automatizados,
          autenticação e controle de acesso.
        </p>
      </section>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="text-xs border border-zinc-700 px-2 py-1 rounded">
          Node.js
        </span>
        <span className="text-xs border border-zinc-700 px-2 py-1 rounded">
          Next.js
        </span>
        <span className="text-xs border border-zinc-700 px-2 py-1 rounded">
          PostgreSQL
        </span>
        <span className="text-xs border border-zinc-700 px-2 py-1 rounded">
          Docker
        </span>
        <span className="text-xs border border-zinc-700 px-2 py-1 rounded">
          Jest
        </span>
        <span className="text-xs border border-zinc-700 px-2 py-1 rounded">
          CI/CD
        </span>
      </div>

      {/* Contexto */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Contexto</h2>
        <p className="text-zinc-400">
          Construção de um backend real simulando um sistema de produção, com
          foco em organização de código, segurança e manutenção a longo prazo.
        </p>
      </section>

      {/* Problema */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Problema</h2>
        <p className="text-zinc-400">
          Criar uma API escalável e segura, garantindo autenticação,
          autorização, testes automatizados e integração com banco de dados e
          envio de emails.
        </p>
      </section>

      {/* Solução */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Solução</h2>
        <p className="text-zinc-400">
          Desenvolvimento de uma API utilizando Node.js e Next.js, com
          arquitetura em camadas, sistema de permissões baseado em features e
          cobertura de testes garantindo confiabilidade.
        </p>
      </section>

      {/* Arquitetura */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Arquitetura</h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-zinc-400">
          Cliente → API (Next.js) → Camada de Autorização → Banco (PostgreSQL)
        </div>
      </section>

      {/* Destaques técnicos */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Destaques técnicos</h2>

        <ul className="text-zinc-400 space-y-2 list-disc ml-5">
          <li>Construção de APIs REST com Node.js</li>
          <li>Arquitetura em camadas (controllers, services, models)</li>
          <li>Autenticação e autorização de usuários</li>
          <li>Testes automatizados (Jest)</li>
          <li>Integração com banco PostgreSQL</li>
          <li>CI/CD com GitHub Actions</li>
        </ul>
      </section>

      {/* 🔐 Controle de acesso */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Controle de acesso e segurança
        </h2>

        <p className="text-zinc-400">
          A aplicação implementa um sistema de autorização baseado em features,
          garantindo que cada usuário só possa executar ações específicas de
          acordo com suas permissões.
        </p>

        <ul className="text-zinc-400 space-y-2 list-disc ml-5 mt-3">
          <li>Controle granular de permissões por feature</li>
          <li>Validação de acesso em todos os endpoints</li>
          <li>Separação entre autenticação e autorização</li>
          <li>Proteção contra acesso indevido a recursos sensíveis</li>
        </ul>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-4 text-sm text-zinc-400">
          Exemplo: acesso ao endpoint <code>/api/v1/migrations</code> requer a
          feature <code>read:migration</code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Testes e confiabilidade</h2>

        <p className="text-zinc-400">
          A aplicação possui uma suíte completa de testes automatizados cobrindo
          fluxos críticos do sistema, garantindo estabilidade e segurança em
          produção.
        </p>

        <p className="text-zinc-400 mt-4">
          Inclui testes de fluxo completo simulando o comportamento real do
          usuário, desde o cadastro até a autenticação e uso da aplicação.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="border border-zinc-800 rounded p-4 text-center">
            <p className="text-2xl font-bold">14</p>
            <p className="text-xs text-zinc-500">Test Suites</p>
          </div>

          <div className="border border-zinc-800 rounded p-4 text-center">
            <p className="text-2xl font-bold">59</p>
            <p className="text-xs text-zinc-500">Testes</p>
          </div>

          <div className="border border-zinc-800 rounded p-4 text-center">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs text-zinc-500">Passando</p>
          </div>

          <div className="border border-zinc-800 rounded p-4 text-center">
            <p className="text-2xl font-bold">E2E</p>
            <p className="text-xs text-zinc-500">Fluxos reais</p>
          </div>
        </div>

        <ul className="text-zinc-400 space-y-2 list-disc ml-5 mt-6">
          <li>Testes de integração cobrindo endpoints da API</li>
          <li>Testes unitários para regras de autorização</li>
          <li>
            Fluxo completo de registro validado (cadastro → email → ativação →
            login)
          </li>
          <li>Validação de cenários de erro e permissões</li>
        </ul>
      </section>

      {/* ⚠️ Tratamento de erros */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Tratamento de erros</h2>

        <p className="text-zinc-400">
          A API possui um padrão consistente de respostas de erro, facilitando o
          debug e integração com clientes.
        </p>

        <ul className="text-zinc-400 space-y-2 list-disc ml-5 mt-3">
          <li>Respostas padronizadas com status code</li>
          <li>Mensagens claras para o cliente</li>
          <li>Indicação de ação corretiva</li>
          <li>Separação entre erros internos e de negócio</li>
        </ul>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-4 text-sm text-zinc-400">
          <pre className="text-xs overflow-x-auto">
            {`{
  "name": "ForbiddenError",
  "message": "Você não possui permissão para executar esta ação.",
  "action": "Verifique se o seu usuário possui a feature 'read:migration'",
  "status_code": 403
}`}
          </pre>
        </div>
      </section>

      {/* 📧 Email */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Sistema de comunicação (email)
        </h2>

        <p className="text-zinc-400">
          Implementação de envio de emails transacionais para ativação de conta,
          garantindo validação de usuários e fluxo completo de cadastro.
        </p>

        <ul className="text-zinc-400 space-y-2 list-disc ml-5 mt-3">
          <li>Envio automático de email após cadastro</li>
          <li>Link de ativação com token único</li>
          <li>Validação de conta via endpoint protegido</li>
          <li>Domínio próprio configurado para envio</li>
        </ul>

        <Image
          src="/confirmation-email.png"
          alt="Email de ativação"
          width={800}
          height={400}
          className="rounded-lg border border-zinc-800 mt-6"
        />
      </section>

      {/* 🌐 Produção */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Ambiente em produção</h2>

        <p className="text-zinc-400">
          A aplicação foi deployada e está acessível via domínio próprio, com
          endpoints funcionais e fluxos críticos validados em ambiente real.
        </p>

        <ul className="text-zinc-400 space-y-2 list-disc ml-5 mt-3">
          <li>Deploy realizado com sucesso</li>
          <li>Domínio próprio configurado</li>
          <li>Endpoints protegidos e funcionais</li>
          <li>Integração com envio de emails funcionando</li>
        </ul>

        {/* 🔥 Disclaimer importante */}
        <div className="bg-yellow-900/20 border border-yellow-800 text-yellow-300 rounded-lg p-4 mt-4 text-sm">
          Este projeto é focado no desenvolvimento backend. A interface web
          ainda não foi implementada, contendo apenas uma página simples de
          teste. Todas as funcionalidades estão disponíveis via API e foram
          validadas por testes automatizados e chamadas HTTP.
        </div>

        <a
          href="https://codebyjoaovitor.com.br"
          target="_blank"
          className="inline-block mt-4 text-sm border border-zinc-700 px-4 py-2 rounded hover:bg-zinc-800 transition"
        >
          Acessar aplicação
        </a>
      </section>

      {/* Infra */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Infraestrutura e execução
        </h2>

        <p className="text-zinc-400">
          O projeto roda em ambiente containerizado com Docker, utilizando
          PostgreSQL e scripts de automação para setup e execução.
        </p>
      </section>

      {/* Stack */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Stack</h2>

        <p className="text-zinc-400">
          Node.js • Next.js • PostgreSQL • Docker • Jest • GitHub Actions
        </p>
      </section>

      {/* CTA */}
      <section className="pt-4">
        <a
          href="https://github.com/joaoVitorDS12/progresso-curso.dev"
          target="_blank"
          className="text-sm border border-zinc-700 px-4 py-2 rounded hover:bg-zinc-800 transition"
        >
          Ver código no GitHub
        </a>
      </section>
    </main>
  );
}
