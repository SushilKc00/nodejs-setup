import { Request, Response } from 'express';
import { THttpResponse } from '../types/types';

const httpResponse = (
  req: Request,
  res: Response,
  statusCode: number,
  message: string,
  data: unknown = null
) => {
  // #create a response object
  const response: THttpResponse = {
    success: true,
    statusCode: statusCode,
    request: {
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
    },
    message: message,
    data: data,
  };

  res.status(statusCode).json(response);
};

export default httpResponse;
