//interface

import { Model, ObjectId, Schema, model } from "mongoose";
import { string } from "yup";

interface EmailVerificationTokenDocument {
    owner: ObjectId;
    token: String;
    createdAt: Date;
}

//expire token after 1h



const emailVerificatioTokenSchema = new Schema<EmailVerificationTokenDocument>(
  {
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 3600, //after 1h
        default: Date.now(),
    }
  }
);

export default model(
  "emailVerificatioTokenSchema",
  emailVerificatioTokenSchema
) as Model<EmailVerificationTokenDocument>;
