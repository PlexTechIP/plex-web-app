export interface Member {
  firstName: string;
  lastName: string;
  imageUrl?: string; // Located in plex within public/, ordered by UUID
  position: string;
  blurb: string;
  linkedin?: string;
  instagram?: string;
  calendly?: string;
  currentCompany?: string;
}
