function simulateButtonClicks() {
  let interval1;
  let interval2;
  let interval3;

  interval1 = setInterval(() => {
    const element1 = document.evaluate('//div[@aria-label="Más"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element1) {
      element1.click();
      console.log("Se hizo clic en el elemento 1");
    } else {
      console.log("No se encontró el elemento 1");
    }
  }, 2000);

  setTimeout(() => {
    clearInterval(interval1);

    interval2 = setInterval(() => {
      const element2 = document.evaluate('//span[text()="Eliminar publicación"]/ancestor::div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element2) {
        element2.click();
        console.log("Se hizo clic en el elemento 2");
      } else {
        console.log("No se encontró el elemento 2");
      }
    }, 2000);
  }, 3000);

  setTimeout(() => {
    clearInterval(interval2);

    interval3 = setInterval(() => {
      const element3 = document.evaluate('//div[@aria-label="Eliminar"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element3) {
        element3.click();
        console.log("Se hizo clic en el elemento 3");
      } else {
        console.log("No se encontró el elemento 3");
        clearInterval(interval3); // Detiene el intervalo cuando el elemento no se encuentra
      }
    }, 2000);
  }, 6000);

  setTimeout(() => {
    clearInterval(interval3);
    checkAndExecute();
  }, 9000); // Detener después de 9 segundos (3 iteraciones)
}

function checkAndExecute() {
  const element = document.evaluate('//div[contains(text(), "Parece que creaste una publicación duplicada.")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (element) {
    simulateButtonClicks();
  } else {
    console.log("No hay publicaciones duplicadas");
  }
}

checkAndExecute();