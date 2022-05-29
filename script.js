const body = document.body;

window.addEventListener("scroll", onScroll);
function onScroll() {
  const scrollHeight = document.documentElement.clientHeight;
  const scrollLocation = window.scrollY;
  const scrollRatio = scrollLocation / scrollHeight;
  const colorMax = 255;
  const color = colorMax * scrollRatio;

  body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}
