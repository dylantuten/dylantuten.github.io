var model = {

    player: {

        name: "alpha 0.1",
        level: 1, rank: 1,

        rupees: 0, exp: 0, rep: 0, magic: 1,

        expPerClick: 0.25, rupeesPerClick: 0.25, minePower: 0.25,
        expPerTick: 0, rupeesPerTick: 0, drillPower: 0,

        sellAdd: 0.01, sellMod: 1.5,
        levelUpCost: 5000,

        nerdStats: false, extraStats: false,
        manager: false, trav: false, planetTrav: false, starTrav: false, galaxyTrav: false,

        traders: 0, tradePower: 0.001,
        gamers: 0, gamerPower: 0.001,
        miners: 0, pickPower: 0.0001

    },

    universe: []
}

var savegame = JSON.parse(localStorage.getItem('savegame'))
if (savegame !== null) {
    var Galaxyminer = savegame
} else {
    var Galaxyminer = model
}

function romanize(num){
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman
    return Array(+digits.join("") + 1).join("M") + roman
}

function Beautify(val) {
    if (val < 1000000) {
        var val1 = val.toFixed(2).slice(-3)
        var val2 = val.toFixed(2).slice(0, -3)
        var str=val2.toString()
        var str2=''
        for (var i in str){
            if ((str.length-i)%3==0 && i>0) str2+=','
                str2+=str[i]
        }
        return str2 + val1
    } else {
    return val.toExponential(2)
}}

function get(thing) {return document.getElementById(thing)}

