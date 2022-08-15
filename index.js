const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const book = document.getElementById("book");

document.body.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") goNextPage();
  if (e.key === "ArrowRight") goPrevPage();
});

const paper1 = document.getElementById("p1");
const paper2 = document.getElementById("p2");
const paper3 = document.getElementById("p3");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
const numOfPapers = 3;
const maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(-50%)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0)";
  } else {
    book.style.transform = "translateX(-100%)";
  }
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        paper2.style.zIndex = -2;
        paper3.style.zIndex = -3;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        closeBook(false);
        break;

      default:
        throw new Error("unknown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 5;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 4;
        break;
      case 4:
        openBook();
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 3;
        break;

      default:
        throw new Error("unknown state");
    }

    currentLocation--;
  }
}
