/**
 * Tipo para las zonas horarias más comunes.
 * Puedes añadir más según necesites.
 */
export type TimeZone = "America/Mexico_City" | "America/Tijuana" | "America/New_York" | "America/Los_Angeles" | "UTC";
export interface DateRange {
    start: Date;
    end: Date;
}
declare class TimeMaster {
    private readonly timezone;
    constructor(timezone?: TimeZone);
    /**
     * Obtiene la instancia de Date nativa ajustada a la zona horaria configurada.
     */
    getInstance(): Date;
    /**
     * Retorna fecha en formato YYYY-MM-DD
     */
    getISODate(date?: Date): string;
    /**
     * Retorna hora en formato HH:MM:SS
     */
    getTime(date?: Date): string;
    /**
     * Genera el rango completo del mes actual (desde las 00:00:00 del día 1
     * hasta las 23:59:59 del último día).
     */
    getCurrentMonthRange(): DateRange;
    /**
     * Genera el rango completo del año actual.
     */
    getCurrentYearRange(): DateRange;
    /**
     * Obtiene un rango específico por mes y año.
     * @param monthIndex 0 para Enero, 11 para Diciembre.
     * @param year Opcional, por defecto el año actual.
     */
    getCustomMonthRange(monthIndex: number, year?: number): DateRange;
}
export default TimeMaster;
