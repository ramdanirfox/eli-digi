import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eli-harga-stiker',
  templateUrl: './harga-stiker.component.html',
  styleUrls: ['./harga-stiker.component.scss']
})
export class HargaStikerComponent implements OnInit {
  // cutt
  imgSrc = 'stiker.jpg';
  bahanTerpilih = '';
  cuttingTerpilih = true;
  qty = 1;
  daftarBahan = [
    'CHROMO',
    'VINYL PUTIH',
    'VINYL TRANSPARAN',
    'HVS'
  ];
  discuss = false;

  basePrice = [
    {
      cutting: false,
      bahan: 'CHROMO',
      minQty: 1,
      maxQty: 10,
      price: 7500
    },
    {
      cutting: false,
      bahan: 'CHROMO',
      minQty: 11,
      maxQty: 100,
      price: 6000
    },
    {
      cutting: false,
      bahan: 'VINYL PUTIH',
      minQty: 1,
      maxQty: 10,
      price: 14500
    },
    {
      cutting: false,
      bahan: 'VINYL PUTIH',
      minQty: 11,
      maxQty: 100,
      price: 14000
    },
    {
      cutting: false,
      bahan: 'HVS',
      minQty: 1,
      maxQty: 10,
      price: 7500
    },
    {
      cutting: false,
      bahan: 'HVS',
      minQty: 11,
      maxQty: 100,
      price: 6000
    },
    {
      cutting: false,
      bahan: 'VINYL TRANSPARAN',
      minQty: 1,
      maxQty: 10,
      price: 14500
    },
    {
      cutting: false,
      bahan: 'VINYL TRANSPARAN',
      minQty: 11,
      maxQty: 100,
      price: 14000
    },



    {
      cutting: true,
      bahan: 'CHROMO',
      minQty: 1,
      maxQty: 10,
      price: 15000
    },
    {
      cutting: true,
      bahan: 'CHROMO',
      minQty: 11,
      maxQty: 100,
      price: 13000
    },
    {
      cutting: true,
      bahan: 'VINYL PUTIH',
      minQty: 1,
      maxQty: 10,
      price: 22500
    },
    {
      cutting: true,
      bahan: 'VINYL PUTIH',
      minQty: 11,
      maxQty: 100,
      price: 21500
    },
    {
      cutting: true,
      bahan: 'HVS',
      minQty: 1,
      maxQty: 10,
      price: 15000
    },
    {
      cutting: true,
      bahan: 'HVS',
      minQty: 11,
      maxQty: 100,
      price: 13000
    },
    {
      cutting: true,
      bahan: 'VINYL TRANSPARAN',
      minQty: 1,
      maxQty: 10,
      price: 22000
    },
    {
      cutting: true,
      bahan: 'VINYL TRANSPARAN',
      minQty: 11,
      maxQty: 100,
      price: 21000
    }
  ];

  totalPrice = 0;
  unitPrice = 0;
  calcMode: 1 | 2 = 2;
  calcBases: any = [];

  constructor() { }

  changePrice() {
    if (this.calcMode == 1) {
      this.calcPrice();
    }
    else {
      this.calcPrice2();
    }
  }

  calcPrice() {
    let detectBasePrice = this.basePrice.filter(x => 
      x.cutting == this.cuttingTerpilih &&
      x.bahan == this.bahanTerpilih &&
      this.qty >= x.minQty &&
      this.qty <= x.maxQty 
      );
    
      if (detectBasePrice.length) {
        // alert('Base Price = ' + detectBasePrice[0].price);
        let bp = detectBasePrice[0].price;
        this.totalPrice = bp * this.qty;
        this.unitPrice = bp;
      }
      else {
        
      }
  }

  //only compatible with continuous interval qty...
  calcPrice2() {
    let detectBasePrices = this.basePrice.filter(x => 
      x.cutting == this.cuttingTerpilih &&
      x.bahan == this.bahanTerpilih &&
      this.qty >= x.minQty
      );
      
      this.calcBases = detectBasePrices;

      detectBasePrices.sort((a, b) => a.minQty - b.minQty);

      let itemsProcessed = 0;
      this.totalPrice = 0;
      for (let i = 0; i < detectBasePrices.length; i++) {
        const base = detectBasePrices[i];
        const itemsCalc = (i+1) < detectBasePrices.length ? base.maxQty : (this.qty - itemsProcessed);
        itemsProcessed += itemsCalc;
        this.totalPrice += itemsCalc * base.price;
      }
      // console.log('Bases', detectBasePrices);
  }

  ngOnInit(): void {
  }

}
