import * as Electron from 'electron'
import { ipcRenderer } from 'electron'

import { IpcIface } from '../../commons/IpcIface'

class Ipc implements IpcIface {

    public registerMainRpc( name: string, obj: any, rpc: ( ... p: any) => any ): void {
        Electron.ipcMain.on( name, ( event, args) => {
            const thennableCandidate = rpc.apply( obj, args );
            
            if( thennableCandidate.then ) {
                thennableCandidate.then( (result) => {
                    event.reply( name, { ok: true, r: result });
                })
                .catch( err => {
                    event.reply( name, { ok: false, e: err });
                });
                
            }
            else {
                event.reply( name, thennableCandidate );
            }
        })
    }

    public callMainRpc( name: string, arg: any ): Promise<any> {
        const p = new Promise( ( resolve, reject) => {
            ipcRenderer.once( name, ( event, ret) => {
                if( ret.ok ) {
                    resolve( ret.r );
                }
                else {
                    reject( ret.e );
                }
                
            })
            setTimeout(() => {
                reject( name + " main call timeout");
            }, 20 * 1000);
        });

        ipcRenderer.send( name, arg);
        return p;
    }

}

export const IPC = new Ipc();
