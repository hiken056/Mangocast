import { create } from "#/contollers/user";
import { validate } from "#/middleware/validator";
import { CreateUserSchema } from "#/utils/validationSchema";
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
  create
);

export default router;
