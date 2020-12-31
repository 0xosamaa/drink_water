const smallcups = document.querySelectorAll('.smallcup')

smallcups.forEach((cup) => cup.addEventListener('click', fillCups))

function fillCups() {
  if (
    this.classList.contains('active') &&
    (!this.nextElementSibling ||
      !this.nextElementSibling.classList.contains('active'))
  ) {
    smallcups.forEach((cup) => cup.classList.remove('active'))
    percentage(-1)
    return
  } else smallcups.forEach((cup) => cup.classList.remove('active'))

  this.classList.add('active')
  let count = 0
  let previous = this.previousElementSibling
  while (previous) {
    count++
    previous.classList.add('active')
    previous = previous.previousElementSibling
  }
  percentage(count)
}

function percentage(count) {
  const water = document.querySelector('.bigcup .percent')
  const remained = document.querySelector('.bigcup .remained')
  const percent = document.querySelector('.bigcup .percent h1')
  percent.innerText = `${(count + 1) * 12.5}%`
  percent.style.visibility = ''
  remained.style.visibility = ''
  if (count === -1) {
    percent.style.visibility = 'hidden'
  } else if (count === 7) {
    remained.style.visibility = 'hidden'
  }
  water.style.height = `${(count + 1) * 12.5}%`
  remained.style.height = `${100 - (count + 1) * 12.5}%`
  remained.innerHTML = `<h2>${
    2 - 0.25 * (count + 1)
  }L</h2><span>Remaining</span>`
}
