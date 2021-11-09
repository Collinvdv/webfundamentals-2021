import { Person } from "./person";

export class Teacher extends Person {
    teach() {
        console.log("I am teaching");
    }
}