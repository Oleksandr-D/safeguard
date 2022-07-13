export interface IFormRequest {
fullName: string;
conpany:string;
phone:number;
email:string;
message:string;
}

export interface IFormResponse extends IFormRequest {
id:number
}