"use client";

export default function Home() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#172951] mb-6">Sistema de gestión internacional — Demo Técnica</h1>

      {/* Banner */}
      <div className="bg-white shadow-lg rounded-xl p-0 mb-6 border-l-4 border-[#CDA95F] overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/681c92407added77301eaeea/688c670c9f137270dbd44e6d_9-roles-en-el-equipo-de-trabajo.jpg"
          alt="Banner"
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#CDA95F]">
          <h2 className="text-2xl font-bold text-[#172951] mb-3">Acerca de esta demo</h2>
          <p className="text-gray-700 text-[17px] mb-3">Este es el <strong>layout frontend</strong> de un sistema de gestión de cooperación internacional desarrollado como proyecto de práctica profesional. La aplicación opera con <strong>datos mock</strong> para demostrar la funcionalidad de la interfaz sin depender de un backend activo.</p>
          <p className="text-gray-700 text-[17px] mb-3">El sistema permite gestionar convenios, oportunidades, proyectos, acuerdos de viaje, presupuestos e inventario, reproduciendo los flujos de trabajo reales del entorno de cooperación institucional para el cual fue diseñado.</p>
          <p className="mt-4 text-[17px] font-semibold text-[#172951]">Stack tecnológico:</p>
          <ul className="list-disc pl-8 mt-2 text-[17px] text-gray-700 space-y-2">
            <li><strong>Next.js 15</strong> con TypeScript</li>
            <li><strong>PrimeReact 10</strong> como librería de componentes UI</li>
            <li><strong>Tailwind CSS 3</strong> para estilos utilitarios</li>
            <li><strong>Chart.js / Recharts</strong> para visualización de datos y gráficos estadísticos</li>
            <li><strong>Mock API</strong> integrada — todas las operaciones CRUD funcionan en memoria sin servidor</li>
          </ul>
          <p className="text-gray-500 text-sm mt-4 italic">Cualquier correo con formato válido y cualquier contraseña permiten iniciar sesión en esta demo.</p>
        </section>

        <aside className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-[#CDA95F]">
          <h3 className="text-[#172951] font-semibold mb-3">Módulos disponibles</h3>
          <ul className="text-gray-700 text-[15px] space-y-3">
            <li className="flex items-center gap-2"><i className="pi pi-file-edit text-[#CDA95F]" />Convenios y registro de procesos</li>
            <li className="flex items-center gap-2"><i className="pi pi-globe text-[#CDA95F]" />Oportunidades de cooperación</li>
            <li className="flex items-center gap-2"><i className="pi pi-briefcase text-[#CDA95F]" />Proyectos y áreas estratégicas</li>
            <li className="flex items-center gap-2"><i className="pi pi-send text-[#CDA95F]" />Acuerdos de viaje</li>
            <li className="flex items-center gap-2"><i className="pi pi-wallet text-[#CDA95F]" />Presupuestos y subpartidas</li>
            <li className="flex items-center gap-2"><i className="pi pi-box text-[#CDA95F]" />Inventario</li>
            <li className="flex items-center gap-2"><i className="pi pi-chart-bar text-[#CDA95F]" />Estadísticas y gráficos</li>
          </ul>
        </aside>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-600">© 2025 Sistema de gestión internacional | Demo de portafolio</footer>
    </main>
  );
}
