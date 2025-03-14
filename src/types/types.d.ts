/// <reference types="types.d.ts" />

type ScrollDirection = 'left' | 'right'

type Theme = 'light' | 'dark'
type AppContextProps = {
  appInfo: { name: string, email: string, workPlace: string };
  theme: Theme;
  // toggleModal: boolean;
  // setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

type User = {
  firstName: string;
  lastName: string;
  picture: null;
  email: string;
  cardNumber: string;
  expires: string;
}

type InputType = 'text' | 'number' | 'checkbox' | 'numeric' | 'date'

type NavProps = {
  name: string;
  link: string;
}

type SocialProps = {
  id: number;
  Icon: IconType;
  link: string;
  name: string;
}

type IntersectingProp = {
  isIntersecting: boolean;
  node: Element;
}

type WorkProps = {
  id: number;
  role: string;
  name: string;
  workPlace: string;
  duration: string;
  stack: string[];
  content: string[];
}

type Project = {
  id: number;
  link: string;
  thumbnail: string;
  year: string;
  mobileThumbnail: string;
  repoLink: string;
  name: string;
  description: string;
  tools: string[];
  tag: string;
  duration: string;
  display: boolean;
  role: string;
}

type MoreProject = Omit<Project, "thumbnail" | "mobileThumbnail" | "duration" | "tag">;