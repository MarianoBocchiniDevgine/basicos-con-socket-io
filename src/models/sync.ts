import Products from "./products";
import Corps from "./corps";

export async function syncModels() {
  try {
    await Corps.sync();
    await Products.sync();
  } catch (error) {
    console.error("Models not syncronized", error);
    throw error;
  }
}

export default syncModels;
