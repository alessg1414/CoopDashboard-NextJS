

export const mockConvenios = [
  { id: 1, cooperante: "UNICEF", nombre: "Fortalecimiento de capacidades educativas", sector: "Multilateral", fase_actual: "Vigente", firmado: "2024-03-15", consecutivo_numerico: 1, area_estrategica: "Educación inclusiva" },
  { id: 2, cooperante: "UNESCO", nombre: "Programa de alfabetización digital", sector: "Multilateral", fase_actual: "En negociación", firmado: "2024-06-01", consecutivo_numerico: 2, area_estrategica: "Transformación digital" },
  { id: 3, cooperante: "GIZ (Alemania)", nombre: "Cooperación técnica en formación docente", sector: "Bilateral", fase_actual: "Vigente", firmado: "2023-11-20", consecutivo_numerico: 3, area_estrategica: "Formación permanente" },
  { id: 4, cooperante: "JICA (Japón)", nombre: "Infraestructura escolar sostenible", sector: "Bilateral", fase_actual: "Finalizado", firmado: "2022-08-10", consecutivo_numerico: 4, area_estrategica: "Infraestructura Educativa" },
  { id: 5, cooperante: "BID", nombre: "Modernización del sistema evaluativo", sector: "Multilateral", fase_actual: "Vigente", firmado: "2024-01-05", consecutivo_numerico: 5, area_estrategica: "Evaluación Educativa" },
  { id: 6, cooperante: "OEI", nombre: "Intercambio académico iberoamericano", sector: "Multilateral", fase_actual: "En negociación", firmado: null, consecutivo_numerico: 6, area_estrategica: "Alianzas estratégicas" },
  { id: 7, cooperante: "KOICA (Corea del Sur)", nombre: "Plataforma educativa inteligente", sector: "Bilateral", fase_actual: "Vigente", firmado: "2024-09-12", consecutivo_numerico: 7, area_estrategica: "Transformación digital" },
  { id: 8, cooperante: "Banco Mundial", nombre: "Equidad educativa en zonas rurales", sector: "Multilateral", fase_actual: "Vigente", firmado: "2023-05-22", consecutivo_numerico: 8, area_estrategica: "Educación inclusiva" },
];

export const mockRegistroProcesos = [
  { id: 1, convenio_id: 1, entidad_proponente: "UNICEF Costa Rica", funcionario_emisor: "Ana López", autoridad_ministerial: "Despacho del ministro", entidad_emisora: "Dirección de Cooperación", funcionario_receptor: "Carlos Méndez", entidad_receptora: "Asesoría Jurídica", registro_proceso: "Revisión legal", fecha_inicio: "2024-03-01", fecha_final: "2024-03-10", tipo_convenio: "Marco", fase_registro: "Aprobado" },
  { id: 2, convenio_id: 1, entidad_proponente: "UNICEF Costa Rica", funcionario_emisor: "Ana López", autoridad_ministerial: "Viceministerio académico", entidad_emisora: "Dirección de Cooperación", funcionario_receptor: "María Rojas", entidad_receptora: "Planificación", registro_proceso: "Firma", fecha_inicio: "2024-03-11", fecha_final: "2024-03-15", tipo_convenio: "Marco", fase_registro: "Firmado" },
  { id: 3, convenio_id: 2, entidad_proponente: "UNESCO", funcionario_emisor: "Pedro Sánchez", autoridad_ministerial: "Despacho del ministro", entidad_emisora: "Dirección de Cooperación", funcionario_receptor: "Laura Vargas", entidad_receptora: "Asesoría Jurídica", registro_proceso: "Revisión técnica", fecha_inicio: "2024-05-15", fecha_final: "2024-06-01", tipo_convenio: "Específico", fase_registro: "En revisión" },
  { id: 4, convenio_id: 3, entidad_proponente: "GIZ", funcionario_emisor: "Roberto Herrera", autoridad_ministerial: "Viceministerio académico", entidad_emisora: "Dirección de Cooperación", funcionario_receptor: "Andrea Jiménez", entidad_receptora: "Recursos Humanos", registro_proceso: "Implementación", fecha_inicio: "2023-11-01", fecha_final: "2023-11-20", tipo_convenio: "Específico", fase_registro: "En ejecución" },
  { id: 5, convenio_id: 5, entidad_proponente: "BID", funcionario_emisor: "Fernando Castro", autoridad_ministerial: "Despacho del ministro", entidad_emisora: "Planificación", funcionario_receptor: "Sofía Morales", entidad_receptora: "Evaluación", registro_proceso: "Negociación", fecha_inicio: "2023-12-01", fecha_final: "2024-01-05", tipo_convenio: "Marco", fase_registro: "Aprobado" },
];

