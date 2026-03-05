// for(var i = 0; i < $('.list-link-btn').length; i++){

$('.list-link-btn').hover(function () {
    $('.summary').hide();
    $(this).siblings('.summary').show()
});

$('.list-link').on('mouseleave', function () {
    $(this).find('.summary').hide()
})

// 개인번호 클릭후 나오는 상세 정보

var allCheckbtn = $('.gm-table .check-all');
var checkBtn = $('.gm-table .del-chk');

allCheckbtn.click(function () {

    if (allCheckbtn.is(':checked')) {
        checkBtn.prop('checked', true);
        checkBtn.each(function(index, item){
            if(item.getAttribute('disabled') != null){
                checkBtn.eq(index).prop('checked', false);
            }
        });
    } else {
        checkBtn.prop('checked', false);
    }
});

// checkbox all click 

checkBtn.click(function () {
    event.stopImmediatePropagation();
    if ($('input[class=del-chk]:checked').length == checkBtn.length) {
        allCheckbtn.prop('checked', true);
    } else {
        allCheckbtn.prop('checked', false);
    }
});



var listSystem = $('.list-system');

$('.btn-system').on('click', function () {
    listSystem.show();
});

$('.list-system .icon-closebtn').on('click', function () {
    listSystem.hide();
});

//리스트 관리 열고 닫기
var systamAllCheckBtn = $('.list-system .check-all');
var systemCheckBtn = $('.list-system .del-chk');

// 모두선택
systamAllCheckBtn.click(function () {
    if (systamAllCheckBtn.is(':checked')) {
        systemCheckBtn.prop('checked', true);
    } else {
        systemCheckBtn.prop('checked', false);
    }
});


// 파일 삭제
var removeBtn = $('.search-item i.icon-delete--circle');
removeBtn.click(function () {
    $(this).parents('li').hide();
});

// 높이 맞추기
$(function () {
    var inpuiryHeight = $('.inpuiry-info').height();
    $('.inpuiry-link').css({ height: inpuiryHeight - 75 + 'px' });
});

// 등록 모달창 열기 

var openBtn = $('.btn-modal');
var closeBtn = $('.icon-closebtn');

// closeBtn.click(function () {
//     modalWrap.fadeOut();
// });


//목록 모달창 열기
$('.playerBtn').click(function () {
    $('.searchWrap').fadeIn();
});


//테이블 보더 
var boxBorder = '<div class="bam" style="position:absolute;background-color: #36bac6; width:100%; height:2px; top:0; z-index:2; left:0;"></div>';
boxBorder += '<div class="bam" style="position:absolute;background-color: #36bac6; width:100%; height:2px; bottom:-2px; z-index:2; left:0;"></div>';
boxBorder += '<div class="bam" style="position:absolute;background-color: #36bac6; height:100%; width:2px; top:0; z-index:2; right:0;"></div>';
boxBorder += '<div class="bam" style="position:absolute;background-color: #36bac6; height:100%; width:2px; top:0; z-index:2; left:0;"></div>';

var browser = navigator.userAgent;
    $('.gm-table tbody tr:not(:last-child)').mouseover(function () {
        if (browser.indexOf('Trident') >= 0) {
            $(this).css('outline', '2px solid #36bac6');
            $(this).css('outline-offset', '15px');
        }else{
            $(this).find('td:first-child').append(boxBorder);
        }
    });

    $('.gm-table tbody tr:not(:last-child)').mouseout(function () {
        $('.bam').hide();
        $(this).css('outline', '2px solid transparent');
    });

    if (browser.indexOf('Trident') >= 0) {
        $('.haeChae').css({
            'position':'static'
        });

        // 익스에서 모달창 사라지는 문제 해결
        $('.modal .btn').on('click',function(){
            return false;
        });

    }



