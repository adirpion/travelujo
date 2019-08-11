import $ from 'jquery';

class MobileMenu{

    constructor(){
        this.iconMenu = $(".site-header__icon-menu");
        this.menuContent = $(".site-header__menu-content");
        this.siteHeader = $(".site-header");
        this.events();

    }

    events(){

        this.iconMenu.click(this.toogle.bind(this));
    }

    /* All the functions*/ 

    toogle(){
        
        this.menuContent.toggleClass("site-header__menu-content--is-visable"); 
        this.siteHeader.toggleClass("site-header--is-expended");
        this.iconMenu.toggleClass("site-header__icon-menu--close-x");
    }
}

export default MobileMenu;