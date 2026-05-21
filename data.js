/* ===== DAY DATA DATABASE ===== */

const stockholmDistricts = [
    { name: 'Gamla Stan',  desc: 'Tarihi eski şehir bölgesi ve dar sokaklar', color: 'rgba(235,130,80,0.1)'  },
    { name: 'Södermalm',  desc: 'Tasarım dükkanları, kafeler ve hipster yaşamı', color: 'rgba(80,200,120,0.1)'  },
    { name: 'Djurgården', desc: 'Müzeler yarımadası ve yeşil dinlenme alanları', color: 'rgba(90,190,90,0.1)'   },
    { name: 'Norrmalm',   desc: 'Modern şehir merkezi, alışveriş caddeleri', color: 'rgba(90,140,230,0.1)'  }
];

const osloDistricts = [
    { name: 'Sentrum', desc: 'Ana cadde Karl Johans Gate ve tarihi binalar', color: 'rgba(90,140,230,0.1)' },
    { name: 'Grünerløkka', desc: 'Sokak sanatları, tasarım butikleri ve nehir kıyısı kafeleri', color: 'rgba(235,130,80,0.1)' },
    { name: 'Aker Brygge', desc: 'Modern liman bölgesi, gurme restoranlar ve körfez manzarası', color: 'rgba(80,200,120,0.1)' },
    { name: 'Bygdøy', desc: 'Kraliyet arazileri, ormanlık yürüyüş yolları ve tarihi müzeler', color: 'rgba(235,210,80,0.1)' }
];

const goteborgDistricts = [
    { name: 'Haga', desc: 'Ahşap tarihi evler, Arnavut kaldırımlı sokaklar ve Fika kültürü', color: 'rgba(235,130,80,0.1)' },
    { name: 'Inom Vallgraven', desc: 'Kanallarla çevrili tarihi merkez ve modern çarşılar', color: 'rgba(90,140,230,0.1)' },
    { name: 'Lorensberg', desc: 'Kültür merkezleri, tiyatrolar, sanat galerileri ve şık kafeler', color: 'rgba(80,200,120,0.1)' }
];

const kopenhagDistricts = [
    { name: 'Nyhavn', desc: 'Kanal kenarındaki renkli tarihi evler ve hareketli iskeleler', color: 'rgba(235,130,80,0.1)' },
    { name: 'Indre By', desc: 'Strøget alışveriş caddesi, saraylar ve kaleler', color: 'rgba(90,140,230,0.1)' },
    { name: 'Nørrebro', desc: 'Kültürlerin buluşma noktası, bisiklet yolları ve tasarım dükkanları', color: 'rgba(80,200,120,0.1)' },
    { name: 'Vesterbro', desc: 'Kreatif stüdyolar, eski fabrikalardan dönen restoranlar', color: 'rgba(235,210,80,0.1)' }
];

const hamburgDistricts = [
    { name: 'Speicherstadt', desc: 'UNESCO tescilli tarihi kırmızı tuğla antrepolar ve kanallar', color: 'rgba(235,130,80,0.1)' },
    { name: 'HafenCity', desc: 'Modern ve fütüristik liman mimarisi, Elbphilharmonie binası', color: 'rgba(90,140,230,0.1)' },
    { name: 'St. Pauli', desc: 'Renkli eğlence caddesi Reeperbahn, liman iskelesi Landungsbrücken', color: 'rgba(80,200,120,0.1)' },
    { name: 'Altstadt', desc: 'Tarihi Belediye Binası (Rathaus), Alster gölü çevresi', color: 'rgba(235,210,80,0.1)' }
];

