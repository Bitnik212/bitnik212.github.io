let cookies_alert = document.getElementById('cookie_alert_close'),
    cookies_altalert = document.getElementById('cookie_alert_altclose'),
    fix = document.getElementById("fixCookes"),
    gg = document.getElementsByClassName("scrollBox_two_bg")[0];
function cookie_alert_close() {
    cookies_alert.style.display = cookies_altalert.style.display = fix.style.display = "none";
    gg.style.marginTop = "-580px";
}
function cookie_alert_return() {
    cookies_alert.style.display = cookies_altalert.style.display = fix.style.display = "flex";
    gg.style.marginTop = "-600px";
}