"use client";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { useState, useEffect } from "react";
import { API_BASE, apiFetch } from "@/utils/api";

interface InventarioDialogProps {
  visible: boolean;
  onHide: () => void;
  onSave: () => void;
  registro?: any;
  mode: "crear" | "editar";
}

const emptyForm = {
  nombre_convenio: "",
  objeto_convenio: "",
  tipo_instrumento: "",
  presupuesto: "",
  instancias_tecnicas: "",
  informe: "",
  fecha_rige: null as Date | null,
  fecha_vencimiento: null as Date | null,
  cooperante: "",
  contraparte_externa: "",
};

export default function InventarioDialog({
  visible,
  onHide,
  onSave,
  registro,
  mode,
}: InventarioDialogProps) {
  const [formData, setFormData] = useState<any>({ ...emptyForm });

  useEffect(() => {
    if (mode === "editar" && registro) {
      setFormData(registro);
    } else if (mode === "crear") {
      setFormData({ ...emptyForm });
    }
  }, [registro, mode]);

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const formatDate = (value: string | Date | null) => {
    if (!value) return null;
    return new Date(value).toISOString().split("T")[0];
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        presupuesto: parseFloat(formData.presupuesto),
        fecha_rige: formatDate(formData.fecha_rige),
        fecha_vencimiento: formatDate(formData.fecha_vencimiento),
      };

      const response = await apiFetch(`${API_BASE}inventario/`, {
        method: mode === "crear" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(mode === "crear" ? "Error al guardar el inventario" : "Error al actualizar el inventario");

      onSave();
      onHide();
      if (mode === "crear") setFormData({ ...emptyForm });
    } catch (error) {
      console.error(mode === "crear" ? "Error al guardar nuevo inventario:" : "Error al guardar los cambios:", error);
    }
  };

  const dialogHeader = mode === "crear" ? "Agregar Convenio" : "Editar Inventario";

  return (
    <Dialog
      header={dialogHeader}
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
            onClick={onHide}
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
      {(mode === "crear" || formData) && (
        <div className="grid grid-cols-2 gap-6 text-sm mt-2">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Cooperante</label>
            <InputText
              value={formData.cooperante || ""}
              placeholder="Nombre del cooperante"
              onChange={(e) => handleChange("cooperante", e.target.value)}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Contraparte Externa</label>
            <InputText
              value={formData.contraparte_externa || ""}
              placeholder="Nombre de la contraparte externa"
              onChange={(e) => handleChange("contraparte_externa", e.target.value)}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">Nombre del Convenio</label>
            <InputText
              value={formData.nombre_convenio || ""}
              placeholder="Nombre del convenio"
              onChange={(e) => handleChange("nombre_convenio", e.target.value)}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">Objeto del Convenio</label>
            <InputTextarea
              value={formData.objeto_convenio || ""}
              placeholder="Describa el objeto del convenio"
              onChange={(e) => handleChange("objeto_convenio", e.target.value)}
              rows={3}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Tipo de Instrumento</label>
            <InputText
              value={formData.tipo_instrumento || ""}
              placeholder="Ej: Convenio, Acuerdo..."
              onChange={(e) => handleChange("tipo_instrumento", e.target.value)}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Presupuesto</label>
            <InputText
              type="number"
              value={formData.presupuesto || ""}
              placeholder="Ingrese el presupuesto (solo números)"
              onChange={(e) => handleChange("presupuesto", e.target.value)}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Fecha Rige</label>
            <Calendar
              value={formData.fecha_rige ? new Date(formData.fecha_rige) : undefined}
              placeholder="Seleccione fecha de inicio"
              onChange={(e) => handleChange("fecha_rige", e.value)}
              showIcon
              dateFormat="yy-mm-dd"
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Fecha Vencimiento</label>
            <Calendar
              value={formData.fecha_vencimiento ? new Date(formData.fecha_vencimiento) : undefined}
              placeholder="Seleccione fecha de vencimiento"
              onChange={(e) => handleChange("fecha_vencimiento", e.value)}
              showIcon
              dateFormat="yy-mm-dd"
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">Instancias Técnicas</label>
            <InputTextarea
              value={formData.instancias_tecnicas || ""}
              placeholder="Instancias técnicas involucradas"
              onChange={(e) => handleChange("instancias_tecnicas", e.target.value)}
              rows={2}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">Informe</label>
            <InputTextarea
              value={formData.informe || ""}
              placeholder="Informe relacionado con el convenio"
              onChange={(e) => handleChange("informe", e.target.value)}
              rows={2}
              className="w-full border border-gray-400 rounded-md p-2 shadow-sm bg-white"
            />
          </div>
        </div>
      )}
    </Dialog>
  );
}