const stockholmItinerary1 = [
    { icon: '✈️', title: 'Uçuş ve Varış', desc: 'İstanbul Sabiha Gökçen\'den ARL Havalimanı\'na uçuş. Havalimanından şehir merkezine transfer.' },
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Comfort Hotel Xpress Stockholm\'e giriş ve kısa bir dinlenme.' },
    { icon: '🏰', title: 'Gamla Stan Keşfi', desc: 'Avrupa\'nın en iyi korunmuş ortaçağ eski şehir merkezi. Renkli dar sokaklar.' },
    { icon: '💂', title: 'Kraliyet Sarayı', desc: 'Kungliga Slottet Sarayı önünde nöbet değişimi törenini izleme.' },
    { icon: '☕', title: 'Fika Molası', desc: 'İsveç\'in meşhur kahve ve tarçınlı çörek (Kanelbulle) ritüeli.' },
    { icon: '🍖', title: 'Geleneksel Akşam Yemeği', desc: 'Södermalm\'da meşhur İsveç köftelerinin tadına bakış.' }
];

const stockholmItinerary2 = [
    { icon: '⚓', title: 'Vasa Müzesi Ziyareti', desc: '1628 yılında batan ve 333 yıl sonra neredeyse tek parça çıkarılan görkemli savaş gemisi.' },
    { icon: '🌿', title: 'Djurgården Adası', desc: 'Şehrin en yeşil ve huzurlu adasında keyifli bir doğa yürüyüşü.' },
    { icon: '📷', title: 'Stadsbiblioteket', desc: 'Mimar Gunnar Asplund tasarımı, dairesel mimarisiyle ünlü büyüleyici kütüphane.' },
    { icon: '🎨', title: 'Södermalm Butik Turu', desc: 'Şık iskandinav tasarımlarının ve vintage dükkanların yer aldığı sokaklarda alışveriş.' },
    { icon: '🌅', title: 'Fjällgatan Panoraması', desc: 'Stockholm\'ün adalarla bezeli eşsiz manzarasını yüksek tepeden fotoğraflama.' }
];

const osloItinerary3 = [
    { icon: '🚌', title: 'Manzaralı Yolculuk', desc: 'İsveç ormanları ve gölleri eşliğinde Stockholm\'den Oslo\'ya konforlu geçiş.' },
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Radisson Blu Scandinavia Hotel, Oslo\'ya giriş ve dinlenme.' },
    { icon: '🚶‍♂️', title: 'Karl Johans Gate', desc: 'Oslo\'nun kalbinde yer alan, dükkanlar ve kafelerle süslü yürüyüş caddesi.' },
    { icon: '🏛️', title: 'Parlamento ve Kraliyet Sarayı', desc: 'Tarihi parlamento binası önünden geçerek tepe üzerindeki saray bahçelerini gezme.' },
    { icon: '⛵', title: 'Aker Brygge Akşamı', desc: 'Eski tersaneden modern bir yaşam merkezine dönüşen limanda deniz mahsulleri ziyafeti.' }
];

const osloItinerary4 = [
    { icon: '🎭', title: 'Oslo Opera Binası', desc: 'Fiyort kıyısında, adeta suyun içinden yükselen beyaz mermer çatısında yürüyüş.' },
    { icon: '🖼️', title: 'Vigeland Parkı', desc: 'Gustav Vigeland\'ın insan yaşam döngüsünü anlatan 200\'den fazla bronz ve granit heykeli.' },
    { icon: '🚢', title: 'Bygdøy Yarımadası', desc: 'Kutup keşif gemisi Fram\'ı ve Kon-Tiki salları sergilerini barındıran müzeler.' },
    { icon: '☕', title: 'Grünerløkka Turu', desc: 'Alternatif kafeleri, nehir kenarı parkları ve sokak sanatlarıyla ünlü mahallede fika.' }
];

