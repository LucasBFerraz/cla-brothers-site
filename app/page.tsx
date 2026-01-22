"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Users, Server, ChevronDown } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const oficialMembers = [
  { position: 1, name: "[BROT] BROTHERS FELIPE", category: "Membro Oficial" },
  { position: 2, name: "[BROT] BROTHERS TURAKSANN", category: "Membro Oficial" },
  { position: 3, name: "[BROT] BROTHERS TAYLOR FELIPE", category: "Membro Oficial" },
  { position: 4, name: "[BROT] BROTHERS TRANCA_RUA_RJ", category: "Membro Oficial" },
  { position: 5, name: "[BROT] BROTHERS IDEKA", category: "Membro Oficial" },
  { position: 6, name: "[BROT] BROTHERS MARCOS EMANUEL", category: "Membro Oficial" },
  { position: 7, name: "[BROT] BROTHERS WILHELMVORALLEM", category: "Membro Oficial" },
  { position: 8, name: "[BROT] BROTHERS JHONEMILK", category: "Membro Oficial" },
  { position: 9, name: "[BROT] BROTHERS PEREIRA_FIX", category: "Membro Oficial" },
  { position: 10, name: "[BROT] BROTHERS DJONATANRAFA", category: "Membro Oficial" },
  { position: 11, name: "[BROT] BROTHERS AGUAQUATROCKER", category: "Membro Oficial" },
  { position: 12, name: "[BROT] BROTHERS MRTT1997", category: "Membro Oficial" },
  { position: 13, name: "[BROT] BROTHERS BAYANORS", category: "Membro Oficial" },
  { position: 14, name: "[BROT] BROTHERS BRUNO BASTOS", category: "Membro Oficial" },
  { position: 15, name: "[BROT] BROTHERS DOVALLE_1776", category: "Membro Oficial" },
  { position: 16, name: "[BORT] BORTHERS GARCIA", category: "Membro Oficial" },
  { position: 17, name: "[BROT] BROTHERS MOZOVO-BR", category: "Membro Oficial" },
  { position: 18, name: "[BROT] BROTHERS PLAYERFIVEY", category: "Membro Oficial" },
  { position: 19, name: "[BROT] BROTHERS G-4-M-3-R-3-X-T", category: "Membro Oficial" },
  { position: 20, name: "[BROT] BROTHERS MUSKALIEN", category: "Membro Oficial" },
  { position: 21, name: "[BROT] BROTHERS OSCARGOMES25", category: "Membro Oficial" },
  { position: 22, name: "[BROT] BROTHERS ZULIQUINHA", category: "Membro Oficial" },
  { position: 23, name: "[BROT] BROTHERS FAELKKA", category: "Membro Oficial" },
  { position: 24, name: "[BROT] BROTHERS MIGBOYSOUZA", category: "Membro Oficial" },
  { position: 25, name: "[BROT] BROTHERS BOYCETO", category: "Membro Oficial" },
  { position: 26, name: "[BROT] BROTHERS HIDEAKI", category: "Membro Oficial" },
  { position: 27, name: "[BROT] BTOTHERS PISSICKICKO", category: "Membro Oficial" },
  { position: 28, name: "[BROT] BROTHERS AFROOVELHA", category: "Membro Oficial" },
  { position: 29, name: "[BROT] BROTHERS MUNARETO_JTS", category: "Membro Oficial" },
  { position: 30, name: "[BROT] BROTHERS IGORBAGUAL", category: "Membro Oficial" },
  { position: 31, name: "[BROT] BROTHERS MALAQUIASLIMA", category: "Membro Oficial" },
  { position: 32, name: "[BROT] BROTHERS JAPANHS01", category: "Membro Oficial" },
  { position: 33, name: "[BROT] BROTHERS ROBSONGAMER02", category: "Membro Oficial" },
  { position: 34, name: "[BROT] BROTHERS SHORTSGODS", category: "Membro Oficial" },
  { position: 35, name: "[BROT] BROTHERS BBZAUM", category: "Membro Oficial" },
  { position: 36, name: "[BROT] CADUMAVERIKK_13", category: "Membro Oficial" },
  { position: 37, name: "[BROT] ZECAPAUGORDINH0", category: "Membro Oficial" },
  { position: 38, name: "[BROT] MANOSAUR0", category: "Membro Oficial" },
  { position: 39, name: "[BROT] CLEAR", category: "Membro Oficial" },
  { position: 40, name: "[BROT] KGBGHOST00001", category: "Membro Oficial" },
  { position: 124, name: "[BROT] BROTHERS FLUKE_TESTER", category: "Membro Oficial" },
]

