"use strict"

const $output = document.getElementById("output");
const $fileSelector = document.getElementById("file-selector");
const $goButton = document.getElementById("go-button");
const $progressBar = document.getElementById("progress-bar");
const $progressNb = document.getElementById("progress-number");



function updateProgress(current, total, text) {
  $progressBar.value = current;
  $progressBar.max = total;
  $progressNb.textContent = `${current} / ${total}`;
  if (text == null) $output.innerHTML += `${text}<br/>`;
}


async function downloadAndCheck() {
  $output.innerHTML = "";
  try {
    const url = new URL(`data/${$fileSelector.value}`, window.location);
    console.debug(url);
    console.warn("Ici, faire progresser la barre", document.getElementById("progress-bar"))
    console.warn(`Ensuite, vérifier tous les liens de ${url}`)
  } catch (error) {
    $output.innerHTML = error;
    console.error(error);
  }
}

$goButton.addEventListener("click", downloadAndCheck);

updateProgress(0, 10, "départ");
updateProgress(1, 10);
updateProgress(2, 10);
updateProgress(3, 10);
updateProgress(4, 10);
updateProgress(5, 10, "moitié");
updateProgress(10, 10, "fini !");