const goteborgItinerary5 = [
    { icon: '🚌', title: 'Fiyortlar Boyunca', desc: 'Norveç sınırını geçerek İsveç\'in ikinci büyük şehri Göteborg\'a otobüs yolculuğu.' },
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Scandic Crown Göteborg\'a giriş.' },
    { icon: '🏰', title: 'Haga Tarihi Mahallesi', desc: 'Göteborg\'un en eski mahallesinde ahşap evler arasında dev tarçınlı çöreklerle kahve molası.' },
    { icon: '🛍️', title: 'Kanal Turu ve Alışveriş', desc: 'Şehrin tarihi kanallarında gezinti ve Inom Vallgraven bölgesinde tasarım mağazaları.' },
    { icon: '🐟', title: 'Feskekôrka Keşfi', desc: 'Mimarisi gotik bir kiliseyi andıran meşhur balık pazarını ziyaret.' }
];

const kopenhagItinerary6 = [
    { icon: '🚌', title: 'Öresund Köprüsü\'nden Geçiş', desc: 'İsveç ile Danimarka\'yı birbirine bağlayan efsanevi köprü üzerinden Kopenhag\'a geçiş.' },
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Wakeup Copenhagen, Bernstorffsgade\'ye yerleşim.' },
    { icon: '⛵', title: 'Nyhavn Kanal Yürüyüşü', desc: 'Kopenhag kartpostallarını süsleyen renkli 17. yüzyıl evlerinin önünde yürüyüş.' },
    { icon: '🇩🇰', title: 'Amalienborg Sarayı', desc: 'Kraliyet ailesinin kışlık rezidansında nöbet değişimi seremonisi.' },
    { icon: '🧜‍♀️', title: 'Küçük Deniz Kızı', desc: 'Andersen masallarından ilham alan, şehrin simgesi ünlü bronz heykel ziyareti.' }
];

const kopenhagItinerary7 = [
    { icon: '🎢', title: 'Tivoli Bahçeleri', desc: '1843\'te kurulan, dünyanın en eski ve en büyülü eğlence parklarından birinde nostaljik anlar.' },
    { icon: '🏰', title: 'Rosenborg Kalesi', desc: 'Rönesans mimarisinin şaheseri olan kalede Danimarka kraliyet mücevherlerini görme.' },
    { icon: '🏡', title: 'Özgür Şehir Christiania', desc: 'Kendi kurallarıyla yönetilen, alternatif yaşam tarzı ve sanat galerileriyle ünlü özerk bölge.' },
    { icon: '🍻', title: 'Vesterbro Gurme Turu', desc: 'Kopenhag tasarımcılarının ve şeflerinin yeni gözdesi olan eski kasaplar bölgesinde akşam yemeği.' }
];

const hamburgItinerary8 = [
    { icon: '🚌', title: 'Almanya Yolunda', desc: 'Danimarka\'dan feribot ve karayolu bağlantısı ile yeşil rotaları geçerek Hamburg\'a varış.' },
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Generator Hamburg\'a giriş.' },
    { icon: '🧱', title: 'Speicherstadt Tuğla Binalar', desc: 'UNESCO dünya mirası olan, kanallar üzerindeki devasa tarihi antrepo binalarında yürüyüş.' },
    { icon: '🎵', title: 'Elbphilharmonie Plazası', desc: 'Hamburg\'un yeni simgesi dev konser salonunun izleme terasından panoramik liman manzarası.' },
    { icon: '🚢', title: 'Landungsbrücken İskelesi', desc: 'Hamburg limanının kalbinde dev gemilerin geçişini izleme ve akşam yürüyüşü.' }
];

const hamburgItinerary9 = [
    { icon: '🏛️', title: 'Rathaus ve Alster Gölü', desc: 'Muhteşem neo-rönesans belediye sarayı ve şehir merkezindeki yapay göl Alster çevresinde sabah yürüyüşü.' },
    { icon: '🚂', title: 'Miniatur Wunderland', desc: 'Dünyanın en büyük maket demiryolu sergisi. İnanılmaz detaylardaki minyatür şehirler.' },
    { icon: '✈️', title: 'Dönüş Yolculuğu', desc: 'HAM Havalimanı transferi ve Pegasus havayolları ile İstanbul Sabiha Gökçen\'e dönüş uçuşu.' }
];

