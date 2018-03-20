// import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book.model';

// @Pipe({
//   name: 'sortpipe'
// })
// export class SortpipePipe implements PipeTransform {

//   transform(books: Book[], field: string): Book[] {
//     books.sort((a: Book, b: Book) => {
//       if (a[field] < b[field]) {
//         return -1;
//       } else if (a[field] > b[field]) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     return books;
//   }

// }
import { Component, NgModule, Pipe,PipeTransform } from '@angular/core';

    @Pipe({ name: "sortBy" })

    export class SortPipe {

    transform(books: Book[], args: string): Book[] {
        if (books !== undefined) {
          books.sort((a: any, b: any) => {
                if ( a[args] < b[args] ){
                    return -1;
                } else if ( a[args] > b[args] ) {
                    return 1;
                } else {
                    return 0;   
                }
            });
        }
        return books;
    }
  }