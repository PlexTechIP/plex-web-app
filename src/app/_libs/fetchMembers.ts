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

  const members = data.users.map((user) => {
    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      imageUrl: user.image_url ? `${process.env.NEXT_PUBLIC_URL}${user.image_url}` : undefined,
      position: user.current_position || "Unknown",
      blurb: user.profile_blurb || "No blurb available",
      linkedin: user.linkedin_username || undefined,
      instagram: user.instagram_username || undefined,
      calendly: user.calendly_username || undefined,
      currentCompany: user.current_company || undefined,
      bigId: user.big_id || undefined,
    };
  });

  return members;
};
