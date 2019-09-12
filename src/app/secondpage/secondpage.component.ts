import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BackendApiService} from '../../Services/backend-api.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent {
  listItems: any;
  public imagePath;
  imgURL: any;
  template;
  file: File;
  @ViewChild('output') output: ElementRef;
  result;

  constructor(private backend: BackendApiService, private toast: ToastrService) {
    this.backend.GetAllTemplates().subscribe((data) => {
      this.listItems = data;
    });
  }

  getImageAsBytes(files) {
    return new Promise((resolve, reject) => {
        if (files.length) {
          const fileReader = new FileReader();
          fileReader.onload = () => {
            // @ts-ignore
            resolve(fileReader.result);

          };
          fileReader.readAsArrayBuffer(files[0]);
        } else {
          reject();
        }
      }
    );
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }
    this.file = files;
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // tslint:disable-next-line:variable-name
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }

  makeOcr() {
    this.getImageAsBytes(this.file).then((data) => {

      this.backend.Ocr(this.template, data).subscribe((result) => {
         this.result = result[0]['text'];
         this.toast.success('Success');
      });

    });
  }
}
