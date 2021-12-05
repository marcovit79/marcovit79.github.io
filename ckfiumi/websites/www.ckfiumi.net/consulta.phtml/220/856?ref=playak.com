






<!DOCTYPE html>
<html lang="it">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-15" />
<title>Discesa in canoa | Ckfiumi.net </title>
<meta name="rating" content="Safe For Kids" />
<meta name="viewport" content="maximum-scale=1.2, width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no" />
<link rel="stylesheet" type="text/css" media="all" href="https://d1uhw61oat9sws.cloudfront.net/tcss/39/styles2.min.css" />

<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lt IE 9]><script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script><![endif]-->
<script type="text/javascript">
function initialize() {
	 var locations = [
      ['Imbarco/Put In', {Page_i_lat_sess}, {Page_i_lon_sess}, 1],
      ['Sbarco/Take Off', {Page_s_lat_sess}, {Page_s_lon_sess}, 2]
    ];
	var myOptions = {
		center: new google.maps.LatLng(({Page_i_lat_sess}+{Page_s_lat_sess})/2, ({Page_i_lon_sess}+{Page_s_lon_sess})/2),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.HYBRID
   };
   var map = new google.maps.Map(document.getElementById("map"),myOptions);

	var infowindow = new google.maps.InfoWindow();
   var marker, i;

   for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
   }
}
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCwovf7SW04dMtSIftHEgxPTRkYI42Ejyg&sensor=false&callback=initialize";
  document.body.appendChild(script);
}
window.onload = loadScript;
</script>
</head>
<body>

<div id="headerwrap">
  <header id="mainheader" class="bodywidth"><a href="/"><img src="https://d1uhw61oat9sws.cloudfront.net/img/logo-ckfiumi.png" alt="CKfiumi.net" class="logo" /></a>
    <div id="websitetitle">
      <h1><span class="bold">Canoa</span> &  Kayak</h1>
      <h2>la comunit&agrave; virtuale dei canoisti italiani</h2>
    </div>
    <div class="div_mainheader">
      <ul>
        <li><a href="/" title="Home">Home</a></li>
      <!-- BEGIN tpl_login -->
		  <li><a href="/about.phtml" title="About">About</a></li>
        <li><a href="/login.phtml" title="Login">Editori</a></li>
		  <li><a href="/contatto.phtml" title="Contattatci">Contattaci</a></li>
      <!-- END tpl_login -->
      
      </ul>
    </div>
  </header>
</div>

<div id="maincontent" class="bodywidth">
	<h1><span class="label_B">fiume  Boite:Diga di Vodo di Cadore - Diga di Valle di Cadore</span></h1><br />
	<div id="aboutleft" class="fiume">
		<!-- START XSL HERE -->
