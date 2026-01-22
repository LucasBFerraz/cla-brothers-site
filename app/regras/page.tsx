import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import {
  Shield,
  AlertTriangle,
  Lightbulb,
  Ban,
  Target,
  Users,
  Radio,
  Heart,
  MessageSquareOff,
  UserX,
  Eye,
  SmilePlus,
} from "lucide-react"

const rules = [
  {
    icon: MessageSquareOff,
    title: "PROIBIDO FLOOD E SPAM",
    description: "Não é permitido floodar ou spammar em qualquer chat.",
  },
  {
    icon: Ban,
    title: "ZERO TOLERÂNCIA A DISCRIMINAÇÃO",
    description:
      "Racismo, discriminação por questões étnicas, religiosas ou de qualquer tipo não será tolerada. Ban imediato.",
  },
  {
    icon: UserX,
    title: "PROTEÇÃO DE PRIVACIDADE",
    description: "É proibido expor informações pessoais de outros membros.",
  },
  {
    icon: Heart,
    title: "RESPEITO E BOAS DISCUSSÕES",
    description:
      "Seja respeitoso e evite toxicidade. Brincadeiras são permitidas apenas com quem der liberdade para isso. Discussões e debates são bem-vindos, desde que feitos de forma respeitosa.",
  },
  {
    icon: Eye,
    title: "ACUSAÇÕES COM PROVAS",
    description:
      "Não acuse outros de trapaça sem provas. Seja humilde para reconhecer habilidades superiores, mas mantenha atenção para identificar possíveis cheaters, isso inclui se aproveitar de bugs do jogo.",
  },
  {
    icon: Shield,
    title: "DECISÕES BASEADAS EM FATOS",
    description:
      "A equipe administrativa do Clã Brothers baseia-se em fatos. Acusações sem provas concretas não serão toleradas.",
  },
  {
    icon: Users,
    title: "AMBIENTE AMIGÁVEL",
    description:
      "Cultive um ambiente amigável. Todos aqui são amigos, evite qualquer rancor e rivalize de forma saudável.",
  },
  {
    icon: Radio,
    title: "LIBERDADE DE DISCORDAR",
    description: "Seja respeitoso ao discordar das regras. Você é livre para se retirar.",
  },
  {
    icon: AlertTriangle,
    title: "CONTEÚDO APROPRIADO",
    description:
      "É PROIBIDO a divulgação de ilícitos, conteúdo adulto ou divulgação que não fazem parte do CLÃ BROTHERS.",
  },
  {
    icon: SmilePlus,
    title: "BRINCADEIRAS SAUDÁVEIS",
    description: "Deve respeitar o próximo com brincadeiras saudáveis sem incitar ódio ou algo do tipo.",
  },
]

const tips = [
  {
    icon: Users,
    title: "USE CLASSES ESTRATEGICAMENTE",
    description:
      "Balance a composição da equipe. Não tenha 5 snipers em um squad. Medic, Support, Assault e Recon precisam trabalhar juntos.",
  },
  {
    icon: Heart,
    title: "REVIVER É PRIORIDADE",
    description:
      "Como Medic, seu trabalho é manter o time vivo. Reviva sempre que possível e use smoke grenades para cobrir ressurreições.",
  },
  {
    icon: Target,
    title: "CAPTURE OBJETIVOS EM GRUPO",
    description:
      "Nunca capture pontos sozinho. Espere o squad, ataque juntos e defenda em equipe. Números sempre vencem.",
  },
  {
    icon: Radio,
    title: "COMUNIQUE TUDO",
    description:
      "Viu um tanque? Chame. Inimigos flanqueando? Avise. Precisa de munição? Peça. Comunicação é 50% da vitória.",
  },
  {
    icon: Shield,
    title: "APRENDA OS MAPAS",
    description:
      "Conheça rotas de flank, pontos de cobertura e posições estratégicas. Domine o terreno para dominar o inimigo.",
  },
  {
    icon: Target,
    title: "SPOT SEMPRE",
    description:
      "Use a spotting scope, flare guns e marque inimigos constantemente. Informação é poder no campo de batalha.",
  },
]

