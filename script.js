fetch('https://whatyearisit-backend-bice-omega.vercel.app/year')
 .then(response => response.json())
 .then((data)=> {
  document.querySelector('#year').textContent = `${data.year}`
 })