export const mockHistorialRegistroProcesos = [
  { id: 1, registro_proceso_id: 1, evento: "Documento recibido para revisión", fecha: "2024-03-01" },
  { id: 2, registro_proceso_id: 1, evento: "Observaciones enviadas al cooperante", fecha: "2024-03-05" },
  { id: 3, registro_proceso_id: 1, evento: "Documento corregido y aprobado", fecha: "2024-03-10" },
  { id: 4, registro_proceso_id: 2, evento: "Firma del representante institucional", fecha: "2024-03-12" },
  { id: 5, registro_proceso_id: 2, evento: "Firma del cooperante", fecha: "2024-03-15" },
  { id: 6, registro_proceso_id: 3, evento: "Revisión técnica iniciada", fecha: "2024-05-15" },
];

export const mockOportunidades = [
  { id: 1, nombre_oportunidad: "Beca de intercambio en innovación educativa", objetivo: "Fortalecer capacidades docentes en metodologías activas", modalidad: "Presencial", tipo_oportunidad: "Becas", socio: "UNESCO", sector: "Multilateral", tema: "Formación permanente", poblacion_meta: "Docentes", despacho: "Viceministerio académico", direccion_envio: "Dirección de Desarrollo Curricular", fecha_inicio: "2024-06-01", fecha_fin: "2024-12-31", funcionario: "María González", observaciones: "Programa piloto", doc_pdf: null },
  { id: 2, nombre_oportunidad: "Programa de equipamiento tecnológico escolar", objetivo: "Dotar de recursos tecnológicos a centros educativos rurales", modalidad: "Mixta", tipo_oportunidad: "Donaciones", socio: "KOICA", sector: "Bilateral", tema: "Transformación digital", poblacion_meta: "Estudiantes", despacho: "Viceministerio administrativo", direccion_envio: "Dirección de Infraestructura", fecha_inicio: "2024-03-15", fecha_fin: "2025-03-14", funcionario: "Carlos Ramírez", observaciones: "", doc_pdf: null },
  { id: 3, nombre_oportunidad: "Taller regional de educación inclusiva", objetivo: "Compartir buenas prácticas en educación especial", modalidad: "Virtual", tipo_oportunidad: "Capacitaciones", socio: "OEI", sector: "Multilateral", tema: "Educación inclusiva", poblacion_meta: "Asesores", despacho: "Despacho del ministro", direccion_envio: "Dirección de Educación Especial", fecha_inicio: "2024-09-01", fecha_fin: "2024-09-30", funcionario: "Laura Jiménez", observaciones: "Participación de 5 países", doc_pdf: null },
  { id: 4, nombre_oportunidad: "Fondo para investigación educativa", objetivo: "Financiar investigaciones en metodología de enseñanza", modalidad: "Presencial", tipo_oportunidad: "Proyectos", socio: "Banco Mundial", sector: "Multilateral", tema: "Innovación y fortalecimiento en los aprendizajes", poblacion_meta: "Docentes", despacho: "Viceministerio académico", direccion_envio: "Dirección de Desarrollo Curricular", fecha_inicio: "2024-01-15", fecha_fin: "2024-07-15", funcionario: "Roberto Vargas", observaciones: "Segunda convocatoria", doc_pdf: null },
  { id: 5, nombre_oportunidad: "Pasantía en gestión de riesgos escolares", objetivo: "Capacitar en protocolos de emergencia escolar", modalidad: "Presencial", tipo_oportunidad: "Pasantías", socio: "JICA", sector: "Bilateral", tema: "Gestión de riesgos", poblacion_meta: "Autoridades institucionales", despacho: "Viceministerio administrativo", direccion_envio: "Dirección de Infraestructura", fecha_inicio: "2024-04-01", fecha_fin: "2024-04-30", funcionario: "Andrea Solano", observaciones: "", doc_pdf: null },
  { id: 6, nombre_oportunidad: "Conferencia sobre evaluación educativa", objetivo: "Analizar tendencias globales en evaluación", modalidad: "Virtual", tipo_oportunidad: "Capacitaciones", socio: "GIZ", sector: "Bilateral", tema: "Evaluación Educativa", poblacion_meta: "Directores regionales", despacho: "Despacho del ministro", direccion_envio: "Dirección de Evaluación de la Calidad", fecha_inicio: "2024-11-01", fecha_fin: "2024-11-15", funcionario: "Fernando Herrera", observaciones: "Evento anual", doc_pdf: null },
];

