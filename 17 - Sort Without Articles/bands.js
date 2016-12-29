const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function clip(band) {
  return band.replace(/the\s|and\s|a\s|an\s/i, '')
}

const sortedBands = bands.sort((bandA, bandB) => {
  nameA = clip(bandA)
  nameB = clip(bandB)
  if(nameA < nameB ){
    return -1;
  } else {
    return 1;
  }
});

const bandList = document.querySelector('#bands');

console.log(bandList);

bandList.innerHTML = sortedBands.map(band => {
  return `
  <li>${band}</li>
  `;
}).join('');
