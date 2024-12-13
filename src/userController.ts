import { Request, Response } from "express";
import { User } from "./models";

async function getUsers(req: Request, res: Response) {
  const { limit = 10, page = 1, sort = "createdAt", search = {} } = req.query;
  const users = await User.find(search as Record<string, any>)
    .limit(Number(limit))
    .skip((Number(page) - 1) * Number(limit))
    .sort({ [sort as string]: 1 });

  const total = await User.countDocuments(search as Record<string, any>);

  res.json({
    total,
    limit: Number(limit),
    page: Number(page),
    sortBy: sort,
    items: users,
  });
}

export { getUsers };
