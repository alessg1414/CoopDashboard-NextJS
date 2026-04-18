"use client";

import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "primereact/chart";
import { Accordion, AccordionTab } from "primereact/accordion";
import { API_BASE, apiFetch } from "@/utils/api";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// Usar la paleta base de oportunidades para consistencia visual
const basePalette = ["#CFAC65", "#182951", "#F2DAB1", "#C1C5C8", "#0034A0"];

function mezclarColoresHex(hex1: string, hex2: string, ratio: number): string {
  const r1 = parseInt(hex1.slice(1, 3), 16);
  const g1 = parseInt(hex1.slice(3, 5), 16);
  const b1 = parseInt(hex1.slice(5, 7), 16);

  const r2 = parseInt(hex2.slice(1, 3), 16);
  const g2 = parseInt(hex2.slice(3, 5), 16);
  const b2 = parseInt(hex2.slice(5, 7), 16);

  const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  const b = Math.round(b1 * (1 - ratio) + b2 * ratio);

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function generarColoresDesdeBase(cantidad: number): string[] {
  const colores: string[] = [];
  for (let i = 0; i < cantidad; i++) {
    const baseIndex = i % basePalette.length;
    const nextIndex = (baseIndex + 1) % basePalette.length;
    const ratio = (i / Math.max(1, cantidad)) % 1;
    colores.push(mezclarColoresHex(basePalette[baseIndex], basePalette[nextIndex], ratio));
  }
  return colores;
}

export default function Estadistica2() {
  const [conveniosPorFase, setConveniosPorFase] = useState<Record<string, string[]>>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiFetch(`${API_BASE}convenios/`); 
        if (!response.ok) throw new Error("Error obteniendo convenios");

        const data = await response.json();
        const convenios = data.convenios || [];

        // Agrupar convenios por fase dinámicamente
        const agrupado: Record<string, string[]> = {};

        convenios.forEach((convenio: any) => {
          const fase = convenio.fase_actual || "Sin fase definida";
          if (!agrupado[fase]) agrupado[fase] = [];
          agrupado[fase].push(convenio.cooperante || convenio.nombre || `Convenio ${convenio.id}`);
        });

        setConveniosPorFase(agrupado);
      } catch (error) {
        console.error("Error obteniendo convenios:", error);
      }
    }

    fetchData();
  }, []);

  const areasConDatos = Object.entries(conveniosPorFase).filter(([, convenios]) => convenios.length > 0);

  // Preparar datos para el PieChart
const pieChartData = {
  labels: areasConDatos.map(([fase]) => fase),
  datasets: [
    {
      data: areasConDatos.map(([, convenios]) => convenios.length),
      backgroundColor: generarColoresDesdeBase(areasConDatos.length),
    },
  ],
};

const chartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: { display: false },
    datalabels: {
      color: "#333",
      formatter: (value: number, context: any) => {
        const sum = context.chart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
        const percentage = ((value / sum) * 100).toFixed(1);
        return `${percentage}%`;
      },
    },
  },
};

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex">
      {/*  Leyenda de Fases a la Izquierda */}
      <div className="w-1/4 pr-4 border-r border-gray-300">
        <h2 className="text-lg font-bold mb-4 text-gray-700">Fases del Convenio</h2>
        <ul className="space-y-2">
          {Object.keys(conveniosPorFase).map((fase, index) => (
            <li key={index} className="flex items-center">
              <span
                className="w-4 h-4 rounded-full inline-block mr-2"
                style={{ backgroundColor: generarColoresDesdeBase(Object.keys(conveniosPorFase).length)[index] }}
              ></span>
              <span className="text-gray-700 font-medium">{fase}</span>
            </li>
          ))}
        </ul>
      </div>

      {/*  Gráfico de Convenios por Fase */}
      <div className="w-3/4 pl-4 flex flex-col items-center">
        <h2 className="text-lg font-bold mb-4 text-gray-700">📊 Distribución de Convenios por Fase</h2>
        <div className="w-[400px] h-[400px]">
          <Chart type="pie" data={pieChartData} options={chartOptions} />
        </div>

        <div className="mt-6 w-full">
          <Accordion multiple activeIndex={[0]}>
            {Object.entries(conveniosPorFase).map(([fase, convenios], index) => (
              convenios.length > 0 && (
                <AccordionTab
                  key={index}
                  header={
                    <span
                      className="text-white px-3 py-1 rounded-md font-semibold"
                      style={{ backgroundColor: generarColoresDesdeBase(Object.keys(conveniosPorFase).length)[index] }}
                    >
                      {fase}
                    </span>
                  }
                >
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {convenios.map((nombre, idx) => (
                      <li key={idx} className="py-1">{nombre}</li>
                    ))}
                  </ul>
                </AccordionTab>
              )
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
