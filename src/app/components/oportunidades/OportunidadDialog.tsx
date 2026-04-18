"use client";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { useState, useEffect } from "react";
import { API_BASE, apiFetch } from "@/utils/api";
import {
  MODALIDADES_OPORTUNIDAD as modalidades,
  TIPOS_OPORTUNIDAD as tiposOportunidad,
  SECTORES_OPORTUNIDAD as sectores,
  TEMAS as temas,
  DESPACHOS as despachos,
  POBLACIONES as poblaciones,
} from "@/utils/constants";

interface OportunidadDialogProps {
  visible: boolean;
  onHide: () => void;
  onSave: () => void;
  mode: "crear" | "editar";
  registro?: any;
}

const emptyForm = {
  nombre_oportunidad: "",
  objetivo: "",
  modalidad: "",
  tipo_oportunidad: "",
  otroTipo: "",
  socio: "",
  sector: "",
  tema: "",
  otroTema: "",
  poblacion_meta: [] as string[],
  otraPoblacion: "",
  despacho: "",
  otroDespacho: "",
  direccion_envio: "",
  fecha_inicio: null as Date | null,
  fecha_fin: null as Date | null,
  funcionario: "",
  observaciones: "",
};

export default function OportunidadDialog({ visible, onHide, onSave, mode, registro }: OportunidadDialogProps) {
  const [formData, setFormData] = useState<any>({ ...emptyForm });
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);
  const [camposConError, setCamposConError] = useState<string[]>([]);

  useEffect(() => {
    if (mode === "editar" && registro) {
      const nuevoFormData = { ...registro };

      const opcionesTipo = tiposOportunidad.map(o => o.value);
      if (registro.tipo_oportunidad && !opcionesTipo.includes(registro.tipo_oportunidad)) {
        nuevoFormData.tipo_oportunidad = "Otro";
        nuevoFormData.otroTipo = registro.tipo_oportunidad;
      }

      const opcionesTema = temas.map(o => o.value);
      if (registro.tema && !opcionesTema.includes(registro.tema)) {
        nuevoFormData.tema = "Otro";
        nuevoFormData.otroTema = registro.tema;
      }

      // Parse poblacion_meta string into array for MultiSelect
      if (typeof registro.poblacion_meta === "string" && registro.poblacion_meta) {
        const valores = registro.poblacion_meta.split(",").map((s: string) => s.trim());
        const opcionesPoblacion = poblaciones.map(o => o.value);
        const conocidos = valores.filter((v: string) => opcionesPoblacion.includes(v));
        const desconocidos = valores.filter((v: string) => !opcionesPoblacion.includes(v));
        if (desconocidos.length > 0) {
          nuevoFormData.poblacion_meta = [...conocidos, "Otro"];
          nuevoFormData.otraPoblacion = desconocidos.join(", ");
        } else {
          nuevoFormData.poblacion_meta = conocidos;
        }
      } else if (!Array.isArray(registro.poblacion_meta)) {
        nuevoFormData.poblacion_meta = [];
      }

      setFormData(nuevoFormData);
    } else if (mode === "crear") {
      limpiarFormulario();
    }
  }, [registro, mode]);

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const formatDate = (value: string | Date | null) => {
    if (!value) return null;
    return new Date(value).toISOString().split("T")[0];
  };

  const limpiarFormulario = () => {
    setFormData({ ...emptyForm, poblacion_meta: [] });
    setCamposConError([]);
    setErrorMensaje(null);
  };

  const handleSubmit = async () => {
    try {
      const camposFaltantes: string[] = [];
      if (!formData.nombre_oportunidad) camposFaltantes.push("nombre_oportunidad");
      if (!formData.objetivo) camposFaltantes.push("objetivo");
      if (!formData.fecha_inicio) camposFaltantes.push("fecha_inicio");
      if (!formData.socio) camposFaltantes.push("socio");

      if (camposFaltantes.length > 0) {
        setCamposConError(camposFaltantes);
        setErrorMensaje("Por favor complete todos los campos obligatorios.");
        return;
      }

      setCamposConError([]);
      setErrorMensaje(null);

      const poblacionArray: string[] = Array.isArray(formData.poblacion_meta) ? formData.poblacion_meta : [];
      const payload = {
        ...formData,
        tipo_oportunidad:
          formData.tipo_oportunidad === "Otro" ? formData.otroTipo : formData.tipo_oportunidad,
        tema:
          formData.tema === "Otro" ? formData.otroTema : formData.tema,
        despacho:
          formData.despacho === "Interdisciplinario" ? formData.otroDespacho : formData.despacho,
        poblacion_meta:
          poblacionArray.includes("Otro")
            ? [...poblacionArray.filter((p: string) => p !== "Otro"), formData.otraPoblacion].join(", ")
            : poblacionArray.join(", "),
        fecha_inicio: formatDate(formData.fecha_inicio),
        fecha_fin: formatDate(formData.fecha_fin),
      };

      const response = await apiFetch(`${API_BASE}oportunidades/`, {
        method: mode === "crear" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMensaje(errorData.error || "Error al guardar la oportunidad");
        return;
      }

      setErrorMensaje(null);
      onSave();
      onHide();
      if (mode === "crear") limpiarFormulario();
    } catch (error) {
      console.error("Error al guardar la oportunidad:", error);
    }
  };

  const calendarValue = (val: any) => {
    if (!val) return undefined;
    return val instanceof Date ? val : new Date(val);
  };

  return (
    <Dialog
      header={mode === "crear" ? "Agregar oportunidad profesional" : "Editar oportunidad profesional"}
      visible={visible}
      style={{ width: "50vw", maxWidth: "700px" }}
      modal
      onHide={onHide}
      className="p-dialog-custom"
      footer={
        <div className="flex justify-end gap-2 mt-4">
          <Button
            label="Cancelar"
            icon="pi pi-times"
            className="p-button-outlined p-button-secondary"
            onClick={() => {
              if (mode === "crear") limpiarFormulario();
              onHide();
            }}
          />
          <Button
            label="Guardar"
            icon="pi pi-check"
            className="bg-[#172951] hover:bg-[#CDA95F] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
            onClick={handleSubmit}
          />
        </div>
      }
    >
      {errorMensaje && (
        <div className="col-span-2 mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
          {errorMensaje}
        </div>
      )}
      {(mode === "crear" || formData) && (
        <div className="grid grid-cols-2 gap-6 text-sm mt-2">
          <div className="col-span-2">
            <label className="font-semibold">Nombre de la oportunidad</label>
            <InputText
              value={formData.nombre_oportunidad || ""}
              onChange={(e) => handleChange("nombre_oportunidad", e.target.value)}
              className={`w-full border rounded-lg p-5 bg-white ${
                camposConError.includes("nombre_oportunidad") ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          <div className="col-span-2">
            <label className="font-semibold">Objetivo</label>
            <InputText
              value={formData.objetivo || ""}
              onChange={(e) => handleChange("objetivo", e.target.value)}
              className={`w-full border rounded-lg p-5 bg-white ${
                camposConError.includes("objetivo") ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          <div>
            <label className="font-semibold">Modalidad</label>
            <Dropdown
              value={formData.modalidad}
              options={modalidades}
              onChange={(e) => setFormData({ ...formData, modalidad: e.value })}
              placeholder="Seleccione la modalidad"
              className="w-full text-sm border border-gray-300 rounded-md"
              panelClassName="text-sm"
              style={{ height: "45px", padding: "0 0.25rem", fontSize: "0.875rem" }}
            />
          </div>

          <div>
            <label className="font-semibold">Tipo</label>
            <Dropdown
              value={formData.tipo_oportunidad}
              options={tiposOportunidad}
              onChange={(e) => setFormData({ ...formData, tipo_oportunidad: e.value, otroTipo: e.value === "Otro" ? "" : "" })}
              placeholder="Seleccione el tipo"
              className="w-full border border-gray-300 rounded-md py-0 px-2 bg-white text-sm"
            />
            {formData.tipo_oportunidad === "Otro" && (
              <InputText
                value={formData.otroTipo ?? ""}
                onChange={(e) => setFormData({ ...formData, otroTipo: e.target.value })}
                placeholder="Escriba el tipo"
                className="w-full mt-2 bg-gray-100 text-sm border-none rounded-none"
              />
            )}
          </div>

          <div>
            <label className="font-semibold">Socio estratégico</label>
            <InputText
              value={formData.socio || ""}
              onChange={(e) => handleChange("socio", e.target.value)}
              className={`w-full border rounded-md p-3 bg-white ${
                camposConError.includes("socio") ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="text-xs font-semibold mt-2 text-gray-700">
              *Por favor escriba el nombre completo, no siglas.
            </p>
          </div>

          <div>
            <label className="font-semibold">Sector</label>
            <Dropdown
              value={formData.sector}
              options={sectores}
              onChange={(e) => setFormData({ ...formData, sector: e.value })}
              placeholder="Seleccione el sector"
              className="w-full border border-gray-300 rounded-md py-0 px-2 bg-white text-sm"
            />
          </div>

          <div>
            <label className="font-semibold">Tema</label>
            <Dropdown
              value={formData.tema}
              options={temas}
              onChange={(e) => setFormData({ ...formData, tema: e.value, otroTema: e.value === "Otro" ? "" : "" })}
              placeholder="Seleccione el tema"
              className="w-full border border-gray-300 rounded-md py-0 px-2 bg-white text-sm"
            />
            {formData.tema === "Otro" && (
              <InputText
                value={formData.otroTema ?? ""}
                onChange={(e) => setFormData({ ...formData, otroTema: e.target.value })}
                placeholder="Escriba el tema"
                className="w-full mt-2"
              />
            )}
          </div>

          <div>
            <label className="font-semibold">Población meta</label>
            <MultiSelect
              value={Array.isArray(formData.poblacion_meta) ? formData.poblacion_meta : []}
              options={poblaciones}
              onChange={(e) => {
                const value = e.value;
                const incluyeOtro = value.includes("Otro");
                setFormData({
                  ...formData,
                  poblacion_meta: value,
                  otraPoblacion: incluyeOtro ? formData.otraPoblacion || "" : "",
                });
              }}
              display="chip"
              placeholder="Seleccione una o varias"
              className="w-full border border-gray-300 rounded-md bg-white text-sm"
            />
            {Array.isArray(formData.poblacion_meta) && formData.poblacion_meta.includes("Otro") && (
              <InputText
                value={formData.otraPoblacion ?? ""}
                onChange={(e) => setFormData({ ...formData, otraPoblacion: e.target.value })}
                placeholder="Escriba la población"
                className="w-full mt-2"
              />
            )}
            <p className="text-xs font-semibold mt-2 text-gray-700">
              *Puede seleccionar más de una opción.
            </p>
          </div>

          <div>
            <label className="font-semibold">Viceministerio</label>
            <Dropdown
              value={formData.despacho}
              options={despachos}
              onChange={(e) => setFormData({ ...formData, despacho: e.value, otroDespacho: e.value === "Interdisciplinario" ? "" : "" })}
              placeholder="Seleccione el despacho"
              className="w-full border border-gray-300 rounded-md py-0 px-2 bg-white text-sm"
            />
            {formData.despacho === "Interdisciplinario" && (
              <InputText
                value={formData.otroDespacho ?? ""}
                onChange={(e) => setFormData({ ...formData, otroDespacho: e.target.value })}
                placeholder="Escriba los viceministerios"
                className="w-full mt-2 bg-gray-100 text-sm border-none rounded-none"
              />
            )}
            <p className="text-xs font-semibold mt-2 text-gray-700">
              *En caso de escribir varios, sepárelos con una coma.
            </p>
          </div>

          <div>
            <label className="font-semibold">Dirección(es) de envío</label>
            <InputText
              value={formData.direccion_envio || ""}
              onChange={(e) => handleChange("direccion_envio", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 bg-white"
            />
            <p className="text-xs font-semibold mt-2 text-gray-700">
              * En caso de ser más de uno, sepárelos con una coma. <br />
              * Favor poner el nombre completo de la dirección.
            </p>
          </div>

          <div>
            <label className="font-semibold">Fecha de inicio</label>
            <Calendar
              value={calendarValue(formData.fecha_inicio)}
              onChange={(e) => handleChange("fecha_inicio", e.value)}
              showIcon
              dateFormat="dd/mm/yy"
              className={`w-full border rounded-md p-3 bg-white ${
                camposConError.includes("fecha_inicio") ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          <div>
            <label className="font-semibold">Fecha de finalización</label>
            <Calendar
              value={calendarValue(formData.fecha_fin)}
              onChange={(e) => handleChange("fecha_fin", e.value)}
              showIcon
              dateFormat="dd/mm/yy"
              className="w-full border border-gray-300 rounded-md p-3 bg-white"
            />
          </div>

          <div className="col-span-2">
            <label className="font-semibold">Funcionario que completó la ficha</label>
            <InputText
              value={formData.funcionario || ""}
              onChange={(e) => handleChange("funcionario", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 bg-white"
            />
          </div>

          <div className="col-span-2">
            <label className="font-semibold">Observaciones importantes</label>
            <InputText
              value={formData.observaciones || ""}
              onChange={(e) => handleChange("observaciones", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-5 bg-white"
            />
          </div>
        </div>
      )}
    </Dialog>
  );
}
