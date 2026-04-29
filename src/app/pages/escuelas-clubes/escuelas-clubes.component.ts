import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EscuelaClub {
  nombre: string;
  email: string;
  web: string;
  telefono: string;
}

interface Localidad {
  nombre: string;
  slug: string;
  escuelas: EscuelaClub[];
}

@Component({
  selector: 'app-escuelas-clubes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escuelas-clubes.component.html',
  styleUrls: ['./escuelas-clubes.component.scss']
})
export class EscuelasClubesComponent implements AfterViewInit {
  localidadActiva = signal<string | null>(null);
  escuelaAbierta = signal<string | null>(null);

  private stickyTop = 0;      // altura del top de la barra fija (ej. 40px)
  private stickyHeight = 0;   // altura real de la barra de navegación

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const stickyNav = this.elRef.nativeElement.querySelector('.escuelas-clubes__sticky-nav') as HTMLElement;
    if (stickyNav) {
      this.stickyTop = parseFloat(getComputedStyle(stickyNav).top) || 0;
      this.stickyHeight = stickyNav.offsetHeight;
    }
  }

  localidades: Localidad[] = [
    {
      nombre: 'Bariloche',
      slug: 'bariloche',
      escuelas: [
        { nombre: 'Mountain Catedral', email: 'info@escuelamountain.com', web: 'www.escuelamountain.com', telefono: '0294 4460170 / 4431257' },
        { nombre: 'Escuela Xtreme', email: 'info@escuelaxtreme.com', web: 'www.escuelaxtreme.com', telefono: '0294-4460339/4460310' },
        { nombre: 'Escuela de ski Snow La Base', email: 'info@escuelalabase.com', web: 'www.escuelalabase.com', telefono: '294-4606414' },
        { nombre: 'EAS Escuela de Ski y Snowboard', email: 'pablosnow07@hotmail.com', web: 'www.easbariloche.com', telefono: '+54 9 294 4662380' },
        { nombre: 'Fire On Ice', email: 'cristian@fireonice.com.ar / info@fireonice.com.ar', web: 'www.fireonice.com.ar', telefono: '0294-4460262/15-4630213' },
        { nombre: 'Club Andino Bariloche', email: 'direccionclubandino@gmail.com / info@clubandino.org', web: 'www.clubandino.org / www.clubandino.com.ar', telefono: '0294-4422266 /4424579' },
        { nombre: 'Jibbin', email: 'alan@jibbinarg.com / jibbin@jibbinarg.com', web: 'www.jibbinarg.com', telefono: '0294-154373918' },
        { nombre: 'Club Argentino de Ski', email: 'cas@clubargentinodeski.com.ar', web: '', telefono: '02944-460009 / 460063' },
        { nombre: 'Club Universitario de Buenos Aires (CUBA)', email: 'esqui@cuba.org.ar / bonacalzaivan@gmail.com', web: 'www.cuba.org.ar', telefono: '02944-460065' },
        { nombre: 'SkiMax', email: 'hernanfranco@yahoo.com / info@skimaxbariloche.com.ar', web: 'www.skimaxbariloche.com', telefono: '0294-154571706' },
        { nombre: 'Epic', email: 'epicbariloche@gmail.com', web: 'www.epicbariloche.com.ar', telefono: '3543606807' },
        { nombre: 'Bariloche White', email: 'jnabarlaz@gmail.com', web: 'www.barilochewhite.com', telefono: '294 467-2903 / 446-0422' },
        { nombre: 'Ski Club', email: 'administracion@skiclubbariloche.com', web: 'www.skiclubbariloche.com', telefono: '0294-443-1414' },
        { nombre: 'Ski Time', email: 'info@skitime.com', web: 'www.skitime.com', telefono: '0294- 4460472 / WhatsApp +54 9 2944 273056' },
        { nombre: 'Patagonia Ski School', email: 'sebastian@patagoniaskischool.com / info@patagoniaskischool.com', web: 'www.patagoniaskischool.com', telefono: '0294-4631451' },
        { nombre: 'Ski Top', email: 'skitopcatedral@gmail.com', web: 'www.skitop-escuela-ski-snowboard', telefono: '0294-15-453-8455' },
        { nombre: 'CAF', email: '', web: '', telefono: '+549 294 4606986' },
        { nombre: 'SnowMatch Bariloche', email: 'office@snowmatch.pro', web: 'www.snowmatch.pro', telefono: '' },
        { nombre: 'Fundación Desafío Bariloche', email: 'fundaciondesafiobariloche@gmail.com', web: '', telefono: '294-4304714' },
        { nombre: 'Cumbre Andina', email: 'cumbreandina.bariloche@gmail.com', web: '', telefono: '+54 9 294 492-1556' },
        { nombre: 'Escuela Ski Bariloche', email: 'info@escuelaskibariloche.com', web: 'www.escuelaskibariloche.com', telefono: '+5492944304010' }
      ]
    },
    {
      nombre: 'San Martín de los Andes',
      slug: 'san-martin',
      escuelas: [
        { nombre: 'Escuela Chapelco', email: 'escuela@chapelco.com', web: 'www.chapelco.com', telefono: '02972-427157 / 8' },
        { nombre: 'Club Lacar', email: 'secretarialacar@smandes.com.ar', web: 'www.clublacar.com.ar', telefono: '02972-427225' },
        { nombre: 'Club Andino S.M.A', email: 'casmacursos@gmail.com', web: '', telefono: '02972-427 694' },
        { nombre: 'Escuela de Esquí Lago Hermoso', email: '', web: 'www.lagohermososki.com.ar', telefono: '2944 12 7208' }
      ]
    },
    {
      nombre: 'Junín de los Andes',
      slug: 'junin',
      escuelas: [
        { nombre: 'Club Andino Junín de los Andes', email: 'clubandinojunindelosandes@gmail.com', web: '', telefono: '02972 41-8644' }
      ]
    },
    {
      nombre: 'Las Leñas',
      slug: 'las-lenas',
      escuelas: [
        { nombre: 'Escuela Las Leñas', email: 'ppperez@laslenas.com', web: 'www.laslenas.com', telefono: '02627-471100' }
      ]
    },
    {
      nombre: 'Cerro Bayo',
      slug: 'cerro-bayo',
      escuelas: [
        { nombre: 'Escuela Cerro Bayo', email: 'info@cerrobayo.com.ar', web: 'www.cerrobayo.com.ar', telefono: '0294 – 4494189' },
        { nombre: 'C.A.V.L.A.', email: 'cavla@cavla.com.ar', web: 'www.cavla.com.ar', telefono: '0294 430-1048' }
      ]
    },
    {
      nombre: 'Esquel',
      slug: 'esquel',
      escuelas: [
        { nombre: 'Esquel Ski Club', email: 'esquelskiclub@gmail.com', web: '', telefono: '2945 15586904' },
        { nombre: 'Club Slalom', email: 'slalomesquel@gmail.com', web: 'www.slalomclub.com', telefono: '02945.410741' },
        { nombre: 'Club Andino Esquel', email: 'clubandinoesq@gmail.com', web: 'www.clubandinoesquel.com', telefono: '02945-453248' },
        { nombre: 'Escuela de Ski La Hoya', email: 'escuela@skilahoya.com', web: '', telefono: '' },
        { nombre: 'Asociación Civil de Esquí Adaptado Esquel', email: 'esquiadaptadoesquel@gmail.com', web: '', telefono: '294-5548228' }
      ]
    },
    {
      nombre: 'El Bolsón',
      slug: 'el-bolson',
      escuelas: [
        { nombre: 'Escuela Perito Moreno Club Andino Piltriquitron', email: 'escuela@laderas.com.ar', web: 'www.laderas.com.ar', telefono: '0294-4498492 / 0294-4492600' }
      ]
    },
    {
      nombre: 'Cerro Castor',
      slug: 'cerro-castor',
      escuelas: [
        { nombre: 'Escuela Castor', email: 'escuela@cerrocastor.com', web: 'www.cerrocastor.com', telefono: '02901-422244' },
        { nombre: 'Club Andino Ushuaia', email: 'administracion@clubandinoushuaia.com.ar / clubandinoushuaia@gmail.com', web: 'www.clubandinoushuaia.com.ar', telefono: '2901 440732 / 2901-613219' }
      ]
    },
    {
      nombre: 'Caviahue',
      slug: 'caviahue',
      escuelas: [
        { nombre: 'Escuela de Esquí y Snowboard Caviahue', email: 'tierraaltaaventura@hotmail.com / escueladeesquicaviahue@gmail.com', web: 'www.caviahue.com', telefono: '2942 405960' }
      ]
    },
    {
      nombre: 'Penitentes',
      slug: 'penitentes',
      escuelas: [
        { nombre: 'Escuela de Esquí Penitentes', email: 'acerossanjuan@ciudad.com.ar', web: '', telefono: '' }
      ]
    },
    {
      nombre: 'Los Puquios',
      slug: 'los-puquios',
      escuelas: [
        { nombre: 'Escuela de Esquí y Snowboard Los Puquios', email: 'info@lospuquios.com.ar', web: 'www.puquios.com.ar', telefono: '0261 – 4231806' }
      ]
    }
  ];

  scrollALocalidad(slug: string) {
    this.localidadActiva.set(slug);
    const element = document.getElementById(slug);
    if (element) {
      const offset = this.stickyTop + this.stickyHeight + 16; // 16px extra para respirar
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
    }
  }

  toggleEscuela(nombre: string) {
    this.escuelaAbierta.set(this.escuelaAbierta() === nombre ? null : nombre);
  }
}