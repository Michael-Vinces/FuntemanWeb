import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  boardMembers: { position: string, name: string, icon: string }[] = [];

  constructor(private route: ActivatedRoute, private translateService: TranslateService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
    this.translateService.onLangChange.subscribe(() => {
      this.updateBoardMembers();
    });
    this.updateBoardMembers();  
  }

  updateBoardMembers() {
    this.boardMembers = [
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.PRESIDENT.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.PRESIDENT.NAME'),
        icon: 'presidente.webp'
      },
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.VICE_PRESIDENT.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.VICE_PRESIDENT.NAME'),
        icon: 'vicepresidenta.webp'
      },
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.SECRETARY.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.SECRETARY.NAME'),
        icon: 'secretaria.webp'
      },
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.TREASURER.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.TREASURER.NAME'),
        icon: 'tesorera.webp'
      },
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.FIRST_MEMBER.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.FIRST_MEMBER.NAME'),
        icon: 'vocal1.webp'
      },
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.SECOND_MEMBER.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.SECOND_MEMBER.NAME'),
        icon: 'vocal2.webp'
      },
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.THIRD_MEMBER.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.THIRD_MEMBER.NAME'),
        icon: 'vocal3.webp'
      },
      {
        position: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.ALTERNATE_MEMBER.POSITION'),
        name: this.translateService.instant('ABOUT_US.BOARD_MEMBERS.ALTERNATE_MEMBER.NAME'),
        icon: 'vocalsuplente.webp'
      }
    ];
  }
}