<div class="rapp-contatiner"><div>
	regione Veneto
	(BL)
	</div><div><br/></div><div><div class="box_head">Tratto impegnativo che va dal 4  5</div><br/><ul class="clean box resourceList"><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">aggiornato al</div><div class="rscTblListItemDx">2015-06-09</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">grado</div><div class="rscTblListItemDx"><span class="grado IV">IV</span><span class="grado IVp">IV+</span><span class="grado V">V</span></div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">distanza</div><div class="rscTblListItemDx">7 Km
							</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">tempo previsto</div><div class="rscTblListItemDx">3 Ore
							</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">pendenza</div><div class="rscTblListItemDx">&nbsp;</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">stelle WildWater</div><div class="rscTblListItemDx"><img src="/img/1_stellaww.gif" alt="1_stellaww.gif" style="border:none"/></div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">portata</div><div class="rscTblListItemDx">8 mc/sec
							</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">stelle paesaggio</div><div class="rscTblListItemDx"><img src="/img/4_stella.gif" alt="4_stella.gif" style="border:none"/></div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">temperatura acqua</div><div class="rscTblListItemDx">fredda</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">qualita' acqua</div><div class="rscTblListItemDx">mediocre</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">periodo migliore</div><div class="rscTblListItemDx">dopo piogge</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">livello</div><div class="rscTblListItemDx">&nbsp;</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">fiumi vicini</div><div class="rscTblListItemDx">&nbsp;</div></div></li><li class="rscTblListItem"><div class="rscTblContainer"><div class="rscTblListItemSx rscTblListItemSxTitle">imbarcazioni</div><div class="rscTblListItemDx">Kayak  | 
	</div></div></li></ul><br/><div class="tbl_print"><div class="label_titolo">imbarco</div><div>Andando da Tai di Cadore verso cortina si passa per Vodo. Al centro di vodo andare a sx passando dopo la chiesa seguire la stradina che passa affianco allo stadio del ghiaccio, dopo poche centinaia di metri si attraversa un ponte che passa il Boite. Li è l'imbarco<br/></div><div class="label_titolo">sbarco</div><div>Dopo il paese di valle, scendere alla diga, attraversare la diga con l'auto, si sale per poche decine di metri e si incontra un piccolo parcheggio.<br/></div><div class="label_titolo">assistenza da riva</div><div>in un paio di golette non possibile</div><div class="label_titolo">attenzione</div><div>A metà percorso in una goletta, passaggio 5  sifonato a dx possibile e consigliato trasbordo a dx a fine laghetto <br/><br/>Dalla statale 51 è possibile valutare il percorso ed il livello, andando dopo Venas verso Cibiana, si passa su un ponte da dove si vede bene uno dei tratti ingolati più belli.</div></div><br/><div class="tbl_print"><div class="label_titolo">idrometro</div><div>Dal ponte guardando verso monte sulla sx c'è una putrella di ferro. Perche il livello sia buono la putrella deve essere lambita dall'acqua o appena sotto. Alla partenza il fiume deve essere navigabile con delle discrete linee, se si valuta che c'è poca acqua meglio lasciar perdere.</div><div class="label_titolo">locals di riferimento</div><div>Maddalin Bruno<br/></div></div><br/><div class="label_titolo">descrizione</div><div>GOLE BASSE DEL BOITE  (Diga di Vodo diga di Valle)<br/>IMBARCO : L'imbarco si trova a valle della diga di Vodo. Dalla statale 51 che va da Tai a Cortina, si passa per Vodo, lasciare la statale ed andare in centro del paesino (davanti alla chiesa) prendere la stradina che porta al campo da calcio e allo stadio del ghiaccio, proseguire per 500m fin che si attraversa un ponticello, li è l'imbarco. <br/>SBARCO : Passato Valle di Cadore in prossimità di una curva a dx sulla sinistra si scende alla diga del lago di Valle. Scendere fino alla diga, oltrepassarla e continuare per la stradina, salendo per circa 3-400m sulla sx c'è un piccolo spiazzo dove si possono parcheggiare 3 auto. Sulla dx c'è una sbarra di ferro che chiude una stradina che porta al lago, da dove si risalira a piedi. (150m)<br/>Tratto stupendo ma poco conosciuto e frequentato.<br/>Scorre in in canyon a volte molto stretto, dove l'assistenza da riva è quasi sempre possibile, ma una volta entrati è quasi impossibile uscire, per ciò valutare bene il livello del fiume prima di entrare.<br/>L'imbarco si trova a valle della diga di Vodo. Il livello di rilascio della diga dovrebbe essere da 6 ai 9 mc al secondo, ma i dati forniti dagli operai della diga spesso non ci sono sembrati giusti, per ciò meglio valutare guardando dal ponte di imbarco. Dal ponte guardando verso monte sulla sx c'è una potrella di ferro, perchè il livello sia buono, la potrella deve essere lambita dall'acqua o appena sotto. Alla partenza il fiume deve essere navigabile con delle discrete linee, se si valuta che c'è poca acqua meglio lasciar perdere. <br/>Il primo km è tranquillo, e può servire per capire se il livello d'acqua è giusto. Se ci sono dubbi che ce ne sia troppa, meglio uscire prima di entrare nelle gole da dove non si esce più. Si passa sotto ad un ponte, poco dopo fermarsi a guardare il passaggio. Il fiume scorre sulla destra con una rapidina di III a fine rapida c'è un salto di 3 m. Che finisce in una pozza, tagliare bene da sx verso dx perché sotto al sassone di sx c'è un bel nicchione, meglio fare una sicura dal sassone perché il buco tende a tenere. (Passaggio di 4 )<br/>Da li in poi il fiume continua con un susseguirsi di rapide e passaggi intorno al IV grado tutti ispezionabili. Ad un certo punto della gola si vede che il gioco si fa duro, difficile darvi un riferimento ma si vede che il fiume cambia pendenza con dei sassoni enormi rovesciati nel fiume, <br/>é un bel passaggio di V , il fiume rende possibile scegliere fra 3 passaggi ma tecnicamente molto difficili, il più semplice è il ramo di dx c'è una cascata di 3m con l'acqua che già, e un buco che tiene, per ciò entrare veloci puntare la canoa come se si volesse saltare fuori dal fiume, e giù, veloci poi a tenere la dx perché il sassone enorme che c'è a fine rapida sulla sx è sifonato, per ciò stargli lontano. Ma tranquilli, se non vi va di complicarvi troppo la vita, si trasborda facilmente a sx e ci si imbarca dopo il sassone da dove si vede bene l'uscita del sifone, davvero spettacolare.<br/>Si prosegue in una gola strettissima e spettacolare, quando la goletta si apre e gira a dx prendere una mortina a sx perché nel 2013 c'è un tronco di traverso a filo d'acqua che chiude tutto il fiume. Con livello alto si passa sopra ma con livello medio, o si fa un bell'eskimo passando sotto al tronco o si trasborda e da sopra al tronco si tenta un'imbarco svizzero, ma tranquilli se si va a bagno c'è una bella pozza per recuperare tutto.  <br/>La gola prosegue e si giunge ad un'altro cambio di pendenza con un passaggio strettissimo tortuoso e anche sifonato. Sarebbe un trasbordo, anche se in realtà qualche canoista lo fa. È un bel V  forse anche VI per ciò scendete, a dx guardate, e se ve la sentite, buona fortuna!!!!!!!!! altrimenti trasbordo a dx.<br/>La gola prosegue e alla fine di un trattino tranquillo altro passaggio di IV  con bella rapida che passa sotto al ponte di Cibiana.<br/>Lingua centrale un bel salto di un paio di metri e subito a dx strettoia fra due sassi e giu a centro fiume sulla rapida che porta sotto al ponte. C'è anche un ramo del fiume che scorre a sx forma un toboga strettissimo, ma si può percorrere soltanto se precedentemente si è fatto una ricognizione con il binocolo, da sopra il ponte che porta a Cibiana, perché spesso nel toboga ci sono incastrati tronchi o radici!!!<br/>Dopo il ponte ci sono ancora un paio di bellissime rapide  di IV  <br/>Il fiume si calma, si esce dalla gola e si entra nel lago di Valle, una pagaiata di una quindicina di minuti, tenendo la dx del lago, si vede un vecchio pedalò abbandonato, un po più avanti c'è una stradina che porta su al parcheggietto dove avrete lasciato precedentemente l'auto per il recupero.</div></div><div><div class="spazio">&nbsp;</div><div>Hanno contribuito a questo report:</div><div><a href="/profilo.phtml/SergioNalin">SergioNalin</a>&nbsp;</div><div class="spazio">&nbsp;</div></div></div>
