var overlay = document.querySelector(".overlay");
var show_guide_btn = document.querySelector(".show-guide-btn");
var show_grid_btn = document.querySelector(".show-grid-btn");
var clear_btn = document.querySelector(".clear-btn");

function show_guide (){
  var overlay_class_name = overlay.getAttribute("class");
  var a = overlay_class_name.indexOf("guide");
  if(a == -1){
    overlay.setAttribute("class", overlay_class_name + " guide");
    overlay.setAttribute("style", "display:block");
  } else {

  }
}

function show_grid (){
  var overlay_class_name = overlay.getAttribute("class");
  var a = overlay_class_name.indexOf("grid");
  if(a == -1){
    overlay.setAttribute("class", overlay_class_name + " grid");
    overlay.setAttribute("style", "display:block");
  } else {

  }
}

function clear_grid(){
  var overlay_class_name = overlay.getAttribute("class");
  var change_class_name;
  var a = overlay_class_name.indexOf("grid");
  var b = overlay_class_name.indexOf("guide");
  if(a !== -1){
    change_class_name = overlay_class_name.replace("grid", "");
    if(b == -1){
      change_class_name = change_class_name.trim();
      overlay.setAttribute("class", change_class_name);
      overlay.setAttribute("style", "display:none");
    } else {
      change_class_name = change_class_name.replace("guide", "");
      change_class_name = change_class_name.trim();
      overlay.setAttribute("class", change_class_name);
      overlay.setAttribute("style", "display:none");
    }
  } else if(b !== -1) {
    change_class_name = overlay_class_name.replace("guide", "");
    change_class_name = change_class_name.trim();
    overlay.setAttribute("class", change_class_name);
    overlay.setAttribute("style", "display:none");
  } else {

  }
}
show_guide_btn.onclick=show_guide;
show_grid_btn.onclick=show_grid;
clear_btn.onclick=clear_grid;
