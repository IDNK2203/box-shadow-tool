let inputs = document.querySelectorAll("input")

inputs.forEach(setting =>{
  setting.addEventListener("input" , function(e){
    document.documentElement.style.setProperty(
      `--${setting.id}` , setting.value
    ) 
  })
})
