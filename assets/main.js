//Modal buy tickets
        
        const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose =document.querySelector('.js-modal-close')

        //Hàm hiện thị  modal mua vé (thêm class open vào modal)
        function showBuytickets(){
            modal.classList.add('open')
        }
                
        //Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
        function hideBuytickets(){
                    modal.classList.remove('open')
        }

        //Lặp qua từng thẻ button và nghe tiếng click
        for (const buyBtn of buyBtns) { 
                    buyBtn.addEventListener('click',showBuytickets)
        }
                //Nghe hành vi click vào button close 
        modalClose.addEventListener('click',hideBuytickets)

        modal.addEventListener('click',hideBuytickets)
        modalContainer.addEventListener('click',function(event){
                    event.stopPropagation()
        })

        // <!--Menu mobile-->
    var header= document.getElementById('header');
            // console.log(header);
    var mobileMenu= document.getElementById('mobile-menu');
            // console.log(mobileMenu);
    var headerHeight = header.clientHeight;
    mobileMenu.onclick = function(){
                
                // alert('Thông báo')
                // console.log(header.clientHeight);
        var isClose = header.clientHeight === headerHeight;
        if (isClose){
            header.style.height='auto';
        }else {
            header.style.height=null;
        } 
    }
            //Tự động chọn khi đóng menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    console.log(menuItems);
    for(var i=0;i<menuItems.length;i++){

        var menuItem = menuItems[i];
        // console.log(menuItem)
       
        menuItem.onclick = function(){ 
        var isParentMenu=this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            
                        // có anh chị em liền kề và anh chị em liền kề đó chứa thz subnav
            event.preventDefault();
        }
            
        // console.log(this);
        else{
            header.style.height= null;//nếu không phải Parenmenu thì aane cái menu đi
        }
    }
}