import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  numbers: number[] = [];
  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;

  private scrollStep = 100;

  myCollection = collection(firestore, 'UserModel');
  products = collection(firestore, 'products');

  fetchedData: any[] = [];
  datatest: String = '';

  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft -= this.scrollStep;
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft += this.scrollStep;
    }
  }

  constructor(private router: Router) {
    for (let i = 1; i <= 35; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {
    getDocs(this.products)
      .then((querySnapshot) => {
        // Extract data from documents
        this.fetchedData = querySnapshot.docs.map((doc) => doc.data());
        console.log(this.fetchedData.map((doc) => doc.title).join(''));
        this.datatest = this.fetchedData.map((doc) => doc.title).join('');
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      });
  }
  goto() {
    this.router.navigate(['/Test']);
  }
}
