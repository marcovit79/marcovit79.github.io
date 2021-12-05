
class SegmentListView {
  
  constructor( riverData, selector ) {
    this._riverData = riverData;
    this._selector = selector;
    this._listeners = []
  }

  addListener( obj, listener ) {
    this._listeners.push( { obj, listener })
  }

  render() {
    let lastRiver = null;
    let contentJqElHtml = '<ul>'

    for( let row of this._riverData.segments ) {
      let currentRiver = row.fiume;
      if ( lastRiver != currentRiver ) {
        if( lastRiver != null ) {
          contentJqElHtml += '</ul>'
        }
        contentJqElHtml += '<li>' + row.fiume + ' (' + row.regione + ')</li>'
        contentJqElHtml += '<ul>'

        lastRiver = currentRiver
      }

      let fullTitle = row.tratto;
      for( let g in row.grado ) {
        fullTitle = fullTitle + ' | ' + row.grado[g]
      }
      contentJqElHtml += '<li data-id="' + row._id + '">' + fullTitle + '</li>'
    }
    contentJqElHtml += '</ul>'
    contentJqElHtml += '</ul>'
    
    jQuery( this._selector ).html( contentJqElHtml )
    jQuery( this._selector ).find('li').on('click', (evt) => {
      let data = jQuery(evt.target).data();
      for( let { obj, listener } of this._listeners ) {
        listener.call( obj, data )
      }
    })
  }
}