var n1 = ["Alpha","Apus","Aquila","Ara","Beta","Canis","Carina","Comae","Corona","Crux","Delta","Draco","Epsilon","Gamma","Lambda","Lyra","Nemo","Omega","Omicron","Pavo","Proxima","Sagitta","Serpens","Sigma","Theta","Upsilon","Ursa","Vela","Virgo","Zeta"]
var n2 = ["Acallaris","Achelois","Adastreia","Aegialeus","Aegimius","Alatheia","Alcyoneus","Aldebaran","Amphiaraus","Anadeia","Andromeda","Aquarii","Arcturus","Aristaeus","Asteria","Asteropaios","Astraeus","Aurigae","Boreas","Borysthenis","Calesius","Capella","Cassiopeia","Centauri","Centaurus","Chronos","Cymopoleia","Dioscuri","Draconis","Eioneus","Eridani","Eridanus","Eubuleus","Euphorion","Eusebeia","Euthenia","Hemithea","Hyperbius","Hyperes","Hyperion","Icarius","Ichnaea","Ilioneus","Kentaurus","Leporis","Librae","Lyrae","Majoris","Miriandynus","Myrmidon","Nebula","Nemesis","Odysseus","Ophiuchi","Orion","Orionis","Orithyia","Palioxis","Peleus","Perileos","Perseus","Phoroneus","Polystratus","Porphyrion","Proioxis","Sagittarius","Sirius","Solymus","Zagreus","Zephyrus"]
var nm1 = ["Abe","Abel","Aben","Aber","Abh","Abhu","Abs","Absw","Aca","Acan","Ach","Achr","Act","Acti","Acu","Acum","Ada","Adam","Ade","Adel","Adm","Admo","Aeg","Aegi","Aen","Aeni","Aer","Aeri","Aeru","Aes","Aesc","Afg","Afgh","Afw","Afwi","Aga","Agar","Agat","Agr","Agre","Agri","Agu","Agui","Ahe","Ahey","Ahl","Ahlf","Aik","Aiki","Ajo","Ajoi","Aka","Akag","Akat","Akd","Akda","Ake","Aker","Aks","Aksa","Ala","Alab","Alam","Alar","Alb","Albi","Ald","Alde","Ale","Alex","Alf","Alfo","Alg","Algo","Ali","Alie","All","Alla","Alli","Allo","Alm","Alma","Als","Alst","Alt","Alta","Alu","Alum","Alun","Ama","Amaz","Amb","Ambe","Ambl","Ame","Ameg","Amet","Amm","Ammo","Amo","Amos","Amp","Amph","Ana","Anal","Anap","Anat","And","Anda","Ande","Andr","Ang","Angl","Anh","Anhy","Ank","Anke","Ann","Anna","Ano","Anor","Ant","Anth","Anti","Antl","Anto","Any","Anyo","Apa","Apat","Apo","Apop","Aqu","Aqua","Ara","Arag","Arc","Arch","Arct","Arcu","Arf","Arfv","Arg","Arge","Argu","Arm","Arma","Ars","Arse","Art","Arth","Arti","Artr","Asb","Asbe","Ash","Ashb","Asi","Asis","Ast","Astr","Ata","Atac","Ath","Athe","Aub","Aube","Aug","Auge","Augi","Aur","Auri","Auro","Aut","Autu","Ava","Aval","Ave","Aven","Axi","Axin","Azu","Azur","Bab","Babi","Bad","Badd","Bao","Baot","Bar","Bari","Bars","Bary","Bas","Bast","Bau","Baux","Baz","Bazz","Bec","Beck","Ben","Beni","Bens","Bent","Ber","Berr","Bert","Bery","Bio","Biot","Bir","Birn","Bis","Bism","Bix","Bixb","Blo","Blod","Bloo","Blos","Bob","Bobf","Boe","Boeh","Bor","Bora","Born","Bot","Botr","Bou","Boul","Bour","Bow","Bowe","Bra","Bram","Bras","Brau","Braz","Bre","Brei","Brew","Bri","Bria","Bro","Broc","Brom","Bron","Broo","Bru","Bruc","Brus","Bud","Budd","Bue","Buer","Buk","Buko","Bul","Bult","Byt","Byto","Cab","Cabr","Cad","Cadm","Caf","Cafe","Cal","Cala","Calc","Cald","Cale","Cali","Can","Canc","Canf","Car","Carn","Caro","Carr","Cary","Cas","Cass","Cav","Cava","Cel","Cela","Cele","Cels","Cem","Ceme","Cer","Ceri","Ceru","Ces","Cesb","Cey","Ceyl","Cha","Chab","Chal","Chao","Chap","Char","Chi","Chil","Chl","Chlo","Cho","Chon","Chr","Chro","Chry","Cin","Cinn","Cit","Citr","Cla","Clar","Cle","Clev","Cli","Clin","Cob","Coba","Coe","Coes","Cof","Coff","Col","Cole","Coll","Colo","Colt","Colu","Com","Comb","Con","Conc","Conn","Coo","Coop","Cop","Copa","Copi","Copp","Cor","Cora","Cord","Coru","Cov","Cove","Cre","Cree","Cri","Cris","Cro","Croc","Cron","Croo","Cros","Cry","Cryo","Cum","Cumb","Cumm","Cup","Cupr","Cya","Cyan","Cyl","Cyli","Cym","Cymo","Cyp","Cypr","Dan","Danb","Dat","Dato","Dav","Davi","Daw","Daws","Del","Dele","Delv","Dem","Dema","Des","Desc","Dia","Diab","Diad","Diam","Dias","Diat","Dic","Dick","Dig","Dige","Dio","Diop","Dju","Djur","Dol","Doll","Dolo","Dom","Dome","Dra","Drav","Dum","Dumo","Edi","Edin","Eka","Ekan","Elb","Elba","Els","Elsm","Eme","Emer","Emp","Empr","Ena","Enar","Ens","Enst","Eos","Eosp","Epi","Epid","Eps","Epso","Ery","Eryt","Esp","Espe","Ett","Ettr","Euc","Euch","Eucl","Eucr","Eud","Eudi","Eux","Euxe","Fab","Fabi","Fas","Fass","Fay","Faya","Fel","Feld","Fer","Ferb","Ferg","Fero","Ferr","Fic","Fich","Flu","Fluo","For","Forn","Fors","Fou","Foug","Fra","Fran","Fre","Frei","Fres","Fuk","Fuku","Gad","Gado","Gah","Gahn","Gal","Gala","Gale","Gar","Garn","Gat","Gate","Gay","Gayl","Ged","Geda","Geh","Gehl","Gei","Geig","Geo","Geoc","Geor","Ger","Germ","Gers","Gib","Gibb","Gis","Gism","Gla","Glau","Gle","Gles","Gme","Gmel","Goe","Goet","Gol","Gold","Gos","Gosh","Gosl","Gra","Graf","Grap","Gre","Gree","Grei","Gro","Gros","Gru","Grun","Gum","Gumm","Gun","Gunn","Gyp","Gyps","Hac","Hack","Hag","Hagg","Hai","Haid","Hal","Hali","Hall","Halo","Han","Hank","Hap","Hapk","Har","Hard","Harm","Hau","Haue","Haus","Hauy","Haw","Hawl","Hax","Haxo","Haz","Haze","Hea","Heaz","Hec","Hect","Hed","Hede","Hel","Heli","Hell","Hem","Hema","Hemi","Her","Herb","Herd","Hes","Hess","Heu","Heul","Hib","Hibo","Hid","Hidd","Hil","Hilg","His","Hisi","Hol","Holm","Hom","Homi","Hop","Hope","Hor","Horn","How","Howl","Hue","Huem","Hum","Humi","Hut","Hutc","Hya","Hyal","Hyd","Hydr","Hyp","Hype","Ido","Idoc","Idr","Idri","Ika","Ikai","Ill","Illi","Ilm","Ilme","Ilv","Ilva","Inc","Incl","Ind","Indi","Iny","Inyo","Iod","Ioda","Iol","Ioli","Jac","Jaco","Jad","Jada","Jade","Jam","Jame","Jar","Jaro","Jas","Jasp","Jef","Jeff","Jen","Jenn","Jer","Jerr","Jun","Juni","Juo","Juon","Jur","Jurb","Kaa","Kaat","Kad","Kady","Kai","Kain","Kal","Kali","Kals","Kam","Kama","Kamb","Kamp","Kan","Kank","Kao","Kaol","Kas","Kass","Kei","Keil","Ker","Kerm","Kern","Kero","Kie","Kies","Kin","Kino","Kne","Kneb","Kno","Knor","Kob","Kobe","Kog","Koga","Kol","Kolb","Kor","Korn","Kra","Kran","Krat","Kre","Krem","Kren","Kuk","Kukh","Kun","Kunz","Kut","Kutn","Kya","Kyan","Lab","Labr","Lan","Lana","Lang","Lans","Lant","Lap","Lapi","Lar","Lari","Lau","Laum","Laur","Law","Laws","Laz","Lazu","Lea","Lead","Lec","Lech","Leg","Legr","Lep","Lepi","Leu","Leuc","Lev","Levy","Lib","Libe","Lid","Lidd","Lig","Lign","Lim","Limo","Lin","Lina","Lip","Lips","Lir","Liro","Lit","Lith","Liv","Livi","Liz","Liza","Lod","Lode","Lol","Loll","Lon","Lons","Lop","Lopa","Lope","Lor","Lora","Lore","Lub","Lubl","Lud","Ludw","Lyo","Lyon","Mac","Macd","Mack","Mag","Magh","Magn","Maj","Majo","Mal","Mala","Man","Mang","Mar","Marc","Marg","Mari","Mas","Masc","Mass","Mat","Matl","Mck","Mcke","Mee","Meer","Mei","Meio","Mel","Mela","Meli","Melo","Men","Mend","Mene","Meni","Mer","Merc","Mes","Meso","Mess","Met","Meta","Mia","Miar","Mic","Mica","Micr","Mil","Milk","Mill","Mim","Mime","Min","Mini","Mir","Mira","Mix","Mixi","Mog","Moga","Moh","Mohi","Moi","Mois","Mol","Moly","Mon","Mona","Mono","Mont","Moo","Mool","Moon","Mor","Mord","Morg","Mot","Mott","Motu","Mul","Mull","Mur","Murd","Mus","Musc","Nab","Nabe","Nac","Nacr","Nag","Nagy","Nah","Nahc","Nat","Nati","Natr","Nek","Nekr","Nel","Nele","Nen","Nena","Nep","Neph","Nept","Nic","Nick","Nie","Nied","Nin","Nini","Nio","Niob","Nis","Niss","Nit","Nitr","Non","Nont","Nor","Norm","Nos","Nose","Nsu","Nsut","Nye","Nyer","Olg","Olgi","Oli","Olig","Oliv","Omp","Omph","Ony","Onyx","Opa","Opal","Ord","Ordo","Ore","Oreg","Orp","Orpi","Ort","Orth","Osa","Osar","Osm","Osmi","Osu","Osum","Ota","Otav","Ott","Ottr","Ove","Over","Pai","Pain","Pal","Pala","Pall","Paly","Pan","Pang","Pap","Papa","Par","Para","Pari","Part","Pas","Pasc","Pea","Pear","Pec","Peco","Pect","Pen","Pent","Per","Peri","Perl","Pero","Pet","Peta","Petz","Pez","Pezz","Pha","Phar","Phe","Phen","Phi","Phil","Phl","Phlo","Pho","Phoe","Phos","Pig","Pige","Pit","Pitc","Pla","Plag","Plat","Ple","Ples","Pol","Pola","Poll","Poly","Pot","Pota","Pou","Poud","Pow","Powe","Pra","Pras","Pre","Preh","Pro","Prou","Psi","Psil","Pum","Pumi","Pump","Pur","Purp","Pyr","Pyra","Pyri","Pyro","Pyrr","Qua","Quah","Quar","Que","Quen","Ram","Ramb","Ramm","Rap","Rapi","Ras","Rasp","Rea","Real","Rei","Reis","Ren","Reni","Rhe","Rhen","Rho","Rhod","Rhom","Ric","Rick","Rie","Rieb","Rob","Robe","Roc","Rock","Rom","Roma","Ros","Rosa","Rosc","Rose","Rou","Roum","Rout","Rub","Rube","Ruby","Rui","Ruiz","Rut","Ruth","Ruti","Ryn","Ryne","Sab","Saba","Sabi","Saf","Saff","Sal","Sali","Sam","Sama","Sams","San","Sanb","Sane","Sani","Sant","Sap","Sapo","Sapp","Sar","Sard","Sark","Sas","Sass","Sat","Sati","Sau","Sauc","Sca","Scap","Sch","Sche","Scho","Schr","Schw","Sco","Scol","Scor","Sea","Seam","See","Seel","Seg","Sege","Sek","Seka","Sel","Sele","Seli","Sell","Sen","Sena","Sep","Sepi","Ser","Sera","Serp","Sha","Shat","Shi","Shig","Shu","Shun","Sid","Side","Sie","Sieg","Sil","Sili","Sill","Silv","Sim","Sime","Simo","Sin","Sink","Sku","Skut","Sma","Smal","Sme","Smec","Smi","Smit","Smo","Smok","Soa","Soap","Sod","Soda","Son","Sono","Spe","Spec","Sper","Spes","Sph","Spha","Sphe","Spi","Spin","Spo","Spod","Spu","Spur","Sta","Stan","Stau","Ste","Stea","Step","Sti","Stib","Stic","Stil","Sto","Stol","Str","Stro","Stru","Stu","Stud","Sug","Sugi","Sul","Sulf","Sun","Suns","Sur","Surs","Sus","Suss","Syl","Sylv","Tac","Tach","Tae","Taen","Tal","Talc","Tan","Tant","Tanz","Tar","Tara","Tarb","Tas","Tash","Tau","Taus","Tea","Teal","Tel","Tell","Tem","Tema","Ten","Tenn","Teno","Tep","Teph","Ter","Terl","Teru","Tet","Tetr","Tha","Thau","The","Then","Tho","Thom","Thor","Thu","Thul","Tie","Tiem","Tig","Tige","Tin","Tinc","Tit","Tita","Tob","Tobe","Tod","Todo","Tok","Toky","Top","Topa","Tor","Torb","Tou","Tour","Tra","Trav","Tre","Trem","Trev","Tri","Trid","Trip","Tro","Tron","Tsa","Tsav","Tsc","Tsch","Tug","Tugt","Tun","Tung","Tur","Turq","Tus","Tusi","Tyr","Tyro","Tyu","Tyuy","Uch","Uchu","Ukl","Uklo","Ule","Ulex","Ull","Ullm","Ult","Ultr","Ulv","Ulvo","Uma","Uman","Umb","Umbe","Umbi","Una","Unak","Upa","Upal","Ura","Ural","Uran","Uva","Uvar","Vae","Vaes","Val","Vale","Van","Vana","Var","Vari","Vat","Vate","Vau","Vauq","Vaux","Ver","Verd","Verm","Ves","Vesu","Vil","Vill","Vio","Viol","Viv","Vivi","Vol","Volb","Wad","Wag","Wagn","War","Ward","Wari","Warw","Was","Wass","Wav","Wave","Wed","Wedd","Wei","Weil","Weis","Wel","Welo","Whe","Whew","Whi","Whit","Wil","Will","Wilu","Wit","With","Wol","Wolf","Woll","Wul","Wulf","Wur","Wurt","Wya","Wyar","Xen","Xeno","Xif","Xife","Xon","Xono","Ytt","Yttr","Zab","Zabu","Zac","Zacc","Zah","Zahe","Zaj","Zaja","Zak","Zakh","Zan","Zana","Zar","Zara","Zek","Zekt","Zeo","Zeol","Zha","Zhan","Zhar","Zho","Zhon","Zie","Zies","Zim","Zimb","Zin","Zina","Zinc","Zink","Zinn","Zip","Zipp","Zir","Zirc","Zirk","Zoi","Zois","Zul","Zult","Zun","Zuny"];var nm2=["a","abar","abergite","abilite","abogdanite","abweite","achite","achrysotile","acinnabarite","acite","acolite","acyite","adinite","adite","adium","adkevichite","adonite","adorite","adymite","agamite","agite","agnaite","agnite","agoite","agonite","ahedrite","aiba","aite","akiite","akite","al","alaite","alcolite","alconite","ald","aldaite","alerite","alite","allite","alsite","altite","alusite","alyte","amarine","amite","amunite","an","andine","andite","andrite","anechite","aneite","angerite","aninaite","anite","ankasite","annite","anocolumbite","anotantalite","anowodginite","ansite","antite","antoid","anvesuvianite","apacaite","apite","ardite","arealgar","arenkoite","arge","argyrite","aritasite","arite","arkite","arkoite","armontite","arovite","arskite","artite","asclarkite","ase","aseite","asite","asovite","assite","assium","aster","astonite","atelierite","atierite","atine","atite","atorbernite","auxite","averite","ax","axite","az","azite","azziite","babweite","baldaite","bandite","banite","basite","baster","bazite","bbiite","bdenite","beckite","beinite","beite","belite","bergite","berite","berlandite","bernite","bertsmithite","bilite","bisite","bite","blende","bnite","boclase","bogdanite","boleite","bornite","borthite","bronite","bsite","burite","burtonite","buttite","byite","c","cagnaite","cagnite","calconite","camite","canthite","casite","cate","cchacuaite","cedony","ch pearl","chalcite","chantite","chblende","chikhite","chilite","chinsonite","chite","chlore","chrysotile","chtite","chynite","cidolite","cinnabarite","cite","cite ","ckeite","clase","clasite","clipscombite","cloizite","cobotryogen","cochroite","cochromite","cocite","codot","coelite","coite","colite","combite","con","conite","conolite","cophane","cophanite","cophoenicite","cophyllite","copyrite","covite","crase","crinite","cronite","ctite","ctrolite","cupride","cury","cyite","d","daleite","dcreekite","deleyite","dellite","denite","derite","dermayrite","deroite","dhillite","dicoatite","dierite","dine","dingerite","dingtonite","dinite","dite","dium","dkevichite","dochite","dochrosite","docrocite","dolite","donaldite","donite","donyx","dorffite","dot","dote","dozite","drenite","dretteite","drite","drodite","dspar","dspathoid","dstone","dtite","dumene","dymite","dystonite","e","ean","ecite","eckite","edite","edonite","edsonite","eelite","eghinite","ehouseite","eibersite","eite","el","eldite","elerite","eleyite","elian","eline","elite","ellite","ellyite","elsbergite","elveyite","emanite","emite","ena","enbergite","ene","eneite","engite","enic","enicochroite","enite","enium","enockite","enoclasite","enopyrite","enovite","entine","entinite","entite","enzenite","eolite","eonite","epite","er","ereite","ereye","erfordine","ergite","ergusonite","erite","erlandite","ermanite","ermayrite","ermigite","ermorite","ernite","erocobaltite","eroite","erotil","ersite","ersonite","ersthene","ertine","ertite","ertmannite","ertsite","ertsmithite","ertyite","erupine","esia","esine","esioferrite","esite","eslebenite","esonite","essite","estine","estone","estos","et","ethenite","etite","ettite","exite","eyite","eykite","ezite","feldite","fenite","fergusonite","fersonite","fieldite","finite","fite","florite","fonteinite","fordite","fornite","framite","ftonite","fur","gaite","gamite","ganeite","ganite","ganocolumbite","ganotantalite","ganvesuvianite","gar","gardite","garitasite","garite","gbeinite","genite","gerite","gerobinsonite","gertyite","ggite","ghengite","ghinite","ghuacerite","gioclase","gite","gmannite","gmatite","goclase","goite","gonite","gopite","gorite","gorskite","gstite","gtonite","guite","gusonite","gyrite","h pearl","hacite","halite","hanite","hantite","harenkoite","harge","harovite","hatelierite","hauite","hblende","heite","heline","hemite","henite","henium","herfordine","herite","hermigite","hibole","hierite","hillite","hinite","hinsonite","hiophilite","hire","hirine","hite","hmarine","hmite","hnite","hochrysotile","hoclase","hog","hophyllite","horite","hotite","houseite","hrite","hroite","hsonite","htelite","htite","hurite","hwater pearl","hydrocalcite","hyhydrite","hylite","hyllite","hynite","hyst","ialaite","ialite","ialyte","ian","ianite","iapite","iaumite","iba","ibergite","ibole","icate","icellite","ichalcite","icite","ickite","iclase","icoatite","icolite","icot","icrete","iculite","icupride","idcreekite","idine","idite","idocrocite","idolite","idot","ieite","ieldite","ierite","ieslebenite","ifornite","igerite","igite","igmannite","igmatite","igorite","ihydrite","iite","ikahnite","ilarite","ile","ilianite","ilite","illite","imanite","imar","iment","imony","imorphite","inaite","inawite","indrite","ine","ingerite","ingite","ingstonite","ingtonite","inguaite","inierite","ininite","inite","inium","inolite","insite","inspar","inum","ioclase","iodor","iolite","ionite","iophilite","iotite","iotrope","iposite","irine","is","iscite","isite","itaenite","ite","ite ","iterite","ithauptite","itoite","ium","ive","iz","izawaite","k","kahnite","kankasite","kardite","keite","kel","keline","kelite","kenite","kerite","kesite","khawthorneite","kinawite","kinite","kite","klinite","kmanite","koreaite","ksite","ky","l","lacolloite","ladium","laite","landite","langerite","larite","lase","laseite","lastonite","lbite","lcanthite","lcedony","lcite","lcocite","lcolite","lcopyrite","ldrenite","le","lecite","leite","lemite","lenite","lerite","lesite","lewoodite","leyite","lgar","lhauite","li","liaumite","ligerite","limanite","ling","lingite","linguaite","linite","linsite","lipscombite","lipsite","lite","llacolloite","lleite","llipsite","llite","llonite","lockite","loidite","loizite","lomelane","lonite","looite","lophane","lorite","loysite","lsite","lsonite","ltite","lucite","lurite","lurium","lurobismuthite","lusion","lusite","lussite","lveyite","lybite","lyerite","lygonite","lzite","m","macosiderite","maline","mallite","mandite","manite","mannite","mar","margyrite","marine","masclarkite","masite","mbite","mboclase","mellite","melsbergite","ment","mersite","mesite","meyerite","miculite","milite","mingtonite","minite","minium","mite","mium","mmallite","molite","mond","mondine","montite","mony","moreite","morillonite","morphite","mosite","motome","mquistite","msenolite","msite","mulite","muth","muthinite","na","nabar","nacite","naite","nakiite","nakite","nallite","nantite","nardite","nasite","nathyite","nbergite","nblende","nckeite","ndine","ndite","ndrite","ndrodite","ndum","ne","nechite","neite","nel","nelian","nellite","nerite","nerupine","nesia","nesioferrite","nesite","nessite","net","netite","nezite","ngerite","nghengite","nghuacerite","ngite","ngstonite","ngtonite","nic","nicochroite","nierite","niite","ninaite","ningite","ninite","nite","nium","nkhawthorneite","nklinite","nnerite","nniite","nnite","nochrysotile","nockite","noclase","noclasite","nogen","nohedrite","nohorite","nohumite","nolite","nonite","nophane","nopilite","noptilolite","nopyrite","notite","notrichite","novite","nowodginite","nozoisite","nsite","nskovite","nspar","nstedtite","nstone","nthite","ntianite","ntienite","ntinite","ntite","ntoid","ntonite","nturine","ntzite","nwaldite","nzenite","nzite","o","obbiite","obotryogen","obsite","ocerite","ochite","ochlore","ochromite","ochrosite","ochrysotile","ochvilite","ockite","oclase","oclasite","ocline","ocolumbite","oconite","odite","odonite","odor","odstone","oeite","oelite","oepite","og","oganite","ogen","ogopite","ogrossular","ohedrite","ohorite","ohortonolite","ohumite","ohydrocalcite","oite","okesite","okite","oleite","olinite","olite","ollite","olusite","omagnesite","omelane","omeyerite","omite","omium","omorphite","on","onaldite","ond","ondine","onellite","onezite","onite","onolite","onskovite","ontianite","ontite","onyx","ooite","ope","opericlase","ophane","ophanite","ophilite","ophoenicite","ophyllite","opilite","optilolite","oradoite","orapatite","orargyrite","orastrolite","orcaphite","oreite","oriate","orichterite","orite","oritoid","orl","ornite","orokite","orsite","orspar","orthite","ortierite","osewichite","osite","ospinel","ostibite","otantalite","ote","otime","otite","otlite","otome","otrichite","otrope","ottaite","ovite","ovskite","ovskyite","ownite","oxene","oxferroite","oxyhyte","oxylapatite","oysite","ozincite","ozite","ozoisite","ozonite","pacaite","paite","pe","peite","pellyite","pentine","per","perite","pfite","phane","phanite","phire","phirine","phite","phophyllite","phorite","phylite","phyllite","pite","plite","ploidite","pmanite","polite","pore","posite","pside","pstone","ptase","puhyite","purite","quelinite","quistite","quoise","r","radite","radoite","radorite","radymite","rahedrite","rald","ramarine","ramite","randite","rapatite","rargyrite","rase","rasovite","rastrolite","ratine","rcaphite","rchikhite","rdite","re","realgar","reibersite","relite","rereite","ressite","retteite","reye","rgerite","rgerobinsonite","rgite","rgyrite","rhotite","rialite","rianite","riate","richterite","ricrete","rierite","rihydrite","riite","rine","ringite","rinite","rite","ritoid","rizawaite","rkeite","rkite","rkoite","rl","rleite","rmacosiderite","rmaline","rmanite","rmontite","rmorite","rnathyite","rnonite","ro","rocerite","rocline","rocobaltite","rocolumbite","rodite","roeite","rogrossular","rohortonolite","roite","rokite","rolite","rollite","romagnesite","ron","ronite","ropericlase","rophilite","rophyllite","rotantalite","rotil","rovite","roxylapatite","rozincite","rringite","rrite","rrylite","rschaum","rsite","rskite","rsonite","rspar","rsthene","rthite","rthoclase","rtierite","rtite","rtsite","rtveitite","rtz","ry","rygibbsite","ryite","rylite","ryogen","ryptite","rzalite","s","saite","sanite","sartite","sassite","schaum","scite","scombite","sdaleite","sdorffite","selite","senolite","seolite","serite","sewichite","sexite","sfordite","sgenite","shite","shwater pearl","sian","sicot","side","silite","sine","siolite","site","siterite","sling","smannite","soberyl","socolla","solite","sonite","soprase","sotile","spar","spathoid","sphophyllite","sphorite","spinel","spore","ssanite","ssartite","ssite","ssium","ssular","stedtite","sterite","stibite","stine","stite","stobalite","stone","stonite","stos","stowite","sular","sum","taenite","tagonite","talite","tan","tanite","tase","tatite","te","telite","terite","terudite","tfonteinite","thanite","thauptite","theite","thenite","thierite","thite","thoclase","thrite","thsonite","thyst","tialaite","ticellite","tienite","tierite","time","tinum","tite","tlandite","tlite","tlockite","tmorillonite","tnasite","tobalite","tocalcite","tochvilite","toite","tolite","tomite","tone","tonite","torbernite","toreite","torite","towite","tramite","trandite","trichite","trine","trolite","tronite","tterudite","ttite","ttuckite","tuckite","tunite","tupite","turine","tveitite","tz","tzerite","tzite","uberite","ubisite","ucchacuaite","uchilite","ucite","ucochroite","ucodot","uconite","ucophane","uelinite","uggite","ugite","uhyite","uite","ukoreaite","uli","ulite","um","umasite","umbite","umene","undum","unite","uoise","upite","ur","urite","urium","urmbachite","urobismuthite","urolite","urtonite","ury","usion","usonite","ussite","ustite","uth","uthinite","utite","uttite","uvianite","uvite","uyelite","vanite","vauxite","ve","vedsonite","veite","venite","ver","verite","vertine","vianite","vine","vite","vorite","vskite","vskyite","waldite","wellite","wertmannite","wickite","wigite","wnite","wsterite","wurmbachite","x","xandrite","xene","xferroite","xite","xyhyte","y","yagite","yamunite","ybasite","ybdenite","ybite","ycrase","ydrite","ydymite","yelite","yerite","ygibbsite","ygonite","ygorskite","yhalite","yhydrite","yite","ykite","yl","ylite","yllonite","ymite","yne","yogen","yoite","yopilite","yptite","yrelite","ysoberyl","ysocolla","ysoprase","ysotile","ystonite","yte","ytocalcite","z","zalite","zanite","zerite","zilianite","zite","zlewoodite","zonite","zottaite","zziite"]

