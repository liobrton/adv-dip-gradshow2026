export function StudentTemplate(data, id) {
    return `
      <br />
      <!--MAIN PROFILE INFO-->
      <section
        class="mx-auto flex w-3/4 max-w-200 flex-col justify-start gap-4 md:flex-row"
      >
        <div class="aspect-square mx-auto my-auto w-50 md:w-200">
          <img
            class="h-full max-h-full w-full max-w-full rounded-full object-cover object-center"
            src="./assets/images/${id}/profile.png"
            alt=""
          />
        </div>
        <section class="my-auto flex flex-col">
          <section class="order-first bg-gray-200 md:order-last">
            <a href="${data.link}">linkTree</a>
          </section>
          <div class="flex flex-row gap-4">
            <h3 class="">${data.name}</h3>
            <h4 class="">${data.speciality}</h4>
          </div>
          <p class="">
            ${data.artistStatement}
          </p>
        </section>
      </section>

      <br />

      <!--SHOWREEL-->
      <section class="mx-auto aspect-video w-3/4 max-w-200">
        <iframe
          class="h-full w-full"
          src="${data.showreel}"
          title="YouTube video player"
          frameborder="0"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>

      <br />

      <!--GALLERY-->
      <section
        class="mx-auto grid w-3/4 max-w-300 grid-cols-2 gap-2 md:grid-cols-6 md:gap-4"
      >
        <div class="aspect-square">
          <img
            class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
            src="./assets/images/${id}/gallery01.png"
            alt=""
          />
        </div>
        <div class="aspect-square">
          <img
            class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
            src="./assets/images/${id}/gallery02.png"
            alt=""
          />
        </div>
        <div class="aspect-square">
          <img
            class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
            src="./assets/images/${id}/gallery03.png"
            alt=""
          />
        </div>
        <div class="aspect-square">
          <img
            class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
            src="./assets/images/${id}/gallery04.png"
            alt=""
          />
        </div>
        <div class="aspect-square">
          <img
            class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
            src="./assets/images/${id}/gallery05.png"
            alt=""
          />
        </div>
        <div class="aspect-square">
          <img
            class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
            src="./assets/images/${id}/gallery06.png"
            alt=""
          />
        </div>
      </section>
      <br />
    `;
}
