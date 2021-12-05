import { FileTreeNode, HtmlFile } from "src/commons/ComicStoreIface";
import { IpcIface } from "src/commons/IpcIface";

async function loadFileList() {
  const IPC: IpcIface = window['IPC'];
  const allFiles: FileTreeNode[] = await IPC.callMainRpc("listFiles", []);

  const descriptionDir: FileTreeNode[] = allFiles.filter( f => f.fullPath == 'consulta.phtml')[0].children || [];
  
  return descriptionDir;
}


function renderDescriptionDir( dir: FileTreeNode[] ) {
  let html = '<ul>';
  for( let fiume of dir) {
    html += '<li>' + fiume.name + '</li>\n'
    html += '<ul>'
    for( let tratto of fiume.children) {
      html += '<li class="tratto" path="' + tratto.fullPath + '">' + tratto.name + '</li>\n'
    }
    html += '</ul>'
  }
  html += "</ul>";
  return html;
}

function getIframeDocument(): Document {
  let iframe: HTMLIFrameElement = document.getElementById('file') as HTMLIFrameElement;
  return iframe.contentDocument;
}

function renderContent( file: HtmlFile) {
  var doc = getIframeDocument()
  doc.open()
  doc.write( file.content )
  doc.close()
}

function renderData( data ) {
  let str = JSON.stringify( data,null,'  ')
  document.getElementById('data').innerHTML = '<pre>' + str + '</pre>';
}

function getContent1() {
  let doc = getIframeDocument();
  let result = {}

  // - Titolo
  let title = doc.querySelector("h1 > span.label_B").innerHTML;
  result['title'] = title;

  // - Regione
  let regione = doc.querySelector("div.rapp-contatiner > div:first-child").innerHTML;
  result['regione'] = regione;

  // - Abstract
  let abstract = doc.querySelector("div.box_head").innerHTML;
  result['abstract'] = abstract;


  // - Prima tabella
  doc.querySelectorAll(".rscTblContainer").forEach( (item) => {
    let title = item.querySelector(".rscTblListItemSx").innerHTML
    
    let value;
    let valueElement = item.querySelector(".rscTblListItemDx");
    if( valueElement.children.length ) {
      value = []
      for (let i = 0; i < valueElement.children.length; i++) {
        let child = valueElement.children[i]
        if( child.getAttribute('alt') ) {
          value.push( child.getAttribute('alt') )
        }
        else {
          value.push( child.innerHTML )
        }
      }
    }
    else {
      value = valueElement.innerHTML;
    }
    result[ title ] = value
  })

  // - Sezioni successive
  doc.querySelectorAll(".label_titolo").forEach( (item) => {
    let title = item.innerHTML
    
    let valueElement = item.nextElementSibling
    result[ title ] = valueElement.innerHTML
  })
  return result;
}


function getContent2() {
  let doc = getIframeDocument();
  let result = {}

  // - Titolo
  let title = doc.querySelector("#sottoElCont > table:first-child > tbody > tr:first-child > td").innerHTML;
  result['title'] = title;
  
  // - Regione
  let regione = doc.querySelector("#sottoElCont > table:first-child > tbody > tr:nth-child(2) > td").innerHTML;
  result['regione'] = regione;
  
  // - Abstract
  if( doc.querySelector("div.giudizio") ) {
    let giudizio = doc.querySelector("div.giudizio").innerHTML;
    result['giudizio'] = giudizio;
  }  

  // - Prima tabella
  doc.querySelectorAll(".label_s").forEach( (item) => {
    let title = item.innerHTML
    
    let value;
    let valueElement = item.nextElementSibling;
    if( valueElement ) {
      if( valueElement.children.length ) {
        value = []
        for (let i = 0; i < valueElement.children.length; i++) {
          let child = valueElement.children[i]
          if( child.getAttribute('alt') ) {
            value.push( child.getAttribute('alt') )
          }
          else {
            value.push( child.innerHTML )
          }
        }
      }
      else {
        value = valueElement.innerHTML;
      }
      result[ title ] = value
    }
  })

  // - Sezioni successive
  doc.querySelectorAll("table.tbl_print td.label_titolo").forEach( (item) => {
    let title = item.innerHTML
    
    if(item.parentElement.nextElementSibling) {
      let valueElement = item.parentElement.nextElementSibling.querySelector("td");
      if( valueElement ) {
        result[ title ] = valueElement.innerHTML
      }
    }
    
  })
  return result;
}


async function clickOnSegment( fullPath: string) {
  const IPC: IpcIface = window['IPC']
  const file: HtmlFile = await IPC.callMainRpc("loadFile", [ fullPath + '/index.html' ])
  
  renderContent( file )
  await sleep(1)
  let data = getContent2()
  console.log( data )
  renderData( data )
}

function sleep( sec: number) {
  return new Promise( (accept, reject) => {
    setTimeout( () => {
      accept( null );
    }, sec * 1000)
  })
}


async function saveAllSegment() {
  let discarded = [];
  let allSegment = [];
  const IPC: IpcIface = window['IPC']
  let fileList = await loadFileList()
  for( let fiume of fileList) {
    for( let tratto of fiume.children) {
      console.log( tratto.fullPath );
      
      let segmentData = null;
      try {
        const file: HtmlFile = await IPC.callMainRpc("loadFile", [ tratto.fullPath + '/index.html' ])
        renderContent( file )
        await sleep(1)

        try {
          segmentData = getContent1()
        }
        catch( err ) {
          segmentData = getContent2()
        }
      }
      catch ( err ) {
        discarded.push( tratto.fullPath )
        await IPC.callMainRpc("logMsg", [ "SCARTATO: " + JSON.stringify( tratto.fullPath )])
      }
      
      if( segmentData ) {
        segmentData._id = tratto.fullPath;
        allSegment.push( segmentData );
      }
    }
  }
  console.log( allSegment );
  console.log( discarded );
  await IPC.callMainRpc("writFile", [ "extracted.json", JSON.stringify( allSegment ) ])
  await IPC.callMainRpc("logMsg", [ "END: " + JSON.stringify( discarded )])
}

async function init() {
  document.getElementById('list').innerHTML = renderDescriptionDir( await loadFileList() )
  document.addEventListener( 'click', (evt) => {
    let element: Element = evt.target as Element;
    let path = element.getAttribute('path');
    if( path ) {
      clickOnSegment( path );
    }
    else {
      let action = element.getAttribute('action');
      if( "saveSegment" == action ) {
        saveAllSegment();
      }
    }
    
  })
}

window.addEventListener("render-ready", function(e) {
  init();
});

