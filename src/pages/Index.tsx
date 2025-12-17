import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Organograma do Cálculo do <span className="text-key-score">KEY SCORE</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Visualização hierárquica das regras de pontuação
          </p>
        </header>

        {/* Main Flowchart */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[1000px] flex gap-6 items-start justify-center">
            
            {/* Column 1: Base Metrics */}
            <div className="flex flex-col gap-3">
              <div className="text-center text-sm font-semibold text-muted-foreground mb-2">
                ETAPAS DO PROCESSO
              </div>
              
              {/* Produtividade Group */}
              <div className="space-y-2">
                <MetricBox label="ATRIBUIÇÃO" value="0,10" variant="blue" />
                <MetricBox label="ACEITE" value="0,15" variant="blue" />
                <MetricBox label="NO SITE*" value="0,20" variant="blue" />
                <MetricBox label="PRÉ BAIXA" value="0,30" variant="blue" />
                <MetricBox label="CICLO COMPLETO" value="0,05" variant="blue" />
                <MetricBox label="CICLO FINAL" value="0,25" variant="blue" />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center self-center pt-8">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>

            {/* Column 2: Time Criteria & Cycle */}
            <div className="flex flex-col gap-6">
              {/* Time Branch */}
              <div className="space-y-2">
                <div className="text-center text-sm font-semibold text-muted-foreground mb-2">
                  FAIXAS DE TEMPO
                </div>
                <MetricBox label="ATÉ 2 HORAS" value="1,0" variant="green" />
                <MetricBox label="ATÉ 4 HORAS" value="0,50" variant="green" />
                <MetricBox label="ATÉ 6 HORAS" value="0,25" variant="green" />
                <MetricBox label="ATÉ 8 HORAS" value="0,10" variant="green" />
                <div className="mt-3">
                  <MetricBox label="COMPLETOU TODOS OS PASSOS" value="0,75" variant="green-dark" />
                </div>
              </div>

              {/* Cycle Closed */}
              <div className="space-y-2">
                <div className="text-center text-sm font-semibold text-muted-foreground mb-2">
                  CICLO
                </div>
                <MetricBox label="CICLO FECHADO" value="até 0,25" variant="gray" />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center self-center pt-8">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>

            {/* Column 3: Calculation Rules */}
            <div className="flex flex-col gap-6 pt-4">
              {/* Score Tempo Rule */}
              <Card className="border-score-tempo bg-score-tempo/5 w-56">
                <CardContent className="p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-2">Regra</p>
                  <p className="text-sm font-medium">1 PONTO POR OS</p>
                  <p className="text-sm font-medium">EXECUTADA NO PRAZO</p>
                  <div className="mt-3 p-2 bg-background/50 rounded text-xs text-muted-foreground">
                    aceite → pré baixa
                  </div>
                </CardContent>
              </Card>

              {/* Score Produtividade Rule */}
              <Card className="border-score-produtividade bg-score-produtividade/5 w-56">
                <CardContent className="p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-2">Regra</p>
                  <p className="text-sm font-medium">1 PONTO POR OS</p>
                  <p className="text-sm font-medium">BEM EXECUTADA</p>
                </CardContent>
              </Card>
            </div>

            {/* Arrow */}
            <div className="flex items-center self-center pt-8">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>

            {/* Column 4: Scores */}
            <div className="flex flex-col gap-6 pt-4">
              <ScoreBox 
                label="SCORE TEMPO" 
                example="250" 
                variant="tempo"
              />
              <ScoreBox 
                label="SCORE PRODUTIVIDADE" 
                example="250" 
                variant="produtividade"
              />
            </div>

            {/* Arrow */}
            <div className="flex items-center self-center pt-8">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>

            {/* Column 5: Weights */}
            <div className="flex flex-col gap-6 pt-4">
              <WeightBox weight="× 0.2" color="tempo" />
              <WeightBox weight="× 0.8" color="produtividade" />
            </div>

            {/* Arrow */}
            <div className="flex items-center self-center pt-8">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>

            {/* Column 6: Multiplier and Final */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="border-2 border-primary rounded-lg px-4 py-3 bg-primary/5">
                <p className="text-2xl font-bold text-primary">× 1000</p>
              </div>
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
              <Card className="border-2 border-key-score bg-key-score/10 w-40">
                <CardContent className="p-4 text-center">
                  <p className="text-lg font-bold text-key-score">KEY SCORE</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Formula Summary */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Fórmula Resumida</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
              <span className="font-mono bg-background px-3 py-2 rounded border">
                KEY SCORE = (
                <span className="text-score-tempo font-semibold">Score Tempo</span> × 0.2 +{" "}
                <span className="text-score-produtividade font-semibold">Score Produtividade</span> × 0.8
                ) × 1000
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Score Tempo Details */}
          <Card className="border-score-tempo/30">
            <CardHeader className="bg-score-tempo/5 border-b border-score-tempo/20">
              <CardTitle className="text-score-tempo flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-score-tempo" />
                Score Tempo — Composição
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pontuação por tempo de execução (do <strong>aceite</strong> até <strong>pré-baixa</strong>):
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between p-2 bg-green-600/10 rounded">
                      <span>Até 2 horas</span>
                      <span className="font-semibold text-green-700">1,0</span>
                    </div>
                    <div className="flex justify-between p-2 bg-green-500/10 rounded">
                      <span>Até 4 horas</span>
                      <span className="font-semibold text-green-600">0,50</span>
                    </div>
                    <div className="flex justify-between p-2 bg-yellow-500/10 rounded">
                      <span>Até 6 horas</span>
                      <span className="font-semibold text-yellow-600">0,25</span>
                    </div>
                    <div className="flex justify-between p-2 bg-orange-500/10 rounded">
                      <span>Até 8 horas</span>
                      <span className="font-semibold text-orange-600">0,10</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-green-700/10 rounded border border-green-700/20">
                  <div className="flex justify-between">
                    <span className="text-sm">Completou todos os passos</span>
                    <span className="font-semibold text-green-700">+ 0,75</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Score Produtividade Details */}
          <Card className="border-score-produtividade/30">
            <CardHeader className="bg-score-produtividade/5 border-b border-score-produtividade/20">
              <CardTitle className="text-score-produtividade flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-score-produtividade" />
                Score Produtividade — Composição
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Pontuação por etapas completadas corretamente:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-blue-500/10 rounded">
                  <span>Atribuição</span>
                  <span className="font-semibold text-blue-600">0,10</span>
                </div>
                <div className="flex justify-between p-2 bg-blue-500/10 rounded">
                  <span>Aceite</span>
                  <span className="font-semibold text-blue-600">0,15</span>
                </div>
                <div className="flex justify-between p-2 bg-blue-500/10 rounded">
                  <span>No Site*</span>
                  <span className="font-semibold text-blue-600">0,20</span>
                </div>
                <div className="flex justify-between p-2 bg-blue-500/10 rounded">
                  <span>Pré Baixa</span>
                  <span className="font-semibold text-blue-600">0,30</span>
                </div>
                <div className="flex justify-between p-2 bg-indigo-500/10 rounded">
                  <span>Ciclo Completo</span>
                  <span className="font-semibold text-indigo-600">0,05</span>
                </div>
                <div className="flex justify-between p-2 bg-indigo-500/10 rounded">
                  <span>Ciclo Final</span>
                  <span className="font-semibold text-indigo-600">0,25</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-500/10 rounded border border-dashed">
                  <span>Ciclo Fechado</span>
                  <span className="font-semibold text-gray-600">até 0,25</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Component for metric boxes
