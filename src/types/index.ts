import { RawAxiosRequestHeaders } from "axios"

/**
 * Represents an appointment slot.
 */
export interface AppointmentSlot {
  appointmentDt: AppointmentDt
  dlExam: DlExam
  endTm: string
  lemgMsgId: number
  posId: number
  resourceId: number
  signature: string
  startTm: string
}

/**
 * Represents the date of an appointment.
 */
export interface AppointmentDt {
  date: string
  dayOfWeek: string
}

/**
 * Represents the code for a DL (Driver's License) Exam.
 * This can be either the specific value "5-R-1" or any other string.
 * @typedef {("5-R-1" | string)} DLExamCode
 */
export type DLExamCode = "5-R-1" | string;

/**
 * Represents a DL (Driver's License) Exam.
 * @interface DlExam
 */
export interface DlExam {
  /**
   * The code for the exam.
   * @type {DLExamCode}
   */
  code: DLExamCode;

  /**
   * A description of the exam.
   * @type {string}
   */
  description: string;
}



/**
 * Represents the structure of a login request.
 */
export interface LoginRequest {
  drvrLastName: string;
  licenceNumber: string;
  keyword: string;
}

/**
 * Represents the structure of a nearest positions request.
 */
export interface NearestPositionsRequest {
  lng: number;
  lat: number;
  examType: string;
  startDate: string;
}

/**
 * Represents the structure of an available appointments request.
 */
export interface AvailableAppointmentsRequest {
  aPosID: number;
  examType: string;
  examDate: string;
  ignoreReserveTime: boolean;
  prfDaysOfWeek: string;
  prfPartsOfDay: string;
  lastName: string;
  licenseNumber: string;
}

/**
 * Options for customizing header generation.
 */
export interface HeaderOptions {
  /** Headers to exclude from the final set */
  skipHeaders?: string[];
  /** Additional headers to include */
  additionalHeaders?: RawAxiosRequestHeaders;
  /** Whether to use default headers as a base */
  useDefaultHeaders?: boolean;
}

/**
 * Structure of default headers.
 */
export interface DefaultHeaders extends RawAxiosRequestHeaders {
  accept: string;
  "accept-language": string;
  "cache-control": string;
  "content-type": string;
  pragma: string;
  "sec-ch-ua": string;
  "sec-ch-ua-mobile": string;
  "sec-ch-ua-platform": string;
}

/**
 * Represents the structure of a login request.
 */
export interface LoginRequest {
  drvrLastName: string;
  licenceNumber: string;
  keyword: string;
}

/**
 * Represents a successful login response.
 */
export interface LoginSuccessResponse {
  success: true;
  token: string;
  data: any; 
}

/**
 * Represents an error response for a failed login attempt.
 */
export interface LoginErrorResponse {
  success: false;
  message: string;
}

/**
 * Represents a response for an invalid request.
 */
export interface InvalidRequestResponse {
  error: string;
}
