import { IPC } from '../utils/Ipc'
import { COMICS_STORE } from './ComicStore'

export function initServices() {

    IPC.registerMainRpc("listFiles", COMICS_STORE, COMICS_STORE.listFiles );
    IPC.registerMainRpc("loadFile", COMICS_STORE, COMICS_STORE.loadFile );
    IPC.registerMainRpc("logMsg", COMICS_STORE, COMICS_STORE.logMsg );
    IPC.registerMainRpc("writFile", COMICS_STORE, COMICS_STORE.writFile );
    
}

