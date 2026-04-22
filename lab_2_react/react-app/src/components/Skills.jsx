export default function Skills() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-2 border-dashed">Технічні навички</h2>
      <ul className="flex flex-col gap-3">
        <li className="bg-slate-50 p-4 rounded-md border border-slate-200">
          <strong className="text-slate-800">ОС:</strong> <span className="text-slate-600">Linux (Ubuntu), Windows</span>
        </li>
        <li className="bg-slate-50 p-4 rounded-md border border-slate-200">
          <strong className="text-slate-800">QA та тестування:</strong> <span className="text-slate-600">Розуміння процесів тестування, підготовка до позиції Trainee QA</span>
        </li>
        <li className="bg-slate-50 p-4 rounded-md border border-slate-200">
          <strong className="text-slate-800">Інструменти:</strong> <span className="text-slate-600">Git, HTML, AWS</span>
        </li>
      </ul>
    </section>
  );
}