$(document).ready(function(){ 
     $(".nav_rg_1").each(
        function(){
          $(this).children(".nav_hd").children("span:first").siblings();
          $(this).children(".nav_bd").children(".nav_bd1:first").addClass("active");
          
        }
      );
      $(".nav_rg_1 .nav_hd span").mouseenter(
        function(){
          $(".nav_rg_1 .nav_hd span[class='active']").addClass("active");
          $(this).parent(".nav_hd").siblings(".nav_bd").children(".nav_bd1").eq($(this).index()).show().siblings().hide();
          $(this).addClass("active").siblings("span").removeClass("active");
        }
      );
      /**/
      $(".content_rmpp").each(
        function(){
          $(this).children(".rmpp_hd").children(".rmpp_hd_1").children("span:first").siblings();
          $(this).children(".rmpp_bd").children(".rmpp_bd_1:first").addClass("active");
          
        }
      );
      $(".content_rmpp .rmpp_hd .rmpp_hd_1 span").mouseenter(
        function(){
          $(".content_rmpp .rmpp_hd .rmpp_hd_1 span[class='active']").addClass("active");
          $(this).parent(".rmpp_hd_1").parent(".rmpp_hd").siblings(".rmpp_bd").children(".rmpp_bd_1").eq($(this).index()).show().siblings().hide();
          $(this).addClass("active").siblings("span").removeClass("active");
        }
      );
       /*中心内容*/
      $(".content_rmpp").each(
        function(){
          $(this).children(".rmpp_hd").children(".rmpp_hd_1").children("span:first").siblings();
          $(this).children(".rmpp_bd").children(".rmpp_bd_1:first").addClass("active");
          
        }
      );
      $(".content_rmpp .rmpp_hd .rmpp_hd_1 span").mouseenter(
        function(){
          $(".content_rmpp .rmpp_hd .rmpp_hd_1 span[class='active']").addClass("active");
          $(this).parent(".rmpp_hd_1").parent(".rmpp_hd").siblings(".rmpp_bd").children(".rmpp_bd_1").eq($(this).index()).show().siblings().hide();
          $(this).addClass("active").siblings("span").removeClass("active");
        }
      );
      /*商品列表页中心内容*/
      $(".conten").each(
        function(){
          $(this).children(".ct_1").children(".ct_hd").children("span:first").siblings();
          $(this).children(".ct_bd").children(".ct_bd_one:first").addClass("active");
          
        }
      );
      $(".conten .ct_1 .ct_hd span").mouseenter(
        function(){
          $(".conten .ct_1 .ct_hd span[class='active']").addClass("active");
          $(this).parent(".ct_hd").parent(".ct_1").siblings(".ct_bd").children(".ct_bd_one").eq($(this).index()).show().siblings().hide();
          $(this).addClass("active").siblings("span").removeClass("active");
        }
      );
       /*商品详情页销量排行*/
      $(".xlpx_2").each(
        function(){
          $(this).children(".xlpx_hd").children("span:first").siblings();
          $(this).children(".xlpx_bd").children(".xlpx_bd_one:first").addClass("cur");
          
        }
      );
      $(".xlpx_2 .xlpx_hd span").mouseenter(
        function(){
          $(".xlpx_2 .xlpx_hd span[class='cur']").addClass("cur");
          $(this).parent(".xlpx_hd").siblings(".xlpx_bd").children(".xlpx_bd_one").eq($(this).index()).show().siblings().hide();
          $(this).addClass("cur").siblings("span").removeClass("cur");
        }
      );
       /*商品详情页商品列表*/
      $(".spje_nr").each(
        function(){
          $(this).children(".spje_hd").children("span:first").siblings();
          $(this).children(".spje_bd").children(".spje_bd_one:first").addClass("cur");
          
        }
      );
      $(".spje_nr .spje_hd span").mouseenter(
        function(){
          $(".spje_nr .spje_hd spann[class='cur']").addClass("cur");
          $(this).parent(".spje_hd").siblings(".spje_bd").children(".spje_bd_one").eq($(this).index()).show().siblings().hide();
          $(this).addClass("cur").siblings("span").removeClass("cur");
        }
      );
      //配送地区
          $(".nav_fenl").mouseenter(
            function(){
              if(!$(this).find(".nav_sdfl").is(":animated")){
              $(this).find(".nav_sdfl").css("display", "block");
              }
            }
          );
          $(".nav_fenl").mouseleave(
            function(){
              $(this).find(".nav_sdfl").css("display", "none");
            }
          );
          //地区
          $(".diqu_01").mouseenter(
            function(){
              if(!$(this).find(".dq_dz").is(":animated")){
              $(this).find(".dq_dz").css("display", "block");
              }
              $(this).find(".xzdq").css({"background-color":"#fff","color":"#0a0a0a"});
            }
          );
          $(".diqu_01").mouseleave(
            function(){
              $(this).find(".xzdq").css({"background-color":"transparent","color":"#fff"});
              $(this).find(".dq_dz").css("display", "none");
            }
          );
      //
      $(".xxk").each(
          function(){
            $(this).children(".bd").children(".bd_1:first").siblings().hide();
            $(this).children(".zuo").children(".hd").children("div:first").addClass("cur");
          }
        );
      $(".xxk .zuo .hd div").mouseenter(function(){
        $(".xxk .zuo .hd div[class='cur']").addClass("cur");
        $(this).parent(".hd").parents(".zuo").siblings(".bd").children(".bd_1").eq($(this).index()).show().siblings().hide();
        $(this).addClass("cur").siblings("div").removeClass("cur");
      });
        $(".ct_1_22 li").click(function(){
    var currSelected = $(this).children("a").attr('href');
    var tabSelected = $(".xxk .zuo .hd div[id='"+currSelected.substring(1)+"']");
    tabSelected.addClass("cur");
    tabSelected.parent(".hd").parents(".zuo").siblings(".bd").children(".bd_1").eq(tabSelected.index()).show().siblings().hide();
    tabSelected.addClass("cur").siblings("div").removeClass("cur");
    //alert($(".xxk .hd div[id='"+currSelected.substring(1)+"']").html());
    });
          $(".ct_1_22 li").click(function(){
    var currSelected = $(this).children("a").attr('href');
    var tabSelected = $(".xxk .zuo .hd div[id='"+currSelected.substring(1)+"']");
    tabSelected.addClass("cur");
    tabSelected.parent(".hd").parents(".zuo").siblings(".bd").children(".bd_1").eq(tabSelected.index()).show().siblings().hide();
    tabSelected.addClass("cur").siblings("div").removeClass("cur");
    //alert($(".xxk .hd div[id='"+currSelected.substring(1)+"']").html());
    });
      /**/
  $(".zk").hide();
        var u_num = getQueryString('u_sea');
        if(u_num == 0 || u_num == null || u_num < 0 || u_num > 25){
           u_num = 1; 
        }
    //$("#zk_"+u_num).slideToggle();
    //$("#"+u_num).addClass('xz');
  $(".clik").click(function(){
    var u_class = $(this).attr('class');
    if(u_class == 'clik'){
      $(this).addClass('xz');
    }else{
      $(this).removeClass('xz');
    }
    var zk_id = '#zk_'+$(this).attr('id');
    $(zk_id).slideToggle(200);
    return false;
  });



        /**/
  $(".z").hide();
        var u_num = getQueryString('u_sea');
        if(u_num == 0 || u_num == null || u_num < 0 || u_num > 25){
           u_num = 1; 
        }
    //$("#z_"+u_num).slideToggle();
    //$("#"+u_num).addClass('xz');
  $(".clik_1").click(function(){
    var u_class = $(this).attr('class');
    if(u_class == 'clik_1'){
      $(this).addClass('xz');
    }else{
      $(this).removeClass('xz');
    }
    var z_id = '#z_'+$(this).attr('id');
    $(z_id).slideToggle(200);
    return false;
  });
var currSelected = getQueryString("tailNav")
var tabSelected = $(".xxk .zuo .hd div[id='"+currSelected+"']");
tabSelected.addClass("cur");
tabSelected.parent(".hd").parents(".zuo").siblings(".bd").children(".bd_1").eq(tabSelected.index()).show().siblings().hide();
tabSelected.addClass("cur").siblings("div").removeClass("cur");
         
     
});
function getQueryString(paras){
    var url = location.href;
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {}
    for (i=0; j=paraString[i]; i++){
        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);  
    }  
    var returnValue = paraObj[paras.toLowerCase()];  
    if(typeof(returnValue)=="undefined"){
        return "";  
    }else{
        return returnValue; 
    }
}
