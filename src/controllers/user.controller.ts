import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler';

export const loginController = asyncHandler(
  async (_req: Request, _res: Response) => {}
);

export const registerController = asyncHandler(
  async (_req: Request, _res: Response) => {}
);
