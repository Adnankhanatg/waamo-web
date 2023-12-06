export interface SidebarLink {
    imgURL: string;
    route: string;
    label: string;
  }

export const themesValues = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const topQuestions = [
  {
    id: 1,
    question:
      'Follow up of the post: "...why are there no “justify-items” and “justify-self” properties?',
  },
  {
    id: 2,
    question: "Align items with justify content",
  },
  {
    id: 3,
    question: "How can I remove npm module manually?",
  },
  {
    id: 4,
    question: "How can I update Node.js and NPM to their latest versions?",
  },
  {
    id: 5,
    question: "How can I update npm itself?",
  },
];

export const popularKeywords = [
  { id: 1, label: "Next Js", count: 5 },
  { id: 2, label: "Express Js", count: 10 },
  { id: 3, label: "Typescript", count: 10 },
  { id: 4, label: "Python", count: 10 },
  { id: 5, label: "Computer Science", count: 10 },
  { id: 6, label: "Data Structure", count: 10 },
  { id: 7, label: "Algorithms", count: 10 },
];