// ie에서 모달창 닫기 오류 해결+ 체크박스 스타일 변경
if (browser.indexOf('Trident') >= 0) {
    $(document).on('click', '.modal button', function () {
        $('.modalWrap').hide();
    });

    $('input[type=checkbox]').each(function (i, a) {
        if ($(this).prop('disabled') == true) {            
            // $(this).css('box-shadow', 'inset -2px -2px 2px gray,inset 2px 2px 2px gray');
            // $(this).css('opacity', 0.5);
        }
    });
    $('.clb2 input[name*=kind]').css({
        // 'opacity':1,
        // 'box-shadow':'none'
    });

}


//수신자 제거
var sender = $('.item-content--sender .icon-closebtn');

sender.click(function () {
    $(this).parent().hide();
});

// 첨부파일등록
var fileReg = $('.modal__file .icon-delete--circle')

fileReg.click(function () {
    $(this).parent().hide();
});

// 팀정보관리 - 팀정보 체크박스 전체 
// $('.checkArea').each(function(){
//     $(this).find('label').removeClass();
// });

var condiBox = $('.condiBox');
//var checkAll = $('.checkAll #chkSex1');


// ckAll = checkAll.find('input').prop('checked');
//     checkArea = $('.checkArea ');

//     checkAll.find('input').prop('checked',false);
//     checkAll.find('input').attr('checked',false);

// checkAll.find('input').on('click',function(){
//     if($(this).prop('checked') == true){
//         $(this).attr('checked',true)
//         $(this).siblings('label').addClass('is_active');

//         $(this).closest(checkAll).siblings('.checkArea').find('input[type="checkbox"]').attr('checked',true)
//         $(this).closest(checkAll).siblings('.checkArea').find('label').addClass('is_active');

//         $(this).closest('.checkAllarea').find('.checkArea input[type="checkbox"]').attr('checked',true)
//         $(this).closest('.checkAllarea').find('.checkArea label').addClass('is_active');
//     }else{
//         $(this).attr('checked',false)
//         $(this).siblings('label').removeClass('is_active');

//         $(this).closest(checkAll).siblings('.checkArea').find('input[type="checkbox"]').attr('checked',false)
//         $(this).closest(checkAll).siblings('.checkArea').find('label').removeClass('is_active');

//         $(this).closest('.checkAllarea').find('.checkArea input[type="checkbox"]').attr('checked',false)
//         $(this).closest('.checkAllarea').find('.checkArea label').removeClass('is_active');
//     }
// });

// 전체선택하기-체크박스

var checkAll = $('.formInput-check .checkArea').first();

//전체선택
$(document).on('click', '.checkArea:first-of-type input', function () {   
    if ($(this).is(":checked") == true) {
        $(this).parent().nextAll().find('input').attr('checked', true);
        $(this).parent().nextAll().find('input').prop('checked', true);
        $(this).parent().nextAll().find('input').next().addClass('is_active');
    } else {
        $(this).parent().nextAll().find('input').attr('checked', false);
        $(this).parent().nextAll().find('input').prop('checked', false);
        $(this).parent().nextAll().find('input').next().removeClass('is_active');
    }
});

// 부분체크박스 선택
$(document).on('click', '.checkArea input', function () {   
    var AAA=$(this).parents('.formInput-check').find('.checkArea input:checked').length;
    var BBB=$(this).parents('.formInput-check').find('.checkArea input').length-1;
    

    if ($(this).is(":checked") == true) {
        $(this).attr('checked', true);
        $(this).prop('checked', true);
        $(this).next().addClass('is_active');             
        
        if(AAA==BBB){
            $(this).parents('.formInput-check').find('label').addClass('is_active');
            $(this).parents('.formInput-check').find('input').attr('checked', true);
            $(this).parents('.formInput-check').find('input').prop('checked', true);
        }else{

        }
    } else {
        $(this).attr('checked', false);
        $(this).prop('checked', false);
        $(this).next().removeClass('is_active');    
      
        $(this).parents('.formInput-check').find('.checkArea').eq(0).find('label').removeClass('is_active');   
        $(this).parents('.formInput-check').find('.checkArea').eq(0).find('input').attr('checked', false);                            
        $(this).parents('.formInput-check').find('.checkArea').eq(0).find('input').prop('checked', false);       
    }
   
});

