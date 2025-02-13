import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  timelineData: any[] = [];
  ngOnInit() {
    this.timelineData = [
      {
        title: 'Assuresoft',
        date: 'May 2022 - July 2022',
        description:
          'Collaborated in a team in the development of a web application to monitor training of new developers.',
        imageSrc: '../../assets/assuresoft_logo.jpeg',
        imageUrl: '../../assets/maxresdefault.jpg', // Image that goes inside the pop-up
        altText: 'Assuresoft Logo',
        popUp:
          'Working with agile technologies I had to collaborate using the Angular framework and git for our source control software. This work was a full stack development with the use of Postgres SQL for our backend.', // Description inside the pop-up
        isLeft: true,
      },
      {
        title: 'Computer Peer Tutor (CPT)',
        date: 'October 2022 - December 2024',
        description:
          'Conducted 1-on-1 sessions for programming student as well as organizing events such as game jams and workshops.',
        imageSrc: '../../assets/cpt_logo_220x220.png',
        imageUrl: '../../assets/assuresoft_logo.jpeg', // Image that goes inside the pop-up
        altText: 'Assuresoft Logo',
        popUp:
          'Intructed on problem solving, debugging, and syntax skills, Conducted 1-on-1 tutoring sessions with students for programming classes. Demonstrated strong leadership and communication skills in organizing software development.',
        isLeft: false,
      },
      {
        title: 'Weston Ideation Lab Internship',
        date: 'June 2024 - August 2024',
        description: 'Developed an app as a group using agile methodologies.',
        imageSrc: '../../assets/Weston.png',
        imageUrl: '../../assets/weston_group.jpg', // Image that goes inside the pop-up
        altText: 'Assuresoft Logo',
        popUp:
          'Designed, built, and developed wearable technology leveraging different sensors, also utilizing a cross-platform application in Kotlin that interfaces with the wearable tech.',
        isLeft: true,
        additionalInfo: 'Worked on academic website training new hires',
      },
      {
        title: 'Research Assistant',
        date: 'June 2024 - October 2024',
        description:
          'Researched computer vision and AI and its real world applications.',
        imageSrc: '../../assets/Cleveland_State_University_logo.png',
        imageUrl: '../../assets/IMG_9929.jpg',
        altText: 'Assuresoft Logo',
        popUp:
          "Worked with advanced technologies such as Artificial Intelligence (AI) and Image recognition. Utilizing devices like the RayBan meta glasses to leverage its capabilities. Research applications of different technologies such as Meta's detectron 2 and media pipe. ",
        isLeft: false,
        additionalInfo: 'Worked on academic website training new hires',
      },
      {
        title: 'Research Assistant',
        date: 'April 2023 - July 2023',
        description: 'Developed an app as a group using agile methodologies.',
        imageSrc: '../../assets/Cleveland_State_University_logo.png',
        imageUrl: '../../assets/cyberVR2.png',
        altText: 'Assuresoft Logo',
        popUp:
          'Developed a cybersecurity training on VR platforms, preparing future employes for possible attacks they might encounter using very hands-on technology.',
        isLeft: true,
        additionalInfo: 'Worked on academic website training new hires',
      },
    ];
  }
  constructor(private dialog: MatDialog) {}

  openDetailDialog(item: any): void {
    this.dialog.open(DetailDialogComponent, {
      data: {
        imageUrl: item.imageUrl,
        popUp: item.popUp,
      },
      maxHeight: '85vw',
      maxWidth: '60vw',
    });
  }

  // openDetails(item: any): void {
  //   this.dialog.open(DetailDialogComponent, {
  //     data: item,
  //     panelClass: 'custom-container',
  //   });
  // }
}
