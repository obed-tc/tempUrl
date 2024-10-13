import { useState, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { uploadFile } from "../services/urlService";
import "./../styles/loading.css";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileSize, setFileSize] = useState("");
  const fileInputRef = useRef(null);
  const [generatedURL, setGeneratedURL] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) return `${sizeInBytes} bytes`;
    else if (sizeInBytes < 1048576)
      return `${(sizeInBytes / 1024).toFixed(2)} KB`;
    else return `${(sizeInBytes / 1048576).toFixed(2)} MB`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileSize(formatFileSize(file.size));

      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
      } else if (file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target.result);
        reader.readAsText(file);
      } else {
        setPreview(null);
      }
    }
  };
  const clearAll = () => {
    setSelectedFile(null);
    setPreview(null);
    setGeneratedURL(null);
    setFileSize("");
  };

  const handleSelectFileClick = () => {
    fileInputRef.current.click();
  };
  const handleGenerateURL = async () => {
    if (!selectedFile) {
      alert("Por favor, selecciona un archivo");
      return;
    }
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    try {
      const data = await uploadFile(selectedFile);
      setGeneratedURL(data.url);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      alert("Error al generar la URL");
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <div className="bg-[url('https://www.shutterstock.com/image-photo/hand-typing-on-laptop-send-600nw-2383433439.jpg')] bg-cover bg-center w-[100vw] md:w-[65vw] absolute h-[60vh] md:h-screen z-10"></div>

      <div className="bg-primary-950 w-[100vw] md:w-[65vw] absolute h-[60vh] md:h-screen z-10 bg-opacity-80"></div>

      <div className="flex flex-col min-h-screen relative z-20">
        <Header />
        <main className="flex-1 md:flex md:items-center">
          <div className="md:w-1/2 w-full text-white px-2 md:px-16 text-center md:text-start">
            <h2 className="text-4xl font-semibold">
              Comparte con seguridad, sube, genera y desaparece
            </h2>
            <br />
            <p className="md:w-[80%] text-sm text-gray-200">
              Una herramienta que permite subir archivos TXT o imágenes y
              generar URLs de un solo uso que se autodestruyen al abrirse.
              Comparte información sensible sin dejar rastro, asegurando
              privacidad y seguridad en cada intercambio. Ideal para envíos
              temporales y confidenciales
            </p>
            <br />
            <div className="flex space-x-2 justify-center md:justify-start">
              <a
                className="bg-white text-primary-800 px-5 py-1 rounded-md font-semibold"
                href="https://github.com/obed-tc/tempUrl"
              >
                Contribuir
              </a>
              <button className="bg-white text-primary-800 px-5 py-1 rounded-md font-semibold">
                Empezar ahora
              </button>
            </div>
          </div>

          <div className="bg-white mt-10 md:mt-0 h-[70vh] md:h-[70vh] flex flex-col md:w-1/3 w-full md:absolute md:right-[15vw] top-[15vh] border border-gray-100 shadow-2xl rounded-md  p-5">
            {!generatedURL ? (
              <div className="border-[2px] flex flex-col items-center justify-center border-gray-500 rounded-lg border-dashed p-5 h-full">
                {preview ? (
                  <div className="mt-5 flex flex-col items-center">
                    {selectedFile.type.startsWith("image/") ? (
                      <img
                        src={preview}
                        alt="Vista previa"
                        className=" h-[150px] object-contain"
                      />
                    ) : (
                      <textarea
                        className="w-full h-40 bg-gray-100 p-2 text-xs"
                        readOnly
                        value={preview}
                      />
                    )}

                    <p className="mt-3 text-gray-500 text-sm">
                      Tamaño del archivo: {fileSize}
                    </p>
                  </div>
                ) : (
                  <svg
                    className="w-24 text-gray-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <g clipPath="url(#clip0_61_16825)">
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
                )}
                <br />

                <input
                  type="file"
                  accept=".txt, image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />

                <label htmlFor="fileinput">
                  <button
                    onClick={handleSelectFileClick}
                    type="button"
                    className="border border-primary-900 text-primary-700 text-sm py-1 px-2 rounded-md"
                  >
                    Seleccionar archivo
                  </button>
                </label>
                <label className="text-gray-500  text-xs  text-center">
                  (Txt, Jpeg, Png) <br />
                  No mayor a 5mb
                </label>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className=" mt-5 text-sm font-semibold">URL generada:</p>
                <a
                  href={generatedURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-primary-300 text-lg font-semibold"
                >
                  {generatedURL}
                </a>
              </div>
            )}

            {generatedURL ? (
              <button
                className="px-5 py-2 bg-primary-900 rounded-md text-white hover:bg-primary-700 mt-10"
                onClick={clearAll}
              >
                Generar otro archivo
              </button>
            ) : (
              <button
                className="px-5 py-2 bg-primary-900 rounded-md text-white hover:bg-primary-700 mt-10"
                onClick={handleGenerateURL}
              >
                Generar url
              </button>
            )}
          </div>
        </main>
        <Footer />
      </div>
      {isLoading && (
        <div className="bg-black w-[100vw] h-[100vh]  absolute left-0 top-0 bg-opacity-60 z-30 flex items-center justify-center">
          <div className="loader"></div>

          <label className="text-white">Generando url...</label>
        </div>
      )}
    </div>
  );
}

export default Home;
