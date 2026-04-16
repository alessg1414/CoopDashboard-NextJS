// ══════════════════════════════════════════════════
//  Tipos principales del dominio SG-PAIC
// ══════════════════════════════════════════════════

export interface Convenio {
  id: number;
  nombre: string;
  cooperante: string;
  sector: string;
  consecutivo_numerico: number;
  fase_actual: string;
  firmado?: string | null;
  area_estrategica?: string;
}

export interface RegistroProceso {
  id: number;
  convenio_id: number;
  entidad_proponente: string;
  autoridad_ministerial: string;
  funcionario_emisor: string;
  entidad_emisora: string;
  funcionario_receptor: string;
  entidad_receptora: string;
  registro_proceso: string;
  fecha_inicio: string;
  fecha_final: string;
  tipo_convenio: string;
  fase_registro: string;
}

export interface HistorialRegistroProceso {
  id: number;
  registro_proceso_id: number;
  evento: string;
  fecha: string;
}

export interface Oportunidad {
  id: number;
  nombre_oportunidad: string;
  objetivo: string;
  modalidad: string;
  tipo_oportunidad: string;
  socio: string;
  sector: string;
  tema: string;
  poblacion_meta: string;
  despacho: string;
  direccion_envio: string;
  fecha_inicio: string;
  fecha_fin: string;
  funcionario: string;
  observaciones: string;
  doc_pdf?: string | null;
}

export interface Proyecto {
  NumProyecto?: number;
  CantidadDependencias: string | null;
  NombreActor: string | null;
  NombreProyecto: string | null;
  FechaAprovacion: string | null;
  EtapaProyecto: string | null;
  DependenciasSolicitantes: string | null;
  CostoTotal: string | null;
  ContrapartidaInstitucional: string | null;
  DocumentosCambiar: string | null;
  Observaciones: string | null;
  ObjetivoGeneral: string | null;
  Resultados: string | null;
  Productos: string | null;
  Ano: string | null;
  ContrapartidaCooperante: string | null;
  IdAreas: number;
  InstitucionSolicitante: string | string[] | null;
  Region: string | null;
  Modalidad: string | null;
  Sector: string | null;
  TipoCooperacion: string | null;
  AutoridadAcargo: string | null;
}

export interface Area {
  IdAreas: number;
  NombreArea: string;
}

export interface Viaje {
  id: number;
  ano: string | null;
  funcionario_a_cargo: string | null;
  nombre_actividad: string | null;
  organizador: string | null;
  pais: string | null;
  fecha_actividad_inicio: string | null;
  fecha_actividad_final: string | null;
  fecha_viaje_inicio: string | null;
  fecha_viaje_final: string | null;
  estado: string | null;
  sector: string | null;
  tema: string | null;
  numero_acuerdo: string | null;
  autoridad_delegado: string | null;
  nombre_participante: string | null;
  cargo_funcionario: string | null;
  modalidad: string | null;
  observaciones: string | null;
  financiamiento: string | null;
  vacaciones: string | null;
  detalle_vacaciones: string | null;
}

export interface ObservacionViaje {
  id: number;
  viaje_id: number;
  observacion: string;
  quien_envia: string;
  quien_recibe: string;
  fecha: string;
  hora: string;
}

export interface Inventario {
  id: number;
  cooperante: string;
  contraparte_externa: string;
  nombre_convenio: string;
  objeto_convenio?: string;
  tipo_instrumento?: string;
  presupuesto: string;
  instancias_tecnicas?: string;
  informe?: string;
  fecha_rige: string;
  fecha_vencimiento: string;
  documento_pdf?: string | null;
  estado?: string;
  observaciones?: string;
}

export interface Subpartida {
  id: number;
  subpartida: string;
  ano_contrato: string;
  nombre_subpartida: string;
  descripcion_contratacion?: string;
  numero_contratacion?: string;
  numero_contrato?: string;
  numero_orden_compra?: string;
  orden_pedido_sicop?: string;
  presupuesto_asignado: string;
  presupuesto_disponible?: string;
  presupuesto_comprometido?: string;
}

export interface SolicitudPresupuesto {
  id: number;
  subpartida_contratacion_id: number;
  descripcion: string;
  fecha_solicitud_boleto: string;
  hora_solicitud_boleto: string;
  oficio_solicitud: string;
  total_factura: string | number;
  fecha_respuesta_solicitud?: string | null;
  hora_respuesta_solicitud?: string | null;
  cumple_solicitud?: "Sí" | "No" | "Pendiente" | null;
  fecha_solicitud_emision?: string | null;
  hora_solicitud_emision?: string | null;
  oficio_emision?: string | null;
  fecha_respuesta_emision?: string | null;
  hora_respuesta_emision?: string | null;
  cumple_emision?: "Sí" | "No" | "Pendiente" | null;
  fecha_emision_boleto?: string | null;
  hora_emision_boleto?: string | null;
  numero_boleta?: string | null;
  fecha_recibido_conforme?: string | null;
  hora_recibido_conforme?: string | null;
  oficio_recepcion?: string | null;
  numero_factura?: string | null;
  fecha_entrega_direccion?: string | null;
  estado?: string;
  activo?: boolean;
}
