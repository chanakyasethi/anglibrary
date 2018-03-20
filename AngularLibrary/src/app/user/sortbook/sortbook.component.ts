import { Component, OnInit } from '@angular/core';
import { Book } from '../../book.model';
import { Subscription } from 'rxjs/Subscription';
import { AdminService } from '../../admin/admin.service';

@Component({
  selector: 'app-sortbook',
  templateUrl: './sortbook.component.html',
  styleUrls: ['./sortbook.component.css']
})
export class SortbookComponent implements OnInit {
  books : Book[];
  subscription: Subscription
  constructor(private adminService : AdminService) { }

  ngOnInit() {
    this.adminService.getBooks().subscribe(
      (books)=>{
        this.books=books;
      }
    );
  }
  
  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }

}
