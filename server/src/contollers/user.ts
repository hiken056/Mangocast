import { RequestHandler } from "express";
import nodemailer from "nodemailer";

import { MAILTRAP_PASS, MAILTRAP_USER } from "#/utils/variables";
import { CreateUser } from "#/@types/user";
import User from "#/models/user";

export const create: RequestHandler = async (req: CreateUser, res) => {
  const { email, password, name } = req.body;

  const user = await User.create({ name, email, password });

  //send verification email
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2082065977c217",
      pass: "a2bfbe64418593"
    }
  });


  transport.sendMail({
    to: user.email,
    from: "auth@myapp.com",
    html: '<h1>123445</h1>'
  });


  res.status(201).json({ user });
};
