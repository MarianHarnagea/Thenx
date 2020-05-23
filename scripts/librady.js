const videosDOM = document.querySelector(".video-container");

class Videos {
  async getVideos() {
    try {
      let result = await fetch("/scripts/library.json");
      let data = await result.json();
      let videos = data.videos;
      videos = videos.map((video) => {
        const id = video.id;
        const img = video.img.url;
        const name = video.name;
        const videourl = video.videourl;
        console.log(videourl);

        return { id, img, name, videourl };
      });
      return videos;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayVideos(videos) {
    let result = "";
    videos.forEach((video) => {
      result += `
      <div class="col-12 col-md-4">
      <a href="#" data-toggle="modal" data-src="https://www.youtube.com/embed/${video.videourl}" data-target="#myModal" class="card mb-3 shadow video-btn"  style="max-height: 200px; border: 0; border-radius: 10px; overflow: hidden;">
            <img class="card-img-top" src="${video.img}" alt="">
            <div class="exercise-card-overlay card-img-overlay-gradient"></div>
            <div class="position-absolute p-3">
                <span class="badge badge-dark rounded-sm">Bigginer</span>
            </div>
            <div class="card-img-overlay p-3 mb-0">
                <small class="text-white mb-0">INTRODUCTION</small>
                <h5 class="text-white mb-0">${video.name}</h5>
            </div>
        </a>
</div>
                  `;
    });
    videosDOM.innerHTML = result;
  }
}

// Load Content
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const videos = new Videos();

  videos.getVideos().then((videos) => {
    ui.displayVideos(videos);
  });
});
