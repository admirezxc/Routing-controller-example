import { createKoaServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";

const app = createKoaServer({
  controllers: [UserController],
});

app.listen(4396);
console.log("Server http://localhost:4396 started.");
