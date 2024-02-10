const demo = document.getElementById('demo'); 
const menu = document.querySelector('.menu'); 

demo.addEventListener('click', function () { 
  const demIcon = this.querySelector('.demo-icon'); 
  const demoIcon = this.querySelector('.demo-icon'); 
  if (demIcon.style.display === "none") { 
    demIcon.style.display = "inline-block"
    menu.style.display = "none"
    demoIcon.style.display = "none"
  } 
  else { 
    demoIcon.style.display = "inline-block"
    demIcon.style.display = "none"
    menu.style.display = "block"
  } 
});
