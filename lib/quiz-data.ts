export interface QuizOption {
  id: string;
  emoji: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  category: "diagnostico" | "estilo" | "tratamientos" | "expectativas";
  categoryLabel: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "diagnostico",
    categoryLabel: "Análise Demográfica Crítica",
    question: "¿Cuál es tu edad actual?",
    options: [
      { id: "18-25", emoji: "👶", text: "18-25 años" },
      { id: "26-35", emoji: "🧑", text: "26-35 años" },
      { id: "36-45", emoji: "👨", text: "36-45 años" },
      { id: "46-55", emoji: "👴", text: "46-55 años" },
      { id: "56-65", emoji: "🧓", text: "56-65 años" },
      { id: "65+", emoji: "🔹", text: "Más de 65 años" },
    ],
  },
  {
    id: 2,
    category: "diagnostico",
    categoryLabel: "Evaluación de Síntomas",
    question: "¿Hace cuánto tiempo experimentas dificultades?",
    options: [
      { id: "menos-6", emoji: "⏰", text: "Menos de 6 meses" },
      { id: "6-12", emoji: "📅", text: "6-12 meses" },
      { id: "1-2", emoji: "📆", text: "1-2 años" },
      { id: "2-5", emoji: "🗓️", text: "2-5 años" },
      { id: "mas-5", emoji: "⌛", text: "Más de 5 años" },
    ],
  },
  {
    id: 3,
    category: "diagnostico",
    categoryLabel: "Análisis de Severidad",
    question: "¿Cómo describirías la severidad de tus síntomas?",
    options: [
      { id: "leve", emoji: "🟢", text: "Leve - Ocasionalmente" },
      { id: "moderado", emoji: "🟡", text: "Moderado - Frecuentemente" },
      { id: "severo", emoji: "🟠", text: "Severo - Casi siempre" },
      { id: "critico", emoji: "🔴", text: "Crítico - Siempre" },
    ],
  },
  {
    id: 4,
    category: "diagnostico",
    categoryLabel: "Historial Médico",
    question: "¿Tienes alguna condición médica diagnosticada?",
    options: [
      { id: "ninguna", emoji: "✅", text: "Ninguna" },
      { id: "diabetes", emoji: "💉", text: "Diabetes" },
      { id: "hipertension", emoji: "❤️", text: "Hipertensión" },
      { id: "colesterol", emoji: "🩸", text: "Colesterol alto" },
      { id: "cardiovascular", emoji: "💔", text: "Problemas cardiovasculares" },
      { id: "otra", emoji: "📋", text: "Otra condición" },
    ],
  },
  {
    id: 5,
    category: "diagnostico",
    categoryLabel: "Evaluación Hormonal",
    question: "¿Has notado cambios en tu energía y vitalidad?",
    options: [
      { id: "mucha", emoji: "⚡", text: "Mucha energía" },
      { id: "normal", emoji: "🔋", text: "Energía normal" },
      { id: "reducida", emoji: "🪫", text: "Energía reducida" },
      { id: "muy-baja", emoji: "😴", text: "Muy baja energía" },
    ],
  },
  {
    id: 6,
    category: "diagnostico",
    categoryLabel: "Análisis del Sueño",
    question: "¿Cómo es la calidad de tu sueño?",
    options: [
      { id: "excelente", emoji: "😴", text: "Excelente - Duermo muy bien" },
      { id: "bueno", emoji: "🛏️", text: "Bueno - Descanso bien" },
      { id: "regular", emoji: "😐", text: "Regular - A veces mal" },
      { id: "malo", emoji: "😵", text: "Malo - Insomnio frecuente" },
    ],
  },
  {
    id: 7,
    category: "estilo",
    categoryLabel: "Hábitos Alimenticios",
    question: "¿Cómo describirías tu alimentación?",
    options: [
      { id: "saludable", emoji: "🥗", text: "Muy saludable" },
      { id: "equilibrada", emoji: "🍽️", text: "Equilibrada" },
      { id: "irregular", emoji: "🍔", text: "Irregular" },
      { id: "mala", emoji: "🍕", text: "Poco saludable" },
    ],
  },
  {
    id: 8,
    category: "estilo",
    categoryLabel: "Actividad Física",
    question: "¿Con qué frecuencia haces ejercicio?",
    options: [
      { id: "diario", emoji: "🏃", text: "Todos los días" },
      { id: "3-4", emoji: "🏋️", text: "3-4 veces por semana" },
      { id: "1-2", emoji: "🚶", text: "1-2 veces por semana" },
      { id: "nunca", emoji: "🛋️", text: "Raramente o nunca" },
    ],
  },
  {
    id: 9,
    category: "estilo",
    categoryLabel: "Consumo de Alcohol",
    question: "¿Con qué frecuencia consumes alcohol?",
    options: [
      { id: "nunca", emoji: "🚫", text: "Nunca" },
      { id: "ocasional", emoji: "🍷", text: "Ocasionalmente" },
      { id: "semanal", emoji: "🍺", text: "Semanalmente" },
      { id: "diario", emoji: "🥃", text: "Diariamente" },
    ],
  },
  {
    id: 10,
    category: "estilo",
    categoryLabel: "Tabaquismo",
    question: "¿Fumas o has fumado?",
    options: [
      { id: "nunca", emoji: "🚭", text: "Nunca he fumado" },
      { id: "ex", emoji: "✋", text: "Ex-fumador" },
      { id: "ocasional", emoji: "🚬", text: "Ocasionalmente" },
      { id: "diario", emoji: "💨", text: "Fumador diario" },
    ],
  },
  {
    id: 11,
    category: "estilo",
    categoryLabel: "Nivel de Estrés",
    question: "¿Cómo describirías tu nivel de estrés?",
    options: [
      { id: "bajo", emoji: "😌", text: "Bajo - Muy relajado" },
      { id: "moderado", emoji: "😐", text: "Moderado - Normal" },
      { id: "alto", emoji: "😰", text: "Alto - Estresado" },
      { id: "muy-alto", emoji: "🤯", text: "Muy alto - Abrumado" },
    ],
  },
  {
    id: 12,
    category: "estilo",
    categoryLabel: "Hidratación",
    question: "¿Cuánta agua bebes al día?",
    options: [
      { id: "mucha", emoji: "💧", text: "Más de 2 litros" },
      { id: "suficiente", emoji: "🚰", text: "1-2 litros" },
      { id: "poca", emoji: "🥤", text: "Menos de 1 litro" },
      { id: "muy-poca", emoji: "🏜️", text: "Muy poca agua" },
    ],
  },
  {
    id: 13,
    category: "tratamientos",
    categoryLabel: "Historial de Tratamientos",
    question: "¿Has probado tratamientos anteriormente?",
    options: [
      { id: "no", emoji: "🆕", text: "No, es la primera vez" },
      { id: "naturales", emoji: "🌿", text: "Solo remedios naturales" },
      { id: "farmaceuticos", emoji: "💊", text: "Medicamentos farmacéuticos" },
      { id: "ambos", emoji: "🔄", text: "Ambos tipos" },
    ],
  },
  {
    id: 14,
    category: "tratamientos",
    categoryLabel: "Resultados Previos",
    question: "¿Qué resultados obtuviste con tratamientos anteriores?",
    options: [
      { id: "na", emoji: "➖", text: "No aplica" },
      { id: "buenos", emoji: "👍", text: "Buenos resultados" },
      { id: "temporales", emoji: "⏳", text: "Resultados temporales" },
      { id: "sin-efecto", emoji: "👎", text: "Sin efecto" },
      { id: "efectos-secundarios", emoji: "⚠️", text: "Efectos secundarios" },
    ],
  },
  {
    id: 15,
    category: "tratamientos",
    categoryLabel: "Preferencia de Tratamiento",
    question: "¿Qué tipo de tratamiento prefieres?",
    options: [
      { id: "natural", emoji: "🌱", text: "100% Natural" },
      { id: "combinado", emoji: "⚖️", text: "Combinación natural y médico" },
      { id: "rapido", emoji: "⚡", text: "El más rápido disponible" },
      { id: "cualquiera", emoji: "🤷", text: "Lo que funcione mejor" },
    ],
  },
  {
    id: 16,
    category: "tratamientos",
    categoryLabel: "Alergias",
    question: "¿Tienes alguna alergia conocida?",
    options: [
      { id: "no", emoji: "✅", text: "No tengo alergias" },
      { id: "medicamentos", emoji: "💊", text: "A medicamentos" },
      { id: "alimentos", emoji: "🥜", text: "A alimentos" },
      { id: "multiples", emoji: "⚠️", text: "Múltiples alergias" },
    ],
  },
  {
    id: 17,
    category: "tratamientos",
    categoryLabel: "Medicación Actual",
    question: "¿Tomas algún medicamento actualmente?",
    options: [
      { id: "no", emoji: "🚫", text: "No tomo medicamentos" },
      { id: "vitaminas", emoji: "💊", text: "Solo vitaminas/suplementos" },
      { id: "recetados", emoji: "📋", text: "Medicamentos recetados" },
      { id: "varios", emoji: "🏥", text: "Varios medicamentos" },
    ],
  },
  {
    id: 18,
    category: "tratamientos",
    categoryLabel: "Disponibilidad",
    question: "¿Cuánto tiempo puedes dedicar al tratamiento diariamente?",
    options: [
      { id: "5min", emoji: "⏱️", text: "5 minutos" },
      { id: "15min", emoji: "🕐", text: "15 minutos" },
      { id: "30min", emoji: "🕑", text: "30 minutos" },
      { id: "1hora", emoji: "🕐", text: "1 hora o más" },
    ],
  },
  {
    id: 19,
    category: "expectativas",
    categoryLabel: "Objetivos Principales",
    question: "¿Cuál es tu objetivo principal?",
    options: [
      { id: "rendimiento", emoji: "💪", text: "Mejorar el rendimiento" },
      { id: "confianza", emoji: "🎯", text: "Recuperar la confianza" },
      { id: "relacion", emoji: "❤️", text: "Mejorar mi relación" },
      { id: "salud", emoji: "🏥", text: "Salud general" },
    ],
  },
  {
    id: 20,
    category: "expectativas",
    categoryLabel: "Expectativa de Tiempo",
    question: "¿En cuánto tiempo esperas ver resultados?",
    options: [
      { id: "inmediato", emoji: "⚡", text: "Inmediatamente" },
      { id: "1-2sem", emoji: "📅", text: "1-2 semanas" },
      { id: "1mes", emoji: "📆", text: "1 mes" },
      { id: "gradual", emoji: "📈", text: "Resultados graduales" },
    ],
  },
  {
    id: 21,
    category: "expectativas",
    categoryLabel: "Compromiso",
    question: "¿Qué tan comprometido estás con el tratamiento?",
    options: [
      { id: "total", emoji: "💯", text: "Totalmente comprometido" },
      { id: "alto", emoji: "🔥", text: "Muy comprometido" },
      { id: "moderado", emoji: "👍", text: "Moderadamente" },
      { id: "probar", emoji: "🤔", text: "Quiero probar primero" },
    ],
  },
  {
    id: 22,
    category: "expectativas",
    categoryLabel: "Inversión en Salud",
    question: "¿Cuánto inviertes normalmente en tu salud mensualmente?",
    options: [
      { id: "poco", emoji: "💵", text: "Menos de $50" },
      { id: "moderado", emoji: "💰", text: "$50-100" },
      { id: "considerable", emoji: "💳", text: "$100-200" },
      { id: "alto", emoji: "💎", text: "Más de $200" },
    ],
  },
  {
    id: 23,
    category: "expectativas",
    categoryLabel: "Motivación",
    question: "¿Qué te motivó a buscar una solución ahora?",
    options: [
      { id: "pareja", emoji: "💑", text: "Mi pareja" },
      { id: "salud", emoji: "🏥", text: "Preocupación por mi salud" },
      { id: "autoestima", emoji: "🪞", text: "Mi autoestima" },
      { id: "calidad", emoji: "✨", text: "Mejorar mi calidad de vida" },
    ],
  },
  {
    id: 24,
    category: "expectativas",
    categoryLabel: "Seguimiento",
    question: "¿Estás dispuesto a seguir las indicaciones del Dr. Carlos?",
    options: [
      { id: "si", emoji: "✅", text: "Sí, al 100%" },
      { id: "mayoria", emoji: "👍", text: "La mayoría de ellas" },
      { id: "algunas", emoji: "🤷", text: "Algunas" },
      { id: "ver", emoji: "👀", text: "Depende de cuáles sean" },
    ],
  },
  {
    id: 25,
    category: "expectativas",
    categoryLabel: "Confirmación Final",
    question: "¿Estás listo para recibir tu protocolo personalizado?",
    options: [
      { id: "si-ahora", emoji: "🚀", text: "¡Sí, ahora mismo!" },
      { id: "si-info", emoji: "📋", text: "Sí, quiero más información" },
      { id: "dudas", emoji: "❓", text: "Tengo algunas dudas" },
      { id: "pensarlo", emoji: "🤔", text: "Necesito pensarlo" },
    ],
  },
];

export const categories = [
  { id: "diagnostico", emoji: "🔍", label: "Diagnóstico" },
  { id: "estilo", emoji: "💪", label: "Estilo de Vida" },
  { id: "tratamientos", emoji: "💊", label: "Tratamientos" },
  { id: "expectativas", emoji: "🎯", label: "Expectativas" },
];

export const socialProofNames = [
  "José L.",
  "Carlos M.",
  "Miguel A.",
  "Pedro R.",
  "Juan P.",
  "Antonio S.",
  "Francisco G.",
  "Luis H.",
  "Roberto D.",
  "Manuel F.",
];

export const socialProofCities = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Málaga",
  "Bilbao",
  "Zaragoza",
  "Murcia",
  "Alicante",
  "Córdoba",
];

export const socialProofActions = [
  "completó su evaluación",
  "inició su tratamiento",
  "recibió su protocolo",
  "comenzó la consulta",
];