const MetricBox = ({ 
  label, 
  value, 
  variant 
}: { 
  label: string; 
  value: string; 
  variant: 'blue' | 'green' | 'green-dark' | 'gray';
}) => {
  const styles = {
    blue: 'border-blue-500 bg-blue-50 text-blue-800',
    green: 'border-green-500 bg-green-50 text-green-800',
    'green-dark': 'border-green-700 bg-green-100 text-green-900',
    gray: 'border-gray-400 bg-gray-50 text-gray-700',
  };

  return (
    <div className={`border-2 rounded px-3 py-2 text-center text-sm ${styles[variant]}`}>
      <div className="font-medium">{label}</div>
      <div className="text-xs opacity-75">({value})</div>
    </div>
  );
};

// Component for score boxes
const ScoreBox = ({ 
  label, 
  example, 
  variant 
}: { 
  label: string; 
  example: string; 
  variant: 'tempo' | 'produtividade';
}) => {
  const styles = {
    tempo: 'border-score-tempo bg-score-tempo/10',
    produtividade: 'border-score-produtividade bg-score-produtividade/10',
  };

  const textStyles = {
    tempo: 'text-score-tempo',
    produtividade: 'text-score-produtividade',
  };

  return (
    <Card className={`border-2 ${styles[variant]} w-44`}>
      <CardContent className="p-3 text-center">
        <p className={`font-semibold text-sm ${textStyles[variant]}`}>{label}</p>
        <div className="border-t border-dashed my-2 border-current opacity-30" />
        <p className="text-lg font-bold">{example}</p>
      </CardContent>
    </Card>
  );
};

// Component for weight boxes
const WeightBox = ({ 
  weight, 
  color 
}: { 
  weight: string; 
  color: 'tempo' | 'produtividade';
}) => {
  const styles = {
    tempo: 'border-score-tempo text-score-tempo',
    produtividade: 'border-score-produtividade text-score-produtividade',
  };

  return (
    <div className={`border-2 rounded-lg px-4 py-3 ${styles[color]}`}>
      <p className="text-xl font-bold">{weight}</p>
    </div>
  );
};

export default Index;
