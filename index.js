let cookies_alert = document.getElementById('cookie_alert_close'),
    cookies_altalert = document.getElementById('cookie_alert_altclose'),
    fix = document.getElementById("fixCookes");
function cookie_alert_close() {
    cookies_alert.style.display = cookies_altalert.style.display = fix.style.display = "none";
}
function cookie_alert_return() {
    cookies_alert.style.display = cookies_altalert.style.display = fix.style.display = "flex";
}