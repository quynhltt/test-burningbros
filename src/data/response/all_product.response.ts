import { AxiosHeaders } from "axios";

export interface AllProductsModel {
  config: any;
  // data:
  // {products: Array(30), total: 100, skip: 0, limit: 30};
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export interface ProductModel {}

// export class ListNoteCodeResponse extends BaseResponse<any> {
//   constructor(
//       public code: string,
//       public message: string,
//       public data: string[]
//   ) {
//       super(code, message, data);
//   }
// }