const days = [
    { num: 1, date: '22 MAYIS', dayName: 'Cuma', city: 'Stockholm', cityClass: 'city-stockholm',
      transport: { type: 'flight', icon: '✈️', from: 'SAW', to: 'ARL', dep: '08:30', arr: '11:10', carrier: 'Pegasus' },
      hotel: 'Comfort Hotel Xpress Stockholm',
      districts: stockholmDistricts, itinerary: stockholmItinerary1 },
    { num: 2, date: '23 MAYIS', dayName: 'Cumartesi', city: 'Stockholm', cityClass: 'city-stockholm',
      transport: null,
      hotel: 'Comfort Hotel Xpress Stockholm',
      districts: stockholmDistricts, itinerary: stockholmItinerary2 },
    { num: 3, date: '24 MAYIS', dayName: 'Pazar', city: 'Oslo', cityClass: 'city-oslo',
      transport: { type: 'bus', icon: '🚌', from: 'Stockholm', to: 'Oslo', dep: '08:00', arr: '15:10', carrier: 'Flixbus' },
      hotel: 'Radisson Blu Scandinavia Hotel, Oslo',
      districts: osloDistricts, itinerary: osloItinerary3 },
    { num: 4, date: '25 MAYIS', dayName: 'Pazartesi', city: 'Oslo', cityClass: 'city-oslo',
      transport: null,
      hotel: 'Radisson Blu Scandinavia Hotel, Oslo',
      districts: osloDistricts, itinerary: osloItinerary4 },
    { num: 5, date: '26 MAYIS', dayName: 'Salı', city: 'Göteborg', cityClass: 'city-goteborg',
      transport: { type: 'bus', icon: '🚌', from: 'Oslo', to: 'Göteborg', dep: '07:30', arr: '11:05', carrier: 'Vy Bus' },
      hotel: 'Scandic Crown Göteborg',
      districts: goteborgDistricts, itinerary: goteborgItinerary5 },
    { num: 6, date: '27 MAYIS', dayName: 'Çarşamba', city: 'Kopenhag', cityClass: 'city-kopenhag',
      transport: { type: 'bus', icon: '🚌', from: 'Göteborg', to: 'Kopenhag', dep: '07:00', arr: '11:20', carrier: 'Vy Bus' },
      hotel: 'Wakeup Copenhagen, Bernstorffsgade',
      districts: kopenhagDistricts, itinerary: kopenhagItinerary6 },
    { num: 7, date: '28 MAYIS', dayName: 'Perşembe', city: 'Kopenhag', cityClass: 'city-kopenhag',
      transport: null,
      hotel: 'Wakeup Copenhagen, Bernstorffsgade',
      districts: kopenhagDistricts, itinerary: kopenhagItinerary7 },
    { num: 8, date: '29 MAYIS', dayName: 'Cuma', city: 'Hamburg', cityClass: 'city-hamburg',
      transport: { type: 'bus', icon: '🚌', from: 'Kopenhag', to: 'Hamburg', dep: '07:45', arr: '13:05', carrier: 'Flixbus' },
      hotel: 'Generator Hamburg',
      districts: hamburgDistricts, itinerary: hamburgItinerary8 },
    { num: 9, date: '30 MAYIS', dayName: 'Cumartesi', city: 'Hamburg', cityClass: 'city-hamburg',
      transport: { type: 'flight', icon: '✈️', from: 'HAM', to: 'SAW', dep: '13:50', arr: '16:30', carrier: 'Pegasus' },
      hotel: null,
      districts: hamburgDistricts, itinerary: hamburgItinerary9 }
];

