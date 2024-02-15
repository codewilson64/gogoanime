const menuToggle = document.querySelector(".menu-toggle");
const midNav = document.querySelector(".mid-nav");
const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

menuToggle.addEventListener("click", function () {
  midNav.classList.toggle("active");
});

searchIcon.addEventListener("click", function () {
  searchInput.classList.toggle("active");
});

// omdb API
function searchMovie() {
  $(".main-thumbnail-list").html("");
  $.ajax({
    url: "https://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "a09b8a1e",
      s: $("#search-input").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;
        $.each(movies, function (index, data) {
          $(".main-thumbnail-list").append(
            `
          <div>
            <div class="thumbnail">
            <img src=` +
              data.Poster +
              `/>
            <a href="animeinfo.html">` +
              data.Title +
              `</a>
            </div>
          </div>
          `
          );
        });

        $("#search-input").val("");
      } else {
        $(".main-thumbnail-list").html(
          `
        <div>
        <h1>` +
            result.Error +
            `</h1>
        </div>
        `
        );
      }
    },
  });
}

$("#search-icon").on("click", function () {
  searchMovie();
});

$("#search-input").on("keyup", function (e) {
  if (e.which === 13) {
    searchMovie();
  }
});
