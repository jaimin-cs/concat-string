// Client-side Cloudinary upload utility
export const uploadToCloudinary = async (
  file: File,
  type: "blog" | "contact" // choose preset type
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();

    // Add file
    formData.append("file", file);

    // Choose preset based on type
    const uploadPreset =
      type === "blog"
        ? process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_BLOG
        : process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_CONTACT;

    formData.append("upload_preset", uploadPreset || "ml_default");

    // Cloud name
    formData.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""
    );

    // Folder name (dynamic)
    const folderName =
      type === "blog" ? "blog-submissions" : "contact-submissions";
    formData.append("folder", folderName);

    // Upload to Cloudinary
    fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.secure_url) {
          resolve(data.secure_url);
        } else {
          reject(new Error("Upload failed: No URL returned"));
        }
      })
      .catch((error) => {
        console.error("Upload error:", error);
        reject(error);
      });
  });
};
