import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <div className="bg-[url('https://www.shutterstock.com/image-photo/hand-typing-on-laptop-send-600nw-2383433439.jpg')] bg-cover bg-center w-[65vw] absolute h-screen z-10"></div>

      <div className="bg-primary-950 w-[65vw] absolute h-screen z-10 bg-opacity-80"></div>

      <div className="flex flex-col min-h-screen relative z-20">
        <Header />
        <main className="flex-1 flex items-center">
          <div className="w-1/2 text-white px-16">
            <h2 className="text-4xl font-semibold">
              Comparte con seguridad, sube, genera y desaparece
            </h2>
            <br />
            <p className="w-[80%] text-sm text-gray-200">
              Una herramienta que permite subir archivos TXT o imágenes y
              generar URLs de un solo uso que se autodestruyen al abrirse.
              Comparte información sensible sin dejar rastro, asegurando
              privacidad y seguridad en cada intercambio. Ideal para envíos
              temporales y confidenciales
            </p>
            <br />
            <div className="flex space-x-2">
              <button className="bg-white text-primary-800 px-5 py-1 rounded-md font-semibold">
                Contribuir
              </button>
              <button className="bg-white text-primary-800 px-5 py-1 rounded-md font-semibold">
                Empezar ahora
              </button>
            </div>
          </div>

          <div className="bg-white h-[70vh] flex flex-col w-1/3 absolute right-[15vw] top-[15vh] border border-gray-100 shadow-2xl rounded-md  p-5">
            <div className="border-[2px] flex flex-col items-center justify-center border-gray-500 rounded-lg border-dashed p-5 h-full">
              <svg
                className="w-24 text-gray-500"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <g clip-path="url(#clip0_61_16825)">
                  <path d="M19.35 10.041C18.67 6.59098 15.64 4.00098 12 4.00098C9.11 4.00098 6.6 5.64098 5.35 8.04098C2.34 8.36098 0 10.911 0 14.001C0 17.311 2.69 20.001 6 20.001H19C21.76 20.001 24 17.761 24 15.001C24 12.361 21.95 10.221 19.35 10.041ZM14 13.001V17.001H10V13.001H7L11.65 8.35098C11.85 8.15098 12.16 8.15098 12.36 8.35098L17 13.001H14Z" />
                </g>
                <defs>
                  <clipPath id="clip0_61_16825">
                    <rect
                      width="24"
                      height="24"
                      transform="translate(0 0.000976562)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <br />

              <button className="border border-primary-900 text-primary-700 text-sm py-1 px-2 rounded-md">
                Seleccionar archivo
              </button>
              <label className="text-gray-500  text-xs  text-center">
                (Txt, Jpeg, Png) <br />
                No mayor a 5mb
              </label>
            </div>
            <button className="px-5 py-2 bg-primary-900 rounded-md text-white hover:bg-primary-700 mt-10">
              Generar url
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
