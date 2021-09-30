import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  nom = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUsers(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNom(): void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.userService.findByTitle(this.nom)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