$('.checkArea2>input').on('click',function(){
    // if ($(this).is(":checked") == true) {
    //     $(this).attr('checked', true);
    //     $(this).prop('checked', true);
    //     $(this).next().addClass('is_active'); 
    // }else{
    //     $(this).attr('checked', false);
    //     $(this).prop('checked', false);
    //     $(this).next().removeClass('is_active');  
    // }
        $(this).attr('checked', true);
        $(this).prop('checked', true);
        $(this).next().toggleClass('is_active'); 

});

// 모두 선택 되면 전체 박스 선택
systemCheckBtn.click(function () {
    if ($('input[class=del-chk]:checked').length == systemCheckBtn.length) {
        systamAllCheckBtn.prop('checked', true);
    } else {
        systamAllCheckBtn.prop('checked', false);
    }
});


// $('.checkSquare input[type="checkbox"]').on('click',function(){
//     var l = $(this).closest('.checkAllarea').find('.checkArea input[type="checkbox"]').length;
//     var m = $(this).closest('.checkAllarea').find('.checkArea label.is_active').length;
//     if(l != m) {
//         $(this).closest('.checkAllarea').find('.checkAll input[type="checkbox"]').attr('checked',false)
//         $(this).closest('.checkAllarea').find('.checkAll label').removeClass('is_active');
//     }
// });


// //체크해제 체크
// checkArea.find('input:not(.checkAll,.checkAll input[type="checkbox"], .checkSquare input[type="checkbox"])').on('click',function(){
//     var i=1;
//     var l = $(this).parents('.formInput-check').find('.checkSquare input[type="checkbox"]').length;
//     var m = $(this).parents('.formInput-check').find('.checkSquare label.is_active:not(.checkAll label.is_active)').length;
//     for(i; i<l; i++) {        
//         if($(this).parents('.formInput-check').find('.checkSquare input[type="checkbox"]').eq(i).prop('checked') == false) {
//             $(this).parents('.formInput-check').find('.checkSquare input').eq(0).attr('checked',false)
//             $(this).parents('.formInput-check').find('.checkSquare label').eq(0).removeClass('is_active');
//         } 
//     }   
//     if(l-1 == m) {
//         $(this).parents('.formInput-check').find('.checkSquare input').eq(0).attr('checked',true)
//         $(this).parents('.formInput-check').find('.checkSquare label').eq(0).addClass('is_active');
//     }
// });



// 조회조건 접기
var foldBtn = $('.foldBtn')
boxHeight = condiBox.outerHeight();
formMargin = condiBox.find('.formInput').css('margin');


foldBtn.find('button').on('click', function () {

    $(this).toggleClass('foldmode')
    if ($(this).hasClass('foldmode') == true) {
        condiBox.each(function () {
            $(this).find('h3').addClass('hidden')
            // $('.type-b .formInput').css('paddingTop', '40px');
            $('.app-condition').hide();
            $(this).css('height', 'auto')
            $(this).find('.formInput').css('margin', 'auto')
            $('.fold-text').html('조회조건 펼치기');
            $('.foldBtn i').css({ transform: 'rotate(0deg)' })
        });
    } else {
        condiBox.each(function () {
            $(this).find('h3').removeClass('hidden')
            // $('.type-b .formInput').css('paddingTop', '7px');
            $('.app-condition').show();
            $(this).css('height', boxHeight)
            $(this).find('.formInput').css('margin', formMargin)
            $('.fold-text').html('조회조건 접기');
            $('.foldBtn i').css({ transform: 'rotate(-180deg)' })
        });
    }
})


var mainContent = $('.main');

// $('.managenav .openbtn').on('click', function () {
//     if ($(this).parents('div').hasClass('foldmode') == false) {
//         mainContent.css({ paddingLeft: '124px' });
//         $('.footer').css('paddingLeft', '2px');
//         $('.footer-main').css('paddingLeft', '102px');
//     } else {
//         mainContent.css({ paddingLeft: '306px' });
//         $('.footer').css('paddingLeft', '198px');
//     }
// });

