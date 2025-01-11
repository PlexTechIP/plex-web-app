export interface Member {
  firstName: string;
  lastName: string;
  imageUrl: string;
  position:
    | "Exec"
    | "Curriculum Instructor"
    | "Project Manager"
    | "Developer"
    | "Senior Advisor"
    | "Alumni";
  subposition: string;
  blurb: string;
  linkedin?: string;
  instagram?: string;
  calendly?: string;
  currentCompany?: string;
}
