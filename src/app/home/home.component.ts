import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  professionals: { url: string, title: string }[] = [];
  selectedProfessionTitle: string | null = null;

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(() => {
      this.updateProfessionals();
    });
  }

  ngOnInit(): void {
    this.updateProfessionals();

    const serviceBtn = document.getElementById('serviceBtn') as HTMLButtonElement;
    const projectBtn = document.getElementById('projectBtn') as HTMLButtonElement;
    const activityBtn = document.getElementById('activityBtn') as HTMLButtonElement;

    const servicesCarousel = document.getElementById('servicesCarousel') as HTMLDivElement;
    const projectsCarousel = document.getElementById('projectsCarousel') as HTMLDivElement;
    const activitiesCarousel = document.getElementById('activitiesCarousel') as HTMLDivElement;

    const servicesList = document.getElementById('servicesList') as HTMLDivElement;
    const projectsList = document.getElementById('projectsList') as HTMLDivElement;
    const activitiesList = document.getElementById('activitiesList') as HTMLDivElement;

    function hideAll() {
      servicesCarousel.style.display = 'none';
      projectsCarousel.style.display = 'none';
      activitiesCarousel.style.display = 'none';
      servicesList.style.display = 'none';
      projectsList.style.display = 'none';
      activitiesList.style.display = 'none';
    }

    function showElement(carousel: HTMLDivElement, list: HTMLDivElement, colorClass: string) {
      removeColorClasses();
      if (window.innerWidth < 768) {
        list.style.display = 'block';
        list.classList.add(colorClass);
      } else {
        carousel.style.display = 'block';
        carousel.classList.add(colorClass);
      }
    }

    function removeColorClasses() {
      servicesCarousel.classList.remove('bg-light-blue', 'bg-light-green', 'bg-light-orange');
      projectsCarousel.classList.remove('bg-light-blue', 'bg-light-green', 'bg-light-orange');
      activitiesCarousel.classList.remove('bg-light-blue', 'bg-light-green', 'bg-light-orange');
      servicesList.classList.remove('bg-light-blue', 'bg-light-green', 'bg-light-orange');
      projectsList.classList.remove('bg-light-blue', 'bg-light-green', 'bg-light-orange');
      activitiesList.classList.remove('bg-light-blue', 'bg-light-green', 'bg-light-orange');
    }

    serviceBtn.addEventListener('click', () => {
      hideAll();
      showElement(servicesCarousel, servicesList, 'bg-light-blue');
      serviceBtn.classList.add('active');
      projectBtn.classList.remove('active');
      activityBtn.classList.remove('active');
    });

    projectBtn.addEventListener('click', () => {
      hideAll();
      showElement(projectsCarousel, projectsList, 'bg-light-green');
      projectBtn.classList.add('active');
      serviceBtn.classList.remove('active');
      activityBtn.classList.remove('active');
    });

    activityBtn.addEventListener('click', () => {
      hideAll();
      showElement(activitiesCarousel, activitiesList, 'bg-light-orange');
      activityBtn.classList.add('active');
      serviceBtn.classList.remove('active');
      projectBtn.classList.remove('active');
    });

    hideAll();
    showElement(servicesCarousel, servicesList, 'bg-light-blue');
  }

  updateProfessionals() {
    this.professionals = [
      { url: '../../assets/profesiones/profesion_doctora1.webp', title: this.translateService.instant('PROFESSIONALS.DOCTOR') },
      { url: '../../assets/profesiones/profesion_lic_enfermeria1.webp', title: this.translateService.instant('PROFESSIONALS.NURSE') },
      { url: '../../assets/profesiones/profesion_fisioterapeuta3.webp', title: this.translateService.instant('PROFESSIONALS.PHYSIOTHERAPIST') },
      { url: '../../assets/profesiones/profesion_cuidador6.webp', title: this.translateService.instant('PROFESSIONALS.CAREGIVER') },
      { url: '../../assets/profesiones/profesion_pasante1.webp', title: this.translateService.instant('PROFESSIONALS.INTERN') },
    ];
  }

  showProfessionTitle(professional: { url: string, title: string }): void {
    this.selectedProfessionTitle = this.selectedProfessionTitle === professional.title ? null : professional.title;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustElementsDisplay();
  }

  adjustElementsDisplay() {
    const servicesCarousel = document.getElementById('servicesCarousel') as HTMLDivElement;
    const projectsCarousel = document.getElementById('projectsCarousel') as HTMLDivElement;
    const activitiesCarousel = document.getElementById('activitiesCarousel') as HTMLDivElement;

    const servicesList = document.getElementById('servicesList') as HTMLDivElement;
    const projectsList = document.getElementById('projectsList') as HTMLDivElement;
    const activitiesList = document.getElementById('activitiesList') as HTMLDivElement;

    if (window.innerWidth < 768) {
      if (servicesCarousel.style.display === 'block') {
        servicesCarousel.style.display = 'none';
        servicesList.style.display = 'block';
      }
      if (projectsCarousel.style.display === 'block') {
        projectsCarousel.style.display = 'none';
        projectsList.style.display = 'block';
      }
      if (activitiesCarousel.style.display === 'block') {
        activitiesCarousel.style.display = 'none';
        activitiesList.style.display = 'block';
      }
    } else {
      if (servicesList.style.display === 'block') {
        servicesList.style.display = 'none';
        servicesCarousel.style.display = 'block';
      }
      if (projectsList.style.display === 'block') {
        projectsList.style.display = 'none';
        projectsCarousel.style.display = 'block';
      }
      if (activitiesList.style.display === 'block') {
        activitiesList.style.display = 'none';
        activitiesCarousel.style.display = 'block';
      }
    }
  }
}
