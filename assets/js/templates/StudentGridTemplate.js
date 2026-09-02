export function StudentGridTemplate(data, id) {
    return `
          <a href="./student.html?id=${id}" class="max-w-45">
            <div class="flex flex-col">
            <div class="aspect-square">
              <img
                class="h-full max-h-full w-full max-w-full rounded-full object-cover object-center"
                src="./assets/images/${id}/profile.png"
                alt=""
            />
        </div>
              <h3 class="text-center">${data.name}</h3>
              <h4 class="text-center">${data.speciality}</h4>
            </div>
          </a>
    `;
}
