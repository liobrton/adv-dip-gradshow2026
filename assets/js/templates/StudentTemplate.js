export function StudentTemplate(data, id) {
  // check if showreel is linked
  const showreel = data.showreel.trim();
  let showreelExists = showreel.length > 0 ? true : false;

  // if no showreel linked, hide that element
  return `
    <br />
    <!--MAIN PROFILE INFO-->
    <section
      class="mx-auto flex w-3/4 max-w-200 flex-col justify-start gap-4 md:flex-row"
    >
      <div class="mx-auto my-auto aspect-square w-50 md:w-200">
        <img
          class="h-full max-h-full w-full max-w-full rounded-full object-cover object-center"
          src="./assets/images/${id}/profile.png"
          alt=""
        />
      </div>
      <section class="my-auto flex flex-col gap-2">
        <div class="flex flex-row justify-between">
          <div
            class="flex flex-col gap-2 md:flex-row md:items-baseline-last md:gap-4"
          >
            <h3 class="">${data.name}</h3>
            <h4 class="">${data.speciality}</h4>
          </div>
          <a href="${data.link}" class="hidden md:inline"><i class="fa-brands fa-linktree"></i> linktr.ee</a>
          <a href="${data.link}" class="md:hidden"><i class="fa-brands fa-linktree"></i></a>
        </div>
        <p class="">${data.artistStatement}</p>
      </section>
    </section>

    <br />

    <!--SHOWREEL-->
    <section
      class="${showreelExists ? "" : "hidden"} mx-auto aspect-video w-3/4 max-w-200"
    >
      <iframe
        class="h-full w-full"
        src="${showreel}"
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
      class="mx-auto grid w-3/4 max-w-300 grid-cols-2 justify-center gap-2 sm:grid-cols-3 sm:gap-4 lg:flex lg:flex-row"
    >
      <div class="aspect-square basis-45">
        <img
          onerror="hideParentElement(this)"
          class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
          src="./assets/images/${id}/gallery01.png"
          alt=""
          onclick="galleryView(this)"
        />
      </div>
      <div class="aspect-square basis-45">
        <img
          onerror="hideParentElement(this)"
          class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
          src="./assets/images/${id}/gallery02.png"
          alt=""
          onclick="galleryView(this)"
        />
      </div>
      <div class="aspect-square basis-45">
        <img
          onerror="hideParentElement(this)"
          class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
          src="./assets/images/${id}/gallery03.png"
          alt=""
          onclick="galleryView(this)"
        />
      </div>
      <div class="aspect-square basis-45">
        <img
          onerror="hideParentElement(this)"
          class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
          src="./assets/images/${id}/gallery04.png"
          alt=""
          onclick="galleryView(this)"
        />
      </div>
      <div class="aspect-square basis-45">
        <img
          onerror="hideParentElement(this)"
          class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
          src="./assets/images/${id}/gallery05.png"
          alt=""
          onclick="galleryView(this)"
        />
      </div>
      <div class="aspect-square basis-45">
        <img
          onerror="hideParentElement(this)"
          class="h-full max-h-full w-full max-w-full rounded-lg object-cover object-center"
          src="./assets/images/${id}/gallery06.png"
          alt=""
          onclick="galleryView(this)"
        />
      </div>
    </section>


    <br />
    `;
}
