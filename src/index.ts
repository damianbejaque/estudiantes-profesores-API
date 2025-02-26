import { AppDataSource } from "./db/conexion";
import app from "./app";
async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

main();
