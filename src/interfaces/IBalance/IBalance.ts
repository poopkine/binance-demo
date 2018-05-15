export interface IBalance {
  [token: string]: {
    available: string;
    onOrder: string;
  };
}
