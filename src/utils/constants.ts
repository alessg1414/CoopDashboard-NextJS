// ── Tipo auxiliar para dropdowns de PrimeReact ──
export interface DropdownOption {
  label: string;
  value: string;
}

// ══════════════════════════════════════════════════
//  CONVENIOS
// ══════════════════════════════════════════════════

export const FASES_CONVENIO: DropdownOption[] = [
  { label: "Negociación", value: "Negociación" },
  { label: "Visto Bueno", value: "Visto Bueno" },
  { label: "Revisión Técnica", value: "Revisión Técnica" },
  { label: "Análisis Legal", value: "Análisis Legal" },
  { label: "Verificación Legal", value: "Verificación Legal" },
  { label: "Firma", value: "Firma" },
];

export const SECTORES_CONVENIO: DropdownOption[] = [
  { label: "Bilateral", value: "Bilateral" },
  { label: "Sociedad Civil", value: "Sociedad Civil" },
  { label: "Privado", value: "Privado" },
  { label: "Público", value: "Público" },
  { label: "Academia", value: "Academia" },
  { label: "Multilateral Regional", value: "Multilateral Regional" },
  { label: "Multilateral Naciones Unidas", value: "Multilateral Naciones Unidas" },
  { label: "Otro (Escribir manualmente)", value: "Otro" },
];

export const AREAS_ESTRATEGICAS: DropdownOption[] = [
  { label: "Educación inclusiva", value: "Educación inclusiva" },
  { label: "Formación permanente", value: "Formación permanente" },
  { label: "Multilinguismo", value: "Multilinguismo" },
  { label: "Emprendimiento", value: "Emprendimiento" },
  { label: "Transformación digital", value: "Transformación digital" },
  { label: "Educación para el desarrollo sostenible", value: "Educación para el desarrollo sostenible" },
  { label: "Bienestar estudiantil", value: "Bienestar estudiantil" },
  { label: "Evaluación educativa", value: "Evaluación educativa" },
  { label: "Planificación", value: "Planificación" },
  { label: "Institucional", value: "Institucional" },
  { label: "Modernización e innovación en la gestión pública", value: "Modernización e innovación en la gestión pública" },
  { label: "Derechos Humanos", value: "Derechos Humanos" },
];

// ══════════════════════════════════════════════════
//  OPORTUNIDADES
// ══════════════════════════════════════════════════

export const MODALIDADES_OPORTUNIDAD: DropdownOption[] = [
  { label: "Presencial", value: "Presencial" },
  { label: "Virtual", value: "Virtual" },
  { label: "Híbrido", value: "Híbrido" },
];

export const TIPOS_OPORTUNIDAD: DropdownOption[] = [
  { label: "Seminario", value: "Seminario" },
  { label: "Webinario", value: "Webinario" },
  { label: "Curso", value: "Curso" },
  { label: "Beca", value: "Beca" },
  { label: "Capacitación", value: "Capacitación" },
  { label: "Charla", value: "Charla" },
  { label: "Otro (escribir)", value: "Otro" },
];

export const SECTORES_OPORTUNIDAD: DropdownOption[] = [
  { label: "Bilateral", value: "Bilateral" },
  { label: "Multilateral", value: "Multilateral" },
  { label: "Academia", value: "Academia" },
  { label: "Público", value: "Público" },
  { label: "Privado", value: "Privado" },
];

export const TEMAS: DropdownOption[] = [
  { label: "Educación alimentaria y nutricional", value: "Educación alimentaria y nutricional" },
  { label: "Bienestar estudiantil", value: "Bienestar estudiantil" },
  { label: "Educación inclusiva", value: "Educación inclusiva" },
  { label: "Educación para el Desarrollo Sostenible", value: "Educación para el Desarrollo Sostenible" },
  { label: "Educación técnica Profesional", value: "Educación técnica Profesional" },
  { label: "Emprendimiento", value: "Emprendimiento" },
  { label: "Formación permanente", value: "Formación permanente" },
  { label: "Infraestructura Educativa", value: "Infraestructura Educativa" },
  { label: "Innovación y fortalecimiento en los aprendizajes", value: "Innovación y fortalecimiento en los aprendizajes" },
  { label: "Transformación digital", value: "Transformación digital" },
  { label: "Evaluación Educativa", value: "Evaluación Educativa" },
  { label: "Multilinguismo", value: "Multilinguismo" },
  { label: "Alianzas estratégicas", value: "Alianzas estratégicas" },
  { label: "Gestión de riesgos", value: "Gestión de riesgos" },
  { label: "Otro (escribir)", value: "Otro" },
];

export const DESPACHOS: DropdownOption[] = [
  { label: "Ministro", value: "Ministro" },
  { label: "Académico", value: "Académico" },
  { label: "Administrativo", value: "Administrativo" },
  { label: "Planificación Institucional y Coordinación Regional", value: "Planificación y Coordinación Regional" },
  { label: "Interdisciplinario (escribir)", value: "Interdisciplinario" },
];

export const POBLACIONES: DropdownOption[] = [
  { label: "Estudiantes", value: "Estudiantes" },
  { label: "Docentes", value: "Docentes" },
  { label: "Asesores", value: "Asesores" },
  { label: "Comunidad estudiantil", value: "Comunidad estudiantil" },
  { label: "Autoridades institucionales", value: "Autoridades institucionales" },
  { label: "Directores regionales", value: "Directores regionales" },
  { label: "Otro (escribir)", value: "Otro" },
];