// $('.shortnav .openbtn').click(function(){
//     if( $(this).parents('div').hasClass('rightfold') ){
//         mainContent.css({paddingRight: '161px'})
//     }else{
//         mainContent.css({paddingRight: '0px'});
//     }
// });

// css('paddingLeft','2px');

$('.gnb').find('li a').on('click', function () {
    $(this).parent('li').siblings('li').removeClass('is_active')
    $(this).parent('li').addClass('is_active')
})

var sidenav = $('.sidenav')
manageNav = $('.managenav')
shortNav = $('.shortnav')
openbtn = $('.openbtn button')
conarea = $('.conarea')
footer = $('.footer')
footcon = $('.footcon')
subPadding = conarea.css('paddingLeft')
manageBtn = $('.managenav .openbtn');
shirtBtn = $('.shortnav .openbtn');

function closeManage() {
    conarea.removeClass('openleft');
    conarea.css('paddingLeft', '124px');
    footer.css('paddingLeft', '2px');
}

function openManage() {
    conarea.addClass('openleft');
    conarea.css('paddingLeft', '320px');
    footer.css('paddingLeft', '198px');
    // footer.css('transform','translateX(193px)')
}

// 스크롤
$(window).scroll(function (e) {
    st = $(this).scrollTop();

    if (st <= 132) {
        sidenav.removeClass('topnav');
    } else {
        sidenav.addClass('topnav');
    }
});



// 사이드메뉴 오류수정
var Cid;
$('.managenav .openbtn').on('click', function () {
    var manuNav = $(this).parents(sidenav);
    if ($(this).parents('div').hasClass('foldmode') == false) {
        mainContent.css({ paddingLeft: '124px' });
        $('.footer').css('paddingLeft', '2px');
        $('.footer-main').css('paddingLeft', '102px');
    } else {
        mainContent.css({ paddingLeft: '306px' });
        $('.footer').css('paddingLeft', '198px');        
    }

    if (manuNav.hasClass('foldmode') == true) {
        manuNav.removeClass('foldmode');
        if(Cid){
            $('.managemenu>li>a#'+Cid).parent('li').addClass('is_active');
        }
       
    } else {          
        manuNav.find('.managemenu li').removeClass('is_active');
        manuNav.find('.managemenu i').removeClass('icon-white');
        manuNav.addClass('foldmode');    
    }
});

// 리스트메뉴 클릭
$('.managemenu>li>a').on('click', function (e) {
    e.preventDefault();
    var manuNav = $(this).parents(sidenav)
    menuli = $(this).parent('li');

    manuNav.removeClass('foldmode');
    menuli.siblings('li').removeClass('is_active');
    menuli.siblings('li').find('i').removeClass('icon-white');
    if (conarea.hasClass('main') == false) {
        if (manageNav.hasClass('foldmode') == true) {
            closeManage();
        } else {
            openManage();
        }
    }
    if (menuli.hasClass('is_active') == true) {
        menuli.removeClass('is_active');
        menuli.find('i').removeClass('icon-white');
        Cid='';
    } else {       
        menuli.addClass('is_active');
        menuli.find('i').addClass('icon-white');
        Cid=this.id;
    }
});

// manageBtn = $('.managenav .openbtn');

// 우측 사이드메뉴
shirtBtn.click(function () {
    var manuNav = $(this).parents(sidenav);
    if (manuNav.hasClass('rightfold') == true) {
        manuNav.removeClass('rightfold');
    } else {
        $(this).parents().addClass('rightfold');
    }
});

$(function () {
    openManage()
});

manageNav.find(openbtn).on('click', function () {
    if (conarea.hasClass('main') == false) {
        if (manageNav.hasClass('foldmode') == false) {
            closeManage();
        } else {
            openManage();
        }
    }
});


$('.managemenu > li > a').on('mouseenter', function () {
    $(this).parent('li').find('i').addClass('icon-white');
})
$('.managemenu > li > a').on('mouseleave', function () {
    $(this).parent('li').find('i').removeClass('icon-white');
});
