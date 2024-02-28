import { CreateUser } from "#/@types/user";
import { validate } from "#/middleware/validator";
import User from "#/models/user";
import { CreateUserSchema } from "#/utils/validationSchema";
import { error } from "console";
import { Router } from "express";

const router = Router();

router.post(
  "/create",

  //user validation for name
  // (req, res, next) => {
  //     const {email, password, name} = req.body;
  //     if ( !name.trim() ) return res.json({error: "Name is missing!"});
  //     if ( name.lenght < 3 ) return res.json({error: "Invalid name!"});

  //     next();
  // }

  validate(CreateUserSchema),

  async (req: CreateUser, res) => {
    const { email, password, name } = req.body;

    CreateUserSchema.validate({ email, password, name }).catch((error) => {console.log(error);});
    

   const user = await User.create({ name, email, password });
   res.json({ user });
  }
);

export default router;
