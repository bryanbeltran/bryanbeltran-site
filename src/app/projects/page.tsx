export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold">ParaPlanner</h2>
          <p className="text-gray-700">A scheduling tool for SPED educators to visualize para availability.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Behavior Logger</h2>
          <p className="text-gray-700">A lightweight, structured logging app for SPED behavior tracking.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Recipe Parser + Calorie Estimator</h2>
          <p className="text-gray-700">Paste a recipe, get calories per serving and structured ingredients.</p>
        </li>
      </ul>
    </main>
  );
}
