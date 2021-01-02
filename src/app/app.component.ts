import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'admin';

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function () {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      };

      // Toggle the side navigation when window is resized below 480px
      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $('.sidebar .collapse').collapse('hide');
      };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    let wheelElement = $('body.fixed-nav .sidebar');
    wheelElement.on('mousewheel DOMMouseScroll wheel', function (e: any) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        wheelElement.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });

    // Scroll to top button appear
    let scrollElement = $(document);
    scrollElement.on('scroll', function () {
      var scrollDistance = $(scrollElement).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

  }

  scrollToTop(): void {
    $('html,body').stop().animate({ scrollTop: 0 }, 'easeInOutExpo');
  }

}
