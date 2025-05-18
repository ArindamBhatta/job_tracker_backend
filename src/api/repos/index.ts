import { database } from "../../db/connection";
import AlertRepo from "./AlertRepo/AlertRepo";
import UserRepo from "./UserRepo/UserRepo";

const alertRepo = new AlertRepo(database);
const userRepo = new UserRepo(database);

export { alertRepo, userRepo };
