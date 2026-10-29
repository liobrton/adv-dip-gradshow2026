export function StudentGridTemplate(data, id) {
    return `
        <div class="w-1/2 p-2 sm:w-45 relative group hover:nth-[3n+1]:text-next-blue hover:nth-[3n+2]:text-next-pink hover:nth-[3n]:text-next-green">
          <section
            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-white text-center bg-gray-500 w-75 h-75 rounded hidden group-hover:inline"
          >
            <img
              class="w-full h-full object-cover object-center"
              src="./assets/images/${id}/gallery01.png"
            />  
            <h3 class="absolute inset-x-0 bottom-0">${data.name}</h3>
          </section>

          <a href="./student.html?id=${id}" class="">
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
        </div>
    `;
}
