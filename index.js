const sorular = {
    "Nokta (.) nedir?": "Cümlenin sonunu belirtir. Ayrıca nokta, kısaltma sonlarında da kullanılır.",
    "Virgül (,) nedir?": "Cümle içindeki anlam ayırıcıları belirtmek için kullanılır. Ayrıca sıralı ögeleri ayırmak ve cümle içinde bir düşünceyi vurgulamak için de kullanılabilir.",
    "Noktalı Virgül (;) nedir?": "İki bağımsız cümleyi birbirine bağlamak veya bir cümle içinde uzunluk farklılıkları olan ögeleri ayırmak için kullanılır.",
    "Ünlem İşareti (!) nedir?": "Şaşırma, heyecan, korku gibi duyguları ifade etmek için kullanılır. Ayrıca, emir kipi ile yazılmış cümlelerde de sonuna eklenir.",
    "Soru İşareti (?) nedir?": "Bir cümlenin bir soruyu ifade ettiğini belirtir. Soru cümlelerinin sonuna gelir.",
    "Kesme (') nedir?": "Genellikle kısa alıntılar ve doğrudan konuşmaların içinde kullanılır.",
    "Çift Nokta (:) nedir?": "Bir düşünceyi açıklamak veya bir liste yapmak için kullanılır. Ayrıca diyalogları ve alıntıları göstermek için de kullanılabilir.",
    "Parantez () nedir?": "Ek bilgileri veya açıklamaları belirtmek için kullanılır.",
    "Kısa Çizgi (-) nedir?": "Kelime aralarındaki bağlantıyı sağlamak, kelimeleri birleştirmek veya kelime köklerini belirtmek için kullanılır.",
    "Olumlu Cumle": "Tanım: Olumlu cümleler, bir durumu veya olayı doğrulayan veya onaylayan cümlelerdir. Pozitif bir ifade içerirler.",
    "Olumsuz Cümle": "Tanım: Olumsuz cümleler, bir durumu veya olayı reddeden veya inkar eden cümlelerdir. Genellikle 'değil' veya başka olumsuzluk ifadeleri içerirler.",
    "Soru Cümlesi": "Tanım: Soru cümleleri, bir bilgi veya yanıt almak amacıyla soru soran cümlelerdir. Genellikle soru işareti (?) ile son bulurlar.",
    "Ünlem Cümlesi": "Tanım: Ünlem cümleleri, bir duyguyu, şaşkınlığı, beğeni veya hayranlığı ifade eden cümlelerdir. Genellikle ünlem işareti (!) ile son bulurlar.",
    "İsim (Ad) Cümlesi": "Tanım: İsim cümleleri, bir kişiyi, bir nesneyi veya bir kavramı tanımlayan veya belirten cümlelerdir. Genellikle bir isim cümlesinin temel yapısı, özne ve nesne arasında ilişki kurar.",
    "Fiil (Eylem) Cümlesi": "Tanım: Fiil cümleleri, bir eylemi veya hareketi ifade eden cümlelerdir. Genellikle bir özne ve bir yüklem (fiil) içerirler.",
    "Kuralları Cümle": "Tanım: Kuralları cümleler, bir kuralı, bir prensibi veya bir genellemeyi ifade eden cümlelerdir. Genellikle 'her zaman', 'asla', 'genellikle' gibi kural bildiren ifadeler içerirler.",
    "Devrik Cümle": "Tanım: Devrik cümleler, standart cümle yapısından farklı olarak öznenin, yüklem veya diğer unsurların yer değiştirdiği cümlelerdir. Anlamı pekiştirmek, vurgu yapmak veya edebi bir etki yaratmak için kullanılırlar.",
    "Eksiltili Cümle": "Tanım: Eksiltili cümleler, bir veya birkaç kelimenin atlanarak kısaltılmış şekilde ifade edildiği cümlelerdir. Genellikle günlük konuşma dilinde sıkça kullanılırlar.",
    "Basit Cümleler": "Tanım: Basit cümleler, tek bir özne ve bir yüklem içeren ve tek bir düşünceyi ifade eden cümlelerdir. Basit cümleler, diğer cümle türlerinin temel yapı taşını oluştururlar.",
    "Birleşik Cümleler": "Tanım: Birleşik cümleler, birden fazla basit cümlenin bağlaçlar veya diğer bağlayıcı unsurlarla bir araya gelerek oluşturduğu cümlelerdir. Bu cümlelerde, bağlanan basit cümlelerin her biri ayrı bir düşünceyi ifade eder.",
    "Sıralı Cümleler": "Tanım: Sıralı cümleler, birbirine bağlı bir veya daha fazla basit cümlenin belirli bir sıra veya ardışık düzen içinde sıralanmasıyla oluşturulan cümlelerdir. Ardışık cümleler genellikle 'önce', 'sonra', 'daha sonra' gibi zaman zarflarıyla bağlanır.",
    "Bağlı Cümleler": "Tanım: Bağlı cümleler, bir başlık veya ana cümlenin altında yer alan ve başlığı destekleyen veya detaylandıran cümlelerdir. Ana cümleye bağımlı olan ve onun anlamını genişleten yan cümlelerden oluşurlar.",
    "Girişik Sıralı Cümle": "Tanım: Girişik sıralı cümleler, ana cümlelerin arasına yan cümlelerin (önemli, giriş, sonuç gibi) eklenmesiyle oluşan cümlelerdir. Bu yan cümleler, ana cümleyi destekleyen veya tamamlayan bilgiler sağlar.",
    "İlgi Cümleleri (Şartlı)": "Tanım: İlgi cümleleri, bir durumun gerçekleşmesine bağlı olarak diğer bir durumun gerçekleşeceğini belirten cümlelerdir. Genellikle 'eğer', 'şayet', 'olsa' gibi şart belirten ifadelerle başlarlar.",
    "Birleşik Cümle": "Tanım: Birleşik cümleler, birden fazla basit cümlenin bağlaçlar veya diğer bağlayıcı unsurlarla bir araya gelerek oluşturduğu cümlelerdir. Bu cümlelerde, bağlanan basit cümlelerin her biri ayrı bir düşünceyi ifade eder.",
    "İç İçe Birleşik Cümle": "Tanım: İç içe birleşik cümleler, birleşik cümlelerin içine başka birleşik cümlelerin eklenmesiyle oluşan cümlelerdir. Bu yapıda, cümleler iç içe geçmiş ve farklı düzeylerde ayrı düşünceleri ifade eder.",
    "İyelik eki nedir?": "Adlara gelerek onlara aitlik anlamı katan, onların neye, kime ait olduğunu belirten eklerdir.",
    "Duyulan Geçmiş Zaman ekleri nelerdir?": "-mış, -miş, -muş, müş",
    "Görülen Geçmiş Zaman ekleri nelerdir?": "-dı, -di, -du, -dü, -tı, -ti, -tu, -tü",
    "Şimdiki Zaman ekleri nelerdir?": "-yor",
    "Gelecek Zaman ekleri nelerdir?": "-ecek, -acak",
    "Geniş Zaman Kipi ekleri nelerdir?": "(ı,i,u,ü)r, -ar, -er",
    "İstek Kipi ekleri nelerdir?": "-a, -e",
    "Emir Kipi ekleri nelerdir?": "Özel bir eki yoktur.",
    "Dilek-Şart Kipi ekleri nelerdir?": "-se, -sa",
    "Gereklilik Kipi ekleri nelerdir?": "-meli, -malı",
    "Şahıs ekleri nelerdir?": "Eylemde belirtilen hareket, iş ve oluşun hangi şahıs(kişi) tarafından yapıldığını gösteren eklerdir.",
    "Durum Zarfları nelerdir?": "Fiillere ya da fiilimsilere yöneltilen 'nasıl, niye, neden, niçin' sorularının cevabıdır.",
    "Zaman Zarfları": "Fiil ya da fiilimsiye yöneltilen 'ne zaman?' sorusunun cevabıdır.",
    "Azlık-Çokluk (Miktar) Zarfları": "Sıfat, fiilimsi, fiil ya da zarf olan sözcüğe 'Ne kadar?' sorusunun cevabıdır.",
    "Yer Yön Zarfları": "Fiillere ya da fiilimsilere sorulan Nereye? sorusunun cevabıdır.",
    "Soru Zarfları": "Nasıl, ne kadar, ne zaman, niçin, neden, niye, ne(sebep anlamında kullanılırsa)",
    "Bağlaçlar nelerdir?": "\"ve\", \"veya\", \"ama\", \"fakat\", \"ancak\", \"çünkü\", \"zira\", \"oysa\", \"yani\"",
    "Zarf Fiil Ekleri Nelerdir?": "-ken, -madan, -ince, -ip, -arak, -e e, -dıkça, -maz, -casına, -meksizin, -dığında",
    "Sıfat Fiil Ekleri Nelerdir?": "-dik, -dık, -duk, -dük, -mış, -miş, -muş, -müş, -an, en, -r, -ar, -er, -mez, -maz, -ecek, -acak, -ası, -esi",
    "Yardımcı Fiille Yapılan Birleşik Fiiller nelerdir?": "İsim + Yardımcı Eylem",
    "Kurallı Birleşik Fiillerden yeterlilik fiili nedir": "Fiil + ebilmek",
    "Kurallı Birleşik Fiillerden tezlik fiili nedir": "Fiil + evermek",
    "Kurallı Birleşik Fiillerden süreklilik fiili nedir": "Fiil + edurmak/ekalmak/egelmek",
    "Kurallı Birleşik Fiillerden yaklaşma fiili nedir": "Fiil + eyazmak",
    "Anlamca Kaynaşmış Birleşik Fiiller nedir?": "Deyim örnekleridir",
    "Basit Fiiller nelerdir": "Yapım eki almayan fiillerdir",
    "Yapım ekleri nelerdir": "Kelimenin köküne eklenerek yeni kelimeler oluşturan eklerdir.",
    "İsimden Türetilen Fiiller": "İsim ya da isim soylu sözcüklere getirilen eklerle fiil türetilebilir.",
    "Fiilden Türetilen Fiiller": "Fiil kök ve gövdelerine getirilen yapım ekleriyle yeni fiiller türetilebilir.",
    "Aşağıdakilerden hangisi anlam daralmasının bir örneğidir?": "\"Oğul” sözcüğü eskiden “yavru, çocuk” anlamında hem kız hem de erkek çocuklar için kullanılan bir kelimeyken bugün bu sözcük “sadece erkek çocuklar” için kullanılmaktadır.",
    "Aşağıdakilerden hangisi devrik cümlenin bir örneğidir?": "Çok severim Türkçe derslerini ben.",
    "Eksiltili cümle nedir?": "İsim cümlesi içerisinde yüklem olarak kullanılmış durumda olan sözcüğün “Ek fiil” almaması halinde bu cümle de eksiltili cümle olarak kabul görmektedir.O beklediğimden çok daha güzel. (di)",
    "Yüklem nedir": "Cümledeki işi, hareketi, yargıyı bildiren çekimli unsura yüklem denir.",
    "Özne nedir?": "Yüklemin bildirdiği iş, oluş ya da durumu yapan ve­ya cümledeki olanı karşılayan ögeye özne denir.",
    "Nesne nedir": "Cümlede öznenin yaptığı işten etkilenen öğedir. Nesne, sadece yüklemi geçişli olan fiil cüm­lelerinde vardır ve yükleme sorulan “ne, neyi, kimi?” sorularıyla bulunur.",
    "Dolaylı Tümleç nedir": "Yükleme sorulan “ki­me, kimde, kimden; nereye, nerede, nereden; ne­ye, neyde, neyden?” gibi sorularla bulunur.",
    "Zarf Tümleci nedir": "Yön, zaman, tarz, sebep, miktar, vasıta ve şart bildirerek yüklemi tamamlayan ve yükleme sorulan “ne zaman, nasıl, niçin, niye, neden, ne kadar, ne şekilde?” gibi sorular sorar.",
    "Edat tümleci nedir": "Yüklemin ne ile (hangi araçla), kimin ile, hangi amaçla, yapıldığını gösteren söz öbeklerine denir.",
    "Anlam İlişkisi nasıl bulunur": "Anlam ilişkisi kelimelerde ya da cümlelerde olabilir. Eğer cümlede anlam ilişkisi kurmak isterseniz eş anlamlı ya da zıt anlamlı kelimeleri tercih edebilirsiniz. Sebep, sonuç ya da koşul belirterek de cümlede anlam ilişkisi yaratabilirsiniz.",
    "Tanımlama nedir": "“Bu nedir?, Bu kimdir?” sorusuna cevaptır.",
    "Açıklayıcı Anlatım nedir": "Bilgi verir",
    "Örnekleme nedir": "Somutlaştırmadır.",
    "Betimleyici Anlatım nedir": "Sözcüklerle resim çizme sanatıdır.",
    "Öyküleyici Anlatım nedir": "Bir olay; yer, zaman ve kişiyle ele alınır.",
    "Belirtme Hâl Eki nedir": "İsimlerin veya zamirlerin belirli bir nesneyi veya kişiyi belirtmek için kullanılan eklerdir",
    "Belirtme Durum Eki nedir": "İsimlerin, yer bildiren zarfların veya zarf-fiillerin hal bildiren veya yönelme bildiren bir durumunu belirtmek için kullanılan eklerdir.",
    "Pekiştirme nedir": "Bir fikri veya bir ifadeyi vurgulamak amacıyla tekrar etme işlemidir.",
    "Benzetme nedir": "İki farklı varlık, kavram veya olay arasında bir benzerlik kurarak daha iyi anlaşılmasını sağlayan bir anlatım tekniğidir.",
    "Yakın Anlamlılık nedir": "Birbirine yakın veya benzer anlamlara sahip kelimelerin veya ifadelerin kullanılmasıdır.",
    "Kişileştirme nedir": "Canlı olmayan varlıklara insan özellikleri atfedilerek onları sanki canlımış gibi tasvir etme işlemidir.",
    "Mecaz: Nedir?": "Kelimelerin gerçek anlamlarının dışında, mecazi anlamlarda kullanılmasıdır.",
    "Kökten Türeme: Nedir?": "Bir kelimenin kökünden yeni bir kelime oluşturulması işlemidir.",
    "Ünlü Düşmesi: Nedir?": "Kelimelerin ünlüsü düşürülerek oluşturulan eklerdir.",
    "İsim Tamlaması: Nedir?": "Birden fazla ismin bir araya gelerek yeni bir anlam oluşturduğu yapıdır.",
    "Sıfat Tamlaması: Nedir?": "Bir sıfatın bir başka sıfatla bir araya gelerek yeni bir anlam oluşturduğu yapıdır.",
    "Zarf fiil ekleri nelerdir": "-arak/-erek -dikçe/-dıkça",
    "Özel Adlar Nedir?": "İnsan, yer, kurum veya olay gibi belli bir varlığı veya nesneyi özel olarak adlandıran kelimelerdir.",
    "Karşılaştırma: Nedir?": "İki veya daha fazla nesnenin veya kavramın benzerlik veya farklılık derecesini belirtmek amacıyla yapılan bir dilbilgisi ve retorik kavramıdır.",
    "Koşul Belirtme Nedir?": "Bir eylemin gerçekleşmesinin, başka bir eylemin gerçekleşmesine bağlı olduğunu ifade etmek için kullanılan dilbilgisi yapısıdır.",
    "Nitelik Belirtme Nedir?": "Bir nesne veya kavramın niteliğini, özelliğini belirtmek amacıyla yapılan dilbilgisi işlemidir.",
    "Sebep-Sonuç İlişkisi Nedir?": "Bir olayın veya durumun neden sonuç ilişkisine dayanan bir bağlantısını ifade eden bir dilbilgisi yapıdır.",
    "Aşağıdakilerden hangisi ünlü düşmesi örneğidir?": "Omuz -> Omzu",
    "Aşağıdakilerden hangisi ünlü türemesi örneğidir?": "Bir + cik -> Biricik",
    "Aşağıdakilerden hangisi ünlü daralması örneğidir?": "Planla–ı-> Planlıyor",
    "Aşağıdakilerden hangisi ünlü değişimi örneğidir?": "Ben -> Bana,Sen -> Sana Sen -> Sana",
    "Aşağıdakilerden hangisi ünlü yumuşaması örneğidir?": "kitap -> kitabı, dolap -> dolabı",
    "Aşağıdakilerden hangisi ünsüz benzeşmesi örneğidir?": "Simit + ci -> Simitçi",
    "Aşağıdakilerden hangisi ünsüz türemesi örneğidir?": "Sır + ım -> Sırrım",
    "Aşağıdakilerden hangisi ünsüz düşmesi örneğidir?": "Küçük + cük -> Küçücük",
    "Aşağıdakilerden hangisi kaynaştırma harfleri örneğidir?": "Gemi + y + i",
    "Aşağıdakilerden hangisi ünsüz değişimi örneğidir?": "Sünbül -> Sümbül",
    "Aşağıdakilerden hangisi ulama örneğidir?": "Masanı'n' 'a'yakları",
    "Büyük ünlü uyumu nedir?": "Türkçede sözcükler içinde yer alan ünlü harflerin ya tamamen kalın ya da tamamen ince seslerden oluşması zorunluğudur.",
    "Aşağıdakilerden hangisi küçük ünlü uyumu örneğidir?": "Karanlık ⇒ a (düz) → a (düz) → ı (düz) Yorucu ⇒ o (yuvarlak) → u (yuvarlak) → u (yuvarlak)",
    "İşaret Sıfatı: Nedir?": "Belirli bir nesneyi veya kişiyi işaret eden sıfatlardır. İşaret sıfatları, 'bu', 'şu', 'o' gibi gösterme zamirleriyle birlikte kullanılır ve bir nesnenin yakınlık veya uzaklık derecesini belirtir."
    // Diğer soruların ve cevaplarının listesi...
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