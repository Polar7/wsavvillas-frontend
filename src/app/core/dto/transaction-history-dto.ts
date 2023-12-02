/**
 * Dto de TransactionHistory
 */
export interface TransactionHistoryDto {

  /**
   * Identificador unico de la transaccion
   */
  id: number;

  /**
   * Identificador de la solicitud
   */
  requestId: string;

  /**
   * Cadena representativa del tipo de busqueda de la factura
   */
  searchType: string;

  /**
   * Numero de factura o cedula de la solicitud
   */
  invoiceId: string;

  /**
   * Tipo de busqueda cuando se consulta una factura o numero de respuesta a la solicitud
   */
  numberStatus: number;

  /**
   * Mensaje de respuesta a la solicitud
   */
  messageStatus: string;

  /**
   * Fecha de la solicitud y respuesta
   */
  requestDate: Date;

  /**
   * Guarda las excepciones de ser necesario
   */
  exception: string;

}
