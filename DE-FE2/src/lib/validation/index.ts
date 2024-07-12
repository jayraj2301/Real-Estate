import { z } from "zod";

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
];
// const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png"];


const signupSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password have atleast 8 character." }),
  mobile_no: z.string().min(10, { message: "Mobile no. must be 10 Number." }),
});

const signinSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password have atleast 8 character." }),
});

const propertySchema = z.object({
  propertyTitle: z.string().min(4,{message: "Atleast 4 character require"}),
  locality: z.string().min(4,{message: "Atleast 4 character require"}),
  price1: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive()),
  price2: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive()),
  typo: z.string().min(2,{message: "typo require"}),
  bedrooms: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive()),
  typeOfProperty: z.string(),
  image1: z.array(z.instanceof(File)).nonempty().refine(
    (files) => files.length > 0 && ACCEPTED_IMAGE_MIME_TYPES.includes(files[0]?.type),
    "Only .jpg, .jpeg, .png formats are supported."
),
image2: z.array(z.instanceof(File)).nonempty().refine(
    (files) => files.length > 0 && ACCEPTED_IMAGE_MIME_TYPES.includes(files[0]?.type),
    "Only .jpg, .jpeg, .png formats are supported."
),
});

export { signupSchema, signinSchema, propertySchema };
