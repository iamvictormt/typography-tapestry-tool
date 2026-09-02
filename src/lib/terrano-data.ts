import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarDays,
  CircleDollarSign,
  Gauge,
  MapPin,
  MessagesSquare,
  ShieldCheck,
  Sprout,
  Tractor,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

export type Machine = {
  id: string;
  category: string;
  title: string;
  owner: string;
  city: string;
  distance: string;
  availability: string;
  price: string;
  rating: string;
  specs: string[];
  image: string;
};

export type Demand = {
  id: string;
  title: string;
  city: string;
  distance: string;
  area: string;
  date: string;
  budget: string;
  proposals: number;
  status: string;
  requirements: string[];
};

export type Proposal = {
  machine: string;
  owner: string;
  value: string;
  includes: string;
  validUntil: string;
  status: string;
};

export const heroImage =
  "https://images.unsplash.com/photo-1668303672808-6e8d7cae3fdc?q=88&w=2200&auto=format&fit=crop";
export const fieldImage =
  "https://images.unsplash.com/photo-1718470667206-7f8618a1be50?q=88&w=1800&auto=format&fit=crop";
export const harvesterImage =
  "https://images.unsplash.com/photo-1632723893457-47e3abc47526?q=88&w=1800&auto=format&fit=crop";
export const fleetImage =
  "https://images.unsplash.com/photo-1695393375542-5ad41921c85b?q=88&w=1800&auto=format&fit=crop";

export const machines: Machine[] = [
  {
    id: "trator-150-cv-rio-verde",
    category: "Trator",
    title: "John Deere 6150J - 150 cv",
    owner: "Fazenda Santa Clara",
    city: "Rio Verde, GO",
    distance: "46 km",
    availability: "12 a 20 de outubro",
    price: "R$ 920/hora",
    rating: "4.9",
    specs: ["Operador opcional", "Combustível não incluso", "Raio 80 km"],
    image: heroImage,
  },
  {
    id: "colheitadeira-s660",
    category: "Colheitadeira",
    title: "John Deere S660",
    owner: "Agro Machado",
    city: "Jataí, GO",
    distance: "71 km",
    availability: "sob consulta",
    price: "R$ 1.850/hectare",
    rating: "4.8",
    specs: ["Operador incluso", "Plataforma soja/milho", "Telemetria ativa"],
    image: harvesterImage,
  },
  {
    id: "pulverizador-4730",
    category: "Pulverizador",
    title: "Pulverizador 4730 - 30 m",
    owner: "Irmãos Valente",
    city: "Montividiu, GO",
    distance: "33 km",
    availability: "esta semana",
    price: "R$ 145/hectare",
    rating: "4.7",
    specs: ["Barras revisadas", "GPS incluso", "Taxa de deslocamento"],
    image: fieldImage,
  },
];

export const demands: Demand[] = [
  {
    id: "demanda-trator-150cv",
    title: "Trator acima de 150 cv para preparo de solo",
    city: "Rio Verde, GO",
    distance: "46 km",
    area: "80 hectares",
    date: "12 a 15 de outubro",
    budget: "até R$ 75 mil",
    proposals: 4,
    status: "Propostas recebidas",
    requirements: ["Operador necessário", "Grade pesada", "Solo argiloso"],
  },
  {
    id: "demanda-colheita-soja",
    title: "Colheitadeira para soja em janela curta",
    city: "Jataí, GO",
    distance: "71 km",
    area: "210 hectares",
    date: "início em 28 de outubro",
    budget: "orçamento aberto",
    proposals: 2,
    status: "Em negociação",
    requirements: ["Operador incluso", "Disponibilidade noturna", "Plataforma 35 pés"],
  },
  {
    id: "demanda-pulverizacao",
    title: "Pulverização pós-emergência",
    city: "Montividiu, GO",
    distance: "33 km",
    area: "120 hectares",
    date: "próximas 72h",
    budget: "R$ 150/hectare",
    proposals: 6,
    status: "Nova demanda",
    requirements: ["GPS", "Baixo amassamento", "Laudo de barras"],
  },
];

export const proposals: Proposal[] = [
  {
    machine: "John Deere 6150J",
    owner: "Fazenda Santa Clara",
    value: "R$ 72.400",
    includes: "Operador incluso, combustível por conta do contratante",
    validUntil: "válida por 48h",
    status: "Recomendada",
  },
  {
    machine: "Valtra BH180",
    owner: "Cooperativa Planalto",
    value: "R$ 68.900",
    includes: "Sem operador, deslocamento incluso até 60 km",
    validUntil: "válida até amanhã",
    status: "Menor preço",
  },
];

export const categories = [
  "Tratores",
  "Colheitadeiras",
  "Pulverizadores",
  "Plantadeiras",
  "Retroescavadeiras",
  "Implementos",
];

export const kpis: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Demandas abertas", value: "38", icon: Sprout },
  { label: "Máquinas ativas", value: "124", icon: Tractor },
  { label: "Propostas enviadas", value: "312", icon: MessagesSquare },
  { label: "Reservas aceitas", value: "27", icon: BadgeCheck },
];

export const ownerKpis: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Máquinas cadastradas", value: "6", icon: Tractor },
  { label: "Demandas próximas", value: "14", icon: MapPin },
  { label: "Taxa de aceite", value: "42%", icon: Gauge },
  { label: "Receita prevista", value: "R$ 86k", icon: CircleDollarSign },
];

export const adminKpis: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Usuários pendentes", value: "18", icon: Users },
  { label: "Anúncios em revisão", value: "11", icon: Wrench },
  { label: "Documentos a verificar", value: "23", icon: ShieldCheck },
  { label: "Reservas comerciais", value: "27", icon: Truck },
];

export const statusFlow = [
  "Nova demanda",
  "Propostas recebidas",
  "Em negociação",
  "Proposta aceita",
  "Serviço em andamento",
  "Concluído",
  "Avaliado",
];

export const timeline = [
  { title: "Cadastro e verificação", text: "Conta com WhatsApp, documento e aceite de termos." },
  { title: "Máquina ou demanda", text: "Proprietário anuncia, produtor publica necessidade." },
  { title: "Matching regional", text: "Filtros cruzam categoria, potência, distância e data." },
  { title: "Proposta e conversa", text: "Negociação fica registrada, com saída para WhatsApp." },
  { title: "Reserva comercial", text: "Acordo aceito gera histórico sem pagamento interno." },
];

export const quickFilters = ["Trator", "Colheitadeira", "Pulverizador", "Com operador", "Até 80 km"];

export const formFields = [
  "Nome completo ou razão social",
  "Telefone / WhatsApp",
  "CPF ou CNPJ",
  "Cidade e estado",
  "Perfil principal",
  "Foto ou logotipo",
];

export const machineFormFields = [
  "Categoria",
  "Marca e modelo",
  "Ano",
  "Potência",
  "Localização",
  "Valor por hora, hectare ou diária",
  "Operador incluso?",
  "Raio de atendimento",
];

export const demandFormFields = [
  "Equipamento necessário",
  "Tipo de operação",
  "Área estimada",
  "Data de início",
  "Duração",
  "Localização",
  "Necessidade de operador",
  "Orçamento opcional",
];