function generateName(type) {
    if (type == "galaxy") {
        return n1[Math.floor(Math.random() * n1.length)] + " " + n2[Math.floor(Math.random() * n2.length)]
    }
    if (type == "system") {
        return n1[Math.floor(Math.random() * n1.length)] + " " + romanize(Math.floor(Math.random() * 99))
    }
    if (type == "planet") {
        return n2[Math.floor(Math.random() * n2.length)]
    }
    if (type == "ore") {
        return nm1[Math.floor(Math.random() * nm1.length)] + nm2[Math.floor(Math.random() * nm2.length)]
    }
}

function generatePower() {
    var powers = ["rpc", "rpt", "epc", "ept", "rbpc", "rbpt", "sellMod", "sellAdd"]
    return powers[Math.floor(Math.random()*powers.length)]
}

function generateOre () {
    return {
        oreName: generateName("ore"),
        rarity: Math.floor(Math.random() * 10),
        power: generatePower(),
        rubals: 0
}}

function generatePlanet () {
    return {
        planetName: generateName("planet"),
        magic: (1 + Math.random()).toFixed(2),
        ores: [generateOre(),generateOre(),generateOre(),generateOre(),generateOre()]
}}

function generateSystem () {
    return {
        systemName: generateName("system"),
        magic: (1 + Math.random()).toFixed(2),
        planets: [generatePlanet(),generatePlanet(),generatePlanet(),generatePlanet(),generatePlanet(),generatePlanet(),generatePlanet()]
}}

