import { httpResponseModel } from "../models/http_response_model";


export const success = async (data: any): Promise<httpResponseModel> => {
    return {
        statusCode: 200,
        body: data
    };
};

export const noContent = async (): Promise<httpResponseModel> => {
    return {
        statusCode: 204,
        body: null
    };
}
export const badRequest = async (): Promise<httpResponseModel> => {
    return {
        statusCode: 400,
        body: null
    };
}
export const created = async (): Promise<httpResponseModel> => {
    return {
        statusCode: 201,
        body: "Resource created successfully"
    };
}