<!-- END XSL HERE --><p style="text-align:right"> <script type="text/javascript">
			function image() {  
				window.open("/consulta.phtml/220/856/printable","image","toolbar=no,width=620,height=400,status=no,scrollbars=yes,resizable=no,menubar=no");
			}
         </script>
		<a href="/consulta.phtml/220/856/printable" onclick="image(); return false;">Stampa</a>
		<a href="/consulta.phtml/220/856/printable" onclick="image(); return false;">
		<img src="//img/print.gif" alt="printable" style="border:0px" /></a>
          </p>
	</div>
	<section id="articlesright">
<!-- INIZIO MENU DX -->
         <ul class="menu">
            <li class="menu_sel"><a href="/fiume.phtml">Fiumi</a></li>
            <li class="menu"><a href="/idrometri/">Livelli Idrometri</a></li>
            <li class="menu"><a href="/ricerca.phtml">Ricerca Fiume</a></li>
            <li class="menu"><a href="/gradi.phtml">La scala dei gradi WW</a></li>
            <li class="menu"><a href="/segnali-di-sicurezza-in-kayak.phtml">I Segnali in fiume</a></li>
         </ul>
         <div class="usrListAlfabetica">
         <fieldset><legend>ricerca fiumi</legend>
         	<form id="cercaFiume" method="get" action="/fiume.phtml">
	<div>
		<input type="hidden" value="{ListaAlfabetica::lettera}" name="letter"/>
		<select class="mselect" name="nazione"  onchange="document.getElementById('cercaFiume').submit()">
			
				<option value="IT"  selected="selected">Italia</option>
			
				<option value="A" >Austria</option>
			
				<option value="BAL" >Balcani</option>
			
				<option value="FR" >Francia</option>
			
				<option value="GR" >Grecia</option>
			
				<option value="NOR" >Norvegia</option>
			
				<option value="SLO" >Slovenia</option>
			
				<option value="ES" >Spagna</option>
			
				<option value="CH" >Svizzera</option>
			
		</select>
	</div> 
