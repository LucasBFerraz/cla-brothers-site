import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, Users, Zap, Target, TrendingUp, Award, Star } from "lucide-react"

const goals = [
  {
    icon: Zap,
    title: "CONSTRUÇÃO DO PC SERVIDOR",
    description:
      "Arrecadação de fundos para construir computador dedicado que hospedará o servidor do clã com hardware de alta performance",
    current: 45,
    target: 100,
    contributors: 35,
    status: "Em andamento",
  },
  {
    icon: Target,
    title: "COMPONENTES DO SERVIDOR",
    description:
      "Aquisição de peças: Processador Intel i9, 64GB RAM, SSD NVMe 2TB, Placa-mãe para servidor e fonte 850W",
    current: 30,
    target: 100,
    contributors: 28,
    status: "Em andamento",
  },
]

const topContributors = [
  { name: "[BROT] BROTHERS ANDREWWS", contributions: 150, rank: 1 },
  { name: "[BROT] BROTHERS ITALOTHIAGO02", contributions: 132, rank: 2 },
  { name: "[BROT] BROTHERS FLUKE_TESTER", contributions: 125, rank: 3 },
  { name: "[BROT] BROTHERS TERMOBOX", contributions: 118, rank: 4 },
  { name: "[BROT] BROTHERS FERRAZ_VGT", contributions: 110, rank: 5 },
  { name: "[BROT] BRO_MedicHero", contributions: 98, rank: 6 },
  { name: "[BROT] BRO_TacticalOps", contributions: 95, rank: 7 },
  { name: "[BROT] BRO_AssaultKing", contributions: 87, rank: 8 },
  { name: "[BROT] BRO_SupportGod", contributions: 82, rank: 9 },
  { name: "[BROT] BRO_ReconMaster", contributions: 76, rank: 10 },
]

export default function MetasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        {/* Header */}
        <section className="container mx-auto max-w-6xl mb-20 text-center">
          <div className="mb-6">
            <TrendingUp className="w-16 h-16 text-accent mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider text-glow">
            METAS & <span className="text-accent">CONTRIBUIÇÕES</span>
          </h1>
          <div className="h-1 w-32 bg-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe o progresso da comunidade e veja como você pode contribuir para nosso crescimento
          </p>
        </section>

        {/* Stats Overview */}
        <section className="container mx-auto max-w-7xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 p-6 text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-accent mb-2">6</div>
              <div className="text-sm text-muted-foreground">METAS ATIVAS</div>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-2">150</div>
              <div className="text-sm text-muted-foreground">CONTRIBUIDORES</div>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 p-6 text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-accent mb-2">68%</div>
              <div className="text-sm text-muted-foreground">PROGRESSO MÉDIO</div>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">PRÓXIMAS À CONCLUSÃO</div>
            </Card>
          </div>
        </section>

        {/* Goals Section */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-wider flex items-center gap-3">
              <Target className="w-10 h-10 text-accent" />
              METAS DA COMUNIDADE
            </h2>
            <p className="text-muted-foreground text-lg">Objetivos estratégicos para fortalecer nosso servidor</p>
          </div>

          <div className="grid gap-6">
            {goals.map((goal, index) => {
              const Icon = goal.icon
              const statusColor =
                goal.current >= 80 ? "text-green-400" : goal.current >= 50 ? "text-yellow-400" : "text-blue-400"

              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-accent/30 p-6 hover:border-accent transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon and Title */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-accent/20 rounded-sm border border-accent/50">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold tracking-wide">{goal.title}</h3>
                            <span
                              className={`text-sm font-semibold px-3 py-1 rounded-sm bg-accent/20 border border-accent/50 ${statusColor}`}
                            >
                              {goal.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">{goal.description}</p>

                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Progresso</span>
                              <span className="font-bold text-accent">{goal.current}%</span>
                            </div>
                            <Progress value={goal.current} className="h-3" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {goal.contributors} contribuidores
                              </span>
                              <span>
                                {goal.current}/{goal.target}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Top Contributors */}
        <section className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-wider flex items-center gap-3">
              <Award className="w-10 h-10 text-accent" />
              TOP CONTRIBUIDORES
            </h2>
            <p className="text-muted-foreground text-lg">
              Membros que mais contribuíram para o progresso da comunidade
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/30 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-accent/20 border-b border-accent/50 font-bold text-sm tracking-wider">
              <div>RANK</div>
              <div>JOGADOR</div>
              <div className="text-right">CONTRIBUIÇÕES</div>
            </div>

            {/* Contributors List */}
            <div className="divide-y divide-border">
              {topContributors.map((contributor) => (
                <div
                  key={contributor.rank}
                  className={`grid grid-cols-3 gap-4 px-6 py-4 hover:bg-accent/5 transition-colors ${
                    contributor.rank <= 3 ? "bg-accent/10" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {contributor.rank <= 3 ? (
                      <Award
                        className={`w-5 h-5 ${
                          contributor.rank === 1
                            ? "text-yellow-400"
                            : contributor.rank === 2
                              ? "text-gray-300"
                              : "text-amber-600"
                        }`}
                      />
                    ) : (
                      <Star className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className="font-bold text-lg">{contributor.rank}º</span>
                  </div>
                  <div className="font-semibold">{contributor.name}</div>
                  <div className="text-right">
                    <span className="font-mono text-accent font-bold">{contributor.contributions}</span>
                    <span className="text-muted-foreground text-sm ml-1">pts</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/10 backdrop-blur-sm border-primary/30 p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                COMO CONTRIBUIR
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Participe ativamente das partidas do servidor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Recrute novos jogadores qualificados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ajude na organização de eventos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Crie conteúdo (streams, vídeos, tutoriais)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Apoie financeiramente (servidor, eventos)</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-accent/10 backdrop-blur-sm border-accent/30 p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                BENEFÍCIOS DE CONTRIBUIR
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Reconhecimento público no ranking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Tag especial no Discord e in-game</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Prioridade em eventos competitivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Acesso a features exclusivas do servidor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Chance de promoção para administração</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/80 border-t border-accent/30">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold tracking-wider mb-2">CLÃ BROTHERS OFICIAL</h3>
            <p className="text-sm text-muted-foreground">Battlefield V</p>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground mb-2">
              © 2025 Clã Brothers Oficial. Todos os direitos reservados.
            </p>
            <p className="text-sm text-accent font-semibold">
              Criado por <span className="text-foreground">Pitanga Studio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
