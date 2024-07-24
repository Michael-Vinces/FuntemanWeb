import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent {
  photos: { url: string, title: string, description: string }[] = [];

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(() => {
      this.updatePhotos();
    });
    this.updatePhotos();
  }

  updatePhotos() {
    this.photos = [
      { url: '../../assets/galeria/galeria_entrada.webp', title: this.translateService.instant('FACILITIES.PHOTOS.ENTRADA.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.ENTRADA.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_virgen2.webp', title: this.translateService.instant('FACILITIES.PHOTOS.VIRGEN.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.VIRGEN.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_recepcionporfuera2.webp', title: this.translateService.instant('FACILITIES.PHOTOS.RECEPCION_POSTERIOR.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.RECEPCION_POSTERIOR.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_recepcion3.webp', title: this.translateService.instant('FACILITIES.PHOTOS.RECEPCION.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.RECEPCION.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_patioprincipal4.webp', title: this.translateService.instant('FACILITIES.PHOTOS.PATIO_PRINCIPAL.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.PATIO_PRINCIPAL.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_cuartopensionado2.webp', title: this.translateService.instant('FACILITIES.PHOTOS.CUARTO_PENSIONADO.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.CUARTO_PENSIONADO.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_pasillopensionado1.webp', title: this.translateService.instant('FACILITIES.PHOTOS.PASILLO_PENSION.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.PASILLO_PENSION.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_pasillo1.webp', title: this.translateService.instant('FACILITIES.PHOTOS.PASILLO.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.PASILLO.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_cuartosalageneralhombres1.webp', title: this.translateService.instant('FACILITIES.PHOTOS.CUARTO_GENERAL_HOMBRES.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.CUARTO_GENERAL_HOMBRES.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_cuartosalageneralmujeres1.webp', title: this.translateService.instant('FACILITIES.PHOTOS.CUARTO_GENERAL_MUJERES.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.CUARTO_GENERAL_MUJERES.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_salarecreacion1.webp', title: this.translateService.instant('FACILITIES.PHOTOS.SALA_RECREACION_1.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.SALA_RECREACION_1.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_salarecreacion3.webp', title: this.translateService.instant('FACILITIES.PHOTOS.SALA_RECREACION_2.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.SALA_RECREACION_2.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_areafisioterapia2.webp', title: this.translateService.instant('FACILITIES.PHOTOS.AREA_FISIOTERAPIA.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.AREA_FISIOTERAPIA.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_enfermeria2.webp', title: this.translateService.instant('FACILITIES.PHOTOS.ENFERMERIA.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.ENFERMERIA.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_cocina1.webp', title: this.translateService.instant('FACILITIES.PHOTOS.COCINA.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.COCINA.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_comedor1.webp', title: this.translateService.instant('FACILITIES.PHOTOS.COMEDOR.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.COMEDOR.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_lavanderia.webp', title: this.translateService.instant('FACILITIES.PHOTOS.LAVANDERIA.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.LAVANDERIA.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_parque.webp', title: this.translateService.instant('FACILITIES.PHOTOS.PARQUE.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.PARQUE.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_saladereuniones2.webp', title: this.translateService.instant('FACILITIES.PHOTOS.SALA_DE_REUNIONES.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.SALA_DE_REUNIONES.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_canchasintetica2.webp', title: this.translateService.instant('FACILITIES.PHOTOS.CANCHA_SINTETICA.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.CANCHA_SINTETICA.DESCRIPTION') },
      { url: '../../assets/galeria/galeria_estacionamiento.webp', title: this.translateService.instant('FACILITIES.PHOTOS.ESTACIONAMIENTO.TITLE'), description: this.translateService.instant('FACILITIES.PHOTOS.ESTACIONAMIENTO.DESCRIPTION') }
    ];
  }
}