const cityStats = {
    'Stockholm': { temp: '15°C', timezone: 'GMT+2', currency: 'SEK (Kr)', currencyRate: '1 SEK = 4.88 TL', lang: 'İsveççe', lat: 59.3293, lon: 18.0686 },
    'Oslo':      { temp: '14°C', timezone: 'GMT+2', currency: 'NOK (Kr)', currencyRate: '1 NOK = 4.92 TL', lang: 'Norveççe', lat: 59.9139, lon: 10.7522 },
    'Göteborg':  { temp: '15°C', timezone: 'GMT+2', currency: 'SEK (Kr)', currencyRate: '1 SEK = 4.88 TL', lang: 'İsveççe', lat: 57.7089, lon: 11.9746 },
    'Kopenhag':  { temp: '16°C', timezone: 'GMT+2', currency: 'DKK (Kr)', currencyRate: '1 DKK = 7.09 TL', lang: 'Danimarkaca', lat: 55.6761, lon: 12.5683 },
    'Hamburg':   { temp: '17°C', timezone: 'GMT+2', currency: 'EUR (€)',   currencyRate: '1 EUR = 53.00 TL', lang: 'Almanca', lat: 53.5511, lon: 9.9937 }
};

const languageGuides = {
    'İsveççe': [
        { word: 'Hej', tr: 'Merhaba' },
        { word: 'Hej då', tr: 'Hoşça kal' },
        { word: 'Tack', tr: 'Teşekkürler' },
        { word: 'Snälla', tr: 'Lütfen' },
        { word: 'Ja', tr: 'Evet' },
        { word: 'Nej', tr: 'Hayır' },
        { word: 'God morgon', tr: 'Günaydın' },
        { word: 'God natt', tr: 'İyi geceler' },
        { word: 'Mitt namn är...', tr: 'Benim adım...' },
        { word: 'Hur mår du?', tr: 'Nasılsın?' },
        { word: 'Bra, tack', tr: 'İyiyim, teşekkürler' },
        { word: 'Ursäkta', tr: 'Afedersiniz / Pardon' },
        { word: 'Jag förstår inte', tr: 'Anlamıyorum' },
        { word: 'Talar du engelska?', tr: 'İngilizce konuşuyor musunuz?' },
        { word: 'Hur mycket kostar det?', tr: 'Bu ne kadar?' },
        { word: 'Var är toaletten?', tr: 'Tuvalet nerede?' },
        { word: 'Hjälp!', tr: 'Yardım edin!' },
        { word: 'Trevligt att träffas', tr: 'Tanıştığımıza memnun oldum' },
        { word: 'Välkommen', tr: 'Hoş geldiniz' },
        { word: 'Skål!', tr: 'Şerefe!' }
    ],
    'Norveççe': [
        { word: 'Hei', tr: 'Merhaba' },
        { word: 'Ha det', tr: 'Hoşça kal' },
        { word: 'Takk', tr: 'Teşekkürler' },
        { word: 'Vær så snill', tr: 'Lütfen' },
        { word: 'Ja', tr: 'Evet' },
        { word: 'Nei', tr: 'Hayır' },
        { word: 'God morgen', tr: 'Günaydın' },
        { word: 'God natt', tr: 'İyi geceler' },
        { word: 'Mitt namn er...', tr: 'Benim adım...' },
        { word: 'Hvordan går det?', tr: 'Nasılsın?' },
        { word: 'Bra, takk', tr: 'İyiyim, teşekkürler' },
        { word: 'Unskyld', tr: 'Afedersiniz / Pardon' },
        { word: 'Jeg forstår ikke', tr: 'Anlamıyorum' },
        { word: 'Snakker du engelsk?', tr: 'İngilizce konuşuyor musunuz?' },
        { word: 'Hvor mye koster det?', tr: 'Bu ne kadar?' },
        { word: 'Hvor er toalettet?', tr: 'Tuvalet nerede?' },
        { word: 'Hjelp!', tr: 'Yardım edin!' },
        { word: 'Hyggelig å møte deg', tr: 'Tanıştığımıza memnun oldum' },
        { word: 'Velkommen', tr: 'Hoş geldiniz' },
        { word: 'Skål!', tr: 'Şerefe!' }
    ],
    'Danimarkaca': [
        { word: 'Hej', tr: 'Merhaba' },
        { word: 'Farvel', tr: 'Hoşça kal' },
        { word: 'Tak', tr: 'Teşekkürler' },
        { word: 'Behage', tr: 'Lütfen' },
        { word: 'Ja', tr: 'Evet' },
        { word: 'Nej', tr: 'Hayır' },
        { word: 'Godmorgen', tr: 'Günaydın' },
        { word: 'Godnat', tr: 'İyi geceler' },
        { word: 'Mit navn er...', tr: 'Benim adım...' },
        { word: 'Hvordan går det?', tr: 'Nasılsın?' },
        { word: 'Fint, tak', tr: 'İyiyim, teşekkürler' },
        { word: 'Undskyld', tr: 'Afedersiniz / Pardon' },
        { word: 'Jeg forstår ikke', tr: 'Anlamıyorum' },
        { word: 'Taler du engelsk?', tr: 'İngilizce konuşuyor musunuz?' },
        { word: 'Hvor meget koster det?', tr: 'Bu ne kadar?' },
        { word: 'Hvor er toilettet?', tr: 'Tuvalet nerede?' },
        { word: 'Hjælp!', tr: 'Yardım edin!' },
        { word: 'Rart at møde dig', tr: 'Tanıştığımıza memnun oldum' },
        { word: 'Velkommen', tr: 'Hoş geldiniz' },
        { word: 'Skål!', tr: 'Şerefe!' }
    ],
    'Almanca': [
        { word: 'Hallo', tr: 'Merhaba' },
        { word: 'Tschüss', tr: 'Hoşça kal' },
        { word: 'Danke', tr: 'Teşekkürler' },
        { word: 'Bitte', tr: 'Lütfen' },
        { word: 'Ja', tr: 'Evet' },
        { word: 'Nein', tr: 'Hayır' },
        { word: 'Guten Morgen', tr: 'Günaydın' },
        { word: 'Gute Nacht', tr: 'İyi geceler' },
        { word: 'Mein Name ist...', tr: 'Benim adım...' },
        { word: 'Wie geht es dir?', tr: 'Nasılsın?' },
        { word: 'Gut, danke', tr: 'İyiyim, teşekkürler' },
        { word: 'Entschuldigung', tr: 'Afedersiniz / Pardon' },
        { word: 'Ich verstehe nicht', tr: 'Anlamıyorum' },
        { word: 'Sprechen Sie Englisch?', tr: 'İngilizce konuşuyor musunuz?' },
        { word: 'Wie viel kostet das?', tr: 'Bu ne kadar?' },
        { word: 'Wo ist die Toilette?', tr: 'Tuvalet nerede?' },
        { word: 'Hilfe!', tr: 'Yardım edin!' },
        { word: 'Freut mich, Sie kennenzulernen', tr: 'Tanıştığımıza memnun oldum' },
        { word: 'Willkommen', tr: 'Hoş geldiniz' },
        { word: 'Prost!', tr: 'Şerefe!' }
    ]
};

