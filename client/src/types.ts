export interface User {
  id: string;
  name: string;
}

export interface Blog {
  id: string;
  userId: string;
  title: string;
  content: string;
  date: string;
}
