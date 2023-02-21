import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

// LOCAL with EXPRESS_FILEUPLOAD
const uploadUserImageLocal = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError("No FIle Uploaded");
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please Upload an Image");
  }
  const maxSize = 1024 * 1024 * 2;
  if (productImage.size > maxSize) {
    throw new BadRequestError(
      `Please upload image less than ${maxSize / (1024 * 1024)}mb`
    );
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);
  res.status(StatusCodes.CREATED).json({
    photo: `/uploads/${productImage.name}`,
    msg: "Upload product image",
  });
};

// CLOUD with CLOUDINARY
const uploadUserImageCloud = async (req, res) => {


  if (!req.files) {
    throw new BadRequestError("No FIle Uploaded");
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("Please Upload an Image");
  }
  const maxSize = 1024 * 1024 * 2;
  if (productImage.size > maxSize) {
    throw new BadRequestError(
      `Please upload image less than ${maxSize / (1024 * 1024)}mb`
    );
  }
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "codenow",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);

  res
    .status(StatusCodes.OK)
    .json({ photo: result.secure_url, msg: "Upload product image" });
};

export { uploadUserImageCloud };
