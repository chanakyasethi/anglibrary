import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserstartComponent } from './userstart/userstart.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { IssuedbooksComponent } from './issuedbooks/issuedbooks.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { SortbookComponent } from './sortbook/sortbook.component';
import { SortPipe } from './sortpipe.pipe';
import { NgForm, FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserlistComponent,
    UserstartComponent,
    AllbooksComponent,
    IssuedbooksComponent,
    SearchbookComponent,
    SortbookComponent,
    SortPipe,
    SearchPipe,
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    
  ],
})
export class UserModule { 
    
}
