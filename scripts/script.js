const homepageGallery = document.getElementById('homepage-gallery');

const url = "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const addImagetoHomepage = async () => {
    let data = await fetchData(url);
    console.log(data);
    // first 6 images
    for (let i = 0; i < 6; i++) {
        const ele = `
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="${data[i].url}">
                        <div
                            class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                            Album Id : ${data[i].albumId}
                            </h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Picture Id: ${data[i].id}</h1>
                            <p class="leading-relaxed">
                                ${data[i].title}
                            </p>
                        </div>
                    </div>
                </div>
        `;
        homepageGallery.innerHTML += ele;
    };
}

addImagetoHomepage();
