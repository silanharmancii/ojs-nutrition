import { API_BASE_URL } from "@/utils/contants";

const CATEGORY_POST_URL = API_BASE_URL + "/categories";

export interface CategoryData {
  id: string;
  name: string;
  slug:string;
  image: string; // Manuel ekleyeceğimiz resim URL'si alanı
}

// Verileri API'den çeken bir fonksiyon
export async function fetchCategories(): Promise<CategoryData[]> {
  // Manuel olarak eklemek istediğiniz resim URL'lerini burada tanımlayın
  const imageData: { [key: string]: string } = {
    "38fb5754-3068-4490-a12a-169fa564c675": "/public/images/1 871.png",
    "d3cdcefe-eedd-4ee0-a254-b821ed4e2b8c": "/public/images/2 52.png",
    "8eaeff30-3138-49ac-b120-0eac18866190": "/public/images/3 101.png",
    "cae64711-98b9-48f4-82b4-c5d460718dcf": "/public/images/5 101.png",
    "84229f35-1b8a-4e02-9688-245c39c8ec42": "/public/images/7 100.png",
  };

  try {
    const response = await fetch(CATEGORY_POST_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // API'den gelen veriyi manuel resim URL'leriyle birleştirme
    const combinedData: CategoryData[] = result.data.data.map((category: CategoryData) => ({
      ...category,
      image: imageData[category.id] || "", // Eğer id eşleşmezse varsayılan boş string
    }));

    return combinedData;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