/* ===== DEV TOOLS, SOURCE CODE & RIGHT-CLICK PROTECTION ===== */
(function() {
    // 1. Yazı Seçme, Kopyalama ve Sürüklemeyi Engelleme
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
        }
        input, textarea, select {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        @media print {
            body { display: none !important; }
        }
    `;
    document.head.appendChild(style);

    // Kopyalama ve Kesme İşlemlerini Durdurma
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());

    // 2. Sağ Tık Menüsünü Engelleme
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
        return false;
    });

    // 3. Geliştirici Kısayollarını Engelleme (Windows ve macOS)
    document.addEventListener('keydown', e => {
        // F12 (Geliştirici Araçları)
        if (e.keyCode === 123 || e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl / Cmd (metaKey) Kontrolleri
        const isCtrlCmd = e.ctrlKey || e.metaKey;
        const isShift = e.shiftKey;
        const isAlt = e.altKey;

        // Ctrl+Shift+I veya Cmd+Opt+I (Öğeyi İncele)
        if (isCtrlCmd && (isShift || isAlt) && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J veya Cmd+Opt+J (Konsol)
        if (isCtrlCmd && (isShift || isAlt) && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C veya Cmd+Opt+C (Element Seçici)
        if (isCtrlCmd && (isShift || isAlt) && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+K veya Cmd+Opt+K (Firefox Web Konsolu)
        if (isCtrlCmd && (isShift || isAlt) && (e.key === 'K' || e.key === 'k' || e.keyCode === 75)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+E veya Cmd+Opt+E (Network sekmesi)
        if (isCtrlCmd && (isShift || isAlt) && (e.key === 'E' || e.key === 'e' || e.keyCode === 69)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+U veya Cmd+U / Cmd+Opt+U (Kaynak Kodunu Görüntüle)
        if (isCtrlCmd && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+S veya Cmd+S (Sayfayı Kaydet)
        if (isCtrlCmd && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+P veya Cmd+P (Sayfayı Yazdır)
        if (isCtrlCmd && (e.key === 'P' || e.key === 'p' || e.keyCode === 80)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+M (Mobil Görünüm)
        if (isCtrlCmd && isShift && (e.key === 'M' || e.key === 'm' || e.keyCode === 77)) {
            e.preventDefault();
            return false;
        }
    });

    // 4. Geliştirici Konsolu Açıldığında Sayfayı Kilitleme / Temizleme
    const warningDiv = `
        <div style="
            display: flex; 
            flex-direction: column;
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            background: radial-gradient(circle, #0f172a 0%, #020617 100%); 
            color: #ef4444; 
            font-family: 'Outfit', sans-serif; 
            text-align: center; 
            padding: 40px;
            box-sizing: border-box;
        ">
            <span style="font-size: 5rem; margin-bottom: 20px; filter: drop-shadow(0 0 20px rgba(239, 68, 68, 0.4));">⚠️</span>
            <h1 style="font-size: 2.2rem; font-weight: 800; margin: 0 0 15px 0; background: linear-gradient(135deg, #ffffff 0%, #ef4444 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">GÜVENLİK İHLALİ</h1>
            <p style="font-size: 1.1rem; color: #94a3b8; max-width: 600px; line-height: 1.6; margin: 0 0 30px 0;">
                Bu web portalının kaynak kodları ve geliştirici paneline erişim güvenlik nedeniyle engellenmiştir. Lütfen geliştirici araçlarını kapatarak sayfayı yenileyiniz.
            </p>
            <button onclick="window.location.reload()" style="
                background: rgba(239, 68, 68, 0.1); 
                border: 1px solid #ef4444; 
                color: #ffffff; 
                padding: 12px 30px; 
                border-radius: 30px; 
                font-family: inherit; 
                font-size: 1rem; 
                font-weight: 600; 
                cursor: pointer; 
                transition: all 0.3s;
            " onmouseover="this.style.background='#ef4444'; this.style.boxShadow='0 0 20px rgba(239,68,68,0.5)';" onmouseout="this.style.background='rgba(239,68,68,0.1)'; this.style.boxShadow='none';">
                Sayfayı Yenile
            </button>
        </div>
    `;

    function detectDevTools() {
        const devtools = new Image();
        Object.defineProperty(devtools, 'id', {
            get: function() {
                document.body.innerHTML = warningDiv;
                throw new Error("Geliştirici Konsolu Algılandı!");
            }
        });
        console.log(devtools);
        console.clear();
    }

    // Güvenlik denetleme döngüsü (Konsol kontrolü)
    setInterval(function() {
        detectDevTools();
    }, 1000);

    // debugger döngüsü (Konsol açılırsa breakpoint kilitlenmesi sağlar)
    setInterval(function() {
        (function() {
            return false;
        }['constructor']('debugger')());
    }, 500);
})();
