export type Job = {
  id: string;
  role: string;
  category: string;
  company: string;
  businessType: string;
  city: string;
  neighborhood: string;
  date: string; // ISO
  start: string;
  end: string;
  pay: number;
  spots: number;
  description: string;
  requirements: string[];
};

export const categories = ["Atendimento", "Cozinha", "Estoque", "Caixa", "Limpeza", "Farmácia"] as const;

export const jobs: Job[] = [
  { id: "1", role: "Atendente de balcão", category: "Atendimento", company: "Padaria Pão Dourado", businessType: "Padaria", city: "São Paulo", neighborhood: "Pinheiros", date: "2026-10-18", start: "06:00", end: "14:00", pay: 140, spots: 2, description: "Atendimento ao cliente no balcão, organização da vitrine e reposição de produtos durante o turno da manhã.", requirements: ["Experiência com atendimento", "Pontualidade", "Uniforme preto"] },
  { id: "2", role: "Repositor de estoque", category: "Estoque", company: "Supermercado Bom Preço", businessType: "Supermercado", city: "São Paulo", neighborhood: "Mooca", date: "2026-10-19", start: "22:00", end: "06:00", pay: 180, spots: 4, description: "Reposição de gôndolas no turno noturno, conferência de validade e organização do depósito.", requirements: ["Disponibilidade noturna", "Esforço físico"] },
  { id: "3", role: "Garçom / Garçonete", category: "Atendimento", company: "Cantina Nonna Lia", businessType: "Restaurante", city: "São Paulo", neighborhood: "Bixiga", date: "2026-10-18", start: "18:00", end: "00:00", pay: 160, spots: 3, description: "Atendimento às mesas em evento de sábado à noite. Gorjetas divididas entre a equipe.", requirements: ["Experiência em salão", "Camisa branca"] },
  { id: "4", role: "Auxiliar de cozinha", category: "Cozinha", company: "Bistrô Verde", businessType: "Restaurante", city: "Campinas", neighborhood: "Cambuí", date: "2026-10-20", start: "10:00", end: "16:00", pay: 130, spots: 1, description: "Pré-preparo de ingredientes, higienização de utensílios e apoio ao chef no almoço.", requirements: ["Noções de manipulação de alimentos"] },
  { id: "5", role: "Operador de caixa", category: "Caixa", company: "Mercado Vila Nova", businessType: "Supermercado", city: "Campinas", neighborhood: "Centro", date: "2026-10-21", start: "08:00", end: "16:00", pay: 150, spots: 2, description: "Operação de caixa, recebimento em dinheiro, cartão e PIX, empacotamento.", requirements: ["Experiência com caixa", "Boa matemática"] },
  { id: "6", role: "Balconista de farmácia", category: "Farmácia", company: "Drogaria Saúde+", businessType: "Farmácia", city: "São Paulo", neighborhood: "Vila Mariana", date: "2026-10-22", start: "14:00", end: "22:00", pay: 170, spots: 1, description: "Atendimento no balcão, organização de prateleiras e apoio no caixa.", requirements: ["Experiência em farmácia", "Ensino médio completo"] },
  { id: "7", role: "Auxiliar de limpeza", category: "Limpeza", company: "Shopping Ponto Sul", businessType: "Varejo", city: "São Paulo", neighborhood: "Santo Amaro", date: "2026-10-19", start: "07:00", end: "15:00", pay: 120, spots: 5, description: "Limpeza de áreas comuns e banheiros durante o fim de semana de alto movimento.", requirements: ["Pontualidade"] },
  { id: "8", role: "Confeiteiro(a)", category: "Cozinha", company: "Doce Ateliê", businessType: "Padaria", city: "Campinas", neighborhood: "Taquaral", date: "2026-10-23", start: "05:00", end: "13:00", pay: 200, spots: 1, description: "Produção de bolos e doces para encomendas de fim de semana.", requirements: ["Experiência comprovada em confeitaria"] },
];

export const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
export const fmtDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" });
