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
  }[];
}

export const fetchMembers = async (): Promise<Member[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/public-info`);
  if (!response.ok) {
    throw new Error("Failed to fetch members");
  }

  const data: ApiResponse = await response.json();

  return data.users.map((user) => ({
    firstName: user.first_name,
    lastName: user.last_name,
    imageUrl: `${process.env.NEXT_PUBLIC_URL}/public/profile-pictures/${user.id}.jpg`, // Assuming images are named by UUID
    position: user.current_position || "Unknown",
    blurb: user.profile_blurb || "No blurb available",
    linkedin: user.linkedin_username || undefined,
    instagram: user.instagram_username || undefined,
    calendly: user.calendly_username || undefined,
    currentCompany: user.current_company || undefined,
  }));
};
