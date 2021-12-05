jQuery( () => {

  let riverData = new RiverData( window.riverData )
  let list = new SegmentListView( riverData, '#list' )
  let map = new MapView( riverData, '#map' )

  list.addListener( null, (idObj) => renderDetails( riverData.get( idObj.id )) )
  list.addListener( null, (idObj) => map.select( idObj.id) )
  
  riverData.sortBySegment()
  riverData.sortByRiver()
  riverData.sortByRegion()
  
  riverData.region = jQuery('#regione').val()
  riverData.minLevel = parseFloat( jQuery('#lvl_min').val() )
  riverData.maxLevel = parseFloat( jQuery('#lvl_max').val() )
  
  list.render()
  map.render()

  console.log( riverData );
  console.log( "Totale tratti", riverData.segments.length )
  console.log( "Senza GPS", riverData.segments.filter( row => !row.hasGPS ) )
  console.log( "Senza grado", riverData.segments.filter( row => row.gradoParsed.length == 0 ) )

  jQuery("#regione").on( 'change', (evt) => {
    let r = jQuery(evt.target).val()
    riverData.region = r;
    list.render()
    map.render()
  })

  jQuery("#lvl_min").on( 'change', (evt) => {
    let v = jQuery(evt.target).val()
    riverData.minLevel = parseFloat( v );
    list.render()
    map.render()
  })

  jQuery("#lvl_max").on( 'change', (evt) => {
    let v = jQuery(evt.target).val()
    riverData.maxLevel = parseFloat( v );
    list.render()
    map.render()
  })

})

function renderDetails( details ) {
  console.log( details );
  let html = '';
  html += '<h5><b>' + details.fiume + '</b> (' + details.regione + ')</h5>'
  html += '<h3 class="title"><b>' + details.tratto + '</b></h3>'
  html += '<h3 class="lvl_www">Livello WWW: ' + (details.grado || []).join(', ') + '</h3>'
  html += '<h3 class="length">Percorrenza: ' + ( details.distanza || 'n/d') 
                                         + ' (' + (details['tempo previsto'] || 'n/d')+')</h3>'
  html += '<h5 class="stelle">Stelle www: <span class="www">' 
       + ( (details['stelle WildWater'] || [null])[0] || 'n/d').replace('_stellaww.gif','')
       + '</span>, paesaggio: <span class="paesaggio">'
       + ((details['stelle paesaggio'] || [null])[0] || 'n/d').replace('_stella.gif','')
       + '</span></h5>'
  html += '<h6 class="periodo">Periodo migliore: ' + (details['periodo migliore'] || 'n/d') +'</h6>'

  if( details.imbarco ) {
    html += '<h5 class="sect">Imbarco</h5>'
    html += '<div class="imbarco">' + details.imbarco + '</div>'
  }

  if( details.sbarco ) {
    html += '<h5 class="sect">Sbarco</h5>'
    html += '<div class="sbarco">' + details.sbarco + '</div>'
  }

  if( details.descrizione ) {
    html += '<h5 class="sect">Descrizione</h5>'
    html += '<div class="description">' + details.descrizione + '</div>'
  }

  html += '<pre>' + JSON.stringify( details, null, 2 ) + '</pre>'
  jQuery("#details").html( html )
}
