const quizData = {
    az: [
        // --- TARİX ---
        {
            question: "Azərbaycan Demokratik Respublikası hansı ildə yaradılmışdır?",
            options: ["1918", "1920", "1991", "1936"],
            correct: 0,
            category: "Tarix"
        },
        {
            question: "İkinci Dünya Müharibəsi hansı ildə bitmişdir?",
            options: ["1943", "1945", "1950", "1939"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Şah İsmayıl Xatai hansı sülalənin və dövlətin banisidir?",
            options: ["Şirvanşahlar", "Səfəvilər", "Qacarlar", "Atabəylər"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Xocalı soyqırımı hansı ildə baş vermişdir?",
            options: ["1990", "1991", "1992", "1993"],
            correct: 2,
            category: "Tarix"
        },
        {
            question: "Bakının simvolu olan Qız Qalası təxminən hansı əsrə aiddir?",
            options: ["VII əsr", "XII əsr", "XV əsr", "XIX əsr"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Azərbaycan Xalq Cümhuriyyəti neçə il fəaliyyət göstərmişdir?",
            options: ["2 il", "23 ay", "5 il", "10 il"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Gülüstan müqaviləsi hansı ildə imzalanmışdır?",
            options: ["1813", "1828", "1795", "1804"],
            correct: 0,
            category: "Tarix"
        },
        {
            question: "Çaldıran döyüşü hansı ildə baş vermişdir?",
            options: ["1514", "1501", "1524", "1538"],
            correct: 0,
            category: "Tarix"
        },

        // --- COĞRAFİYA ---
        {
            question: "Azərbaycanın paytaxtı hansı şəhərdir?",
            options: ["Gəncə", "Bakı", "Sumqayıt", "Şəki"],
            correct: 1,
            category: "Coğrafiya"
        },
        {
            question: "Dünyanın ən böyük okeanı hansıdır?",
            options: ["Atlantik", "Hind", "Şaxtalı Buzlu", "Sakit (Tixay)"],
            correct: 3,
            category: "Coğrafiya"
        },
        {
            question: "Azərbaycanın ən uzun çayı hansıdır?",
            options: ["Kür", "Araz", "Samur", "Qanıx"],
            correct: 0,
            category: "Coğrafiya"
        },
        {
            question: "Dünyanın ən hündür dağı hansıdır?",
            options: ["Elbrus", "Everest (Comolunqma)", "Kəpəz", "Monblan"],
            correct: 1,
            category: "Coğrafiya"
        },
        {
            question: "Azərbaycanın ən hündür nöqtəsi (zirvəsi) hansıdır?",
            options: ["Bazardüzü", "Şahdağ", "Tufandağ", "Babadağ"],
            correct: 0,
            category: "Coğrafiya"
        },
        {
            question: "Xəzər dənizi coğrafi cəhətdən əslində nə hesab olunur?",
            options: ["Okean", "Açıq dəniz", "Dünyanın ən böyük gölü", "Körfəz"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Göy göl hansı rayonda yerləşir?",
            options: ["Şamaxı", "Quba", "Göygöl", "İsmayıllı"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Azərbaycan neçə həmsərhəd dövləti ilə qonşudur?",
            options: ["3", "4", "5", "6"],
            correct: 2,
            category: "Coğrafiya"
        },

        // --- RİYAZİYYAT ---
        {
            question: "Düzbucaqlının sahəsini tapmaq üçün hansı düstur istifadə olunur?",
            options: ["Eni × Uzunluğu", "2 × (Eni + Uzunluğu)", "Tərəf altdan × hündürlük", "Pi × r²"],
            correct: 0,
            category: "Riyaziyyat"
        },
        {
            question: "9-un kvadratı ədədi nəyə bərabərdir?",
            options: ["72", "81", "18", "99"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "Üçbucağın daxili bucaqlarının cəmi neçə dərəcədir?",
            options: ["90°", "180°", "360°", "270°"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "Çevrənin sahəsini tapmaq üçün hansı düstur istifadə olunur?",
            options: ["2 × Pi × r", "Pi × r²", "4 × a", "a × b"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "100 ədədinin 20 faizi neçədir?",
            options: ["10", "20", "50", "80"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "Aşağıdakılardan hansı sadə ədəd deyil?",
            options: ["7", "11", "13", "15"],
            correct: 3,
            category: "Riyaziyyat"
        },
        {
            question: "Düz bucağın dərəcə ölçüsü neçədir?",
            options: ["45°", "90°", "180°", "360°"],
            correct: 1,
            category: "Riyaziyyat"
        },

        // --- FUTBOL ---
        {
            question: "Çempionlar Liqasını ən çox qazanan klub hansıdır?",
            options: ["Barcelona", "AC Milan", "Real Madrid", "Manchester United"],
            correct: 2,
            category: "Futbol"
        },
        {
            question: "Dünya çempionatında ən çox qızıl medal qazanan milli komanda hansıdır?",
            options: ["Almaniya", "Argentina", "Braziliya", "İtaliya"],
            correct: 2,
            category: "Futbol"
        },
        {
            question: "Bir komandada meydanda eyni vaxtda neçə futbolçu olur?",
            options: ["9", "10", "11", "12"],
            correct: 2,
            category: "Futbol"
        },
        {
            question: "Lionel Messi karyerası ərzində əsasən hansı nömrəli formanı geyinib?",
            options: ["7", "10", "9", "11"],
            correct: 1,
            category: "Futbol"
        },
        {
            question: "Azərbaycan milli futbol komandasının ev oyunlarını keçirdiyi əsas stadion hansıdır?",
            options: ["Tofiq Bəhramov adına Respublika Stadionu", "Baku Olimpiya Stadionu", "Dalğa Arena", "Bank Respublika Arena"],
            correct: 1,
            category: "Futbol"
        },
        {
            question: "Dünyada 'Futbol kralı' kimi tanınan məşhur braziliyalı əfsanəvi futbolçu kimdir?",
            options: ["Maradona", "Pele", "Zidan", "Ronaldo"],
            correct: 1,
            category: "Futbol"
        },
        {
            question: "Futbol oyununun əsas vaxtı (fasiləsiz) neçə dəqiqədir?",
            options: ["80 dəqiqə", "90 dəqiqə", "100 dəqiqə", "120 dəqiqə"],
            correct: 1,
            category: "Futbol"
        },
        {
            question: "Bir matçda hakimin futbolçuya göstərdiyi qırmızı vərəqə nəyi bildirir?",
            options: ["Xəbərdarlıq", "Oyundan qovulma", "Əvəzlənmə", "Cərimə zərbəsi"],
            correct: 1,
            category: "Futbol"
        },

        // --- ÇƏTİN TARİX SUALLARI ---
        {
            question: "İrəvan xanlığı Rusiya imperiyası tərəfindən işğal edilərək hansı ildə ləğv edilmişdir?",
            options: ["1806", "1813", "1828", "1844"],
            correct: 2,
            category: "Tarix"
        },
        {
            question: "Azərbaycan Xalq Cümhuriyyətinin parlamentində təmsil olunan 'Müsavat' fraksiyasının rəhbəri kim idi?",
            options: ["Məhəmməd Əmin Rəsulzadə", "Məmməd Həsən Hacınski", "Fətəli xan Xoyski", "Nəsib bəy Yusifbəyli"],
            correct: 0,
            category: "Tarix"
        },
        {
            question: "Qaraqoyunlu dövlətinin paytaxtı hansı şəhər olmuşdur?",
            options: ["Təbriz", "Şamaxı", "Gəncə", "Naxçıvan"],
            correct: 0,
            category: "Tarix"
        },
        {
            question: "Səfəvilər dövləti ilə Osmanlı imperiyası arasında imzalanmış və Səfəvilərin məğlubiyyəti ilə nəticələnən Qəsri-Şirin müqaviləsi hansı ildə bağlanmışdır?",
            options: ["1514", "1555", "1639", "1724"],
            correct: 2,
            category: "Tarix"
        },

        // --- ÇƏTİN COĞRAFİYA SUALLARI ---
        {
            question: "Dünyada ən çox ölkənin ərazisindən keçən beynəlxalq çay hansıdır?",
            options: ["Volqa", "Dunay", "Amazon", "Missisipi"],
            correct: 1,
            category: "Coğrafiya"
        },
        {
            question: "Azərbaycanın ən dərin gölü hansıdır?",
            options: ["Göy göl", "Maral göl", "Böyük Alagöl", "Candargöl"],
            correct: 0,
            category: "Coğrafiya"
        },
        {
            question: "Dünyanın ən qurak səhralarından biri olan Atakama səhrası hansı kıtada yerləşir?",
            options: ["Afrika", "Avstraliya", "Cənubi Amerika", "Asiya"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Avropa ilə Asiya qitələrini bir-birindən ayıran təbii sərhəd olan dağ silsiləsi hansıdır?",
            options: ["Alp dağları", "Ural dağları", "Qafqaz dağları", "Himalay dağları"],
            correct: 1,
            category: "Coğrafiya"
        },

        // --- ÇƏTİN RİYAZİYYAT SUALLARI ---
        {
            question: "Birinci həddi 3, silsilə fərqi 4 olan ədədi silsilənin ilk 10 həddinin cəmi neçədir?",
            options: ["195", "210", "225", "240"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "Törəməsi özünə bərabər olan üstlü funksiyanın əsası (e) təxminən hansı ədədə bərabərdir?",
            options: ["2.178", "2.718", "3.141", "1.414"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "Qabarıq doqquzbucaqlının diaqonallarının ümumi sayı neçədir?",
            options: ["27", "36", "54", "18"],
            correct: 0,
            category: "Riyaziyyat"
        },
        {
            question: "Sinus 30 dərəcə üstəgəl kosinus 60 dərəcə cəmi nəyə bərabərdir?",
            options: ["0", "0.5", "1", "√3 / 2"],
            correct: 2,
            category: "Riyaziyyat"
        },

        // --- ÇƏTİN FUTBOL SUALLARI ---
        {
            question: "Bir mövsümdə UEFA Çempionlar Liqasında ən çox qol (17 qol) vuran futbolçu kimdir?",
            options: ["Lionel Messi", "Robert Levandovski", "Cristiano Ronaldo", "Karim Benzema"],
            correct: 2,
            category: "Futbol"
        },
        {
            question: "Azərbaycan klubları tarixində UEFA Çempionlar Liqasının qrup mərhələsinə vəsiqə qazanan ilk klub hansıdır?",
            options: ["Neftçi PFK", "Qarabağ FK", "Bakı FK", "Xəzər Lənkəran"],
            correct: 1,
            category: "Futbol"
        },
        {
            question: "Dünya çempionatları tarixində final mərhələsində het-trik edən ilk futbolçu kimdir?",
            options: ["Pele", "Jef Hurst", "Gerd Müller", "Diego Maradona"],
            correct: 1,
            category: "Futbol"
        },
        {
            question: "Karyerası ərzində ən çox rəsmi qol vuran futbolçu kimi Ginnesin Rekordlar Kitabına düşən oyunçu kimdir?",
            options: ["Josef Bican", "Pele", "Cristiano Ronaldo", "Lionel Messi"],
            correct: 2,
            category: "Futbol"
        },

        // --- ÇƏTİN TARİX SUALLARI (Davamı) ---
        {
            question: "Qaraqoyunlu dövlətinin süqutundan sonra onun torpaqlarını ələ keçirən türk dövləti hansıdır?",
            options: ["Şirvanşahlar", "Ağqoyunlular", "Səfəvilər", "Osmanlı imperiyası"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Xilafətə qarşı azadlıq mübarizəsi aparan Xürrəmlər hərəkatının əsas mərkəzi olan Bəzz qalası hansı rayonumuzun ərazisində yerləşir?",
            options: ["Ordubad", "Babək", "Culfa", "Şərur"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Azərbaycan Xalq Cümhuriyyətinin paytaxtının Gəncədən Bakıya köçürüldüyü tarix hansıdır?",
            options: ["28 May 1918", "16 Sentyabr 1918", "7 Dekabr 1918", "28 Aprel 1920"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Atropatena dövləti hansı imperiyanın parçalanmasından sonra müstəqillik qazanmışdır?",
            options: ["Əhəməni imperiyası", "Makedoniyalı İsgəndərin imperiyası", "Roma imperiyası", "Sasanilər dövləti"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Rusiyada 1905-ci il inqilabı dövründə Bakıda yaradılmış ilk gizli müsəlman sosial-demokrat təşkilatı necə adlanırdı?",
            options: ["Hümmət", "İttihad", "Müsavat", "Difai"],
            correct: 0,
            category: "Tarix"
        },
        {
            question: "Səfəvilər dövləti ilə Osmanlı imperiyası arasında 1639-cu ildə imzalanmış və sülhü təmin edən müqavilə hansıdır?",
            options: ["Amasya müqaviləsi", "Qəsri-Şirin müqaviləsi", "İstanbul müqaviləsi", "Serav müqaviləsi"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Nadir şah Əfşarın Hindistana yürüşü zamanı ələ keçirdiyi və dünya tarixində məşhur olan sərvətlər hansılar idi?",
            options: ["Kohi-nur almazı və Taus (Tovuz) taxtı", "Kərim xanın qılıncı", "Şah İsmayılın tacı", "Qızıl Qalanın xəzinəsi"],
            correct: 0,
            category: "Tarix"
        },
        {
            question: "1828-ci il Türkmənçay müqaviləsinə əsasən Araz çayından şimaldakı hansı xanlıqlar Rusiya imperiyasının tərkibinə verilmişdi?",
            options: ["Şəki və Şirvan", "İrəvan və Naxçıvan", "Gəncə və Qarabağ", "Bakı və Quba"],
            correct: 1,
            category: "Tarix"
        },
        {
            question: "Şirvanşahlar dövlətinin monqol yürüşləri dövründə hakimiyyətdə olan və ölkəni sərt dağıntılardan qorumağa çalışan hökmdarı kim idi?",
            options: ["I Axsitan", "III Manuçöhr", "Xəlilullah I", "Fəribərz"],
            correct: 0,
            category: "Tarix"
        },
        {
            question: "Azərbaycan Xalq Cümhuriyyətinin parlamentinin ilk sədri kim seçilmişdir?",
            options: ["Məhəmməd Əmin Rəsulzadə", "Əlimərdan bəy Topçubaşov", "Həsən bəy Ağayev", "Nəsib bəy Yusifbəyli"],
            correct: 2,
            category: "Tarix"
        },

        // --- ÇƏTİN COĞRAFİYA SUALLARI (Davamı) ---
        {
            question: "Dünyanın ən dərin okean çökəkliyi (Marian xəndəyi) hansı okeanda yerləşir?",
            options: ["Atlantik okeanı", "Hind okeanı", "Sakit okean", "Şimal Buzlu okeanı"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Azərbaycan ərazisindən başlayan və ölkənin ən uzun çayı olan Kürün ümumi uzunluğu təxminən neçə kilometrdir?",
            options: ["1050 km", "1250 km", "1515 km", "2000 km"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Avropa ilə Asiya qitələrini təbii olaraq bir-birindən ayıran dağ silsiləsi hansıdır?",
            options: ["Alp dağları", "Ural dağları", "Qafqaz dağları", "Himalay dağları"],
            correct: 1,
            category: "Coğrafiya"
        },
        {
            question: "Afrikanın ən hündür nöqtəsi olan sönmüş Kilimancaro vulkanı hansı ölkənin ərazisində yerləşir?",
            options: ["Keniya", "Misir", "Tanzaniya", "Efiopiya"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Dünyanın ən böyük yarımadası hansıdır?",
            options: ["Skandinaviya yarımadası", "Hind-Çin yarımadası", "Ərəbistan yarımadası", "Labrador yarımadası"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Azərbaycanın Naxçıvan Muxtar Respublikasının hansı xarici dövlət ilə birbaşa quru səhri yoxdur?",
            options: ["Türkiyə", "İran", "Gürcüstan", "Ermənistan"],
            correct: 2,
            category: "Coğrafiya"
        },
        {
            question: "Dünyanın ən qurak və qızmar səhralarından biri olan Sahara səhrası hansı qitədə yerləşir?",
            options: ["Asiya", "Afrika", "Avstraliya", "Cənubi Amerika"],
            correct: 1,
            category: "Coğrafiya"
        },
        {
            question: "Azərbaycanın ən dərin gölü hansıdır?",
            options: ["Göy göl", "Maral göl", "Böyük Alagöl", "Candargöl"],
            correct: 0,
            category: "Coğrafiya"
        },
        {
            question: "Dünyada ən çox adaya sahib olan (minlərlə adası olan) ölkə hansıdır?",
            options: ["İsveç", "Yaponiyа", "İndoneziya", "Böyük Britaniya"],
            correct: 0,
            category: "Coğrafiya"
        },
        {
            question: "Yer kürəsinin coğrafi Şimal qütbü hansı okeanın suları üzərində yerləşir?",
            options: ["Sakit okean", "Atlantik okeanı", "Şimal Buzlu okeanı", "Hind okeanı"],
            correct: 2,
            category: "Coğrafiya"
        },

        // --- ÇƏTİN RİYAZİYYAT SUALLARI (Davamı) ---
        {
            question: "Kompleks ədədlər nəzəriyyəsində i-nin (xəyali vahidin) 2026-cı dərəcədən qüvvəti nəyə bərabərdir? ($i^{2026}$)",
            options: ["1", "-1", "i", "-i"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "İki zər atıldıqda düşən xalların cəminin 8ə bərabər olmaq ehtimalı neçədir?",
            options: ["5/36", "1/6", "7/36", "1/9"],
            correct: 0,
            category: "Riyaziyyat"
        },
        {
            question: "Loqarifmanın hesablamaq: $\\log_2 32 + \\log_3 81$ ifadəsinin qiyməti neçədir?",
            options: ["7", "8", "9", "12"],
            correct: 2,
            category: "Riyaziyyat"
        },
        {
            question: "Funksiyanın törəməsi: $f(x) = x^3 \\cdot \\ln(x)$ funksiyasının törəməsi $f'(x)$ nəyə bərabərdir?",
            options: ["$3x^2 \\ln(x)$", "$x^2(3\\ln(x) + 1)$", "$3x^2 + \\frac{1}{x}$", "$x^2 \\ln(x) + x$"],
            correct: 1,
            category: "Riyaziyyat"
        },
        {
            question: "Aritmetik silsilədə $a_1 = 3$ və $d = 4$ olarsa, ilk 10 həddin cəmi ($S_{10}$) neçədir?",
            options: ["195", "210", "225", "240"],
            correct: 1,
            category: "Riyaziyyat"
        },

        // --- ÇƏTİN FUTBOL SUALLARI (Davamı) ---
        {
            question: "FİFA Dünya Çempionatları tarixində ən sürətli qolu (10.8 saniyəyə) vuran futbolçu kimdir?",
            options: ["Hakan Şükür", "Pele", "Kilian Mbappe", "Ronaldo Nazario"],
            correct: 0,
            category: "Futbol"
        },
        {
            question: "UEFA Çempionlar Liqasını baş məşqçi kimi ən çox (5 dəfə) qazanan mütəxəssis kimdir?",
            options: ["Pep Qvardiola", "Ser Aleks Ferqyuson", "Karlo Ançelotti", "Zinəddin Zidan"],
            correct: 2,
            category: "Futbol"
        },
        {
            question: "Tarixçilərə görə, ilk rəsmi FİFA Dünya Çempionatı (1930) hansı ölkədө keçirilmiş və ev sahibi komanda qalib gəlmişdir?",
            options: ["Braziliya", "İtaliya", "Uruqvay", "Argentina"],
            correct: 2,
            category: "Futbol"
        },
        {
            question: "Bir mövsümdə Avropa Liqası / UEFA Kubokunda ən çox qol (17 qol) vuraraq rekord qoyan futbolçu kimdir?",
            options: ["Radamel Falkao", "Cristiano Ronaldo", "Lionel Messi", "Klass-Yan Huntelaar"],
            correct: 0,
            category: "Futbol"
        },
        {
            question: "İtaliya A Seriyasında bir mövsümdə (38 tur formatında) ən çox qol vurma rekorduna (36 qol) sahib olan oyunçu kimdir?",
            options: ["Frank Totti", "Qonsalo İquain", "Çiro İmmobile", "Zlatan İbrahimoviç"],
            correct: 2,
            category: "Futbol"
        },

        // --- ÇƏTİN İNFORMATİKA SUALLARI ---
        {
            question: "OSI şəbəkə modelinin neçə səviyyəsi var və Tətbiqi səviyyə (Application layer) neçənci səviyyədir?",
            options: ["5-ci səviyyə", "6-cı səviyyə", "7-ci səviyyə", "4-cü səviyyə"],
            correct: 2,
            category: "İnformatika"
        },
        {
            question: "Verilənlər strukturunda FIFO (First In, First Out - İlk gələn ilk çıxır) prinsipi ilə işləyən struktur hansıdır?",
            options: ["Stek (Stack)", "Növbə (Queue)", "Ağac (Tree)", "Qraf (Graph)"],
            correct: 1,
            category: "İnformatika"
        },
        {
            question: "Python proqramlaşdırma dilində siyahının (list) sonuna yeni element əlavə etmək üçün hansı metoddan istifadə olunur?",
            options: ["add()", "push()", "append()", "insert()"],
            correct: 2,
            category: "İnformatika"
        },
        {
            question: "Aşağıdakı alqoritmik mürəkkəbliklərdən (Big O notation) hansı ən pis (ən yavaş) böyümə sürətinə malikdir?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n!)"],
            correct: 3,
            category: "İnformatika"
        },
        {
            question: "Veb səhifələrin strukturunu və məzmununu təyin etmək üçün əsasən hansı dildən istifadə olunur?",
            options: ["Python", "HTML", "CSS", "SQL"],
            correct: 1,
            category: "İnformatika"
        },

        // --- ÇƏTİN ÜMUMİ BİLİKLƏR SUALLARI ---
        {
            question: "Bəşər tarixinin ən qədim yazılı əsərlərindən biri hesab olunan 'Gilqamş dastanı' hansı qədim sivilizasiyaya aiddir?",
            options: ["Şumerlər", "Qədim Misir", "Qədim Yunanıstan", "Babillər"],
            correct: 0,
            category: "Ümumi"
        },
        {
            question: "Sülh üzrə Nobel mükafatı istisna olmaqla, digər bütün Nobel mükafatları hansı ölkədə təqdim olunur?",
            options: ["İsveçrə", "İsveç", "Norveç", "Böyük Britaniya"],
            correct: 1,
            category: "Ümumi"
        },
        {
            question: "Dünyanın ən uzun quru sərhədi hansı iki ölkə arasında yerləşir?",
            options: ["Rusiya və Çin", "ABŞ və Meksika", "Kanada və ABŞ", "Argentina və Çili"],
            correct: 2,
            category: "Ümumi"
        },
        {
            question: "Yer kürəsinin atmosferində həcm baxımından ən çox hansı qaz üstünlük təşkil edir?",
            options: ["Oksigen", "Azot", "Karbon dioksid", "İqlim qazları"],
            correct: 1,
            category: "Ümumi"
        },
        {
            question: "Məşhur 'Mona Liza' tablosunun müəllifi olan İntibah dövrü dahi sənətkarı kimdir?",
            options: ["Mikelanjelo", "Rafael Santi", "Leonardo da Vinçi", "Donatello"],
            correct: 2,
            category: "Ümumi"
        },
    ]
};