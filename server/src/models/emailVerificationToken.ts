// Import necessary types and functions
import { Model, ObjectId, Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";

// Define interface for document and methods
interface EmailVerificationTokenDocument {
  owner: ObjectId;
  token: string;
  createdAt: Date;
}

interface Methods {
  compareToken(token: string): Promise<boolean>;
}

// Expire token after 1h
const emailVerificationTokenSchema = new Schema<
  EmailVerificationTokenDocument,
  Model<EmailVerificationTokenDocument>,
  Methods
>({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 3600, // expires after 1h
    default: Date.now,
  },
});

// Hash the token before saving
emailVerificationTokenSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
    this.token = await hash(this.token, 10);
  }
  next();
});

// Define method to compare tokens
emailVerificationTokenSchema.methods.compareToken = async function (
  token: string
): Promise<boolean> {
  const result = await compare(token, this.token);
  return result;
};

// Export the model
export default model(
  "EmailVerificationToken",
  emailVerificationTokenSchema
) as Model<EmailVerificationTokenDocument, Model<EmailVerificationTokenDocument>, Methods>;
