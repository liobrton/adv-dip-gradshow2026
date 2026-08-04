import { StudentTemplate } from "../templates/StudentTemplate.js";

export function loadStudent(name) {
    const pageMain = document.getElementById("pageMain");
    pageMain.innerHTML = StudentTemplate(name);
}

document.addEventListener("DOMContentLoaded", loadStudent("Hello World"));
