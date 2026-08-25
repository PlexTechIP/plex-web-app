import { put } from "@vercel/blob";

const MAX_PROFILE_IMAGE_SIZE = 4 * 1024 * 1024;
const USER_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: Request): Promise<Response> {
  const expectedSecret = process.env.PROFILE_IMAGE_UPLOAD_SECRET;
  const authorization = request.headers.get("authorization");
  const userId = request.headers.get("x-member-id")?.trim();
  const contentType = request.headers.get("content-type") || "image/jpeg";

  if (!expectedSecret || authorization !== `Bearer ${expectedSecret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!userId || !USER_ID_PATTERN.test(userId)) {
    return Response.json({ error: "Invalid member ID" }, { status: 400 });
  }

  if (!contentType.startsWith("image/")) {
    return Response.json({ error: "Only image uploads are allowed" }, { status: 415 });
  }

  const image = await request.arrayBuffer();
  if (!image.byteLength) {
    return Response.json({ error: "Image is empty" }, { status: 400 });
  }
  if (image.byteLength > MAX_PROFILE_IMAGE_SIZE) {
    return Response.json({ error: "Image exceeds the 4 MB limit" }, { status: 413 });
  }

  const blob = await put(`profile-pictures/${userId}.jpg`, image, {
    access: "public",
    addRandomSuffix: true,
    contentType,
    cacheControlMaxAge: 31_536_000,
  });

  return Response.json({
    url: blob.url,
    pathname: blob.pathname,
  });
}
