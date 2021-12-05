const fs = require('fs')



var jsonStr = fs.readFileSync( "websites/www.ckfiumi.net/extracted.json", { encoding: 'utf-8'})

var data = JSON.parse( jsonStr )


for( let row of data ) {
  if( row['<a href=\"\" rel=\"nofollow\">idrometro</a>'] ) {
    row['idrometro'] = row['<a href=\"\" rel=\"nofollow\">idrometro</a>']
    delete row['<a href=\"\" rel=\"nofollow\">idrometro</a>']
  }
  if( row['<a href=\"\" rel=\"nofollow\">locals di riferimento</a>'] ) {
    row['locals di riferimento'] = row['<a href=\"\" rel=\"nofollow\">locals di riferimento</a>']
    delete row['<a href=\"\" rel=\"nofollow\">locals di riferimento</a>']
  }
  if( row['<a href=\"\" rel=\"nofollow\">siti web con foto</a>'] ) {
    row['siti web con foto'] = row['<a href=\"\" rel=\"nofollow\">siti web con foto</a>']
    delete row['<a href=\"\" rel=\"nofollow\">siti web con foto</a>']
  }
  //if( row['imbarcazioni '] ) {
    row['imbarcazioni'] = row['imbarcazioni ']
    delete row['imbarcazioni ']
  //}

  row.giudizio = row.abstract
  delete row.abstract
}



for( let row of data ) {
  for( let key in row ) {
    let value = row[key]
    let normalizedValue = normalize( value )
    row[key] = normalizedValue
  }
}

for( let row of data ) {
  row.fiume = row.title.replace(/^fiume/,'').replace(/:.*/, '').trim()
  row.tratto = row.title.replace(/[^:]+:/, '').trim()
}

console.log( JSON.stringify( data ))



function normalize( value ) {
  let normalized;
  if( value && value.replace ) { // - Assume string
    normalized = value.replace(/<[^>]*>/g, ' ').replace(/[ \t\n]+/g, ' ').trim()
  }
  else {
    normalized = value
  }
  return normalized
}

let content = "window.riverData = " + JSON.stringify( data )
fs.writeFileSync( "new_site/data.js", content, { encoding: 'utf-8'})
