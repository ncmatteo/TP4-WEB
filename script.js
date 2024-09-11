"use strict"

const $output = document.getElementById("output");
const $fileSelector = document.getElementById("file-selector");
const $goButton = document.getElementById("go-button");
const $progressBar = document.getElementById("progress-bar");
const $progressNb = document.getElementById("progress-number");

function checkResponseStatus(response) {
    if (response.ok) return response;
    throw new Error(`${response.status} (${response.statusText})`);
  }

function updateProgress(current, total, text) {
  $progressBar.value = current;
  $progressBar.max = total;
  $progressNb.textContent = `${current} / ${total}`;
  if (text != null) $output.innerHTML += `${text}<br/>`;
}


function doProgressTimer(n) {
    let current = 0;
    const total = n;
    
    updateProgress(current,total,"Début!");

    const interval = setInterval(() => {
      current++;
      updateProgress(current, total);
      

      if (current == (total/2)){
        updateProgress(current,total,'Moitié');
      }

      if (current >= total) {
        clearInterval(interval); // Arrête la progression une fois atteinte
        updateProgress(total, total, 'Progression terminée');
      }
    }, 1000); // Toutes les secondes
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


doProgressTimer(10);


