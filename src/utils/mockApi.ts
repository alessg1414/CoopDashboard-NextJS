/**
 * Mock API layer for portfolio demo.
 * Intercepts all API calls and returns/modifies in-memory mock data.
 */
import {
  mockConvenios,
  mockRegistroProcesos,
  mockHistorialRegistroProcesos,
  mockOportunidades,
  mockProyectos,
  mockAreas,
  mockViajes,
  mockObservacionesViajes,
  mockInventario,
  mockSubpartidas,
  mockSolicitudesPresupuesto,
  getNextId,
} from "@/data/mockData";

// Simulated delay for realism
const delay = (ms = 200) => new Promise((r) => setTimeout(r, ms));

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function getParam(url: string, key: string): string | null {
  try {
    const u = new URL(url, "http://localhost");
    return u.searchParams.get(key);
  } catch {
    return null;
  }
}

/**
 * Drop-in replacement for fetch() that uses in-memory mock data.
 * Matches the same URL patterns the PHP backend used.
 */
export async function apiFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  await delay();

  const url = typeof input === "string" ? input : input.toString();
  const method = (init?.method ?? "GET").toUpperCase();

  let body: any = {};
  if (init?.body) {
    try {
      body = typeof init.body === "string" ? JSON.parse(init.body) : {};
    } catch {
      // FormData or other — ignore
    }
  }

  // --- LOGIN ---
  if (url.includes("login/") || url.includes("login")) {
    if (method === "POST") {
      return jsonResponse({ success: true, userEmail: body.correo ?? "demo@ejemplo.com" });
    }
  }

  // --- CONVENIOS ---
  if (url.includes("max-consecutivo")) {
    const max = mockConvenios.reduce((m, c) => Math.max(m, c.consecutivo_numerico), 0);
    return jsonResponse({ maxConsecutivo: max });
  }
  if (url.includes("check-consecutivo")) {
    const consecutivo = Number(getParam(url, "consecutivo"));
    const exists = mockConvenios.some((c) => c.consecutivo_numerico === consecutivo);
    return jsonResponse({ exists });
  }
  if (url.includes("convenios")) {
    if (method === "GET") {
      return jsonResponse({ convenios: mockConvenios });
    }
    if (method === "POST") {
      const newConvenio = { ...body, id: getNextId("convenios") };
      mockConvenios.push(newConvenio);
      return jsonResponse({ success: true, id: newConvenio.id });
    }
    if (method === "PUT") {
      const idx = mockConvenios.findIndex((c) => c.id === body.id);
      if (idx !== -1) Object.assign(mockConvenios[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockConvenios.findIndex((c) => c.id === id);
      if (idx !== -1) mockConvenios.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- REGISTRO_PROCESOS ---
  if (url.includes("registro_procesos")) {
    if (method === "GET") {
      const convenioId = getParam(url, "convenioId");
      const latest = getParam(url, "latest");
      if (convenioId && latest) {
        const match = mockRegistroProcesos.filter((r) => r.convenio_id === Number(convenioId));
        const last = match[match.length - 1];
        return jsonResponse(last ? { fase_registro: last.fase_registro } : {});
      }
      return jsonResponse(mockRegistroProcesos);
    }
    if (method === "POST") {
      const newReg = { ...body, id: getNextId("registro_procesos") };
      mockRegistroProcesos.push(newReg);
      return jsonResponse({ success: true, id: newReg.id });
    }
    if (method === "PUT") {
      const idx = mockRegistroProcesos.findIndex((r) => r.id === body.id);
      if (idx !== -1) Object.assign(mockRegistroProcesos[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockRegistroProcesos.findIndex((r) => r.id === id);
      if (idx !== -1) mockRegistroProcesos.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- HISTORIAL_REGISTRO_PROCESOS ---
  if (url.includes("historial_registro_procesos")) {
    if (method === "GET") {
      const rpId = getParam(url, "registro_proceso_id");
      const filtered = rpId
        ? mockHistorialRegistroProcesos.filter((h) => h.registro_proceso_id === Number(rpId))
        : mockHistorialRegistroProcesos;
      return jsonResponse(filtered);
    }
    if (method === "POST") {
      const newH = { ...body, id: getNextId("historial") };
      mockHistorialRegistroProcesos.push(newH);
      return jsonResponse({ success: true, id: newH.id });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockHistorialRegistroProcesos.findIndex((h) => h.id === id);
      if (idx !== -1) mockHistorialRegistroProcesos.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- OPORTUNIDADES ---
  if (url.includes("oportunidades")) {
    if (method === "GET") {
      return jsonResponse(mockOportunidades);
    }
    if (method === "POST") {
      const newOp = { ...body, id: getNextId("oportunidades") };
      mockOportunidades.push(newOp);
      return jsonResponse({ success: true, id: newOp.id });
    }
    if (method === "PUT") {
      const idx = mockOportunidades.findIndex((o) => o.id === body.id);
      if (idx !== -1) Object.assign(mockOportunidades[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockOportunidades.findIndex((o) => o.id === id);
      if (idx !== -1) mockOportunidades.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- PROYECTOS ---
  if (url.includes("proyectos")) {
    if (method === "GET") {
      return jsonResponse(mockProyectos);
    }
    if (method === "POST") {
      const newP = { ...body, NumProyecto: getNextId("proyectos") };
      mockProyectos.push(newP);
      return jsonResponse({ success: true, NumProyecto: newP.NumProyecto });
    }
    if (method === "PUT") {
      const idx = mockProyectos.findIndex((p) => p.NumProyecto === body.NumProyecto);
      if (idx !== -1) Object.assign(mockProyectos[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const num = Number(getParam(url, "NumProyecto"));
      const idx = mockProyectos.findIndex((p) => p.NumProyecto === num);
      if (idx !== -1) mockProyectos.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- AREAS ---
  if (url.includes("areas")) {
    if (method === "GET") {
      return jsonResponse(mockAreas);
    }
    if (method === "POST") {
      const newA = { IdAreas: getNextId("areas"), NombreArea: body.NombreArea };
      mockAreas.push(newA);
      return jsonResponse({ IdAreas: newA.IdAreas });
    }
  }

  // --- VIAJES_AL_EXTERIOR ---
  if (url.includes("viajes_al_exterior")) {
    if (method === "GET") {
      return jsonResponse({ viajes: mockViajes });
    }
    if (method === "POST") {
      const newV = { ...body, id: getNextId("viajes") };
      mockViajes.push(newV);
      return jsonResponse({ success: true, id: newV.id });
    }
    if (method === "PUT") {
      const idx = mockViajes.findIndex((v) => v.id === body.id);
      if (idx !== -1) Object.assign(mockViajes[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockViajes.findIndex((v) => v.id === id);
      if (idx !== -1) mockViajes.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- OBSERVACIONES_VIAJES ---
  if (url.includes("observaciones_viajes")) {
    if (method === "GET") {
      const viajeId = getParam(url, "viaje_id");
      const filtered = viajeId
        ? mockObservacionesViajes.filter((o) => o.viaje_id === Number(viajeId))
        : mockObservacionesViajes;
      return jsonResponse(filtered);
    }
    if (method === "POST") {
      const newObs = { ...body, id: getNextId("observaciones") };
      mockObservacionesViajes.push(newObs);
      return jsonResponse({ success: true, id: newObs.id });
    }
  }

  // --- INVENTARIO ---
  if (url.includes("inventario")) {
    if (method === "GET") {
      return jsonResponse(mockInventario);
    }
    if (method === "POST") {
      const newInv = { ...body, id: getNextId("inventario") };
      mockInventario.push(newInv);
      return jsonResponse({ success: true, id: newInv.id });
    }
    if (method === "PUT") {
      const idx = mockInventario.findIndex((i) => i.id === body.id);
      if (idx !== -1) Object.assign(mockInventario[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockInventario.findIndex((i) => i.id === id);
      if (idx !== -1) mockInventario.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- SUBPARTIDA_CONTRATACION ---
  if (url.includes("subpartida_contratacion")) {
    if (method === "GET") {
      return jsonResponse(mockSubpartidas);
    }
    if (method === "POST") {
      const newSub = { ...body, id: getNextId("subpartidas") };
      mockSubpartidas.push(newSub);
      return jsonResponse({ success: true, id: newSub.id });
    }
    if (method === "PUT") {
      const idx = mockSubpartidas.findIndex((s) => s.id === body.id);
      if (idx !== -1) Object.assign(mockSubpartidas[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockSubpartidas.findIndex((s) => s.id === id);
      if (idx !== -1) mockSubpartidas.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- SOLICITUD_PRESUPUESTO ---
  if (url.includes("solicitud_presupuesto")) {
    if (method === "GET") {
      return jsonResponse(mockSolicitudesPresupuesto);
    }
    if (method === "POST") {
      const newSol = { ...body, id: getNextId("solicitudes") };
      mockSolicitudesPresupuesto.push(newSol);
      return jsonResponse({ success: true, id: newSol.id });
    }
    if (method === "PUT") {
      const idx = mockSolicitudesPresupuesto.findIndex((s) => s.id === body.id);
      if (idx !== -1) Object.assign(mockSolicitudesPresupuesto[idx], body);
      return jsonResponse({ success: true });
    }
    if (method === "DELETE") {
      const id = Number(getParam(url, "id"));
      const idx = mockSolicitudesPresupuesto.findIndex((s) => s.id === id);
      if (idx !== -1) mockSolicitudesPresupuesto.splice(idx, 1);
      return jsonResponse({ success: true });
    }
  }

  // --- UPLOAD (stub) ---
  if (url.includes("upload")) {
    return jsonResponse({ success: true, url: "/uploads/demo-file.pdf" });
  }

  // --- DELETE_FILE (stub) ---
  if (url.includes("delete_file")) {
    return jsonResponse({ success: true });
  }

  // Fallback — unknown endpoint
  console.warn(`[mockApi] Unhandled: ${method} ${url}`);
  return jsonResponse({ error: "Not found" }, 404);
}
