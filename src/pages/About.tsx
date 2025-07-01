import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

const BusinessPlan = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-slate-200">
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">Predixion</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-blue-400 text-slate-300"
          >
            Voltar à Página Inicial
          </Link>
        </div>
      </div>
    </nav>

    <main className="container mx-auto px-6 pt-24 pb-12">
      <div className="space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Predixion
        </h1>

        <section id="portfolio">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Contexto Principal
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                A Predixion surge como uma startup inovadora dedicada ao
                desenvolvimento de soluções inteligentes de análise de dados,
                especificamente projetada para atender pequenas e médias
                empresas brasileiras que ainda não possuem estrutura ou equipe
                de TI especializada. Como projeto acadêmico desenvolvido por um
                universitário de Sistemas de Informação, representa uma
                oportunidade única de aplicar conhecimentos teóricos em uma
                demanda real e crescente do mercado nacional.
              </p>
              <p>
                O cenário brasileiro apresenta características favoráveis para
                este tipo de empreendimento. Segundo dados recentes, 98% dos
                negócios brasileiros são classificados como pequenas empresas,
                representando um universo de aproximadamente 19 milhões de
                estabelecimentos. Contudo, menos de 5% das empresas brasileiras
                utilizam algum sistema SaaS, evidenciando uma lacuna
                significativa no mercado. Esta disparidade entre a necessidade
                de digitalização e a baixa adoção de tecnologias representa uma
                oportunidade substancial para um empreendimento focado e bem
                direcionado.
              </p>
              <p>
                Para um estudante universitário, a Predixion oferece um
                laboratório prático onde conceitos de business intelligence,
                análise preditiva, desenvolvimento de software e gestão
                empresarial podem ser aplicados simultaneamente. A experiência
                proporciona aprendizado abrangente em áreas como arquitetura de
                software, gestão de dados, relacionamento com clientes e
                compreensão das particularidades do mercado brasileiro de
                tecnologia. Diferentemente de projetos puramente acadêmicos,
                este negócio permite ao estudante enfrentar desafios reais de
                mercado, desde a validação do produto até a aquisição e
                retenção de clientes.
              </p>
              <p>
                A análise das forças, fraquezas, oportunidades e ameaças revela
                um cenário promissor para o desenvolvimento estudantil. As
                forças incluem baixo custo operacional inicial, flexibilidade
                para experimentação e capacidade de aprendizado contínuo. As
                fraquezas envolvem limitações de recursos financeiros e
                experiência inicial limitada em gestão empresarial. As
                oportunidades residem no crescimento acelerado do mercado SaaS
                brasileiro, estimado em crescimento anual de 20%, e na
                necessidade crescente de digitalização das PMEs. As ameaças
                incluem concorrência de grandes players estabelecidos e a
                necessidade de validação constante do produto no mercado.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="orcamento">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Orçamento e Plano Financeiro
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                O planejamento financeiro da Predixion foi estruturado para
                garantir a sustentabilidade do negócio em sua fase inicial, com
                foco em um crescimento gradual e controlado. O investimento
                inicial total é de R$ 7.180, destinado a cobrir custos de
                constituição da empresa, despesas operacionais mensais e um
                capital de giro para emergências.
              </p>
              <p>
                Os custos mensais recorrentes totalizam R$ 390 e incluem
                despesas com hospedagem em nuvem, ferramentas de desenvolvimento
                e marketing digital. A meta de faturamento anual é de R$
                18.000, o que exige a aquisição de aproximadamente 19 clientes
                no plano básico.
              </p>
              <p>
                A projeção de receita para os primeiros seis meses indica um
                crescimento constante, começando com R$ 1.183 no primeiro mês e
                alcançando R$ 4.570 no sexto mês. Essa projeção considera uma
                combinação de assinaturas nos planos Básico (R$ 79/mês),
                Profissional (R$ 149/mês) e Empresarial (R$ 199/mês).
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="renda">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Análise de Renda e Projeções
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                A análise de renda da Predixion baseia-se em um modelo de
                receita recorrente (SaaS), que oferece previsibilidade e
                escalabilidade. A meta de faturamento de R$ 18.000 no primeiro
                ano representa um marco inicial para validar a viabilidade do
                negócio e financiar a próxima fase de crescimento.
              </p>
              <p>
                Com um investimento inicial de R$ 7.180, o retorno sobre o
                investimento (ROI) projetado para o primeiro ano é de
                aproximadamente 250%, demonstrando o alto potencial de
                rentabilidade do modelo de negócio.
              </p>
              <p>
                A estratégia de preços foi desenhada para ser competitiva e
                acessível, com um preço médio 40% inferior ao de concorrentes
                como Tableau e Power BI. Isso, combinado com um setup rápido e
                suporte localizado, posiciona a Predixion como uma solução de
                excelente custo-benefício para o mercado de PMEs.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="nicho">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Nicho de Mercado e Público-Alvo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                O nicho de mercado da Predixion são as pequenas e médias
                empresas (PMEs) brasileiras, um segmento que representa 98% dos
                negócios no país, mas que ainda possui baixa adesão a
                tecnologias de análise de dados. O público-alvo são gestores e
                empreendedores que buscam tomar decisões mais inteligentes, mas
                não possuem recursos para contratar equipes de TI ou adquirir
                softwares complexos.
              </p>
              <p>
                Os setores com maior potencial de crescimento e que serão o foco
                inicial da prospecção são o comércio (crescimento de 8.1%),
                serviços (2.5%) e indústria (2.2%). A comunicação será adaptada
                para resolver as dores específicas de cada um desses setores,
                oferecendo dashboards e relatórios pré-configurados para suas
                necessidades.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="modelo">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Modelo de Negócio</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                O modelo de negócio é baseado em Software as a Service (SaaS),
                com três planos de assinatura mensal: Básico, Profissional e
                Empresarial. Essa abordagem garante uma receita recorrente e
                previsível, facilitando o planejamento financeiro e o
                investimento em melhorias contínuas no produto.
              </p>
              <p>
                A jornada do cliente começa com um trial gratuito de 14 dias,
                seguido por um processo de onboarding assistido para garantir a
                rápida ativação e percepção de valor. A estratégia de retenção
                inclui suporte ágil em português e atualizações constantes com
                novas funcionalidades.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="estrategia">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Estratégia de Go-to-Market
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                A estratégia de go-to-market será multifacetada, combinando
                canais de aquisição digitais e parcerias estratégicas. O
                marketing digital incluirá otimização para motores de busca
                (SEO), anúncios no Google Ads e produção de conteúdo relevante
                para o público-alvo.
              </p>
              <p>
                As parcerias com escritórios de contabilidade e consultores de
                negócios serão fundamentais para alcançar PMEs de forma
                escalável, oferecendo uma solução de valor agregado que
                complementa seus serviços. O modelo de Freemium, com um trial
                gratuito, permitirá que os potenciais clientes experimentem a
                plataforma sem atritos.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="fiscal">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Estrutura Fiscal e Tributária
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                A Predixion será enquadrada no Simples Nacional, um regime
                tributário simplificado ideal para startups e pequenas
                empresas. A alíquota inicial será de 6% sobre o faturamento, o
                que representa uma carga tributária otimizada e previsível.
              </p>
              <p>
                Com a meta de faturamento anual de R$ 18.000, a projeção de
                tributos a serem pagos no primeiro ano é de R$ 1.080, ou R$ 90
                mensais. Essa estrutura enxuta é crucial para maximizar a margem
                de lucro e reinvestir no crescimento do negócio.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="conclusao">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Conclusão</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                A Predixion não é apenas um projeto acadêmico, mas um plano de
                negócio sólido com potencial para impactar positivamente o
                cenário de PMEs no Brasil. Com um mercado vasto e carente de
                soluções, uma proposta de valor clara e uma estratégia bem
                definida, a empresa está posicionada para um crescimento
                sustentável.
              </p>
              <p>
                Representa uma jornada de aprendizado única,
                combinando teoria e prática para resolver um problema real. O
                sucesso da Predixion será medido não apenas pelo retorno
                financeiro, mas pelo desenvolvimento de competências e pela
                criação de uma solução que realmente ajude outras empresas a
                prosperar.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
    <footer className="py-12 px-6 border-t border-slate-700">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <BarChart3 className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold text-white">Predixion</span>
        </div>
        <p className="text-slate-400 mb-4">
          Transformando dados em decisões inteligentes para PMEs brasileiras
        </p>
        <p className="text-sm text-slate-500">
          Plano de Negócios criado por Thiago Reina Gama
        </p>
        
      </div>
    </footer>
  </div>
);

export default BusinessPlan;
