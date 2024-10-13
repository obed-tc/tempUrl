function Header() {
  return (
    <header className="px-10 py-3 flex justify-between items-center ">
      <h1 className="text-2xl font-bold text-white">TempUrl</h1>

      <nav className="md:block hidden">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-blue-300">
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#caracteristicas"
              className="text-white hover:text-blue-300"
            >
              Características
            </a>
          </li>
          <li>
            <a href="#precios" className="text-white hover:text-blue-300">
              Precios
            </a>
          </li>
          <li>
            <a href="#soporte" className="text-white hover:text-blue-300">
              Soporte
            </a>
          </li>
        </ul>
      </nav>

      <button className="bg-primary-900 px-4 py-2 rounded-md text-white hover:bg-blue-600">
        Contáctanos
      </button>
    </header>
  );
}

export default Header;
