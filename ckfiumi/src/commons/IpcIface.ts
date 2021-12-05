export interface IpcIface {

    registerMainRpc( name: string, obj: any, rpc: ( ... p: any) => any ): void;

    callMainRpc( name: string, arg: any[] ): Promise<any>;
}