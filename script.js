// hooks
let box = document.querySelector("#box");
let display_section = document.querySelector("#display");
let px_settings = Array.from(document.querySelectorAll('.px_setting'))
let color_settings = Array.from(document.querySelectorAll('.color_setting'))
let inputs = document.querySelectorAll("input")

console.log(inputs)
let prop = {
  y_offset_val:"3px",
  x_offset_val : "4px",
  blur_radius_val : "5px",
  blur_spread_val : "5px",
  background_color_val : "salmon",
  box_color_val : "grey",
  shadow_color_val : "yellow"
}
console.log(prop);

inputs.forEach(setting =>{
  setting.addEventListener("input" , function(e){
    if(setting.classList.contains("px_setting")){
      prop[`${this.id}_val`] = `${e.target.value}px`;
      console.log(this.id)      
    }
    else{
      prop[`${this.id}_val`] = e.target.value;
      console.log(this.id)  
    }
    update_display(
      prop.y_offset_val,
      prop.x_offset_val,
      prop.blur_radius_val,
      prop.blur_spread_val,
      prop.background_color_val,
      prop.box_color_val,
      prop.shadow_color_val
    );
  })
})

let update_display = (
  y_offset,
  x_offset,
  blur_radius,
  blur_spread,
  background_color,
  box_color,
  shadow_color
) => {
  box.style.backgroundColor = box_color;
  box.style.boxShadow = `${x_offset} ${y_offset} ${blur_radius} ${blur_spread} ${shadow_color}`;
  display_section.style.backgroundColor = background_color;
  console.log("moshi moshi");
};

update_display(
  prop.y_offset_val,
  prop.x_offset_val,
  prop.blur_radius_val,
  prop.blur_spread_val,
  prop.background_color_val,
  prop.box_color_val,
  prop.shadow_color_val
);