export const mockProyectos = [
  { NumProyecto: 1, NombreProyecto: "Fortalecimiento de Infraestructura Tecnológica Educativa", NombreActor: "Dirección de Asuntos Internacionales", EtapaProyecto: "En ejecución", DependenciasSolicitantes: "Recursos tecnológicos en educación, Desarrollo curricular", Modalidad: "Cooperación técnica", Sector: "Bilateral", Region: "San José", TipoCooperacion: "Norte-Sur", AutoridadAcargo: "Viceministerio académico", IdAreas: 1, ContrapartidaInstitucional: "$85,000", ContrapartidaCooperante: "$150,000", CostoTotal: "$235,000", Ano: "2024", FechaAprovacion: "2024-01-15", DocumentosCambiar: "", Observaciones: "Fase inicial completada", ObjetivoGeneral: "Modernizar infraestructura tecnológica en centros educativos", Resultados: "200 centros equipados", Productos: "Laboratorios de cómputo instalados", InstitucionSolicitante: "Dirección de Recursos Tecnológicos", CantidadDependencias: "Más de una" },
  { NumProyecto: 2, NombreProyecto: "Programa de Becas para Formación Docente Avanzada", NombreActor: "UNESCO", EtapaProyecto: "Aprobado por la institución", DependenciasSolicitantes: "Gestión de talento humano, Desarrollo curricular, Vida estudiantil", Modalidad: "Financiera no reembolsables", Sector: "Multilateral", Region: "Nacional", TipoCooperacion: "Regional", AutoridadAcargo: "Despacho del ministro", IdAreas: 2, ContrapartidaInstitucional: "$120,000", ContrapartidaCooperante: "$300,000", CostoTotal: "$420,000", Ano: "2024", FechaAprovacion: "2024-03-01", DocumentosCambiar: "", Observaciones: "", ObjetivoGeneral: "Fortalecer la formación avanzada de docentes", Resultados: "500 docentes capacitados", Productos: "Diplomas de especialización", InstitucionSolicitante: "Dirección de Gestión de Talento Humano", CantidadDependencias: "Más de una" },
  { NumProyecto: 3, NombreProyecto: "Modernización de Infraestructura Escolar en Zonas Rurales", NombreActor: "BID", EtapaProyecto: "Aprobado por el MIDEPLAN", DependenciasSolicitantes: "Infraestructura educativa, Gestión y desarrollo regional", Modalidad: "Financiera reembolsables", Sector: "Multilateral", Region: "Guanacaste", TipoCooperacion: "Norte-Sur", AutoridadAcargo: "Viceministerio administrativo", IdAreas: 3, ContrapartidaInstitucional: "$500,000", ContrapartidaCooperante: "$2,000,000", CostoTotal: "$2,500,000", Ano: "2023", FechaAprovacion: "2023-06-15", DocumentosCambiar: "", Observaciones: "Proyecto de alto impacto", ObjetivoGeneral: "Mejorar infraestructura escolar en comunidades rurales", Resultados: "50 escuelas renovadas", Productos: "Edificios escolares construidos", InstitucionSolicitante: "Dirección de Infraestructura", CantidadDependencias: "Más de una" },
  { NumProyecto: 4, NombreProyecto: "Capacitación en Educación Técnica y Emprendimiento", NombreActor: "GIZ", EtapaProyecto: "En ejecución", DependenciasSolicitantes: "Educación Técnica y capacidades emprendedoras, Desarrollo curricular", Modalidad: "Cooperación técnica", Sector: "Bilateral", Region: "Cartago", TipoCooperacion: "Cooperación sur-sur", AutoridadAcargo: "Viceministerio académico", IdAreas: 1, ContrapartidaInstitucional: "$60,000", ContrapartidaCooperante: "$180,000", CostoTotal: "$240,000", Ano: "2024", FechaAprovacion: "2024-02-01", DocumentosCambiar: "", Observaciones: "", ObjetivoGeneral: "Impulsar educación técnica y emprendimiento", Resultados: "300 estudiantes certificados", Productos: "Módulos de emprendimiento", InstitucionSolicitante: "Dirección de Educación Técnica", CantidadDependencias: "Una" },
  { NumProyecto: 5, NombreProyecto: "Equidad Educativa para Poblaciones Vulnerables", NombreActor: "UNICEF Costa Rica", EtapaProyecto: "En proceso de formulación", DependenciasSolicitantes: "Programas de equidad, Vida estudiantil", Modalidad: "Financiera no reembolsables", Sector: "Multilateral", Region: "Limón", TipoCooperacion: "Regional", AutoridadAcargo: "Multigerencial", IdAreas: 4, ContrapartidaInstitucional: "$75,000", ContrapartidaCooperante: "$250,000", CostoTotal: "$325,000", Ano: "2024", FechaAprovacion: null, DocumentosCambiar: "", Observaciones: "Pendiente aprobación", ObjetivoGeneral: "Garantizar acceso equitativo a educación de calidad", Resultados: "1000 estudiantes beneficiados", Productos: "Becas y materiales didácticos", InstitucionSolicitante: "Dirección de Programas de Equidad", CantidadDependencias: "Más de una" },
];

