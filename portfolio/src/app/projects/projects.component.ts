import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  timelineData = [
    {
      title: 'Assuresoft',
      date: '2020 - 2022',
      description: 'Developed an app as a group using agile methodologies.',
      imageSrc: '../../assets/assuresoft_logo.jpeg',
      imageUrl: '../../assets/C-logo.png', // Image that goes inside the pop-up
      altText: 'Assuresoft Logo',
      isLeft: true,
      additionalInfo: 'Worked on academic website training new hires',
    },
    {
      title: 'Research Assistant',
      date: '2020 - 2022',
      description: 'Developed an app as a group using agile methodologies.',
      imageSrc: '../../assets/Cleveland_State_University_logo.png',
      imageUrl: '../../assets/assuresoft_logo.jpeg', // Image that goes inside the pop-up
      altText: 'Assuresoft Logo',
      isLeft: false,
      additionalInfo: 'Worked on academic website training new hires',
    },
    {
      title: 'Research Assistant',
      date: '2020 - 2022',
      description: 'Developed an app as a group using agile methodologies.',
      imageSrc: '../../assets/Cleveland_State_University_logo.png',
      imageUrl: '../../assets/assuresoft_logo.jpeg', // Image that goes inside the pop-up
      altText: 'Assuresoft Logo',
      isLeft: false,
      additionalInfo: 'Worked on academic website training new hires',
    },
    {
      title: 'Research Assistant',
      date: '2020 - 2022',
      description: 'Developed an app as a group using agile methodologies.',
      imageSrc: '../../assets/Cleveland_State_University_logo.png',
      imageUrl: '../../assets/assuresoft_logo.jpeg', // Image that goes inside the pop-up
      altText: 'Assuresoft Logo',
      isLeft: true,
      additionalInfo: 'Worked on academic website training new hires',
    },
    {
      title: 'Research Assistant',
      date: '2020 - 2022',
      description: 'Developed an app as a group using agile methodologies.',
      imageSrc: '../../assets/Cleveland_State_University_logo.png',
      imageUrl: '../../assets/assuresoft_logo.jpeg', // Image that goes inside the pop-up
      altText: 'Assuresoft Logo',
      isLeft: false,
      additionalInfo: 'Worked on academic website training new hires',
    },
    {
      title: 'Research Assistant',
      date: '2020 - 2022',
      description: 'Developed an app as a group using agile methodologies.',
      imageSrc: '../../assets/Cleveland_State_University_logo.png',
      imageUrl: '../../assets/assuresoft_logo.jpeg', // Image that goes inside the pop-up
      altText: 'Assuresoft Logo',
      isLeft: false,
      additionalInfo: 'Worked on academic website training new hires',
    },
  ];
  constructor(private dialog: MatDialog) {}

  openDetailDialog(item: any): void {
    this.dialog.open(DetailDialogComponent, {
      data: {
        imageUrl: item.imageUrl,
        description: item.description,
      },
      width: '400px',
      maxWidth: '90vw',
    });
  }

  openDetails(item: any): void {
    this.dialog.open(DetailDialogComponent, {
      data: item,
      width: '600px',
      panelClass: 'custom-container',
    });
  }
}
