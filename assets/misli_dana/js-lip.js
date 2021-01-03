if (document.body.classList.contains("home"))
{
    let UBDM_popis=[{"ev":"Mk 12, 13-17","mis":"Caru podajte carevo, a Bogu Božje!","dat":"1.6."},{"ev":"Mk 12, 18-27","mis":"Bog nije Bog mrtvih, nego živih.","dat":"2.6."},{"ev":"Mk 14, 12-16.22-26","mis":"Ovo je tijelo moje. Ovo je krv moja.","dat":"3.6."},{"ev":"Mk 12, 35-37","mis":"Kako kažu da je Krist sin Davidov?","dat":"4.6."},{"ev":"Mk 12, 38-44","mis":"Ova je sirota udovica ubacila više od svih.","dat":"5.6."},{"ev":"Mk 3, 20-35","mis":"Sotoni je došao kraj.","dat":"6.6."},{"ev":"Mt 5, 1-12","mis":"Blago siromasima duhom!","dat":"7.6."},{"ev":"Mt 5, 13-16","mis":"Vi ste svjetlost svijeta.","dat":"8.6."},{"ev":"Mt 5, 17-19","mis":"Nisam došao ukinuti, nego ispuniti.","dat":"9.6."},{"ev":"Mt 5, 20-26","mis":"Tko se srdi na brata, bit će podvrgnut sudu.","dat":"10.6."},{"ev":"Iv 19, 31-37","mis":"Probode mu bok i odmah poteče krv i voda.","dat":"11.6."},{"ev":"Lk 2, 41-52","mis":"Otac tvoj i ja žalosni smo te tražili.","dat":"12.6."},{"ev":"Mk 4, 26-34","mis":"Manje od svega sjemenja na zemlji postane veće od svega bilja.","dat":"13.6."},{"ev":"Mt 5, 38-42","mis":"Ja vam kažem: Ne opirite se Zlomu!","dat":"14.6."},{"ev":"Mt 5, 43-48","mis":"Ljubite svoje neprijatelje!","dat":"15.6."},{"ev":"Mt 6, 1-6.16-18","mis":"Otac tvoj, koji vidi u skrovitosti, uzvratit će ti.","dat":"16.6."},{"ev":"Mt 6, 7-15","mis":"Vi ovako molite!","dat":"17.6."},{"ev":"Mt 6, 19-23","mis":"Gdje ti je blago, ondje će ti biti i srce.","dat":"18.6."},{"ev":"Mt 6, 24-34","mis":"Ne budite zabrinuti za sutra.","dat":"19.6."},{"ev":"Mk 4, 35-41","mis":"Tko li je ovaj da mu se i vjetar i more pokoravaju?","dat":"20.6."},{"ev":"Mt 7, 1-5","mis":"Izvadi najprije brvno iz oka svoga!","dat":"21.6."},{"ev":"Mt 7, 6.12-14","mis":"Sve što želite da ljudi vama čine, činite i vi njima.","dat":"22.6."},{"ev":"Mt 7, 15-20","mis":"Po plodovima ćete ih njihovim prepoznati.","dat":"23.6."},{"ev":"Lk 1, 57-66.80","mis":"Ivan mu je ime!","dat":"24.6."},{"ev":"Mt 8, 1-4","mis":"Ako hoćeš, možeš me očistiti.","dat":"25.6."},{"ev":"Mt 8, 5-17","mis":"Mnogi će s istoka i zapada doći i sjesti za stol s Abrahamom, Izakom i Jakovom.","dat":"26.6."},{"ev":"Mk 5, 21-43","mis":"Djevojko! Zapovijedam ti, ustani!","dat":"27.6."},{"ev":"Mt 8, 18-22","mis":"Hajde za mnom!","dat":"28.6."},{"ev":"Mt 16, 13-19","mis":"Ti si Petar-Stijena! Tebi ću dati ključeve kraljevstva nebeskoga.","dat":"29.6."},{"ev":"Mt 8, 28-34","mis":"Došao si ovamo prije vremena mučiti zloduhe.","dat":"30.6."}];

    let d = new Date();

    let UBDM_el = UBDM_popis[d.getDate()-1];
    let UBDM_auth = UBDM_el.ev.split(" ")[0];
    UBDM_auth = UBDM_auth == "Mt" ? "Mateju" : UBDM_auth == "Mk" ? "Marku" : UBDM_auth == "Lk" ? "Luki" : UBDM_auth == "Iv" ? "Ivanu" : "";

    document.body.querySelector(".cover-section .cover-title").innerText = "\"" + UBDM_el.mis + "\"";
    document.body.querySelector(".cover-section .cover-description").innerText = "Neka te Riječ nedjeljnog evanđelja po " + UBDM_auth +
        " vodi kroz tjedan" +
        "\n(" + UBDM_el.dat + " - " + UBDM_el.ev + ")";
}

