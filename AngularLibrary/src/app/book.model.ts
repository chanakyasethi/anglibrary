export class Book {
   _id?:String;  
   name: string;
   publisher: string;
   author: string;
   description: string;
   units: number;
   availableunits: number;
   issuedunits: number;

  // constructor(name: string, publisher: string,authorName: string,
  //           description: string,totalunits: number ) {
  //   this.name = name;
  //   this.description = description;
  //   this.authorName = authorName;
  //   this.publisher = publisher;
  //   this.availableunits= totalunits;
  //   this.issuedunits = 0;
  //   this.totalunits = totalunits;
  // }
}
