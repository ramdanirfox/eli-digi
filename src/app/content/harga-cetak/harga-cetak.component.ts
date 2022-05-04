import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eli-harga-cetak',
  templateUrl: './harga-cetak.component.html',
  styleUrls: ['./harga-cetak.component.scss']
})
export class HargaCetakComponent implements OnInit {

  bahanTerpilih = '';
  // cuttingTerpilih = true;
  qty = 1;
  daftarBahan = [
    'ART PAPER 100-150 GSM',
    'ART CARTON 210-260',
    'ART CARTON 310-400',
    'HVS 70-80 GSM'
  ];
  discuss = false;

  basePrice = [
    {
      bahan: 'ART PAPER 100-150 GSM',
      minQty: 1,
      maxQty: 10,
      price: 6000
    },
    {
      bahan: 'ART PAPER 100-150 GSM',
      minQty: 11,
      maxQty: 100,
      price: 5000
    },
    {
      bahan: 'ART CARTON 210-260',
      minQty: 1,
      maxQty: 10,
      price: 6500
    },
    {
      bahan: 'ART CARTON 210-260',
      minQty: 11,
      maxQty: 100,
      price: 6000
    },
    {
      bahan: 'ART CARTON 310-400',
      minQty: 1,
      maxQty: 10,
      price: 6500
    },
    {
      bahan: 'ART CARTON 310-400',
      minQty: 11,
      maxQty: 100,
      price: 6000
    },
    {
      bahan: 'HVS 70-80 GSM',
      minQty: 1,
      maxQty: 10,
      price: 4500
    },
    {
      bahan: 'HVS 70-80 GSM',
      minQty: 11,
      maxQty: 100,
      price: 4000
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
