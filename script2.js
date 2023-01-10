var Regbtn;
var bannerClosebtn = document.getElementById("bannerclose")
var bgVid = document.getElementById("background-video")
var click2 = document.getElementById("click2")
var click3 = document.getElementById("click3")
var click4 = document.getElementById("click4")
var click5 = document.getElementById("click5")
var ban1 = document.getElementById("box-img-1")
var ban2 = document.getElementById("box-img-2")
var schedButtons = document.getElementsByClassName("nav-item")
var regitext = document.getElementsByClassName("RegText")
var body = document.getElementsByTagName('body')[0]
document.getElementById('mainReg').addEventListener("click",()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSfmRZ8bRD3s2-wQDiXXitV3iAJ23Yyq-YEl-N8hay_q_T3h5A/viewform",'_blank');})
//linking google form to all the register buttons cuz we are lazy
for(let i=0; i<regitext.length; i++){
  regitext[i].addEventListener("click",()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSfmRZ8bRD3s2-wQDiXXitV3iAJ23Yyq-YEl-N8hay_q_T3h5A/viewform",'_blank');})
}
flag=false
bgVid.load()
// var schedItems = document.getElementsByClassName("schedule-item")
// audiosection
for(let i=0; i< schedButtons.length; i++){
  schedButtons[i].addEventListener("click", ()=> {click5.load();click5.play()})
}
// for(let i=0; i< schedItems.length; i++){
//   schedItems[i].addEventListener("click", ()=>{click3.load(); click3.play()})
// }

function onClose(){
  if(flag==false){
  if (window.matchMedia("(min-width: 767px)").matches) {
    bgVid.style.animation = "10s middle forwards"
    bgVid.style.animationIterationCount = "1"
    bgVid.style.animationFillMode = "forwards"
  }
  bgVid.play()
  bgVid.muted = false
  flag=true
  body.style.overflowY = "scroll"
}
  
}



function navSounds(){
  click2.load()
  click2.play()
}

var obj_list = new Array()
    var Regbtn;
    function expand(obj, btn){
      obj = document.getElementById(obj)
      Regbtn = document.getElementById(btn)
      if(!get_and_set(obj)){
        Regbtn.style.display = "inline"
        // obj.style.transition = "1s"
        // obj.style.animation = "1s expand"
        obj.style.color = "black"
        // window.setTimeout(()=>{obj.style.color = "black"}, 300)
        obj.style.height = '110%';
        // ale
        Regbtn.style.marginBottom = "1vw"
        click3.load(); click3.play()
      }
      else{
        compress(obj)
      }
    }

    function compress(obj){
      Regbtn.style.display = "none"
      
      obj.style.color = "white"
      obj.style.height = '2vw';
      
    }

    function get_and_set(obj){
      if(find(obj)){
        obj_list.splice(obj_list.indexOf(obj), 1)
        return true
      }
      else{
        obj_list.push(obj)
        return false
      }
    }

    function find(obj){
      let flag=false
      for(let i=0; i<(obj_list.length); i++){
        if(obj_list[i] == obj){
          flag = true
        }
      }
      if(flag == true){
        return true
      }
      else{
        return false
      }
    }

document.getElementById('radio1').checked = "true"
var checked = document.getElementById('radio1')
var radioMatter = document.getElementById('radio-matter')
function changeRadio(obj){
  if(obj != checked){
    checked = obj
    // alert(obj.id)
    if(obj.id == "radio1"){
      radioMatter.style.color = "black"
      
      radioMatter.style.paddingTop = "4%"
      window.setTimeout(()=>{radioMatter.innerHTML = "CollegeFest is all about bringing students together to create an unforgettable experience. We hold our events at the coolest venues and bring in the best brands and bands to give college students the opportunity to explore their cities and their new found freedom. It’s everything you’re looking for in one place.";radioMatter.style.color = "white"},500)
      click1.play()
    }
    else{
      radioMatter.style.color = "black" 
      
      radioMatter.style.paddingTop = "2%"
      window.setTimeout(()=>{radioMatter.innerHTML = "The uniqueness of yoUR Fest is Definitely..! Students gain a lot from these exciting festivals than we realize. There are several events in college fest like food stalls, Auto cad, Jet Rockets, Creative Era, Tech Post, Innovative Hub, Technical Quiz, Circuit Wizard, Synthpop Parady, Buzz plosion, Mystery busters, Tech jam, Crypt URmind, Technothon, Google master, Best business idea, Electrical Funda, paper presentation, Technical Quiz, poster presentation, Project Exhibition, Dance, Telugu ammai, Talkathon, Dubsmash, Short film, Singing, Painting/art, Literary Maze, Mr. Perfect, etc. This diversity of events offers something for everyone, and can help to bring students, staff, and faculty together to create a more positive, cohesive campus community...";radioMatter.style.color = "white"},500)


      click1.play()
    }
  }
  
}

function banner(source){
  document.getElementById("boxes").style.position = "fixed"
  document.getElementById("dialog").style.top = "10%"
  document.getElementById("dialog").style.right = "0"
  ban1.style.display = "none"
  ban2.src = source
  $('#mask').show();
	$('.window').show();
  // body.style.overflowY = "hidden"

}
