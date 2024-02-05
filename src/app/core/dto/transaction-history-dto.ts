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
   * Cedula a la que pertenece una factura
   */
  invoiceCard: string;

  /**
   * Valor de la factura
   */
  paidValue: number;

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
  * Campo para indicar si la peticion la hace la universidad o el banco
  */
  whoSendPetition: string;

  /**
   * Campo que indica a que web service pertenece la transaccion
   */
  strWebService: string;

  /**
   * Guarda las excepciones de ser necesario
   */
  exception: string;

}
