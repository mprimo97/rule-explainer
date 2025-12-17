import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calculator, Clock, CheckCircle, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Documentação do Cálculo do <span className="text-primary">KEY SCORE</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Regra de cálculo baseada em métricas de tempo e produtividade
          </p>
        </header>

        {/* Formula Overview */}
        <Card className="border-primary/20 bg-card-highlight">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Fórmula Final
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-4 text-center py-4">
              <div className="bg-score-tempo/10 border border-score-tempo rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Score Tempo</p>
                <p className="text-2xl font-bold text-score-tempo">× 0.2</p>
              </div>
              <span className="text-2xl font-bold text-muted-foreground">+</span>
              <div className="bg-score-produtividade/10 border border-score-produtividade rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Score Produtividade</p>
                <p className="text-2xl font-bold text-score-produtividade">× 0.8</p>
              </div>
              <span className="text-2xl font-bold text-muted-foreground">×</span>
              <div className="bg-primary/10 border border-primary rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Multiplicador</p>
                <p className="text-2xl font-bold text-primary">1000</p>
              </div>
              <span className="text-2xl font-bold text-muted-foreground">=</span>
              <div className="bg-key-score/10 border border-key-score rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Resultado</p>
                <p className="text-2xl font-bold text-key-score">KEY SCORE</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Score Tempo */}
          <Card className="border-score-tempo/30">
            <CardHeader className="bg-score-tempo/5">
              <CardTitle className="flex items-center gap-2 text-score-tempo">
                <Clock className="w-5 h-5" />
                Score Tempo (Peso: 20%)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                <strong>1 ponto por OS executada no prazo</strong> (do aceite até pré-baixa)
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Faixas de Tempo:</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <span>Até 2 horas</span>
                    <Badge variant="success">1,0 ponto</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                    <span>Até 4 horas</span>
                    <Badge variant="success-light">0,50 ponto</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <span>Até 6 horas</span>
                    <Badge variant="warning">0,25 ponto</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <span>Até 8 horas</span>
                    <Badge variant="warning-light">0,10 ponto</Badge>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-green-600/10 border border-green-600/30 rounded-lg">
                <span className="font-medium">Completou todos os passos</span>
                <Badge variant="success" className="ml-2">0,75 ponto</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Score Produtividade */}
          <Card className="border-score-produtividade/30">
            <CardHeader className="bg-score-produtividade/5">
              <CardTitle className="flex items-center gap-2 text-score-produtividade">
                <CheckCircle className="w-5 h-5" />
                Score Produtividade (Peso: 80%)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                <strong>1 ponto por OS bem executada</strong>
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Etapas do Processo:</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-blue-400/10 border border-blue-400/30 rounded-lg">
                    <span>Atribuição</span>
                    <Badge variant="info">0,10</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <span>Aceite</span>
                    <Badge variant="info">0,15</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-600/10 border border-blue-600/30 rounded-lg">
                    <span>No Site*</span>
                    <Badge variant="info">0,20</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-700/10 border border-blue-700/30 rounded-lg">
                    <span>Pré Baixa</span>
                    <Badge variant="info">0,30</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                    <span>Ciclo Completo</span>
                    <Badge variant="info">0,05</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-indigo-600/10 border border-indigo-600/30 rounded-lg">
                    <span>Ciclo Final</span>
                    <Badge variant="info">0,25</Badge>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-indigo-700/10 border border-indigo-700/30 rounded-lg">
                <span className="font-medium">Ciclo Fechado</span>
                <Badge variant="info" className="ml-2">até 0,25</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flow Explanation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Fluxo do Cálculo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-1 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">1. Calcular Score Tempo</h4>
                  <p className="text-sm text-muted-foreground">
                    Somar os pontos de todas as OS executadas no prazo, considerando as faixas de tempo e se completou todos os passos.
                  </p>
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground" />
                <div className="flex-1 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">2. Calcular Score Produtividade</h4>
                  <p className="text-sm text-muted-foreground">
                    Somar os pontos de todas as etapas do processo completadas corretamente.
                  </p>
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground" />
                <div className="flex-1 p-4 bg-primary/10 border border-primary rounded-lg">
                  <h4 className="font-semibold mb-2">3. Calcular KEY SCORE</h4>
                  <p className="text-sm text-muted-foreground">
                    (Score Tempo × 0.2 + Score Produtividade × 0.8) × 1000
                  </p>
                </div>
              </div>

              <div className="p-4 bg-accent rounded-lg">
                <h4 className="font-semibold mb-2">Exemplo Prático:</h4>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p>• Score Tempo = 250 pontos</p>
                  <p>• Score Produtividade = 250 pontos</p>
                  <p>• KEY SCORE = (250 × 0.2 + 250 × 0.8) × 1000</p>
                  <p>• KEY SCORE = (50 + 200) × 1000</p>
                  <p className="font-semibold text-foreground">• KEY SCORE = 250.000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Table */}
        <Card>
          <CardHeader>
            <CardTitle>Resumo das Regras</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Componente</th>
                    <th className="text-left p-3 font-semibold">Descrição</th>
                    <th className="text-left p-3 font-semibold">Peso no KEY SCORE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium text-score-tempo">Score Tempo</td>
                    <td className="p-3 text-muted-foreground">Pontuação baseada no tempo de execução (aceite → pré-baixa)</td>
                    <td className="p-3"><Badge variant="outline">20%</Badge></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium text-score-produtividade">Score Produtividade</td>
                    <td className="p-3 text-muted-foreground">Pontuação baseada nas etapas completadas corretamente</td>
                    <td className="p-3"><Badge variant="outline">80%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-key-score">KEY SCORE</td>
                    <td className="p-3 text-muted-foreground">Nota final multiplicada por 1000</td>
                    <td className="p-3"><Badge variant="default">100%</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
