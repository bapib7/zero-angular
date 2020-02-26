import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isnothome;
  constructor(public route:Router) { }

  ngOnInit() {
    this.route.events.subscribe(event=>{
        if (event instanceof NavigationEnd ) {
          console.log("current url",event.url); // event.url has current url
          if(event.url!="/")
          {
            this.isnothome=true;
          }
          else{
            this.isnothome=false;
          }
          
          //rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
          
      
          /*==================================================================
          [ Fixed Header ]*/
          var headerDesktop = $('.container-menu-desktop');
          var wrapMenu = $('.wrap-menu-desktop');
      
          if($('.top-bar').length > 0) {
              var posWrapHeader = $('.top-bar').height();
          }
          else {
              var posWrapHeader:any = 0;
          }
          
      
          if($(window).scrollTop() > posWrapHeader) {
              $(headerDesktop).addClass('fix-menu-desktop');
              $(wrapMenu).css('top',0); 
          }  
          else {
              $(headerDesktop).removeClass('fix-menu-desktop');
              $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
          }
      
          $(window).on('scroll',function(){
              if($(this).scrollTop() > posWrapHeader) {
                  $(headerDesktop).addClass('fix-menu-desktop');
                  $(wrapMenu).css('top',0); 
              }  
              else {
                  $(headerDesktop).removeClass('fix-menu-desktop');
                  $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
              } 
          });
      
      
          /*==================================================================
          [ Menu mobile ]*/
          $('.btn-show-menu-mobile').on('click', function(){
              $(this).toggleClass('is-active');
              $('.menu-mobile').slideToggle();
          });
      
          var arrowMainMenu = $('.arrow-main-menu-m');
      
          for(var i=0; i<arrowMainMenu.length; i++){
              $(arrowMainMenu[i]).on('click', function(){
                  $(this).parent().find('.sub-menu-m').slideToggle();
                  $(this).toggleClass('turn-arrow-main-menu-m');
              })
          }
      
          $(window).resize(function(){
              if($(window).width() >= 992){
                  if($('.menu-mobile').css('display') == 'block') {
                      $('.menu-mobile').css('display','none');
                      $('.btn-show-menu-mobile').toggleClass('is-active');
                  }
      
                  $('.sub-menu-m').each(function(){
                      if($(this).css('display') == 'block') { console.log('hello');
                          $(this).css('display','none');
                          $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                      }
                  });
                      
              }
          });   
    //rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
          
        }
       })
  }

}