function generateGalaxy () {
    return {
        galaxyName: generateName("galaxy"),
        systems: [generateSystem(),generateSystem(),generateSystem(),generateSystem(),generateSystem()]
}}

Galaxyminer.universe.push(generateGalaxy())
var currentGalaxy = 0
var currentSystem = 0
var currentPlanet = 0

galaxy = Galaxyminer.universe[currentGalaxy]
system = galaxy.systems[currentSystem]
planet = system.planets[currentPlanet]

function reset() {
    var Galaxyminer = model
    localStorage.setItem('savegame', JSON.stringify(Galaxyminer))
    window.location.reload();
}

$(document).ready(function () {
    $("#generate").click(
        function () {
            Galaxyminer.player.rupees += Galaxyminer.player.rupeesPerClick
        })
    $("#generate2").click(
        function () {
            Galaxyminer.player.exp += Galaxyminer.player.expPerClick
        })

    $("#travel").hide()
    $("#nwf").hide()
    $("#mine").hide()
    $("#openShop").hide()
    $("#research").hide()

    $("#mineToggle").click(function(){
    $("#mine").toggle()})
    $("#mineTitleToggle").click(function(){
    $("#mine").toggle()})

    $("#researchToggle").click(function(){
    $("#research").toggle()})
    $("#researchTitleToggle").click(function(){
    $("#research").toggle()})

    $("#openShopToggle").click(function(){
    $("#openShop").toggle()})
    $("#openShopTitleToggle").click(function(){
    $("#openShop").toggle()})

    $("#travelToggle").click(function(){
    $("#travel").toggle()})
    $("#travelTitleToggle").click(function(){
    $("#travel").toggle()})

    $("#nwfToggle").click(function(){
    $("#nwf").toggle()})
    $("#nwfTitleToggle").click(function(){
    $("#nwf").toggle()})
})

