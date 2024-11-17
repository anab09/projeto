let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
  nextImage();
}, 3000)


function nextImage() {
  count++;
  if(count>4) {
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}



function startCounter(startDate) {
  const targetDate = new Date(startDate);

  function updateCounter() {
    const now = new Date();

    let years = now.getFullYear() - targetDate.getFullYear();
    let months = now.getMonth() - targetDate.getMonth();
    let days = now.getDate() - targetDate.getDate();

    // Ajusta se o mês ou dia for negativo
    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Dias no mês anterior
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Atualizando os valores na tela
    document.getElementById('anos').textContent = years;
    document.getElementById('meses').textContent = months;
    document.getElementById('dias').textContent = days;
  }

  // Atualiza o contador a cada segundo
  updateCounter();
  setInterval(updateCounter, 1000);
}

// Inicia o contador com a data desejada
startCounter("2023-05-02");
