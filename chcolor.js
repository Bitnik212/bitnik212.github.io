debugg = false;
timers = [];
colors = ['#FF4040', '#FFE600', '#6ECA12', '#40A3FF', '#102ED0', '#E537BF'];
fio = document.getElementById('fio');
function rainbow(status) {
    if(debugg) console.log('status = '+status);
    timers.push(chcolors())
    if(debugg)
        console.log('now timer = '+timers);
    if (status === false){
        if(debugg)
            console.warn('stop timer = '+(timers));
        for (let i = 0; i < timers.length; i++ )
            clearInterval(timers[i])
        timers = [];
        fio.style.color = 'black'
    }
}
function chcolors() {
    let timer;
    let i = 0;
    timer = setInterval(function () {
        if (i < colors.length && status !== false) {
            fio.style.color = colors[i];
            i++;
            if(i === colors.length){i = 0;}
        }else{
            clearInterval(timer)
            fio.style.color = 'black'
        }
        if(debugg)
            console.log('now timer in timer = '+timer);
    }, 500);
    return timer;
}