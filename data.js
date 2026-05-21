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
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Comfort Hotel Stockholm\'e giriş ve kısa bir dinlenme.' },
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
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Radisson Otel Oslo\'ya giriş ve dinlenme.' },
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
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Wakeup Comfort Kopenhag\'a yerleşim.' },
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
    { icon: '🏨', title: 'Otele Yerleşim', desc: 'Generator Hotel Hamburg\'a giriş.' },
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
      hotel: 'Comfort Hotel Stockholm',
      districts: stockholmDistricts, itinerary: stockholmItinerary1 },
    { num: 2, date: '23 MAYIS', dayName: 'Cumartesi', city: 'Stockholm', cityClass: 'city-stockholm',
      transport: null,
      hotel: 'Comfort Hotel Stockholm',
      districts: stockholmDistricts, itinerary: stockholmItinerary2 },
    { num: 3, date: '24 MAYIS', dayName: 'Pazar', city: 'Oslo', cityClass: 'city-oslo',
      transport: { type: 'bus', icon: '🚌', from: 'Stockholm', to: 'Oslo', dep: '08:00', arr: '15:10', carrier: 'Flixbus' },
      hotel: 'Radisson Otel Oslo',
      districts: osloDistricts, itinerary: osloItinerary3 },
    { num: 4, date: '25 MAYIS', dayName: 'Pazartesi', city: 'Oslo', cityClass: 'city-oslo',
      transport: null,
      hotel: 'Radisson Otel Oslo',
      districts: osloDistricts, itinerary: osloItinerary4 },
    { num: 5, date: '26 MAYIS', dayName: 'Salı', city: 'Göteborg', cityClass: 'city-goteborg',
      transport: { type: 'bus', icon: '🚌', from: 'Oslo', to: 'Göteborg', dep: '07:30', arr: '11:05', carrier: 'Vy Bus' },
      hotel: 'Scandic Crown Göteborg',
      districts: goteborgDistricts, itinerary: goteborgItinerary5 },
    { num: 6, date: '27 MAYIS', dayName: 'Çarşamba', city: 'Kopenhag', cityClass: 'city-kopenhag',
      transport: { type: 'bus', icon: '🚌', from: 'Göteborg', to: 'Kopenhag', dep: '07:00', arr: '11:20', carrier: 'Vy Bus' },
      hotel: 'Wakeup Comfort Kopenhag',
      districts: kopenhagDistricts, itinerary: kopenhagItinerary6 },
    { num: 7, date: '28 MAYIS', dayName: 'Perşembe', city: 'Kopenhag', cityClass: 'city-kopenhag',
      transport: null,
      hotel: 'Wakeup Comfort Kopenhag',
      districts: kopenhagDistricts, itinerary: kopenhagItinerary7 },
    { num: 8, date: '29 MAYIS', dayName: 'Cuma', city: 'Hamburg', cityClass: 'city-hamburg',
      transport: { type: 'bus', icon: '🚌', from: 'Kopenhag', to: 'Hamburg', dep: '07:45', arr: '13:05', carrier: 'Flixbus' },
      hotel: 'Generator Hotel Hamburg',
      districts: hamburgDistricts, itinerary: hamburgItinerary8 },
    { num: 9, date: '30 MAYIS', dayName: 'Cumartesi', city: 'Hamburg', cityClass: 'city-hamburg',
      transport: { type: 'flight', icon: '✈️', from: 'HAM', to: 'SAW', dep: '13:50', arr: '16:30', carrier: 'Pegasus' },
      hotel: null,
      districts: hamburgDistricts, itinerary: hamburgItinerary9 }
];

const cityStats = {
    'Stockholm': { temp: '15°C', timezone: 'GMT+2', currency: 'SEK (Kr)', lang: 'İsveççe', lat: 59.3293, lon: 18.0686 },
    'Oslo':      { temp: '14°C', timezone: 'GMT+2', currency: 'NOK (Kr)', lang: 'Norveççe', lat: 59.9139, lon: 10.7522 },
    'Göteborg':  { temp: '15°C', timezone: 'GMT+2', currency: 'SEK (Kr)', lang: 'İsveççe', lat: 57.7089, lon: 11.9746 },
    'Kopenhag':  { temp: '16°C', timezone: 'GMT+2', currency: 'DKK (Kr)', lang: 'Danimarkaca', lat: 55.6761, lon: 12.5683 },
    'Hamburg':   { temp: '17°C', timezone: 'GMT+2', currency: 'EUR (€)',   lang: 'Almanca', lat: 53.5511, lon: 9.9937 }
};
