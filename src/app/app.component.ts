import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eli-digi';

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
  ]
}