export const mockAreas = [
  { IdAreas: 1, NombreArea: "Innovación Educativa" },
  { IdAreas: 2, NombreArea: "Formación Docente" },
  { IdAreas: 3, NombreArea: "Infraestructura" },
  { IdAreas: 4, NombreArea: "Equidad e Inclusión" },
  { IdAreas: 5, NombreArea: "Gestión Administrativa" },
];

export const mockViajes = [
  { id: 1, ano: "2024", funcionario_a_cargo: "María González", nombre_actividad: "Conferencia Internacional de Educación", organizador: "UNESCO", pais: "Francia", fecha_actividad_inicio: "2024-06-10", fecha_actividad_final: "2024-06-14", fecha_viaje_inicio: "2024-06-09", fecha_viaje_final: "2024-06-15", estado: "Aprobado", sector: "Multilateral", tema: "Formación permanente", numero_acuerdo: "AC-2024-001", autoridad_delegado: "Viceministerio académico", nombre_participante: "María González", cargo_funcionario: "Directora de Cooperación", modalidad: "Presencial", observaciones: "", financiamiento: "Cooperante", vacaciones: "No", detalle_vacaciones: null },
  { id: 2, ano: "2024", funcionario_a_cargo: "Carlos Ramírez", nombre_actividad: "Taller de Tecnología Educativa", organizador: "KOICA", pais: "Corea del Sur", fecha_actividad_inicio: "2024-08-05", fecha_actividad_final: "2024-08-09", fecha_viaje_inicio: "2024-08-03", fecha_viaje_final: "2024-08-11", estado: "Aprobado", sector: "Bilateral", tema: "Transformación digital", numero_acuerdo: "AC-2024-002", autoridad_delegado: "Despacho del ministro", nombre_participante: "Carlos Ramírez", cargo_funcionario: "Asesor de Tecnología", modalidad: "Presencial", observaciones: "Incluye visita a escuelas modelo", financiamiento: "Cooperante", vacaciones: "No", detalle_vacaciones: null },
  { id: 3, ano: "2024", funcionario_a_cargo: "Laura Jiménez", nombre_actividad: "Reunión de Seguimiento OEI", organizador: "OEI", pais: "España", fecha_actividad_inicio: "2024-10-20", fecha_actividad_final: "2024-10-22", fecha_viaje_inicio: "2024-10-19", fecha_viaje_final: "2024-10-23", estado: "Pendiente", sector: "Multilateral", tema: "Alianzas estratégicas", numero_acuerdo: "AC-2024-003", autoridad_delegado: "Despacho del ministro", nombre_participante: "Laura Jiménez", cargo_funcionario: "Coordinadora de Programas", modalidad: "Presencial", observaciones: "", financiamiento: "Institucional", vacaciones: "Sí", detalle_vacaciones: "2 días adicionales" },
  { id: 4, ano: "2023", funcionario_a_cargo: "Roberto Vargas", nombre_actividad: "Capacitación en Evaluación Educativa", organizador: "Banco Mundial", pais: "Estados Unidos", fecha_actividad_inicio: "2023-09-18", fecha_actividad_final: "2023-09-22", fecha_viaje_inicio: "2023-09-17", fecha_viaje_final: "2023-09-23", estado: "Realizado", sector: "Multilateral", tema: "Evaluación Educativa", numero_acuerdo: "AC-2023-015", autoridad_delegado: "Viceministerio académico", nombre_participante: "Roberto Vargas", cargo_funcionario: "Director de Evaluación", modalidad: "Presencial", observaciones: "Excelente experiencia", financiamiento: "Cooperante", vacaciones: "No", detalle_vacaciones: null },
];

