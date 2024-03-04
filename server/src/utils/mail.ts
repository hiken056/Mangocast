import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import path from "path";

import { MAILTRAP_PASS, MAILTRAP_USER, VERIFICATION_EMAIL } from "#/utils/variables";
import { CreateUser } from "#/@types/user";
import User from "#/models/user";
import emailVerificationToken from "#/models/emailVerificationToken";
import { generateToken } from "#/utils/helper";
import { generateTemplate } from "#/mail/template";

require('dotenv').config();


const generateMailTransporter = () => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2082065977c217",
      pass: "a2bfbe64418593",
    },
  });

  return transport;
};

interface Profile {
    name: string;
    email: string;
    userId: string;
}

export const sendVerificationMail = async (token: string, profile: Profile) => {
    const transport = generateMailTransporter()
  //token = 6 difits otp => 123456 => send
  //token = attach these tokens to <a href="yourul/token=asdhksa"></a> =>verify

    const {name, email, userId} = profile

  await emailVerificationToken.create({
    owner: userId,
    token,
  });

  const welcomeMessage = `Hi, ${name}, welcome to Mangocast! There are so many things we do for our verified users. 
  Use the given token to verify you email.`;

  transport.sendMail({
    to: email,
    from: "Mangocast@gmail.com",
    subject: "Welcome message",
    html: generateTemplate({
      title: "Welcome to Mangocast!",
      message: welcomeMessage,
      logo: "cid:logo",
      banner: "cid:welcome",
      link: "#",
      btnTitle: token,
    }),
    attachments: [
      {
        filename: "logo.png",
        path: path.join(__dirname, "../mail/logo.png"),
        cid: "logo",
      },
      {
        filename: "welcome.png",
        path: path.join(__dirname, "../mail/welcome.png"),
        cid: "welcome",
      },
    ],
  });
};