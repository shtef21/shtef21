if (document.body.classList.contains("home"))
{
    let UBDM_popis=[{"ev":"Mk 5, 1-20","mis":"Iziđi, duše nečisti, iz ovoga čovjeka!","dat":"1.2."},{"ev":"Lk 2, 22-40","mis":"Vidješe oči moje spasenje tvoje.","dat":"2.2."},{"ev":"Mk 6, 1-6","mis":"Nije prorok bez časti doli u svom zavičaju.","dat":"3.2."},{"ev":"Mk 6, 7-13","mis":"Poče ih slati.","dat":"4.2."},{"ev":"Mk 6, 14-29","mis":"Uskrsnu Ivan kojemu ja odrubih glavu.","dat":"5.2."},{"ev":"Mk 6, 30-34","mis":"Bijahu kao ovce bez pastira.","dat":"6.2."},{"ev":"Mk 1, 29-39","mis":"Ozdravi mnoge koje su mučile razne bolesti.","dat":"7.2."},{"ev":"Mk 6, 53-56","mis":"Koji bi ga se dotakli, ozdravljali bi.","dat":"8.2."},{"ev":"Mk 7, 1-13","mis":"Napustili ste zapovijed Božju, a držite se predaje ljudske.","dat":"9.2."},{"ev":"Mk 7, 14-23","mis":"Što iz čovjeka izlazi, to onečišćuje čovjeka.","dat":"10.2."},{"ev":"Mk 7, 24-30","mis":"Psići ispod stola jedu od mrvica dječjih.","dat":"11.2."},{"ev":"Mk 7, 31-37","mis":"Gluhima daje čuti, nijemima govoriti.","dat":"12.2."},{"ev":"Mk 8, 1-10","mis":"Jeli su i nasitili se.","dat":"13.2."},{"ev":"Mk 1, 40-45","mis":"I odmah nesta s njega gube i očisti se.","dat":"14.2."},{"ev":"Mk 8, 11-13","mis":"Zašto ovaj naraštaj traži znak?","dat":"15.2."},{"ev":"Mk 8, 14-21","mis":"Čuvajte se kvasca farizejskog i kvasca Herodova!","dat":"16.2."},{"ev":"Mt 6, 1-6.16-18","mis":"Otac tvoj, koji vidi u skrovitosti, uzvratit će ti.","dat":"17.2."},{"ev":"Lk 9, 22-25","mis":"Tko izgubi život svoj poradi mene, taj će ga spasiti.","dat":"18.2."},{"ev":"Mt 9, 14-15","mis":"Kad im se ugrabi zaručnik, tada će postiti.","dat":"19.2."},{"ev":"Lk 5, 27-32","mis":"Nisam došao zvati pravedne, nego grešnike na obraćenje.","dat":"20.2."},{"ev":"Mk 1, 12-15","mis":"Iskušavao ga Sotona, a anđeli mu služahu.","dat":"21.2."},{"ev":"Mt 16, 13-19","mis":"Ti si Petar-Stijena! Tebi ću dati ključeve kraljevstva nebeskoga.","dat":"22.2."},{"ev":"Mt 6, 7-15","mis":"Vi, dakle, ovako molite.","dat":"23.2."},{"ev":"Lk 11, 29-32","mis":"Naraštaju se ovom neće dati znak doli znak Jone proroka.","dat":"24.2."},{"ev":"Mt 7, 7-12","mis":"Tko god ište, prima.","dat":"25.2."},{"ev":"Mt 5, 20-26","mis":"Idi i najprije se izmiri s bratom.","dat":"26.2."},{"ev":"Lk 7, 36-50","mis":"Oprošteni su joj grijesi mnogi, jer ljubljaše mnogo.","dat":"27.2."},{"ev":"Mk 9, 2-10","mis":"Ovo je Sin moj ljubljeni.","dat":"28.2."}];

    let d = new Date();

    let UBDM_el = UBDM_popis[d.getDate()-1];
    let UBDM_auth = UBDM_el.ev.split(" ")[0];
    UBDM_auth = UBDM_auth == "Mt" ? "Mateju" : UBDM_auth == "Mk" ? "Marku" : UBDM_auth == "Lk" ? "Luki" : UBDM_auth == "Iv" ? "Ivanu" : "";

    document.body.querySelector(".cover-section .cover-title").innerText = "\"" + UBDM_el.mis + "\"";
    document.body.querySelector(".cover-section .cover-description").innerText = "Neka te Riječ nedjeljnog evanđelja po " + UBDM_auth +
        " vodi kroz tjedan" +
        "\n(" + UBDM_el.dat + " - " + UBDM_el.ev + ")";
}

