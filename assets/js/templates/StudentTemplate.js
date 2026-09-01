export function StudentTemplate(data) {
    return `
        <h1>${data.name}</h1>
        <p>This is the student page for ${data.name}.</p>
        <p>Speciality: ${data.speciality}</p>
    `;
}
