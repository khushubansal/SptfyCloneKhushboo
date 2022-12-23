console.log("Welcome to Spotify");

// Initialize the variables
let songindex = 0;
let audioElement = new Audio("Titliaan - Afsana Khan.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let mastersongname = document.getElementById('mastersongname');

let songs = [
  {
    songname: "Titliaan-Afsana Khan",
    filepath: "Titliaan - Afsana Khan.mp3",
    coverpath: "titliaancover.jpg" },
  {
    songname: "Libaas - Kaka",
    filepath: "Kale Je Libaas Di - Kaka.mp3",
    coverpath: "libascover.jpg" },
  {
    songname: "Baarish Ban Jana-Stebin Ben",
    filepath: "Baarish Ban Jana - Stebin Ben.mp3",
    coverpath: "barishbanjana.jpg" },
  {
    songname: "Lagdi Lahore Di",
    filepath: "Lagdi Lahore Di - Street Dancer 3D.mp3",
    coverpath: "lagdilahoredi.jpg" }
];


songitems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    


  
})

// audioElement.play();

// Handle the play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }

})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
   
    // Uodate seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime =   myprogressbar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    
        })
    }




Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       
        makeAllPlays();
        songindex = parseInt(e.target.id);
        mastersongname.innerText = songs[songindex].songname;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songindex].filepath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;


    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=3){
        songindex = 0;
    }

    else{
        songindex+=1;
    }

        audioElement.src = songs[songindex].filepath;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        myprogressbar.value = "0";



})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0;
    }

    else{
        songindex-=1;
    }

        audioElement.src = songs[songindex].filepath;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        myprogressbar.value = "0";



})