// ══════════════════════════════════════════════════
//  PROYECTOS
// ══════════════════════════════════════════════════

export const ETAPAS_PROYECTO: DropdownOption[] = [
  { label: "Finalizado", value: "Finalizado" },
  { label: "Aprobado por la institución", value: "Aprobado por la institución" },
  { label: "Aprobado por el MIDEPLAN", value: "aprobado por el MIDEPLAN" },
  { label: "Rechazado por MIDEPLAN", value: "Rechazado por MIDEPLAN" },
  { label: "En proceso de formulacion", value: "En proceso de formulacion" },
  { label: "Rechazado por fuente externa", value: "Rechazado por fuente externa" },
  { label: "En ejecución", value: "En ejecución" },
  { label: "Cancelado por el cooperante", value: "Cancelado por el cooperante" },
  { label: "Cancelado por la institución", value: "Cancelado por la institución" },
  { label: "En negociación", value: "En negociación" },
  { label: "Suspendido por la institución", value: "Suspendido por la institución" },
  { label: "Suspendido por el cooperante", value: "Suspendido por el cooperante" },
];

export const MODALIDADES_PROYECTO: DropdownOption[] = [
  { label: "Todas", value: "Todas" },
  { label: "Financiera reembolsables", value: "Financiera reembolsables" },
  { label: "Financiera no reembolsables", value: "Financiera no reembolsables" },
  { label: "Cooperación técnica", value: "Cooperación técnica" },
];

export const SECTORES_PROYECTO: DropdownOption[] = [
  { label: "Bilateral", value: "Bilateral" },
  { label: "Multilateral", value: "Multilateral" },
];

export const TIPO_COOPERACIONES: DropdownOption[] = [
  { label: "Todas", value: "Todas" },
  { label: "Cooperación sur-sur", value: "Cooperación sur-sur" },
  { label: "Triangulación", value: "Triangulación" },
  { label: "Regional", value: "Regional" },
  { label: "Fronteriza", value: "Fronteriza" },
  { label: "Norte-Sur", value: "Norte-Sur" },
];

export const AUTORIDADES_A_CARGO: DropdownOption[] = [
  { label: "Despacho del ministro", value: "Despacho del ministro" },
  { label: "Viceministerio academico", value: "Viceministerio academico" },
  { label: "Viceministerio administrativo", value: "Viceministerio administrativo" },
  { label: "Viceministerio de coordinacion regional", value: "Viceministerio de coordinacion regional" },
  { label: "Multigerencial", value: "Multigerencial" },
];

export const ENTIDADES_DEPENDENCIAS: DropdownOption[] = [
  { label: "Unidad para la promocion de la igualdad de genero", value: "Unidad para la promocion de la igualdad de genero" },
  { label: "Contraloría de servicios", value: "Contraloría de servicios" },
  { label: "Auditoria interna", value: "Auditoria interna" },
  { label: "Prensa y relaciones públicas", value: "Prensa y relaciones públicas" },
  { label: "Asuntos internacionales y cooperación", value: "Asuntos internacionales y cooperación" },
  { label: "Unidad de planificacion sectorial", value: "Unidad de planificacion sectorial" },
  { label: "Asuntos jurídicos", value: "Asuntos jurídicos" },
  { label: "Contraloría de derechos estudiantiles", value: "Contraloría de derechos estudiantiles" },
  { label: "Educación privada", value: "Educación privada" },
  { label: "Recursos tecnologicos en educacion", value: "Recursos tecnologicos en educacion" },
  { label: "Educación técnica y capacidades emprendedoras", value: "Educación técnica y capacidades emprendedoras" },
  { label: "Desarrollo curricular", value: "Desarrollo curricular" },
  { label: "Vida estudiantil", value: "Vida estudiantil" },
  { label: "Gestión y evaluación de la calidad", value: "Gestión y evaluación de la calidad" },
  { label: "Gestión y desarrollo regional", value: "Gestión y desarrollo regional" },
  { label: "Proveeduría institucional", value: "Proveeduría institucional" },
  { label: "Financiera", value: "Financiera" },
  { label: "Planificación institucional", value: "Planificación institucional" },
  { label: "Gestión de talento humano", value: "Gestión de talento humano" },
  { label: "Infraestructura educativa", value: "Infraestructura educativa" },
  { label: "Programas de equidad", value: "Programas de equidad" },
  { label: "Informática de gestión", value: "Informática de gestión" },
  { label: "Servicios generales", value: "Servicios generales" },
];

export const DEPENDENCIAS_CANTIDAD: DropdownOption[] = [
  { label: "Una", value: "Una" },
  { label: "Más de una", value: "Más de una" },
];

// ══════════════════════════════════════════════════
//  VIAJES
// ══════════════════════════════════════════════════

export const SECTORES_VIAJE = [
  "Multilateral",
  "Bilateral",
  "Privado",
  "Público",
  "Academia",
  "Sociedad Civil",
];

export const TEMAS_VIAJE = [
  "Educación alimentaria y nutricional",
  "Bienestar estudiantil",
  "Educación inclusiva",
  "Educación para el Desarrollo Sostenible",
  "Educación técnica Profesional",
  "Emprendimiento",
  "Formación permanente",
  "Infraestructura Educativa",
  "Innovación y fortalecimiento en los aprendizajes",
  "Transformación digital",
  "Evaluación Educativa",
  "Multilinguismo",
  "Alianzas estratégicas",
  "Gestión de riesgos",
];
