import { StudentTemplate } from "../templates/StudentTemplate.js";

async function getStudentData(id) {
    const response = await fetch(`/assets/data/students.json`);
    const students = await response.json();
    return students[id];
}

export async function insertStudent() {
    const pageMain = document.getElementById("pageMain");

    let urlParams = new URLSearchParams(window.location.search);
    let studentId = urlParams.get("id");
    if (!studentId) {
        pageMain.innerHTML = "<p>No student ID provided in the URL.</p>";
        return;
    }

    const studentData = await getStudentData(studentId);
    if (!studentData) {
        pageMain.innerHTML = "<p>No student found with the provided ID.</p>";
        return;
    }

    pageMain.innerHTML = StudentTemplate(studentData);
}

document.addEventListener("DOMContentLoaded", async () => {
    await insertStudent();
});
