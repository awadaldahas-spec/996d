import crypto from "crypto";

function getConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary environment variables are not configured.");
  }
  return { cloudName, apiKey, apiSecret };
}

function signParams(params: Record<string, string | number>, apiSecret: string) {
  const sorted = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return crypto.createHash("sha1").update(sorted + apiSecret).digest("hex");
}

export async function uploadImageToCloudinary(
  file: Blob,
  options: { folder?: string; publicId?: string; resourceType?: "image" | "video" } = {}
) {
  const { cloudName, apiKey, apiSecret } = getConfig();
  const timestamp = Math.floor(Date.now() / 1000);

  const paramsToSign: Record<string, string | number> = { timestamp };
  if (options.folder) paramsToSign.folder = options.folder;
  if (options.publicId) paramsToSign.public_id = options.publicId;

  const signature = signParams(paramsToSign, apiSecret);

  const formData = new FormData();
  formData.set("file", file);
  formData.set("api_key", apiKey);
  formData.set("timestamp", String(timestamp));
  formData.set("signature", signature);
  if (options.folder) formData.set("folder", options.folder);
  if (options.publicId) formData.set("public_id", options.publicId);

  const resourceType = options.resourceType || "image";
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
    { method: "POST", body: formData }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Cloudinary upload failed: ${res.status} ${errText}`);
  }

  const data = (await res.json()) as { secure_url: string; public_id: string };
  return {
    ...data,
    secure_url: withQualityTransform(data.secure_url),
  };
}

function withQualityTransform(url: string) {
  return url.replace("/upload/", "/upload/q_auto:best,f_auto/");
}