function mineOre1() {
    planet.ores[0].rubals += Galaxyminer.player.minePower
}
function mineOre2() {
    planet.ores[1].rubals += Galaxyminer.player.minePower
}
function mineOre3() {
    planet.ores[2].rubals += Galaxyminer.player.minePower
}
function mineOre4() {
    planet.ores[3].rubals += Galaxyminer.player.minePower
}
function mineOre5() {
    planet.ores[4].rubals += Galaxyminer.player.minePower
}

function sellOre1(x) {
    if (planet.ores[0].rubals >= 1) {
        if (x == 1) {
            planet.ores[0].rubals -= 1
            Galaxyminer.player.rupees += (planet.ores[0].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd
        } else {
            planet.ores[0].rubals -= planet.ores[0].rubals
            Galaxyminer.player.rupees += (planet.ores[0].rubals*(planet.ores[0].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
        }
    }
}
function sellOre2(x) {
    if (planet.ores[1].rubals >= 1) {
        if (x == 1) {
            planet.ores[1].rubals -= 1
            Galaxyminer.player.rupees += (planet.ores[1].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd
        } else {
            planet.ores[1].rubals -= planet.ores[1].rubals
            Galaxyminer.player.rupees += (planet.ores[1].rubals*(planet.ores[1].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
        }
    }
}
function sellOre3(x) {
    if (planet.ores[2].rubals >= 1) {
        if (x == 1) {
            planet.ores[2].rubals -= 1
            Galaxyminer.player.rupees += (planet.ores[2].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd
        } else {
            planet.ores[2].rubals -= planet.ores[2].rubals
            Galaxyminer.player.rupees += (planet.ores[2].rubals*(planet.ores[2].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
        }
    }
}
function sellOre4(x) {
    if (planet.ores[3].rubals >= 1) {
    if (x == 1) {
        planet.ores[3].rubals -= 1
        Galaxyminer.player.rupees += (planet.ores[3].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd
    } else {
            planet.ores[3].rubals -= planet.ores[3].rubals
            Galaxyminer.player.rupees += (planet.ores[3].rubals*(planet.ores[3].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
        }
    }
}
function sellOre5(x) {
    if (planet.ores[4].rubals >= 1) {
    if (x == 1) {
        planet.ores[4].rubals -= 1
        Galaxyminer.player.rupees += (planet.ores[4].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd
    } else {
            planet.ores[4].rubals -= planet.ores[4].rubals
            Galaxyminer.player.rupees += (planet.ores[4].rubals*(planet.ores[4].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
        }
    }
}

function convertEXP() {
    Galaxyminer.player.rep += Galaxyminer.player.exp
    Galaxyminer.player.exp = 0
}

function lvlUp() {
    if (Galaxyminer.player.rupees >= Galaxyminer.player.levelUpCost) {
        Galaxyminer.player.rupees -= Galaxyminer.player.levelUpCost
        Galaxyminer.player.exp = 0
        Galaxyminer.player.rep = 0

        Galaxyminer.player.levelUpCost *= 2
        Galaxyminer.player.level += 1

        Galaxyminer.player.magic *= 1.15

        Galaxyminer.player.rupeesPerClick *= 1.15
        Galaxyminer.player.expPerClick *= 1.25
        Galaxyminer.player.minePower *= 1.15

        Galaxyminer.player.rupeesPerTick *= 1.05
        Galaxyminer.player.expPerTick *= 1.15
        Galaxyminer.player.drillPower *= 1.05

        Galaxyminer.player.tradePower *= 5
        Galaxyminer.player.gamerPower *= 5
        Galaxyminer.player.pickPower *= 2

        Galaxyminer.player.sellMod *= 1.25
    }
}

function MANAGER() {
    if (Galaxyminer.player.rep >= 1000) {
        Galaxyminer.player.manager = true
        Galaxyminer.player.rep -= 1000
    }
}

function MAGIC() {
    if (Galaxyminer.player.rep >= 5000) {
        Galaxyminer.player.extraStats = true
        Galaxyminer.player.rep -= 5000
    }
}

function TRAV(TYPE) {
    if (TYPE == 'p') {
        if (Galaxyminer.player.rep >= 1000000) {
            Galaxyminer.player.rep -= 1000000
            Galaxyminer.player.trav = true
            Galaxyminer.player.planetTrav = true
        }
    }
    if (TYPE == 's') {
        if (Galaxyminer.player.rep >= 1000000000) {
            Galaxyminer.player.rep -= 1000000000
            Galaxyminer.player.trav = true
            Galaxyminer.player.starTrav = true
        }
    }
    if (TYPE == 'g') {
        if (Galaxyminer.player.rep >= 1000000000000) {
            Galaxyminer.player.rep -= 1000000000000
            Galaxyminer.player.trav = true
            Galaxyminer.player.galaxyTrav = true
        }
    }
}

function hire(TYPE) {
    if (TYPE == 't') {
        Galaxyminer.player.traders += 1
    }
    if (TYPE == 'g') {
        Galaxyminer.player.gamers += 1
    }
    if (TYPE == 'm') {
        Galaxyminer.player.miners += 1
    }
}

function toggleStatus() {
    Galaxyminer.player.nerdStats = !Galaxyminer.player.nerdStats
}

var tips = ["It is important to hire as many workers as possible as fast as possible, they are not only expendable but free! The only problem is, workers don't stick around too long.", "Fun fact! If you cheat in this game, you die in real life.", "Every ore has magical properties.", "Once you click 'Generate Rupees' or 'Generate EXP', try holding down the return key.", "Level up to boost all of your stats.", "Convert EXP to Research Points in the 'Research' tab.", "Upon mining ores in the 'Mine' tab, you can sell them for rupees in the 'Sell' tab."]
var tip = tips[Math.floor(Math.random() * tips.length)]
var tipTick = 0

window.setInterval(function main() { // tick
    tipTick+= 1.69
    if (tipTick >= 4200) {
        tip = tips[Math.floor(Math.random() * tips.length)]
        tipTick = 0
    }

    var magic = Galaxyminer.player.magic

    if (Galaxyminer.player.trav == false) {
        get("travel2").style.display = "none"
    } else if (Galaxyminer.player.trav) {
        get("travel2").style.display = "inline"
    }

    if (Galaxyminer.player.manager == false) {
        get("worker4").style.display = "none"
    } else if (Galaxyminer.player.manager) {
        get("worker4").style.display = "inline"
    }

    for (let x = 0; x < 5; x++) {
        if (planet.ores[x].power == "rpc") {
        Galaxyminer.player.rupeesPerClick += magic*(0.0001*(planet.ores[x].rubals))
        } else if (planet.ores[x].power == "rpt") {
        Galaxyminer.player.rupeesPerTick += magic*(0.000001*planet.ores[x].rubals)
        } else if (planet.ores[x].power == "epc") {
        Galaxyminer.player.expPerClick += magic*(0.0001*(planet.ores[x].rubals))
        } else if (planet.ores[x].power == "ept") {
        Galaxyminer.player.expPerTick += magic*(0.000001*planet.ores[x].rubals)
        } else if (planet.ores[x].power == "rbpc") {
        Galaxyminer.player.minePower += magic*(0.000000001*(planet.ores[x].rubals))
        } else if (planet.ores[x].power == "rbpt") {
        Galaxyminer.player.drillPower += magic*(0.0000000001*planet.ores[x].rubals)
        } else if (planet.ores[x].power == "sellMod") {
        Galaxyminer.player.sellMod += magic*(0.00001*planet.ores[x].rubals)
        } else if (planet.ores[x].power == "sellAdd") {
        Galaxyminer.player.sellAdd += 0.001*magic*(planet.ores[x].rubals)
    }}

    if (Galaxyminer.player.nerdStats) {
        if (Galaxyminer.player.extraStats) {
            var statusMessage = 'Rupees Per Click: ' + Beautify(Galaxyminer.player.rupeesPerClick) + ' / Per Tick: ' + Beautify(Galaxyminer.player.rupeesPerTick+(Galaxyminer.player.traders*Galaxyminer.player.tradePower)) + '<br>EXP Per Click: &nbsp;&nbsp;&nbsp;' + Beautify(Galaxyminer.player.expPerClick) + ' / Per Tick: ' + Beautify(Galaxyminer.player.expPerTick+(Galaxyminer.player.gamers*Galaxyminer.player.gamerPower)) + '<br>Rubals Per Click: ' + Beautify(Galaxyminer.player.minePower) + ' / Per Tick: ' + Beautify(Galaxyminer.player.drillPower+(Galaxyminer.player.miners*Galaxyminer.player.pickPower)) + '<br>System Magic: ' + system.magic + ' / Planet Magic: ' + planet.magic + '<br>Sell Value: ' + Beautify(Galaxyminer.player.sellMod) + '(x) + ' + Beautify(Galaxyminer.player.sellAdd) + '<br>Your Magic Level: ' + Beautify(Galaxyminer.player.magic)
        } else {
            var statusMessage = 'Rupees Per Click: ' + Beautify(Galaxyminer.player.rupeesPerClick) + ' / Per Tick: ' + Beautify(Galaxyminer.player.rupeesPerTick+(Galaxyminer.player.traders*Galaxyminer.player.tradePower)) + '<br>EXP Per Click: &nbsp;&nbsp;&nbsp;' + Beautify(Galaxyminer.player.expPerClick) + ' / Per Tick: ' + Beautify(Galaxyminer.player.expPerTick+(Galaxyminer.player.gamers*Galaxyminer.player.gamerPower)) + '<br>Rubals Per Click: ' + Beautify(Galaxyminer.player.minePower) + ' / Per Tick: ' + Beautify(Galaxyminer.player.drillPower+(Galaxyminer.player.miners*Galaxyminer.player.pickPower))
    }}
    else {
        var statusMessage = 'Level <span class="shadow">' + Galaxyminer.player.level + '</span> / NWF Rank <span class="shadow">' + Galaxyminer.player.rank + '</span><br><br>Tip: ' + tip
    }

    if (Galaxyminer.player.rupees < Galaxyminer.player.levelUpCost) {
        get("levelUpPrice").style.color = "#a32f33"
    } else {
        get("levelUpPrice").style.color = "#156303"
    }

    if (Galaxyminer.player.rep < 1000) {
        get("businessCost").style.color = "#a32f33"
    } else {
        get("businessCost").style.color = "#156303"
    }
    if (Galaxyminer.player.rep < 5000) {
        get("magicCost").style.color = "#a32f33"
    } else {
        get("magicCost").style.color = "#156303"
    }

    if (Galaxyminer.player.rep < 1000000) {
        get("interplanetaryCost").style.color = "#a32f33"
    } else {
        get("interplanetaryCost").style.color = "#156303"
    }

    if (Galaxyminer.player.rep < 1000000000) {
        get("interstellarCost").style.color = "#a32f33"
    } else {
        get("interstellarCost").style.color = "#156303"
    }

    if (Galaxyminer.player.rep < 1000000000000) {
        get("intergalacticCost").style.color = "#a32f33"
    } else {
        get("intergalacticCost").style.color = "#156303"
    }


    Galaxyminer.player.exp += Galaxyminer.player.expPerTick
    Galaxyminer.player.rupees += Galaxyminer.player.rupeesPerTick

    Galaxyminer.player.rupees += Galaxyminer.player.traders*Galaxyminer.player.tradePower
    Galaxyminer.player.exp += Galaxyminer.player.gamers*Galaxyminer.player.gamerPower

    planet.ores[0].rubals += Galaxyminer.player.drillPower
    planet.ores[1].rubals += Galaxyminer.player.drillPower
    planet.ores[2].rubals += Galaxyminer.player.drillPower
    planet.ores[3].rubals += Galaxyminer.player.drillPower
    planet.ores[4].rubals += Galaxyminer.player.drillPower

    planet.ores[0].rubals += Galaxyminer.player.miners*Galaxyminer.player.pickPower
    planet.ores[1].rubals += Galaxyminer.player.miners*Galaxyminer.player.pickPower
    planet.ores[2].rubals += Galaxyminer.player.miners*Galaxyminer.player.pickPower
    planet.ores[3].rubals += Galaxyminer.player.miners*Galaxyminer.player.pickPower
    planet.ores[4].rubals += Galaxyminer.player.miners*Galaxyminer.player.pickPower

    galaxy = Galaxyminer.universe[currentGalaxy]
    system = galaxy.systems[currentSystem]
    planet = system.planets[currentPlanet]

    get("galaxyName").innerHTML = galaxy.galaxyName
    get("systemName").innerHTML = system.systemName
    get("planetName").innerHTML = planet.planetName

    if (Galaxyminer.player.extraStats) {
        get("ore1").innerHTML = planet.ores[0].oreName + " (" + planet.ores[0].power + ")"
        get("ore2").innerHTML = planet.ores[1].oreName + " (" + planet.ores[1].power + ")"
        get("ore3").innerHTML = planet.ores[2].oreName + " (" + planet.ores[2].power + ")"
        get("ore4").innerHTML = planet.ores[3].oreName + " (" + planet.ores[3].power + ")"
        get("ore5").innerHTML = planet.ores[4].oreName + " (" + planet.ores[4].power + ")"
    } else {
        get("ore1").innerHTML = planet.ores[0].oreName
        get("ore2").innerHTML = planet.ores[1].oreName
        get("ore3").innerHTML = planet.ores[2].oreName
        get("ore4").innerHTML = planet.ores[3].oreName
        get("ore5").innerHTML = planet.ores[4].oreName
    }

    get("ore1s").innerHTML = planet.ores[0].oreName
    get("ore2s").innerHTML = planet.ores[1].oreName
    get("ore3s").innerHTML = planet.ores[2].oreName
    get("ore4s").innerHTML = planet.ores[3].oreName
    get("ore5s").innerHTML = planet.ores[4].oreName

    get("ore1count").innerHTML = Beautify(planet.ores[0].rubals)
    get("ore2count").innerHTML = Beautify(planet.ores[1].rubals)
    get("ore3count").innerHTML = Beautify(planet.ores[2].rubals)
    get("ore4count").innerHTML = Beautify(planet.ores[3].rubals)
    get("ore5count").innerHTML = Beautify(planet.ores[4].rubals)

    get("ore1count2").innerHTML = Beautify(planet.ores[0].rubals)
    get("ore2count2").innerHTML = Beautify(planet.ores[1].rubals)
    get("ore3count2").innerHTML = Beautify(planet.ores[2].rubals)
    get("ore4count2").innerHTML = Beautify(planet.ores[3].rubals)
    get("ore5count2").innerHTML = Beautify(planet.ores[4].rubals)

    if(planet.ores[0].rubals<1) {
        get("ore1count2").style.color = "#a32f33"
    } else {
        get("ore1count2").style.color = "#156303"
    }
    if(planet.ores[1].rubals<1) {
        get("ore2count2").style.color = "#a32f33"
    } else {
        get("ore2count2").style.color = "#156303"
    }
    if(planet.ores[2].rubals<1) {
        get("ore3count2").style.color = "#a32f33"
    } else {
        get("ore3count2").style.color = "#156303"
    }
    if(planet.ores[3].rubals<1) {
        get("ore4count2").style.color = "#a32f33"
    } else {
        get("ore4count2").style.color = "#156303"
    }
    if(planet.ores[4].rubals<1) {
        get("ore5count2").style.color = "#a32f33"
    } else {
        get("ore5count2").style.color = "#156303"
    }

    if (Galaxyminer.player.manager) {
        get("hidemebusi").style.display = "none"
    }
    if (Galaxyminer.player.extraStats) {
        get("hidememagi").style.display = "none"
    }

    if (Galaxyminer.player.planetTrav) {
        get("hidemep").style.display = "none"
    }
    if (Galaxyminer.player.starTrav) {
        get("hidemes").style.display = "none"
    }
    if (Galaxyminer.player.galaxyTrav) {
        get("hidemeg").style.display = "none"
    }

    get("levelUpPrice").innerHTML = "&#X20B9;" + Beautify(Galaxyminer.player.levelUpCost)

    get("ore1price").innerHTML = Beautify((planet.ores[0].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
    get("ore2price").innerHTML = Beautify((planet.ores[1].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
    get("ore3price").innerHTML = Beautify((planet.ores[2].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
    get("ore4price").innerHTML = Beautify((planet.ores[3].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)
    get("ore5price").innerHTML = Beautify((planet.ores[4].rarity * system.magic * planet.magic * Galaxyminer.player.sellMod)+Galaxyminer.player.sellAdd)

    get("status").innerHTML = statusMessage

    get("rupees").innerHTML = Beautify(Galaxyminer.player.rupees)
    get("exp").innerHTML = Beautify(Galaxyminer.player.exp)
    get("rep500").innerHTML = Beautify(Galaxyminer.player.rep)
    get("rep").innerHTML = "(REP " + Beautify(Galaxyminer.player.rep) + ")"

    get("exp2").innerHTML = Beautify(Galaxyminer.player.exp)
    get("exp3").innerHTML = Beautify(Galaxyminer.player.exp)
    get("rep3").innerHTML = Beautify(Galaxyminer.player.exp)

    get("traders").innerHTML = Math.round(Galaxyminer.player.traders)
    get("gamers").innerHTML = Math.round(Galaxyminer.player.gamers)
    get("miners").innerHTML = Math.round(Galaxyminer.player.miners)

    get("traders1").innerHTML = Beautify(Galaxyminer.player.tradePower)
    get("gamers1").innerHTML = Beautify(Galaxyminer.player.gamerPower)
    get("miners1").innerHTML = Beautify(Galaxyminer.player.pickPower)

    get("playerName").innerHTML = Galaxyminer.player.name

}, 1)

window.setInterval(function save() {
localStorage.setItem('savegame', JSON.stringify(Galaxyminer))
}, 300)

window.setInterval(function workersQuit() {
    if (Galaxyminer.player.traders > 5) {
        Galaxyminer.player.traders -= Math.round(Math.random()*5)
    }
    if (Galaxyminer.player.gamers > 5) {
        Galaxyminer.player.gamers -= Math.round(Math.random()*5)
    }
    if (Galaxyminer.player.miners > 5) {
        Galaxyminer.player.miners -= Math.round(Math.random()*5)
    }
}, 500)