export interface EventoRefrigeracao {
    id: string;
    titulo: string;
    dataDe: Date;
    dataAte: Date;
    dataFormatada: string;
    local: string;
    caminhoImagem: string;
    idTipoEventoRefrigeracao: number;
    nomeTipoEventoRefrigeracao: string;
    link: string;
}