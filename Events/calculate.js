window.updateAll = function () {
  let wolvesGrand = 0, sharksGrand = 0;
  let wolvesKap = 0, sharksKap = 0;
  let wolvesCamp = 0, sharksCamp = 0;

  document.querySelectorAll(".campaign").forEach(table => {
    let wolvesTotal = 0, sharksTotal = 0;
    let wolvesCum = 0, sharksCum = 0;

    const wolvesInputs = table.querySelectorAll(".wolves");
    const sharksInputs = table.querySelectorAll(".sharks");
    const wolvesCumCells = table.querySelectorAll(".wolvesCum");
    const sharksCumCells = table.querySelectorAll(".sharksCum");

    wolvesInputs.forEach((input, i) => {
      const w = Number(input.value) || 0;
      const s = Number(sharksInputs[i].value) || 0;

      wolvesTotal += w;
      sharksTotal += s;
      wolvesCum += w;
      sharksCum += s;

      if (wolvesCumCells[i]) wolvesCumCells[i].textContent = wolvesCum;
      if (sharksCumCells[i]) sharksCumCells[i].textContent = sharksCum;

      if (w > s) wolvesKap++;
      else if (s > w) sharksKap++;
    });

    const wolvesTotalCell = table.querySelector(".wolvesTotal");
    const sharksTotalCell = table.querySelector(".sharksTotal");
    if (wolvesTotalCell) wolvesTotalCell.textContent = wolvesTotal;
    if (sharksTotalCell) sharksTotalCell.textContent = sharksTotal;

    if (wolvesTotal > sharksTotal) wolvesCamp++;
    else if (sharksTotal > wolvesTotal) sharksCamp++;

    wolvesGrand += wolvesTotal;
    sharksGrand += sharksTotal;
  });

  function fmt(num) {
  return num.toLocaleString('de-DE');
}

  document.getElementById("dashWolvesPts").textContent = fmt(wolvesGrand);
  document.getElementById("dashSharksPts").textContent = fmt(sharksGrand);

  document.getElementById("wolvesKap").textContent = fmt(wolvesKap);
  document.getElementById("sharksKap").textContent = fmt(sharksKap);
  document.getElementById("wolvesCamp").textContent = fmt(wolvesCamp);
  document.getElementById("sharksCamp").textContent = fmt(sharksCamp);

  document.getElementById("kpi-wolves-pts").textContent = fmt(wolvesGrand);
  document.getElementById("kpi-sharks-pts").textContent = fmt(sharksGrand);
  document.getElementById("kpi-wolves-camp").textContent = fmt(wolvesCamp);
  document.getElementById("kpi-sharks-camp").textContent = fmt(sharksCamp);
  document.getElementById("kpi-wolves-kap").textContent = fmt(wolvesKap);
  document.getElementById("kpi-sharks-kap").textContent = fmt(sharksKap);

const diff = wolvesGrand - sharksGrand;
  document.getElementById("kpi-diff").textContent =
  diff === 0 ? "Unentschieden" :
  diff > 0 ? `Wolves mit ${fmt(diff)} Punkten in Führung` : `Sharks mit +${fmt(Math.abs(diff))} Punkten in Führung.`;

  const leaderInfo = document.getElementById("leaderInfo");
  if (wolvesGrand > sharksGrand) leaderInfo.textContent = `Wolves mit ${wolvesGrand - sharksGrand} Punkten in Führung.`;
  else if (sharksGrand > wolvesGrand) leaderInfo.textContent = `Sharks mit ${sharksGrand - wolvesGrand} Punkten in Führung.`;
  else leaderInfo.textContent = "Unentschieden!";

  window.updateCampaignChart(wolvesCamp, sharksCamp);
  window.updateChapterChart(wolvesKap, sharksKap);
  window.updatePointsChart(wolvesGrand, sharksGrand);
};
