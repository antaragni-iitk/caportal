import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-preview',
  templateUrl: './bg-preview.component.html',
  styleUrls: ['./bg-preview.component.css']
})
export class BgPreviewComponent implements OnInit {
  @Input('countTrack') countTrack;
  bgs = [
    'https://drive.google.com/uc?export=view&id=1H4YC3e4w_gaSj5Zvit28fIstGwVu06ow',
    'https://drive.google.com/uc?export=view&id=1Z-3K0qRb-LC1m_x0kZ62Qh3w63e-kG7M',
    'https://drive.google.com/uc?export=view&id=1qQVSAVmb2jSNEZWZHx_GUQSsucOZUaq1',
    'https://drive.google.com/uc?export=view&id=1gr3_S5DVSApvgtgPf8cVETWlNYZprTp4',
    'https://drive.google.com/uc?export=view&id=15Lferh78no6oRosa5aq8lyC9482uMRf-',
    'https://drive.google.com/uc?export=view&id=1sLfErFsBnZZWQjf4V0PCsTx-DUuNBEvT'
  ]

  constructor() {

  }

  ngOnInit() {
  }

}