export const mockObservacionesViajes = [
  { id: 1, viaje_id: 1, observacion: "Documentos de viaje aprobados por asesoría jurídica", quien_envia: "Ana López", quien_recibe: "María González", fecha: "2024-05-20", hora: "10:30" },
  { id: 2, viaje_id: 1, observacion: "Boletos aéreos reservados", quien_envia: "Pedro Sánchez", quien_recibe: "María González", fecha: "2024-05-25", hora: "14:00" },
  { id: 3, viaje_id: 2, observacion: "Visa tramitada exitosamente", quien_envia: "Laura Vargas", quien_recibe: "Carlos Ramírez", fecha: "2024-07-15", hora: "09:00" },
];

export const mockInventario = [
  { id: 1, cooperante: "UNESCO", contraparte_externa: "Dirección de Desarrollo Curricular", nombre_convenio: "Programa de alfabetización digital", presupuesto: "$150,000", fecha_rige: "2024-01-01", fecha_vencimiento: "2025-12-31", documento_pdf: null, estado: "Vigente", observaciones: "" },
  { id: 2, cooperante: "GIZ", contraparte_externa: "Dirección de Formación Docente", nombre_convenio: "Cooperación técnica en formación docente", presupuesto: "$80,000", fecha_rige: "2023-06-01", fecha_vencimiento: "2025-06-01", documento_pdf: null, estado: "Vigente", observaciones: "Renovación pendiente" },
  { id: 3, cooperante: "JICA", contraparte_externa: "Dirección de Infraestructura", nombre_convenio: "Infraestructura escolar sostenible", presupuesto: "$300,000", fecha_rige: "2022-01-01", fecha_vencimiento: "2024-12-31", documento_pdf: null, estado: "Por vencer", observaciones: "" },
  { id: 4, cooperante: "BID", contraparte_externa: "Dirección de Evaluación", nombre_convenio: "Modernización del sistema evaluativo", presupuesto: "$500,000", fecha_rige: "2024-03-01", fecha_vencimiento: "2027-02-28", documento_pdf: null, estado: "Vigente", observaciones: "" },
  { id: 5, cooperante: "KOICA", contraparte_externa: "Dirección de Tecnología", nombre_convenio: "Plataforma educativa inteligente", presupuesto: "$200,000", fecha_rige: "2024-09-01", fecha_vencimiento: "2026-08-31", documento_pdf: null, estado: "Vigente", observaciones: "Primera fase" },
];

