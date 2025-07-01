import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, DollarSign, Target, Lightbulb, Shield, Globe, Zap, ChevronRight, Building2, BarChart3, PieChart as PieChartIcon, TrendingDown } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [animatedValue, setAnimatedValue] = useState(0);

  // Dados para os dashboards
  const marketData = [
    { name: 'PMEs Elegíveis', value: 200000, color: '#3b82f6' },
    { name: 'Com SaaS', value: 10000, color: '#ef4444' },
    { name: 'Sem SaaS', value: 190000, color: '#22c55e' }
  ];

  const revenueProjection = [
    { month: 'Jan', basic: 5, professional: 2, enterprise: 1, total: 1183 },
    { month: 'Fev', basic: 8, professional: 3, enterprise: 1, total: 1580 },
    { month: 'Mar', basic: 12, professional: 4, enterprise: 2, total: 2344 },
    { month: 'Abr', basic: 15, professional: 6, enterprise: 2, total: 2883 },
    { month: 'Mai', basic: 18, professional: 8, enterprise: 3, total: 3714 },
    { month: 'Jun', basic: 20, professional: 10, enterprise: 4, total: 4570 }
  ];

  const competitiveData = [
    { feature: 'Preço Mensal', predixion: 79, tableau: 170, powerbi: 120 },
    { feature: 'Setup (dias)', predixion: 1, tableau: 14, powerbi: 7 },
    { feature: 'Suporte BR', predixion: 100, tableau: 30, powerbi: 60 }
  ];

  const sectorsGrowth = [
    { sector: 'Comércio', growth: 8.1, companies: 80000 },
    { sector: 'Serviços', growth: 2.5, companies: 70000 },
    { sector: 'Indústria', growth: 2.2, companies: 50000 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Predixion</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['hero', 'overview', 'market', 'financials', 'strategy', 'dashboard'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {section === 'hero' ? 'Início' : 
                   section === 'overview' ? 'Visão Geral' :
                   section === 'market' ? 'Mercado' :
                   section === 'financials' ? 'Financeiro' :
                   section === 'strategy' ? 'Estratégia' : 'Dashboard'}
                </button>
              ))}
              <Link to="/business-plan" className="text-sm font-medium transition-colors hover:text-blue-400 text-slate-300">
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              Startup de Análise de Dados
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Predixion
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Soluções inteligentes de Business Intelligence para PMEs brasileiras
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={() => scrollToSection('overview')} size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explorar Plano <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => scrollToSection('dashboard')} variant="outline" size="lg" className="border-blue-500 text-blue-200 hover:bg-blue-900/30 hover:text-blue-100">
              Ver Dashboard
            </Button>
          </div>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">R$ 18k</div>
                <div className="text-sm text-slate-400">Meta Anual</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">200k</div>
                <div className="text-sm text-slate-400">PMEs Alvo</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">6%</div>
                <div className="text-sm text-slate-400">Carga Tributária</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">20%</div>
                <div className="text-sm text-slate-400">Crescimento SaaS</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Visão Geral do Negócio</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-yellow-400" />
                  Proposta de Valor
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Dashboards personalizáveis para diferentes áreas empresariais</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Relatórios automatizados via email ou WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Análises preditivas com machine learning</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>Integração nativa com sistemas brasileiros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-green-400" />
                  Vantagens Competitivas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Especialização PMEs Brasil</span>
                      <span className="text-sm text-blue-400">95%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-4">
                      <div
                        className="bg-blue-500 h-4 rounded-full"
                        style={{ width: '95%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Simplicidade de Uso</span>
                      <span className="text-sm text-green-400">90%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-4">
                      <div
                        className="bg-green-500 h-4 rounded-full"
                        style={{ width: '90%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Custo-Benefício</span>
                      <span className="text-sm text-purple-400">85%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-4">
                      <div
                        className="bg-purple-500 h-4 rounded-full"
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Contexto Acadêmico</CardTitle>
              <CardDescription className="text-slate-300">
                Projeto desenvolvido por universitário de Sistemas de Informação
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p className="mb-4">
                A Predixion representa uma oportunidade única de aplicar conhecimentos teóricos em uma demanda real do mercado nacional, 
                proporcionando aprendizado prático em business intelligence, análise preditiva, desenvolvimento de software e gestão empresarial.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <Building2 className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-white">98%</div>
                  <div className="text-sm text-slate-400">PMEs no Brasil</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <Globe className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-white">19M</div>
                  <div className="text-sm text-slate-400">Estabelecimentos</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-white">5%</div>
                  <div className="text-sm text-slate-400">Usam SaaS</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Analysis */}
      <section id="market" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Análise de Mercado</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Penetração de Mercado</CardTitle>
                <CardDescription className="text-slate-400">
                  Oportunidade entre PMEs brasileiras
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={marketData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${(value/1000).toFixed(0)}k`}
                    >
                      {marketData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => {
                      if (typeof value === 'number') {
                        return [`${(value / 1000).toFixed(0)}k empresas`];
                      }
                      return [value as string];
                    }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Crescimento por Setor</CardTitle>
                <CardDescription className="text-slate-400">
                  Performance 2024 dos setores-alvo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sectorsGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="sector" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #374151',
                        color: '#ffffff'
                      }} 
                    />
                    <Bar dataKey="growth" fill="#3b82f6" name="Crescimento %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Análise Competitiva</CardTitle>
              <CardDescription className="text-slate-400">
                Comparação com principais concorrentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-slate-300 p-4">Recurso</th>
                      <th className="text-blue-400 p-4">Predixion</th>
                      <th className="text-slate-400 p-4">Tableau</th>
                      <th className="text-slate-400 p-4">Power BI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitiveData.map((row, index) => (
                      <tr key={index} className="border-b border-slate-700/50">
                        <td className="text-white p-4 font-medium">{row.feature}</td>
                        <td className="text-green-400 p-4 font-bold">
                          {row.feature === 'Preço Mensal' ? `R$ ${row.predixion}` : 
                           row.feature === 'Setup (dias)' ? `${row.predixion} dia` : `${row.predixion}%`}
                        </td>
                        <td className="text-slate-400 p-4">
                          {row.feature === 'Preço Mensal' ? `R$ ${row.tableau}` : 
                           row.feature === 'Setup (dias)' ? `${row.tableau} dias` : `${row.tableau}%`}
                        </td>
                        <td className="text-slate-400 p-4">
                          {row.feature === 'Preço Mensal' ? `R$ ${row.powerbi}` : 
                           row.feature === 'Setup (dias)' ? `${row.powerbi} dias` : `${row.powerbi}%`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financial Section */}
      <section id="financials" className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Planejamento Financeiro</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-green-400" />
                  Investimento Inicial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-slate-300">
                  <div className="flex justify-between">
                    <span>Custos Mensais</span>
                    <span className="text-white font-semibold">R$ 390</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Constituição</span>
                    <span className="text-white font-semibold">R$ 500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capital de Giro</span>
                    <span className="text-white font-semibold">R$ 2.000</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-700 pt-2">
                    <span className="font-semibold">Total</span>
                    <span className="text-green-400 font-bold text-lg">R$ 7.180</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="mr-2 h-5 w-5 text-blue-400" />
                  Planos de Preço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Básico</span>
                      <span className="text-green-400 font-bold">R$ 79</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">19 clientes para meta</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Profissional</span>
                      <span className="text-blue-400 font-bold">R$ 149</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">10 clientes para meta</div>
                  </div>
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Empresarial</span>
                      <span className="text-purple-400 font-bold">R$ 199</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">8 clientes para meta</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-emerald-400" />
                  Estrutura Fiscal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-slate-300">
                  <div className="flex justify-between">
                    <span>Regime</span>
                    <span className="text-white font-semibold">Simples Nacional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alíquota</span>
                    <span className="text-white font-semibold">6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tributos Anuais</span>
                    <span className="text-white font-semibold">R$ 1.080</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-700 pt-2">
                    <span className="font-semibold">Mensal</span>
                    <span className="text-green-400 font-bold text-lg">R$ 90</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Projeção de Receita</CardTitle>
              <CardDescription className="text-slate-400">
                Crescimento esperado nos primeiros 6 meses com base na aquisição de clientes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={revenueProjection}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #374151',
                      color: '#ffffff'
                    }} 
                  />
                  <Area type="monotone" dataKey="total" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Estratégia de Negócio</h2>
          
          <Tabs defaultValue="swot" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
              <TabsTrigger value="swot" className="text-slate-300">Análise SWOT</TabsTrigger>
              <TabsTrigger value="market" className="text-slate-300">Go-to-Market</TabsTrigger>
              <TabsTrigger value="tech" className="text-slate-300">Tecnologia</TabsTrigger>
              <TabsTrigger value="growth" className="text-slate-300">Crescimento</TabsTrigger>
            </TabsList>
            
            <TabsContent value="swot" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-green-900/20 border-green-700">
                  <CardHeader>
                    <CardTitle className="text-green-400">Forças</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <ul className="space-y-2">
                      <li>• Baixo custo operacional inicial</li>
                      <li>• Flexibilidade para experimentação</li>
                      <li>• Foco específico no mercado brasileiro</li>
                      <li>• Receita recorrente previsível</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-900/20 border-red-700">
                  <CardHeader>
                    <CardTitle className="text-red-400">Fraquezas</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <ul className="space-y-2">
                      <li>• Recursos financeiros limitados</li>
                      <li>• Experiência inicial limitada</li>
                      <li>• Dependência crítica de retenção</li>
                      <li>• Equipe reduzida</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-900/20 border-blue-700">
                  <CardHeader>
                    <CardTitle className="text-blue-400">Oportunidades</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <ul className="space-y-2">
                      <li>• Crescimento de 20% do mercado SaaS</li>
                      <li>• Digitalização acelerada pós-pandemia</li>
                      <li>• Baixa penetração atual de BI</li>
                      <li>• Parcerias com contadores</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-yellow-900/20 border-yellow-700">
                  <CardHeader>
                    <CardTitle className="text-yellow-400">Ameaças</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-300">
                    <ul className="space-y-2">
                      <li>• Concorrência de grandes players</li>
                      <li>• Mudanças regulatórias</li>
                      <li>• Taxa de cancelamento elevada</li>
                      <li>• Pressão competitiva sobre preços</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="market" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Canais de Aquisição</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <h4 className="text-blue-400 font-semibold mb-2">Marketing Digital</h4>
                      <p className="text-slate-300 text-sm">SEO, Google Ads e marketing de conteúdo direcionado</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <h4 className="text-green-400 font-semibold mb-2">Parcerias</h4>
                      <p className="text-slate-300 text-sm">Contadores e consultores empresariais</p>
                    </div>
                    <div className="p-4 bg-slate-700/50 rounded-lg">
                      <h4 className="text-purple-400 font-semibold mb-2">Freemium</h4>
                      <p className="text-slate-300 text-sm">Trial gratuito de 14 dias</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Jornada do Cliente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <div>
                          <div className="text-white font-semibold">Trial Gratuito</div>
                          <div className="text-slate-400 text-sm">14 dias sem cartão</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <div>
                          <div className="text-white font-semibold">Onboarding</div>
                          <div className="text-slate-400 text-sm">Setup assistido via videochamada</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <div>
                          <div className="text-white font-semibold">Ativação</div>
                          <div className="text-slate-400 text-sm">Primeiros insights gerados</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                        <div>
                          <div className="text-white font-semibold">Conversão</div>
                          <div className="text-slate-400 text-sm">Upgrade para plano pago</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tech" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Arquitetura Tecnológica</CardTitle>
                  <CardDescription className="text-slate-400">
                    Stack moderno e escalável
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                      <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-white font-semibold mb-2">Frontend</h4>
                      <p className="text-slate-300 text-sm">React/Vue.js responsivo</p>
                    </div>
                    <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                      <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-white font-semibold mb-2">Backend</h4>
                      <p className="text-slate-300 text-sm">Node.js/Python API REST</p>
                    </div>
                    <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                      <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="text-white font-semibold mb-2">Cloud</h4>
                      <p className="text-slate-300 text-sm">AWS/Azure com auto-scaling</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="growth" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Roadmap de Crescimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Fase 1: MVP (Meses 1-3)</h4>
                        <p className="text-slate-300 text-sm">Desenvolvimento do produto mínimo viável e primeiros clientes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Fase 2: Crescimento (Meses 4-8)</h4>
                        <p className="text-slate-300 text-sm">Expansão de funcionalidades e base de clientes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="text-white font-semibold">Fase 3: Escala (Meses 9-12)</h4>
                        <p className="text-slate-300 text-sm">Otimização e preparação para investimento</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Interactive Dashboard */}
      <section id="dashboard" className="py-16 px-6 bg-slate-800/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Dashboard Executivo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-blue-900/80 border-blue-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Receita Anual</p>
                    <p className="text-2xl font-bold">R$ 18.000</p>
                    <p className="text-blue-300 text-xs">Meta estabelecida</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-blue-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/80 border-green-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-200 text-sm">Clientes Alvo</p>
                    <p className="text-2xl font-bold">
                      {(animatedValue * 20 + 2000).toLocaleString()}
                    </p>
                    <p className="text-green-300 text-xs">PMEs elegíveis</p>
                  </div>
                  <Users className="h-8 w-8 text-green-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/80 border-purple-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-200 text-sm">Investimento</p>
                    <p className="text-2xl font-bold">R$ 7.180</p>
                    <p className="text-purple-300 text-xs">Capital inicial</p>
                  </div>
                  <Target className="h-8 w-8 text-purple-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/80 border-yellow-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-200 text-sm">ROI Projetado</p>
                    <p className="text-2xl font-bold">250%</p>
                    <p className="text-yellow-300 text-xs">Primeiro ano</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-yellow-300" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-blue-400" />
                  Projeção Financeira
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueProjection}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #374151',
                        color: '#ffffff'
                      }} 
                    />
                    <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <PieChartIcon className="mr-2 h-5 w-5 text-green-400" />
                  Distribuição de Custos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Hospedagem', value: 100, color: '#3b82f6' },
                        { name: 'Marketing', value: 200, color: '#ef4444' },
                        { name: 'Ferramentas', value: 50, color: '#22c55e' },
                        { name: 'Outros', value: 40, color: '#f59e0b' }
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: R$ ${value}`}
                    >
                      {[
                        { name: 'Hospedagem', value: 100, color: '#3b82f6' },
                        { name: 'Marketing', value: 200, color: '#ef4444' },
                        { name: 'Ferramentas', value: 50, color: '#22c55e' },
                        { name: 'Outros', value: 40, color: '#f59e0b' }
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`R$ ${value}`]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BarChart3 className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold text-white">Predixion</span>
          </div>
          <p className="text-slate-400 mb-4">
            Transformando dados em decisões inteligentes para PMEs brasileiras
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <span>Plano de Negócios criado por Thiago Reina Gama</span>
            <span>•</span>
            <span>Sistemas de Informação</span>
            <span>•</span>
            <span>Plano Analítico</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
