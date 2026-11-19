export function StudentGridTemplate(data, id) {
    return `
        <div class="w-1/2 p-2 sm:w-45 relative group hover:nth-[3n+1]:text-next-blue hover:nth-[3n+2]:text-next-pink hover:nth-[3n]:text-next-green lg:nth-[6n+1]:*:right-0 lg:nth-[6n+2]:*:right-0 lg:nth-[6n+3]:*:right-0 lg:nth-[6n+4]:*:left-0 lg:nth-[6n+5]:*:left-0 lg:nth-[6n]:*:left-0">
          <section
            class="z-1 fixed inset-y-0 bg-gray-500 w-90 rounded hidden group-hover:inline"
          >
            <img
              class="w-full h-full object-cover object-center p-2"
              src="./assets/images/${id}/gallery01.png"
            />  
            <h1 class="text-center absolute inset-x-0 bottom-4">${data.name}</h3>
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
