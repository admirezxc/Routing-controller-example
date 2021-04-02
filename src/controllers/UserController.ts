import { Controller, Get } from "routing-controllers";

@Controller("users")
export class UserController {
  @Get("")
  findAll() {
    return "all users";
  }
}
