import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as moment from 'moment';
import { ConfigService } from '../services/config.service';
import { ApiService } from '../services/api.service';

declare var $ :any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('all', {static: false}) all:ElementRef;

 // @ViewChild('all', {static: false}) all:ElementRef;

  log_error=null;
  pro_len;

  constructor(private http:HttpClient,private config:ConfigService,private apiService:ApiService) { 
  
  }
 
   products=null;
   deleteddataitem;
   fileuploadstatus=false;
  ngOnInit() {

     //get products

     this.apiService.getx('api/products')
                                 .subscribe(r=>{
                                 if(r)   
                                 {
                                   console.log(r['length']);
                                   this.products=r;
                                   this.pro_len=r['length'];
                                 } 
                                 },error=>{
                                   this.log_error=error.message;
                                 })

     //
  }

  all_check()
  {
    console.log(this.all.nativeElement.checked);
    if(this.all.nativeElement.checked==true)
    {
     // this.childchk.nativeElement.checked=true;
     for(var i=0; i< this.pro_len; i++)
     {
       $('#r-'+i).prop("checked", true );
     }
    }
    else
    {
      
    }
    
  }
  sin_check(ev)
  {
       if(!$(ev).is("checked"))
       {
        this.all.nativeElement.checked=false;
       }
  }

  addproduct = new FormGroup({name:new FormControl('',Validators.required),
                              price:new FormControl('',Validators.required),
                              rprice:new FormControl('',Validators.required),
                              selected:new FormControl({startDate:moment('2015-11-24T00:00Z'), endDate: moment('2015-11-26T00:00Z')}),
                              sku:new FormControl('',Validators.required),
                              category:new FormControl('',Validators.required),
                              image:new FormControl('',Validators.required),
                              imagelink:new FormControl('')})

 editproduct = new FormGroup({name:new FormControl('',Validators.required),
                              price:new FormControl('',Validators.required),
                              rprice:new FormControl('',Validators.required),
                              sku:new FormControl('',Validators.required),
                              category:new FormControl('',Validators.required),
                              image:new FormControl(''),
                              imagelink:new FormControl('')})

                              add()
                              {
                                console.log('ok');
                                console.log(this.addproduct);
                                console.log('ok');
                          
                               if(this.addproduct.status=="VALID" && this.fileuploadstatus)
                               {
                                 console.log(this.addproduct.value);
                                
                                 this.apiService.postx('api/products',JSON.stringify(this.addproduct.value))
                                 .subscribe(r=>{
                                 if(r)   
                                 {
                                   this.log_error="Record Added";
                                   this.ngOnInit();
                                 } 
                                 },error=>{
                                   this.log_error=error.message;
                                 })
                               
                               }
                               else
                               {
                                this.log_error="Please fill all the fields with appropiate value";
                               }
                              }

        //upload image
        selectedfile:File=null;
onFileSelected(event)
{
  console.log(event);
  this.selectedfile=<File>event.target.files[0];
}

        onUpload(){
          const fd = new FormData();
          fd.append('image',this.selectedfile,this.selectedfile.name);

          this.apiService.postx('api/uploadfile',fd)
                                 .subscribe(r=>{
                                 if(r)   
                                 {
                                   console.log(r['originalname']);
                                   this.addproduct.controls['imagelink'].setValue(r['originalname']);
                                   this.editproduct.controls['imagelink'].setValue(r['originalname']);
                                   this.fileuploadstatus=true;
                                   this.log_error="Image uploaded sucessfully!";
                                 } 
                                 },error=>{
                                   this.log_error=error.message;
                                 })
        }
        //
      
        deleteddata(c)
        {
         this.deleteddataitem=c;
         this.editproduct.controls['imagelink'].setValue(this.deleteddataitem.images);
         this.editproduct.controls['name'].setValue(this.deleteddataitem.productname);
         this.editproduct.controls['price'].setValue(this.deleteddataitem.productprice);
         this.editproduct.controls['rprice'].setValue(this.deleteddataitem.retailprice);
         this.editproduct.controls['sku'].setValue(this.deleteddataitem.sku);
         this.editproduct.controls['category'].setValue(this.deleteddataitem.category);
        }

        copydata(c)
        {
         this.deleteddataitem=c;
         console.log(c);
         this.addproduct.controls['imagelink'].setValue(this.deleteddataitem.images);
         this.addproduct.controls['name'].setValue(this.deleteddataitem.productname);
         this.addproduct.controls['price'].setValue(this.deleteddataitem.productprice);
         this.addproduct.controls['rprice'].setValue(this.deleteddataitem.retailprice);
         this.addproduct.controls['sku'].setValue(this.deleteddataitem.sku);
         this.addproduct.controls['category'].setValue(this.deleteddataitem.category);
        // $('#myModal').show();
        }
        //delete product.
        product_delete()
        {
          //console.log(this.deleteddataitem);
          this.apiService.delx('api/delete/'+this.deleteddataitem._id)
          .subscribe((r)=>{
            if(r)   
                                 {
                                   console.log(r);  
                                   this.ngOnInit();
                                   $('#myModaldelete').hide();
                                 } 
          },error=>{
            this.log_error=error.message;
          })
        }

   // edit product
   edit()
   {
     console.log('ok');
     console.log(this.editproduct);
     console.log('ok');

    if(this.editproduct.status=="VALID" )
    {
      console.log(this.editproduct.value);
      
      this.apiService.putx(this.config.baseurl+'api/products/'+this.deleteddataitem._id,JSON.stringify(this.editproduct.value))
      .subscribe(r=>{
      if(r)   
      {
        console.log(r);
        this.log_error="Record Added";
        this.ngOnInit();
      } 
      },error=>{
        this.log_error=error.message;
      })
    
    }
    else
    {
     this.log_error="Please fill all the fields with appropiate value";
    }
   }
                             

 
}
