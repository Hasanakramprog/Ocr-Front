import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Field} from '../../Model/Field';
import {Template} from '../../Model/Template';
import {BackendApiService} from '../../Services/backend-api.service';
import {CropperComponent} from 'angular-cropperjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
   EnableTemplateButton = true;
  public imagePath;
  imgURL: any;
  templatename;
  field: Field;
  template: Template;
  formData: FormData;
  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  @ViewChild('field') fieldname: ElementRef;
  config = {
    aspectRatio: NaN,
    dragMode: 'move',
    background: true,
    movable: true,
    rotatable: true,
    scalable: true,
    zoomable: true,
    viewMode: 1,
    checkImageOrigin: true,
    cropmove: this.cropMoved.bind(this),
    checkCrossOrigin: true
  };

  constructor(private backend: BackendApiService, private toast: ToastrService) {
    this.template = new Template();
    // tslint:disable-next-line:new-parens
    this.template.Fields = [];
    this.formData = new FormData();
  }

  cropMoved(data) {
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // tslint:disable-next-line:variable-name
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }


  addTemplate() {
    this.template.Name = this.templatename;
    // console.log(this.template);
    this.backend.Addtemplate(this.template).subscribe((res: Template) => {
      console.log(res.Name);
      this.toast.success('Template Added');
    });
  }


  addfield() {
    this.EnableTemplateButton = true;
    const data = this.angularCropper.cropper.getData();
    this.field = new Field();
    this.field.Name = this.fieldname.nativeElement.value;
    this.field.width = data.width;
    this.field.top = data.y;
    this.field.left = data.x;
    this.field.height = data.height;
    this.template.Fields.push(this.field);
    this.fieldname.nativeElement.value = '';
    this.toast.success('Field Added');
    // console.log(JSON.stringify(this.template));
  }
}