const bannedPlayers = [
  { name: "MatadoDejChorao", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "CHUMMPASSEIOS", reason: "FALTA DE RESPEITO COM O ADM DO CLÃ" },
  { name: "GeedFlaAndFloo", reason: "USANDO INVIDIA ESPECTRO E RACISMO COM TODOS NO SERVIDOR" },
  { name: "JabuDOC", reason: "USANDO INVIDIA ESPECTRO E FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "WOLF-Tenente", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "__PS1U_C0P4T0 (WOLF - TENENET CONTA FACK)", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "KRATOSLIMA_19", reason: "DESCUMBRIMENTO DAS REGRAS DO CLA E FALTA DE RESPEITO COM OS MEMBROS E O CLÃ" },
  {
    name: "EDUAR_DO2RJ",
    reason:
      "CHAMANDO A SERVIDOR DE LIXO, INÚTEIS, FALTANDO COM RESPEITO COM TODOS OS MEMBROS DO CLÃ E COM O PRÓPRIO CLÃ",
  },
  { name: "BLOOD_DRINK", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "WOLF JV_THE_MYSTIC", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "SUS TMantenub", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "SABRINNA TRYHARD", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "CAYOJULIOCESAR", reason: "ATO RACISTA CONTRA TODOS DO CLÃ" },
  { name: "ESTRARESTRESTE", reason: "ATO RACISTA CONTRA TODOS DO CLÃ" },
  { name: "CPT-HISE", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "FRANCHOTA77", reason: "ATO RACISTA CONTRA TODOS DO CLÃ" },
  { name: "JESSEPINKMAN_BR", reason: "MÁ CONDUTA NO SERVIDOR DO CLÃ BROTHERS" },
  { name: "WESLLEYTK3", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "KN4Z", reason: "RACISMO CONTRA TODOS DO SERVIDOR DO CLÃ BROTHERS" },
  { name: "LEOHESMAN", reason: "RACISMO CONTRA TODOS DO SERVIDOR DO CLÃ BROTHERS" },
  { name: "SDVICTOR42", reason: "FALTA DE RESPEITO COM O CLÃ BROTHERS" },
  { name: "FALCON_USP", reason: "FALTA DE RESPEITO COM O CLÃ BROTHERS" },
  { name: "GARUAGE", reason: "FALTA DE RESPEITO COM O CLÃ BROTHERS" },
  { name: "SARGENTOCOLLER", reason: "RACISMO CONTRA TODOS DO SERVIDOR DO CLÃ BROTHERS" },
  { name: "DR_OTZ_ADVOKILL", reason: "FALTA DE RESPEITO COM O CLÃ BROTHERS" },
  { name: "City_Cop", reason: "Anti jogo, explodindo base de reabastecimento e smokando tanque aliado" },
  {
    name: "KESSFPS",
    reason:
      "FOI VERIFICADO DO COMPUTADOR DO MESMO QUE QUANDO ESTAVA INICIANDO O BFV E OUTROS JOGOS ELE ESTAVA USANDO O CHEAT ENGINE",
  },
  {
    name: "RyanGomys",
    reason:
      "DESCUMPRIMENTO DAS REGRAS DO CLÃ BROTHERS ALÉM DE CHIGAMENTO E FALTA DE PROVAS EM CHAMAR AS PESSOAS DE HACK, ALÉM DE FALTA DE RESPEITO COM OS ADMS, MEMBROS, RECRUTAS E CONVIDADOS",
  },
  { name: "zRaidenShagun", reason: "USANDO CHERT E ATIRANDO PELAS PAREDES" },
  { name: "FGiachetta", reason: "Falta de RESPEITO COM OS ADM E MEMBROS DO CLÃ" },
  { name: "LucasRezendeBR96", reason: "FALTA DE RESPEITO COM OS MEMBROS" },
  { name: "LondresRP", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "AITUZIN", reason: "FALTA DE RESPEITO COM O ADM DO CLÃ" },
  { name: "LIILY_LADY (NAMORADA DO AITUZIN)", reason: "FALTA DE RESPEITO COM O ADM DO CLÃ" },
  { name: "HEMT_HEMT", reason: "XINGAMENTO AO ADM DO CLÃ" },
  { name: "LORRAN222", reason: "FALTA DE RESPEITO COM OS MEMBROS DO CLÃ" },
  { name: "XERADOR_DESUVACO", reason: "RACISMO" },
  { name: "FGIANCHETTA", reason: "FALTA DE RESPEITO COM O ADM DO CLÃ" },
  { name: "TR4PPGABE", reason: "FALTA DE RESPEITO COM O SERVIDOR DO CLÃ" },
  { name: "BBOYS-D-GUERRA", reason: "FALTA DE RESPEITO COM OS OUTROS JOGADORES" },
  { name: "LIPE CACHORRAO/zCACHORRAO", reason: "FALTA DE RESPEITO COM OS OUTROS JOGADORES E XINGAMENTOS" },
  { name: "TTVHIITT", reason: "FALTA DE RESPEITO COM OS OUTROS JOGADORES E XINGAMENTOS" },
  {
    name: "CLÃ SUS",
    reason:
      "ENTRANDO NO SERVIDOR PARA CHAMAR OS JOGADORES QUE ESTÃO NO SERVIDOR DO BROTHERS PARA JOGAR NO SERVIDOR DO SUS",
  },
  { name: "Thz_Huntz", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "cn6918CM", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "zHUNTZFxZ", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "Brxuss", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "Frosstz_Hs", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "SANBAI1919810", reason: "USANDO ALL RACKER" },
  { name: "0Gelpi0", reason: "SUANDO ALL RACKER" },
  { name: "JOAAUSILI", reason: "ATO RACISTA CONTRA TODOS DO CLÃ" },
  { name: "NETUS", reason: "ATO RACISTA CONTRA TODOS DO CLÃ" },
  { name: "NAKAMURA_UCHIDA", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "HE_LOVES-US", reason: "USANDO INVIDIA ESPECTRO" },
  { name: "AGUSXENEIZE2606", reason: "FALTA DE RESPEITO COM O ADM DO CLÃ" },
  { name: "HACKLEMON564", reason: "FALTA DE RESPEITO COM O ADM DO CLÃ" },
  { name: "JAVALIZERO", reason: "XINGAMENTO DE PESSOAS NO SERVIDOR" },
  { name: "FOX-STNGLE", reason: "WALL HACK E AIMBOT" },
  { name: "KENNYMT2", reason: "WALL HACK E AIMBOT" },
  { name: "SCORPIONRX5", reason: "RACISMO" },
  { name: "ALEXKOALA174", reason: "DESRESPEITO AO SERVIDOR" },
  { name: "VIZINHO_DELEGADO", reason: "DESRESPEITO AO ADM" },
  { name: "OCOMUNISMOVIVE", reason: "WALL HACK" },
  { name: "LARY963", reason: "WALL HACK" },
  { name: "SNIP RUHTRAC", reason: "DESRESPEITO AO SERVIDOR" },
  { name: "K-MED_200G", reason: "DESRESPEITO AO SERVIDOR" },
  { name: "MyG ATUNONLINE", reason: "AIMBOT" },
  { name: "HARDYLCK", reason: "DESRESPEITO AO SERVIDOR" },
  { name: "Thamersonxd", reason: "WALL HACK" },
  { name: "PIETROCAMP0S", reason: "WALL HACK" },
  { name: "NESCAUZIN", reason: "WALL HACK" },
  { name: "AEG0NTARGERYAN", reason: "RACISMO" },
  { name: "DOLPHTH0MAS", reason: "WALLHACK" },
  { name: "ASPAS-DOBF5", reason: "WALLHACK" },
  { name: "IDZMACRO", reason: "WALLHACK" },
  { name: "GU4M", reason: "WALLHACK" },
  { name: "NOCHEATSJUSTPRO", reason: "RACISMO" },
  { name: "ELIANVIC", reason: "RACISMO" },
  { name: "M4CH1", reason: "DESRESPEITO COM OS ADMS" },
  { name: "JOAO0ABACAXI", reason: "AIMBOT" },
  { name: "CLÃ RIP", reason: "DESRESPEITO AO CLÃ E OS MEMBROS" },
  { name: "ROVERTLIONWOLF", reason: "DESRESPEITO COM O ADM DO CLA E MEMBROS" },
  { name: "WALISSONWL", reason: "RACISMO" },
  { name: "BRADGMS1", reason: "RACISMO" },
  { name: "INHERITOR", reason: "RACISMO" },
  { name: "HUCAFF", reason: "RACISMO" },
  { name: "FREDAOCUS", reason: "RACISMO" },
  { name: "LACOSA213", reason: "WALLHACK" },
  { name: "MPMCPHMC", reason: "WALLHACK" },
  { name: "ZLLRAZORLLX", reason: "WALLHACK" },
  { name: "DVRKHAWK", reason: "WALLHACK" },
]

export default function RegrasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        {/* Header */}
        <section className="container mx-auto max-w-6xl mb-20 text-center">
          <div className="mb-6">
            <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider text-glow">
            REGRAS DO CLÃ <span className="text-accent">BROTHERS</span>
          </h1>
          <div className="h-1 w-32 bg-accent mx-auto mb-6" />
          {/* Updated subtitle */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto uppercase tracking-widest">
            DISCORD + SERVIDORES + REDES_SOCIAIS
          </p>
        </section>

        {/* Rules Section */}
        <section className="container mx-auto max-w-7xl mb-20">
          {/* Removed subtitle */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-wider flex items-center gap-3">
              <Shield className="w-10 h-10 text-accent" />
              REGRAS DO CLÃ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => {
              const Icon = rule.icon
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-accent/30 p-6 hover:border-accent transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-sm border border-accent/50">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 tracking-wide">{rule.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Added reminder section */}
          <Card className="mt-12 bg-accent/10 backdrop-blur-sm border-accent/50 p-8">
            <h3 className="text-2xl font-bold mb-4 tracking-wider">LEMBRETES:</h3>
            <p className="text-lg leading-relaxed">
              É necessário <span className="text-accent font-bold">RESPEITAR os ADMs</span>. Não estamos aqui para dar
              ordens, mas para ajudar a ter uma troca bacana onde todos possam jogar e se divertir juntos.
            </p>
          </Card>
        </section>

        {/* Tips Section */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-wider flex items-center gap-3">
              <Lightbulb className="w-10 h-10 text-accent" />
              DICAS PARA JOGADORES
            </h2>
            <p className="text-muted-foreground text-lg">Estratégias e táticas para dominar o campo de batalha</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/30 p-6 hover:border-primary transition-all"
                >
                  <div className="mb-4">
                    <div className="p-3 bg-primary/20 rounded-sm border border-primary/50 inline-block">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 tracking-wide">{tip.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{tip.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Banned Players Section */}
        <section className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 tracking-wider flex items-center gap-3">
              <Ban className="w-10 h-10 text-destructive" />
              LISTA DE <span className="text-destructive">BANIDOS</span>
            </h2>
            <p className="text-muted-foreground text-lg">Jogadores permanentemente removidos do clã</p>
          </div>

          <Card className="bg-destructive/10 backdrop-blur-sm border-destructive/50 overflow-hidden">
            <div className="grid grid-cols-2 gap-4 px-6 py-4 bg-destructive/20 border-b border-destructive/50 font-bold text-sm tracking-wider">
              <div>JOGADOR</div>
              <div>MOTIVO</div>
            </div>

            {/* Banned Players List */}
            <div className="divide-y divide-destructive/30">
              {bannedPlayers.map((player, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 px-6 py-4 hover:bg-destructive/5 transition-colors">
                  <div className="font-semibold text-destructive flex items-center gap-2">
                    <Ban className="w-4 h-4" />
                    {player.name}
                  </div>
                  <div className="text-muted-foreground text-sm">{player.reason}</div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-sm">
            <p className="text-sm text-center text-muted-foreground">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-destructive" />
              Se você testemunhar violação de regras, reporte imediatamente à administração
            </p>
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