const recrutas = [
  { position: 41, name: "RECRUTA FELIPE SILVA", category: "Recruta" },
  { position: 42, name: "RECRUTA ARTUR LUIS", category: "Recruta" },
  { position: 43, name: "RECRUTA DANNREZZ", category: "Recruta" },
  { position: 44, name: "RECRUTA DKYZERXXL", category: "Recruta" },
  { position: 45, name: "RECRUTA MATHEUS CALO SANTOS", category: "Recruta" },
  { position: 46, name: "RECRUTA DWKIEPERT", category: "Recruta" },
  { position: 47, name: "RECRUTA BALDOSO", category: "Recruta" },
  { position: 48, name: "RECRUTA GG3SLIZGE5W", category: "Recruta" },
  { position: 49, name: "RECRUTA YOUNGRAAFF", category: "Recruta" },
  { position: 50, name: "RECRUTA BALDOSSO", category: "Recruta" },
  { position: 51, name: "RECRUTA MIMOTIL GM", category: "Recruta" },
  { position: 52, name: "RECRUTA ZANIGOLD", category: "Recruta" },
  { position: 53, name: "RECRUTA XhedguardX", category: "Recruta" },
  { position: 54, name: "RECRUTA PHC", category: "Recruta" },
  { position: 55, name: "RECRUTA MARECHALHAVIT", category: "Recruta" },
  { position: 56, name: "RECRUTA JAUMJ", category: "Recruta" },
  { position: 57, name: "RECRUTA BAIANOSARRAFO", category: "Recruta" },
  { position: 58, name: "RECRUTA DAHT", category: "Recruta" },
  { position: 59, name: "RECRUTA ARCANTHUS", category: "Recruta" },
  { position: 60, name: "RECRUTA MAGUH22", category: "Recruta" },
  { position: 61, name: "RECRUTA DARIO TC02", category: "Recruta" },
  { position: 62, name: "RECRUTA ITORMATOS", category: "Recruta" },
  { position: 63, name: "RECRUTA SAIMONSACCI", category: "Recruta" },
  { position: 64, name: "RECRUTA FENRIS2KPN", category: "Recruta" },
  { position: 65, name: "BKRU - BJORN", category: "Recruta" },
  { position: 66, name: "VINIZIN", category: "Recruta" },
  { position: 67, name: "RYANFELIPE", category: "Recruta" },
  { position: 68, name: "BANDIDO MAL", category: "Recruta" },
  { position: 69, name: "ASMAS", category: "Recruta" },
  { position: 70, name: "K1NG_SKULL", category: "Recruta" },
  { position: 71, name: "FABRICIOFK29", category: "Recruta" },
  { position: 72, name: "ZDECKSTER", category: "Recruta" },
  { position: 73, name: "CHASEKALDWIN", category: "Recruta" },
  { position: 74, name: "CORONEL - RIBEIRO", category: "Recruta" },
  { position: 75, name: "ANARQUISTABR", category: "Recruta" },
  { position: 76, name: "INSMAR3658", category: "Recruta" },
  { position: 77, name: "MARTINSPF", category: "Recruta" },
  { position: 78, name: "PIPÔCO ADULTO", category: "Recruta" },
  { position: 79, name: "LIAM_HS", category: "Recruta" },
  { position: 80, name: "HAMMER_O_BRABO", category: "Recruta" },
  { position: 81, name: "GRILATICO", category: "Recruta" },
  { position: 82, name: "SANCAO2021", category: "Recruta" },
  { position: 83, name: "VITORDOCSGO", category: "Recruta" },
  { position: 84, name: "FLYSTSMITH", category: "Recruta" },
  { position: 85, name: "WHSKL96", category: "Recruta" },
  { position: 86, name: "PIRARURUSEBOSO", category: "Recruta" },
  { position: 87, name: "MATHEUSSANTOS85", category: "Recruta" },
  { position: 88, name: "FERNANDOHSILVA", category: "Recruta" },
  { position: 89, name: "BALUZIN", category: "Recruta" },
  { position: 90, name: "DRA_TO_DE_FERIAS", category: "Recruta" },
  { position: 91, name: "PEDRINHOSHOOTER", category: "Recruta" },
  { position: 92, name: "L0KZERA", category: "Recruta" },
  { position: 93, name: "ZEMBERLAN", category: "Recruta" },
  { position: 94, name: "GEPEETOO", category: "Recruta" },
  { position: 95, name: "RN_12_C", category: "Recruta" },
  { position: 96, name: "SANGUINARIO10", category: "Recruta" },
  { position: 97, name: "ANDERSONVULGO66", category: "Recruta" },
  { position: 98, name: "REXPEITAJOAO", category: "Recruta" },
  { position: 99, name: "HUNTERDARKER", category: "Recruta" },
  { position: 100, name: "INDX667", category: "Recruta" },
  { position: 101, name: "SULLYVANOFC", category: "Recruta" },
  { position: 102, name: "DARKH4ANTERS", category: "Recruta" },
  { position: 103, name: "DAX0080", category: "Recruta" },
  { position: 104, name: "LITTLEWIU", category: "Recruta" },
  { position: 105, name: "LUIZGR225", category: "Recruta" },
  { position: 106, name: "ENQUADR0", category: "Recruta" },
  { position: 107, name: "JGSP84", category: "Recruta" },
  { position: 108, name: "ROOYAL45", category: "Recruta" },
  { position: 109, name: "TELEFONISTA", category: "Recruta" },
  { position: 110, name: "LEOZINCPX", category: "Recruta" },
  { position: 111, name: "BIXCUITU", category: "Recruta" },
  { position: 112, name: "FALCÃO", category: "Recruta" },
  { position: 113, name: "FETOLOKO", category: "Recruta" },
  { position: 114, name: "SOUNOOB4I20", category: "Recruta" },
  { position: 115, name: "ARTURO", category: "Recruta" },
  { position: 116, name: "JEUX_MAXIS", category: "Recruta" },
  { position: 117, name: "KILLER", category: "Recruta" },
  { position: 118, name: "PODEROSAFERA", category: "Recruta" },
  { position: 119, name: "BRA4Z", category: "Recruta" },
  { position: 120, name: "BRANKIN_BR", category: "Recruta" },
  { position: 121, name: "RYUKS02", category: "Recruta" },
  { position: 122, name: "JUNIOR MARIANO", category: "Recruta" },
  { position: 123, name: "VOIDOPRESSOR", category: "Recruta" },
  { position: 124, name: "MERCÊS", category: "Recruta" },
]

