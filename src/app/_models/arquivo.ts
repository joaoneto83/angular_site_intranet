export interface Arquivo {
    id: string;
    codigoTipoArquivo: string;
    nomeArquivo: string;
    alt:string;
    caminho: string;
    ordem?: number;
    ativo: boolean;
    idPai: string;
    idSecao?: string;
    linque: string;
    extensao?: string;
}