
class MapView {
  
  constructor( riverData, selector) {
    this._riverData = riverData;
    this._selector = selector;
    this._markers = []

    this._SELECTED_ICON =  L.AwesomeMarkers.icon({icon: 'spinner', prefix: 'fa', markerColor: 'red', spin:true})
    this._UNSELECTED_ICON =  L.AwesomeMarkers.icon({icon: 'circle', prefix: 'fa', markerColor: 'blue', spin:false})
  }

  render() {
    
    if( ! this._map ) { // - Only first time
      this._initLeaflet();
    }

    for( let m of this._markers ) {
      this._map.removeLayer( m );
    }
    this._markers = []

    for( let row of this._riverData.segments ) {

      if( row.hasGPS ) {
        if( row.gpsImbarco ) {
          let marker = buildMarker( "Imbarco", row.gpsImbarco, row, this._UNSELECTED_ICON)
          marker.addTo( this._map )
          this._markers.push( marker )
        }
        if( row.gpsSbarco ) {
          let marker = buildMarker( "Sbarco", row.gpsSbarco, row, this._UNSELECTED_ICON)
          marker.addTo( this._map )
          this._markers.push( marker )
        }
      }
    }

    if( this._markers.length ) {
      let group = new L.featureGroup( this._markers );
      this._map.fitBounds( group.getBounds() );
    }
    else {
      this._map.setView([44.0, 8.5], 6);
    }

  }

  select( id ) {
    for( let m of this._markers ) {
      let icon = ( m.id == id ) ? this._SELECTED_ICON : this._UNSELECTED_ICON
      m.setIcon( icon )
    }
  }

  _initLeaflet() {
    let el = jQuery( this._selector ).get( 0 );
    this._map = L.map( el ).setView([44.0, 8.5], 6);

    this._tileLayer = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    );
    this._tileLayer.addTo( this._map);
  }
}


function buildMarker( type, gps, row, icon) {
  let marker = L.marker([gps.lat, gps.long], { icon, title: type + " " + row.fiume + " " + row.tratto });
  marker.id = row._id
  return marker;
}
