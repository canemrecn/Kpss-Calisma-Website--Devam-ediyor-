const sorular = {
    "Türkiye'nin yeni ve dördüncü operatörü 0510 22x xxxx numarası ile Şubat ayı ile birlikte abone alımlarına başlayacak olan gsm şirketi nedir?": "Netgsm operatörü",
    "Avrupa Güreş Şampiyonası'nda 68 kiloda Ukraynalı Tetiana Rizkho Sova'yı 5-2 mağlup ederek altın madalyanın sahibi olan milli güreşci kimdir?": "Buse Tosun Çavuşoğlu",
    "Romanya'nın başkenti olan Bükreş'te düzenlenen Avrupa Güreş Şampiyonasında altın madalya kazanma başarısı gösteren 28 yaşındaki milli güreşçimiz kimdir?": "Selçuk Can",
    "CAF ülkeleri için temel Uluslararası futbol turnuvası olan Afrika Uluslar Kupasını 11 Şubat 2024 tarihinde oynanan final müsabakasında Nijerya'yı 2-1 yenen ve turnuvayı üçüncü kez kazanma başarısı gösteren ülke hangisidir?": "Fildişi Sahili",
    "1956 yılından beri her dört yılda bir düzenlenen ASYA Kupasında finalinde Ürdün ile yaptığı maçta şampiyonluğa ulaşan takım hangisidir?": "Katar üst üste 2. kez",
    "Türkiye'nin şampiyonadaki ilk altın madalyası Avrupa Şampiyonası'nda kadınlar 45 kiloda, koparmada 75 kilo kaldırarak kim kazanmıştır?": "Milli halterci Cansu Bektaş",
    "9 Haziran 2023 tarihinde göreve getirilen Merkez Bankası başkanı Hafize Gaye Erkan yerine 3 Şubat 2024 tarihi itibariyle kim getirilmiştir?": "Fatih Karahan",
    "Deneme, roman, söyleşi ve derlemeleri ile bilinen 1984-1985 yılları arasında Türk Yazarlar Kooperatifi Kurulu (YAZKO) başkan yardımcılığı görevini üstlenen 2 Şubat 2024 tarihinde KOAH ve çoklu organ yetmezliği nedeniyle 79 yaşında hayatını kaybeden sanatçı kimdir?": "Alev Alatlı",
    "Forbes 2023 Dünyanın En Güçlü kadınları listesinde ülkemizden kim yer almıştır?": "Güler Sabancı",
    "Tarihte ilk defa Göktürk Kağanının bir tasvirine ulaşılmıştır. Ulaşılan bu tasvirde en çok ne dikkat çekmiştir?": "Göktürk Kağanının yüzü",
};
const soruLabel = document.getElementById('soru');
const secimlerDiv = document.getElementById('secimler');

function secilen(secim) {
    const dogruCevap = sorular[soruLabel.textContent];
    if (secim === dogruCevap) {
        showPopup('Doğru!');
        yeniSoru();
    } else {
        showPopup('Yanlış!');
    }
}
function showPopup(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    modal.style.display = "block";

    setTimeout(function() {
        modal.style.display = "none";
    }, 1500); // 1,5 saniye sonra modalı kapat
}
function yeniSoru() {
    const soru = Object.keys(sorular)[Math.floor(Math.random() * Object.keys(sorular).length)];
    const dogruCevap = sorular[soru];
    
    soruLabel.textContent = soru;
    
    const secenekler = Object.values(sorular).sort(() => Math.random() - 0.5).slice(0, 4);
    secenekler[Math.floor(Math.random() * secenekler.length)] = dogruCevap;
    
    secimlerDiv.innerHTML = '';
    secenekler.forEach(secenek => {
        const button = document.createElement('button');
        button.textContent = secenek;
        button.addEventListener('click', () => secilen(secenek));
        secimlerDiv.appendChild(button);
    });
}
yeniSoru();