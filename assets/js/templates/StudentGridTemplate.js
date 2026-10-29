export function StudentGridTemplate(data, id) {
    return `
          <a href="./student.html?id=${id}" class="w-1/2 p-2 sm:w-45 group hover:nth-[3n+1]:text-[#00BAFF] hover:nth-[3n+2]:text-[#EF00A5] hover:nth-[3n]:text-[#96FF00]">
            <div class="flex flex-col">
              <div class="mx-auto aspect-square w-full h-full">
                <img
                  class="h-full max-h-full w-full max-w-full rounded-full object-cover object-center group-hover:border-5"
                  src="./assets/images/${id}/profile.png"
                  alt=""
                />
              </div>
              <div>
                <h3 class="text-center group-hover:text-black">${data.name}</h3>
                <h4 class="text-center group-hover:text-black">${data.speciality}</h4>
              </div>
            </div>
          </a>
    `;
}
