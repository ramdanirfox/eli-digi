import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'eli-harga-gambar',
  templateUrl: './harga-gambar.component.html',
  styleUrls: ['./harga-gambar.component.scss']
})
export class HargaGambarComponent implements OnInit {
  imgSrc = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // console.log(this.router.getCurrentNavigation()?.extras);
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('layanan');
    console.log(id);
    this.imgSrc = id + '.jpg';
  }

}
