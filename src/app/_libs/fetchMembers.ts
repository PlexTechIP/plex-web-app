import { Member } from "@/app/_types/Member";

interface ApiResponse {
  users: {
    id: string;
    first_name: string;
    last_name: string;
    current_position: string | null;
    profile_blurb: string | null;
    linkedin_username: string | null;
    instagram_username: string | null;
    calendly_username: string | null;
    current_company: string | null;
    image_url: string | null;
    big_id: string | null;
  }[];
}
export const fetchMembers = async (): Promise<Member[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/public-members-info`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch members");
  }

  const data: ApiResponse = await response.json();
  const apiBaseUrl = process.env.NEXT_PUBLIC_URL ?? "";

  const members = data.users.map((user) => {
    // Helper function to format social media URLs
    const formatSocialUrl = (username: string | null, baseUrl: string): string | undefined => {
      if (!username) return undefined;
      // If already a full URL, return as-is
      if (username.startsWith('http://') || username.startsWith('https://')) {
        return username;
      }
      // Otherwise, prepend the base URL
      return `${baseUrl}${username}`;
    };

    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      // Serve uploaded photos through the member-portal endpoint instead of
      // the static directory. The endpoint reads the same DB-backed file and
      // sends no-cache headers, so a reload always sees the latest upload.
      imageUrl: user.image_url
        ? `${apiBaseUrl}/member-portal-api/profile/image/${encodeURIComponent(user.id)}`
        : undefined,
      position: user.current_position || "Unknown",
      blurb: user.profile_blurb || "No blurb available",
      linkedin: formatSocialUrl(user.linkedin_username, 'https://www.linkedin.com/in/'),
      instagram: formatSocialUrl(user.instagram_username, 'https://www.instagram.com/'),
      calendly: formatSocialUrl(user.calendly_username, 'https://calendly.com/'),
      currentCompany: user.current_company || undefined,
      bigId: user.big_id || undefined,
    };
  });

  return members;
};
