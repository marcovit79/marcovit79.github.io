
class RiverData {
  
  constructor( riverData ) {
    this._filters = {
      region : "",
      min_lvl: 1,
      max_lvl: 7,
      withoutLvl: true
    }

    for( let row of riverData ) {
  
      row.gpsImbarco = getGps( row.imbarco )
      row.gpsSbarco = getGps( row.sbarco )
      row.hasGPS = row.gpsImbarco || row.gpsSbarco
      row.gradoParsed = (row.grado || [] ).map( grado => parseGrado( grado ) );
      
      row.provincia = row.regione.replace(/[^\(]*\(([A-Za-z]+).*/, '$1').trim()
      row.regione = row.regione.replace(/regione([^\(]*).*/, '$1').trim()
      
    }
    this._riverData = riverData
    this._appyFilter()
  }

  _appyFilter() {
    let checkRow = ( row ) => {
      let regionOk = ("" == this._filters.region || this._filters.region == row.regione )
      
      let lvlOk;
      if( row.gradoParsed ) {
        lvlOk = true;
        for( let gp of row.gradoParsed ) {
          lvlOk = lvlOk && ( gp.score >= this._filters.min_lvl && gp.score <= this._filters.max_lvl ) 
        }
      }
      else {
        lvlOk = this._filters.withoutLvl;
      }

      return regionOk && lvlOk
    }
    this._filteredData = this._riverData.filter( checkRow )
  }

  get segments() {
    return [ ... this._filteredData ]
  }

  set minLevel( v ) {
    this._filters.min_lvl = v 
    this._appyFilter()
  }

  set maxLevel( v ) {
    this._filters.max_lvl = v 
    this._appyFilter()
  }

  set region( v ) {
    this._filters.region = v 
    this._appyFilter()
  }

  sortByRiver() {
    stableSort( this._riverData, compareByProperty('fiume') )
    this._appyFilter()
  }

  sortBySegment() {
    stableSort( this._riverData, compareByProperty('tratto') )
    this._appyFilter()
  }

  sortByRegion() {
    stableSort( this._riverData, compareByProperty('regione') )
    this._appyFilter()
  }

  get( id ) {
    let results = this._riverData.filter( row => row._id == id )
    return results.length ? results[0] : null
  }
  
}




function getGps( gpsString ) {
  let result = null;

  if( gpsString && gpsString.match(/GPS/g)) {
    let gpsElements = gpsString.replace(/&nbsp;/g, '').replace(/.*GPS:.*Lat[^0-9]*([0-9\.]+)[^0-9]*([0-9\.]+)[^0-9]*([0-9\.]+)[^0-9]*([NS])[^0-9]*([0-9\.]+)[^0-9]*([0-9\.]+)[^0-9]*([0-9\.]+)[^0-9]*([EO])/, "$1#$2#$3#$4#$5#$6#$7#$8")
    let gpsArr = gpsElements.split('#');
    let lat = parseInt(gpsArr[0]) + parseInt(gpsArr[1]) / 60 + parseInt(gpsArr[2]) / 3600
    let long = parseInt(gpsArr[4]) + parseInt(gpsArr[5]) / 60 + parseInt(gpsArr[6]) / 3600

    if( lat && long ) {
      result = { lat, long}
    }
  }
  
  return result;
}

let SCORES = {
  "I": 1,
  "I+": 1.5,
  "II": 2,
  "II+": 2.5,
  "III": 3,
  "III+": 3.5,
  "IV": 4,
  "IV+": 4.5,
  "V": 5,
  "V+": 5.5,
  "VI": 6,
  "VI+": 6.5,
  "VII": 7
}

function parseGrado( str ) {

  let trimmed = str.trim()
  let passaggio = !!trimmed.match(/\(/)
  if( passaggio ) {
    trimmed = trimmed.replace(/[()]/g, '')
  }

  let score = SCORES[ trimmed ]
  
  return { score, passaggio, toString: function() {
    return (this.passaggio ? '<i>(' : '') + this.score + (this.passaggio ? ')</i>' : '') 
  }}
}


function stableSort( array, comparator ) {
  let stableComparator = (a,b) => {
    let result = comparator(a,b)
    if( result == 0 ) {
      let idxA = array.indexOf(a)
      let idxB = array.indexOf(b)
      result = idxA - idxB
    }
    return result
  }
  array.sort( stableComparator )
}

function compareByProperty( propName ) {
  return (a,b) => {
    let aVal = a[propName]
    let bVal = b[propName]
    if ( aVal < bVal ){
      x = -1;
    }
    else if ( aVal > bVal ){
      x = 1;
    }
    else {
      x = 0;
    }
    return x;
  }
}
