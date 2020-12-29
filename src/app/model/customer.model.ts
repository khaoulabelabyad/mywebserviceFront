export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

  _links: {
    self: {
      href: string;

    },
    product:{
      href:string;
    },
    category:{
      href:string
    }
  }
}
