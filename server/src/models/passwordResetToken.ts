// Import necessary types and functions
import { Model, ObjectId, Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";

// Define interface for document and methods
interface PasswordTokenDocument {
  owner: ObjectId;
  token: string;
  createdAt: Date;
}

interface Methods {
  compareToken(token: string): Promise<boolean>;
}

// Expire token after 1h
const passwordResetTokenSchema = new Schema<
  PasswordTokenDocument,
  Model<PasswordTokenDocument>,
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
passwordResetTokenSchema.pre("save", async function (next) {
  if (this.isModified("token")) {
    this.token = await hash(this.token, 10);
  }
  next();
});

// Define method to compare tokens
passwordResetTokenSchema.methods.compareToken = async function (
  token: string
): Promise<boolean> {
  const result = await compare(token, this.token);
  return result;
};

// Export the model
export default model(
  "PasswordResetToken",
  passwordResetTokenSchema
) as Model<PasswordTokenDocument, Model<PasswordTokenDocument>, Methods>;
