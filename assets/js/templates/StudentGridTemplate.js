export function StudentGridTemplate(data, id) {
    return `
          <a href="./student.html?id=${id}" class="max-w-45">
            <div class="flex flex-col">
              <img src="assets/images/${id}/profile.png" class="rounded-full" />
              <h3 class="text-center">${data.name}</h3>
              <h4 class="text-center">${data.speciality}</h4>
            </div>
          </a>
    `;
}
