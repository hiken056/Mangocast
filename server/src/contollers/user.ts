import { RequestHandler } from "express";
import nodemailer from "nodemailer";

import { MAILTRAP_PASS, MAILTRAP_USER } from "#/utils/variables";
import { CreateUser } from "#/@types/user";
import User from "#/models/user";
import emailVerificationToken from "#/models/emailVerificationToken";
import { generateToken } from "#/utils/helper";

export const create: RequestHandler = async (req: CreateUser, res) => {
  const { email, password, name } = req.body;


  const user = await User.create({ name, email, password });

  //send verification email
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2082065977c217",
      pass: "a2bfbe64418593",
    },
  });

  //token = 6 difits otp => 123456 => send
  //token = attach these tokens to <a href="yourul/token=asdhksa"></a> =>verify

  const token = generateToken(6);
  await emailVerificationToken.create({
    owner: user._id,
    token,
  });

  transport.sendMail({
    to: user.email,
    from: "auth@myapp.com",
    html: `<h1>Your verification token is: ${token}</h1>`
  });

  res.status(201).json({ user });
};
