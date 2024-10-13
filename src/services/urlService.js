// src/services/uploadService.js
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  console.log(file);
  console.log("XD");
  formData.forEach((value, key) => {
    console.log(`${key}:`, value);
  });

  const API_URL = "https://tmpu.vercel.app";
  console.log(formData);
  try {
    const response = await fetch(`${API_URL}/api/url/generate`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error al subir el archivo");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el servicio de subida:", error);
    throw error;
  }
};