const allMembers = [...oficialMembers, ...recrutas]

const admins = [
  { name: "[BROT] BROTHERS ANDREWWS", role: "Admin", image: "/placeholder.svg?height=200&width=200" },
  { name: "[BROT] BROTHERS ITALOTHIAGO02", role: "Admin", image: "/placeholder.svg?height=200&width=200" },
  { name: "[BROT] BROTHERS TERMOBOX", role: "Admin", image: "/placeholder.svg?height=200&width=200" },
  { name: "[BROT] BROTHERS FERRAZ_VGT", role: "Admin", image: "/placeholder.svg?height=200&width=200" },
]

const suporte = { name: "[BROT] BROTHERS FOGONORABO-JH", role: "Suporte" }

export default function HomePage() {
  const [showAllPlayers, setShowAllPlayers] = useState(false)
  const displayedPlayers = showAllPlayers ? allMembers : allMembers.slice(0, 15)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/8n9xjsm8yrda1.jpg"
            alt="Battlefield V Background"
            fill
            className="object-cover opacity-50"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-20 bg-accent" />
              <Shield className="w-12 h-12 text-accent" />
              <div className="h-px w-20 bg-accent" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider text-glow">
            CLÃ BROTHERS
            <span className="block text-accent mt-2">OFICIAL</span>
          </h1>

          <p className="text-xl md:text-3xl font-semibold mb-4 tracking-wide text-muted-foreground">Battlefield V</p>

          <p className="text-2xl md:text-3xl font-bold mb-12 tracking-wide">
            JUNTE-SE AO NOSSO SERVIDOR.
            <br />
            DOMINE O CAMPO DE BATALHA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 font-bold tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              ENTRAR NO SERVIDOR
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-bold tracking-wider border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              DISCORD
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
              SOBRE O <span className="text-accent">SERVIDOR</span>
            </h2>
            <div className="h-1 w-32 bg-accent mx-auto mb-8" />
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/30 p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground">
              O <span className="text-accent font-bold">Clã Brothers Oficial</span> oferece o melhor servidor de
              Battlefield V e  Battlefield 6 para jogadores brasileiros. Aqui você encontra{" "}
              <span className="text-foreground font-semibold">comunidade ativa</span>,{" "}
              <span className="text-foreground font-semibold">partidas equilibradas</span> e
              <span className="text-foreground font-semibold">ambiente respeitoso</span>. Nosso servidor está sempre
              online com moderação ativa, mapas rotativos e eventos regulares para toda a comunidade.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">MEMBROS ATIVOS</div>
              </div>
              <div className="text-center">
                <Server className="w-12 h-12 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">SERVIDOR ONLINE</div>
              </div>
              <div className="text-center md:col-span-1 col-span-2">
                <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent">BR</div>
                <div className="text-sm text-muted-foreground">SERVIDOR BRASILEIRO</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
              MEMBROS DO <span className="text-accent">SERVIDOR</span>
            </h2>
            <div className="h-1 w-32 bg-accent mx-auto mb-8" />
            <p className="text-muted-foreground text-lg">
              {allMembers.length} membros ativos - {oficialMembers.length} Oficiais | {recrutas.length} Recrutas
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/30 overflow-hidden">
            <div className="divide-y divide-border">
              {displayedPlayers.map((player) => (
                <div
                  key={player.position}
                  className="flex items-center justify-between px-6 py-4 hover:bg-accent/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground font-mono text-sm w-10">{player.position}</span>
                    <span className="font-semibold">{player.name}</span>
                  </div>
                  <div className="px-3 py-1 bg-accent/20 border border-accent/50 rounded-sm">
                    <span className="text-xs font-bold text-accent">{player.category.toUpperCase()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border">
              <button
                onClick={() => setShowAllPlayers(!showAllPlayers)}
                className="w-full px-6 py-4 flex items-center justify-center gap-2 hover:bg-accent/5 transition-colors text-accent font-semibold"
              >
                <span>{showAllPlayers ? "Ver Menos" : `Ver Todos os ${allMembers.length} Membros`}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${showAllPlayers ? "rotate-180" : ""}`} />
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Admin Team */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
              EQUIPE DO <span className="text-accent">SERVIDOR</span>
            </h2>
            <div className="h-1 w-32 bg-accent mx-auto mb-8" />
            <p className="text-muted-foreground text-lg">Administração e Suporte</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 tracking-wider text-accent">ADMINISTRADORES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {admins.map((admin, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-accent/30 p-6 text-center hover:border-accent transition-all glow-border"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent mx-auto">
                      <img
                        src={admin.image || "/placeholder.svg"}
                        alt={admin.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent px-3 py-1 rounded-sm">
                      <Shield className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 break-words">{admin.name}</h3>
                  <p className="text-sm text-accent font-semibold tracking-wide">{admin.role.toUpperCase()}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 tracking-wider text-accent">SUPORTE</h3>
            <div className="flex justify-center">
              <Card className="bg-card/50 backdrop-blur-sm border-accent/30 p-6 text-center hover:border-accent transition-all glow-border max-w-xs">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent mx-auto">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt={suporte.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent px-3 py-1 rounded-sm">
                    <Users className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 break-words">{suporte.name}</h3>
                <p className="text-sm text-accent font-semibold tracking-wide">{suporte.role.toUpperCase()}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
              VÍDEO DO <span className="text-accent">SERVIDOR</span>
            </h2>
            <div className="h-1 w-32 bg-accent mx-auto mb-8" />
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/30 overflow-hidden">
            <div className="aspect-video bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-4 hover:bg-accent/30 transition-colors cursor-pointer">
                  <svg className="w-10 h-10 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Trailer do Servidor (Em breve)</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

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
