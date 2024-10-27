export type Menu = {
  id: number;
  title?: string;
  label?: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
