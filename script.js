setInterval(() => {
    d = new Date()
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + 1/2*mtime;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg);`
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    function playsound (audioName ){
        let audio = new Audio(audioName);
        audio.loop = true;
        audio.play();

}
playsound("Tere Hawaale_320(PagalWorld.com.se) (3).mp3")

}, 1000);
  