export const mockSubpartidas = [
  { id: 1, subpartida: "10501", ano_contrato: "2024", nombre_subpartida: "Transporte dentro del país", presupuesto_asignado: "₡5,000,000", presupuesto_disponible: "₡3,200,000", presupuesto_comprometido: "₡1,800,000" },
  { id: 2, subpartida: "10502", ano_contrato: "2024", nombre_subpartida: "Viáticos dentro del país", presupuesto_asignado: "₡8,000,000", presupuesto_disponible: "₡5,500,000", presupuesto_comprometido: "₡2,500,000" },
  { id: 3, subpartida: "10503", ano_contrato: "2024", nombre_subpartida: "Transporte en el exterior", presupuesto_asignado: "₡15,000,000", presupuesto_disponible: "₡9,000,000", presupuesto_comprometido: "₡6,000,000" },
  { id: 4, subpartida: "10504", ano_contrato: "2024", nombre_subpartida: "Viáticos en el exterior", presupuesto_asignado: "₡20,000,000", presupuesto_disponible: "₡12,000,000", presupuesto_comprometido: "₡8,000,000" },
];

export const mockSolicitudesPresupuesto = [
  { id: 1, subpartida_contratacion_id: 3, descripcion: "Boleto aéreo San José - París", fecha_solicitud_boleto: "2024-05-15", hora_solicitud_boleto: "09:00", oficio_solicitud: "OF-2024-001", total_factura: "₡850,000", fecha_recibido_conforme: "2024-05-20", hora_recibido_conforme: "14:00", oficio_recepcion: "REC-2024-001", numero_factura: "FAC-001", fecha_entrega_direccion: "2024-05-22", estado: "Completado", activo: true },
  { id: 2, subpartida_contratacion_id: 4, descripcion: "Viáticos conferencia UNESCO París", fecha_solicitud_boleto: "2024-05-15", hora_solicitud_boleto: "09:30", oficio_solicitud: "OF-2024-002", total_factura: "₡1,200,000", fecha_recibido_conforme: null, hora_recibido_conforme: null, oficio_recepcion: null, numero_factura: null, fecha_entrega_direccion: null, estado: "En proceso", activo: true },
  { id: 3, subpartida_contratacion_id: 3, descripcion: "Boleto aéreo San José - Seúl", fecha_solicitud_boleto: "2024-07-01", hora_solicitud_boleto: "10:00", oficio_solicitud: "OF-2024-003", total_factura: "₡1,500,000", fecha_recibido_conforme: "2024-07-10", hora_recibido_conforme: "11:00", oficio_recepcion: "REC-2024-002", numero_factura: "FAC-002", fecha_entrega_direccion: "2024-07-12", estado: "Completado", activo: true },
];

// Auto-increment counters for new records
let nextConvenioId = mockConvenios.length + 1;
let nextRegistroId = mockRegistroProcesos.length + 1;
let nextHistorialId = mockHistorialRegistroProcesos.length + 1;
let nextOportunidadId = mockOportunidades.length + 1;
let nextProyectoId = mockProyectos.length + 1;
let nextAreaId = mockAreas.length + 1;
let nextViajeId = mockViajes.length + 1;
let nextObservacionId = mockObservacionesViajes.length + 1;
let nextInventarioId = mockInventario.length + 1;
let nextSubpartidaId = mockSubpartidas.length + 1;
let nextSolicitudId = mockSolicitudesPresupuesto.length + 1;

export function getNextId(entity: string): number {
  switch (entity) {
    case "convenios": return nextConvenioId++;
    case "registro_procesos": return nextRegistroId++;
    case "historial": return nextHistorialId++;
    case "oportunidades": return nextOportunidadId++;
    case "proyectos": return nextProyectoId++;
    case "areas": return nextAreaId++;
    case "viajes": return nextViajeId++;
    case "observaciones": return nextObservacionId++;
    case "inventario": return nextInventarioId++;
    case "subpartidas": return nextSubpartidaId++;
    case "solicitudes": return nextSolicitudId++;
    default: return Date.now();
  }
}