<!-- inizio listaAlfabetica -->
	<div class="tbl width-90">
 
    <div class="tbl-row">

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/A"><b>A</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/B"><b>B</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/C"><b>C</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/D"><b>D</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/E"><b>E</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/F"><b>F</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/G"><b>G</b></a></div>

        
    </div>
 
    <div class="tbl-row">

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/H"><b>H</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/I"><b>I</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/J"><b>J</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/K"><b>K</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/L"><b>L</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/M"><b>M</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/N"><b>N</b></a></div>

        
    </div>
 
    <div class="tbl-row">

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/O"><b>O</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/P"><b>P</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/Q"><b>Q</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/R"><b>R</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/S"><b>S</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/T"><b>T</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/U"><b>U</b></a></div>

        
    </div>
 
    <div class="tbl-row">

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/V"><b>V</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/W"><b>W</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/X"><b>X</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/Y"><b>Y</b></a></div>

        <div class="tbl-cell listaAlfabetica"><a class="" href="/fiume.phtml/letter/Z"><b>Z</b></a></div>

        
    </div>
	
</div>

<br />
<!-- fine listaAlfabetica -->
	
	</form>
	



         </fieldset>
         <fieldset><legend>fiumi per regione</legend>
         <form id="FiumiPerRegioni" method="get" action="/fiume.phtml">
	<div >
		<select class="mselect" name="regione" onchange="document.getElementById('FiumiPerRegioni').submit()">
			<option value="">-- seleziona --</option>
			
				<option value="1" >Abruzzo</option>
			
				<option value="2" >Basilicata</option>
			
				<option value="3" >Calabria</option>
			
				<option value="4" >Campania</option>
			
				<option value="5" >Emilia Romagna</option>
			
				<option value="6" >Friuli Venezia Giulia</option>
			
				<option value="7" >Lazio</option>
			
				<option value="8" >Liguria</option>
			
				<option value="9" >Lombardia</option>
			
				<option value="10" >Marche</option>
			
				<option value="11" >Molise</option>
			
				<option value="12" >Piemonte</option>
			
				<option value="13" >Puglia</option>
			
				<option value="14" >Sardegna</option>
			
				<option value="15" >Sicilia</option>
			
				<option value="16" >Toscana</option>
			
				<option value="17" >Trentino Alto Adige</option>
			
				<option value="18" >Umbria</option>
			
				<option value="19" >Val d'Aosta</option>
			
				<option value="20" >Veneto</option>
			
		</select>
	</div> 
</form>
	
	

         </fieldset>
         </div>
         <div class="textWel">
         <p>TI RICORDIAMO CHE:<br/>
         1- I fiumi vanno discesi con  attrezzature e abbigliamento  adatto al tipo di percorso
         affrontato.<br/>
         2- Per discendere i fiumi bisogna frequentare dei corsi di canoa tenuti da
         personale qualificato.<br/>
         3- I principianti durante le discese devono essere affiancati e consigliati
         da guide esperte.<br/>
         4- Una discesa non si effettua mai in solitaria, il numero minimo dei partecipanti può variare
         a seconda della preparazione dei canoisti e delle difficoltà che si possono incontrare.
         </p>
         </div>

<!-- FINE MENU DX -->
	</section>
</div>

<!-- Begin Cookie Consent plugin by Silktide - http://silktide.com/cookieconsent -->
<script type="text/javascript">
    window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on our website","dismiss":"Got it!","learnMore":"More info","link":null,"theme":"dark-bottom"};
</script>

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js"></script>
<!-- End Cookie Consent plugin -->

<div id="footerwrap">
  <footer id="mainfooter" class="bodywidth">
    <div>
      <ul>
        <li><a href="/" title="Home">Home</a></li>
        <li><a href="/about.phtml" title="About">About</a></li>
        <li><a href="/sitemap.phtml" title="Sitemap">Sitemap</a></li>
        <li><a href="/contatto.phtml" title="Contact Us">Contattaci</a></li>
      </ul>
    </div>
    <p class="copyright">Copyright &copy; 2006-2014. All rights reserved<!--Valid <a href="http://validator.w3.org/check?uri=referer&&charset=iso-8859-15&doctype=HTML5&group=0&user-agent=W3C_Validator%2F1.3+http%3A%2F%2Fvalidator.w3.org%2Fservices" title="HTML5">HTML5</a>-->.</p>
  </footer>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://d1uhw61oat9sws.cloudfront.net/tjs/39/jquery-ui-1.10.3.custom.min.js" ></script>
<script src="//www.ckfiumi.net/tjs/39/call/?q=new;index" ></script>
</body>
</html>



