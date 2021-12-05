import { IPC } from '../utils/Ipc'
import { ELECTRON_FOR_RENDERER } from '../utils/RestrictedElectron'

window.addEventListener("DOMContentLoaded", () => {
  window['IPC'] = IPC;
  window['ELECTRON_FOR_RENDERER'] = ELECTRON_FOR_RENDERER;

  window.dispatchEvent( new Event('render-ready'));      
});
