import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eli-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  socials = [
    {
      title: 'Facebook',
      account: 'Elidigital Printing',
      href: 'https://www.facebook.com/profile.php?id=100073744431240',
      iconsrc: 'fb.svg'
    },
    {
      title: 'Tokopedia',
      account: 'Eli Digital Printing',
      href: 'https://www.tokopedia.com/eli-digital?utm_source=salinlink&utm_medium=share&utm_campaign=Shop-51859148-13240817-010522',
      iconsrc: 'tokped.svg'
    },
    {
      title: 'Instagram',
      account: '@edp_elidigitalprinting',
      href: 'https://instagram.com/edp_elidigitalprinting?igshid=YmMyMTA2M2Y=',
      iconsrc: 'ig.svg'
    },
    {
      title: 'Youtube',
      account: 'eli sugar dream',
      href: 'https://www.youtube.com/channel/UCtYT3WRqEkXyMl7lOBQ9q8w',
      iconsrc: 'ytb.svg'
    },
    {
      title: 'Whatsapp',
      account: 'Admin EDP',
      href: 'https://wa.me/6281295719572/?text=Selamat%20Siang',
      iconsrc: 'wa.svg'
    },
    {
      title: 'Google Maps',
      account: 'Percetakan EDP',
      href: 'https://maps.app.goo.gl/QyFAHYtpxjSs6Xay6',
      iconsrc: 'gmap.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
