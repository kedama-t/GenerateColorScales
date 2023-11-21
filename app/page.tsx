export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 bg-primary-50">
      <h1 className="border-b-2 border-primary text-4xl font-extrabold uppercase text-on-primary-200">
        Color Scale Generator for Tailwind CSS
      </h1>
      <h2 className="border-b-2 border-primary text-2xl font-extrabold uppercase text-on-primary-200">
        Primary Colors
      </h2>
      <div className="flex flex-row gap-2 colortile">
        <p className="bg-primary-50 text-on-primary-50">50</p>
        <p className="bg-primary-100 text-on-primary-100">100</p>
        <p className="bg-primary-200 text-on-primary-200">200</p>
        <p className="bg-primary-300 text-on-primary-300">300</p>
        <p className="bg-primary-400 text-on-primary-400">400</p>
        <p className="bg-primary-500 text-on-primary-500">500</p>
        <p className="bg-primary-600 text-on-primary-600">600</p>
        <p className="bg-primary-700 text-on-primary-700">700</p>
        <p className="bg-primary-800 text-on-primary-800">800</p>
        <p className="bg-primary-900 text-on-primary-900">900</p>
        <p className="bg-primary-950 text-on-primary-950">950</p>
      </div>

      <h2 className="border-b-2 border-secondary text-2xl font-extrabold uppercase text-on-secondary-200">
        Secondary Colors
      </h2>
      <div className="flex flex-row gap-2 colortile">
        <p className="bg-secondary-50 text-on-secondary-50">50</p>
        <p className="bg-secondary-100 text-on-secondary-100">100</p>
        <p className="bg-secondary-200 text-on-secondary-200">200</p>
        <p className="bg-secondary-300 text-on-secondary-300">300</p>
        <p className="bg-secondary-400 text-on-secondary-400">400</p>
        <p className="bg-secondary-500 text-on-secondary-500">500</p>
        <p className="bg-secondary-600 text-on-secondary-600">600</p>
        <p className="bg-secondary-700 text-on-secondary-700">700</p>
        <p className="bg-secondary-800 text-on-secondary-800">800</p>
        <p className="bg-secondary-900 text-on-secondary-900">900</p>
        <p className="bg-secondary-950 text-on-secondary-950">950</p>
      </div>

      <h2 className="border-b-2 border-tertiary text-2xl font-extrabold uppercase text-on-tertiary-200">
        Tertiary Colors
      </h2>
      <div className="flex flex-row gap-2 colortile">
        <p className="bg-tertiary-50 text-on-tertiary-50">50</p>
        <p className="bg-tertiary-100 text-on-tertiary-100">100</p>
        <p className="bg-tertiary-200 text-on-tertiary-200">200</p>
        <p className="bg-tertiary-300 text-on-tertiary-300">300</p>
        <p className="bg-tertiary-400 text-on-tertiary-400">400</p>
        <p className="bg-tertiary-500 text-on-tertiary-500">500</p>
        <p className="bg-tertiary-600 text-on-tertiary-600">600</p>
        <p className="bg-tertiary-700 text-on-tertiary-700">700</p>
        <p className="bg-tertiary-800 text-on-tertiary-800">800</p>
        <p className="bg-tertiary-900 text-on-tertiary-900">900</p>
        <p className="bg-tertiary-950 text-on-tertiary-950">950</p>
      </div>
    </main>
  );
}
