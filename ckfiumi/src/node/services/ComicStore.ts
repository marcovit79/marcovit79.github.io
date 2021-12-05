import * as fs from 'fs'
import { Dirent } from 'fs'
import * as path from 'path'
import { ComicStoreIface, FileTreeNode, HtmlFile } from 'src/commons/ComicStoreIface';



class ComicStore implements ComicStoreIface {

    constructor( private rootPath: string ) {
    }
    
    private static readDir( path: string) : Promise<Dirent[]> {
        return new Promise( ( resolve, reject) => {
            fs.readdir( path, { encoding: 'utf8', withFileTypes: true},  (err, data) => {
                if( err ) {
                    reject(err)
                }
                else {
                    resolve(data)
                }
            });
        })
        
    }

    private static async listOneDir( fullPath: string, relPath: string ): Promise<FileTreeNode[]> {
        const dirEntries = await this.readDir( fullPath );

        const result: FileTreeNode[] = dirEntries.map( de => ({ 
            fullPath: path.join( relPath, de.name),
            isFolder: de.isDirectory(),
            name: de.name
        }))
        return result;
    }

    private static async listRecursiveDir( fullPath: string, relPath: string): Promise<FileTreeNode[]> {
        const result = await this.listOneDir( fullPath, relPath );

        for( let e of result ) {
            if( e.isFolder ) {
                const childFullPath = path.join( fullPath, e.name);
                const childRelPath = path.join( relPath, e.name);
                e.children = await this.listRecursiveDir( childFullPath, childRelPath );
            }
        }

        return result;
    }

    public async listFiles(): Promise<FileTreeNode[]> {
        return await ComicStore.listRecursiveDir( this.rootPath, '');
    }

    loadFile(fullPath: string): Promise<HtmlFile> {
        return new Promise( (accept, reject) => {
            fs.readFile( path.join( this.rootPath, fullPath), { encoding: 'utf-8'}, (err, data) => {
                if( err ) {
                    reject( err )
                }
                else {
                    accept( { content: data, name: fullPath})
                }
            })
        })
    }

    logMsg( msg: string) {
        console.log( msg );
        return new Promise( (accept, reject) => {
            accept( 0 )
        });
    }

    writFile(fullPath: string, content: string): Promise<number> {
        return new Promise( (accept, reject) => {
            fs.writeFile( path.join( this.rootPath, fullPath), content, { encoding: 'utf-8'}, (err) => {
                if( err ) {
                    reject( err )
                }
                else {
                    accept( 0 )
                }
            })
        })
    }

}
    
export const COMICS_STORE = new ComicStore( path.join( process.cwd(), 'websites', 'www.ckfiumi.net'));
