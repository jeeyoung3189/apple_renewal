$(function(){
    $('.ham').click(function(){
        $('.ham').toggleClass('on')
        $('.gnb').toggleClass('on')
    })


    $('.tab_menu > li').click(function(){
        let idx1 = $(this).index('.tab_menu > li')
        $('.tab_menu > li').removeClass('on')
        $('.tab_menu > li').eq(idx1).addClass('on')
        $('.tab_list_con > div').removeClass('on')
        $('.tab_list_con > div').eq(idx1).addClass('on')
        $('#bg_color > li, #pd_color > p, #color_name > p').removeClass('on')
        $('#bg_color > li:nth-of-type(1), #pd_color > p:nth-of-type(1), #color_name > p:nth-of-type(1)').addClass('on')
    })

    $('#color > span').click(function(){
        let idx2 = $(this).index('#color > span')
        $('#bg_color > li:nth-of-type(1), #pd_color > p:nth-of-type(1), #color_name > p:nth-of-type(1)').removeClass('on')
        $('#bg_color > li').removeClass('on')
        $('#bg_color > li').eq(idx2).addClass('on')
        $('#pd_color > p').removeClass('on')
        $('#pd_color > p').eq(idx2).addClass('on')
        $('#color_name > p').removeClass('on')
        $('#color_name > p').eq(idx2).addClass('on')
    })

    // sec3 영상 기능
let vid = $('.sec3_list li.on').find('video').get(0)
vid.currentTime = 0
vid.play()
$('.sec3_list li').click(function(e){
    e.preventDefault()
    vid.pause();
    $('.sec3_list li').removeClass('on')
    $(this).addClass('on')
    vid = $('.sec3_list li.on').find('video').get(0)
    vid.currentTime = 0
    vid.play()
})
})

