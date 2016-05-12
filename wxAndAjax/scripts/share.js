$(function() {
  'use strict';

  var shareData = {
    appId: 'wx9c23eb0a5329ce6d', // eg: wx9c23eb0a5329ce6d
    shareImg: cdnUrl + 'images/share-img.png'
  };

  var shareNickname = '<?php echo $data["nickname"]?>'.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');

  shareData.shareTitle = shareNickname + '的春日时尚小心机是……？';
  shareData.shareDesc = shareNickname + '的春日时尚小心机是……？';
  shareData.shareLink = mainPage;

  wxConnect(shareData);

  var $large = $('.large'),
    $iconPlay = $('.icon-play'),
    $item = $('.item'),
    $alert = $('.alert');

  var photoId = '<?php echo $state?>';

  // 获取大图信息
  $.ajax({
      url: apiList.imgOne,
      type: 'POST',
      dataType: 'json',
      data: {
        photo_id: photoId
      }
    })
    .done(function(res) {
      if (res.msg === 'not_find') {
        $alert.fadeIn().find('.alert-msg').html('该图片仍在审核中');
        $large.hide();
        return false;
      }
      if (res.photo.status === 0) {
        $alert.fadeIn().find('.alert-msg').html('该图片仍在审核中');
        $large.hide();
        return false;
      }
      // 隐藏浮层
      $alert.on('click', function() {
        $(this).fadeOut();
      });

      var img = new Image();
      img.src = apiUrl + res.photo.image;
      img.onload = function() {
        var width = this.width,
          height = this.height;
        if (width < height) {
          // 竖版
          $large.fadeIn().find('.item').width(500).css('margin-top', '250px');
        } else {
          // 横板
          $large.fadeIn().find('.item').width(666).css('margin-top', '335px');
        }

        $('.item-img img').attr('src', this.src);
        $('.thumb-inner.thumb').css('background-image', 'url(' + res.photo.headimgurl + ')');
        $('.name').html(res.photo.nickname);
        $('.date').html(res.photo.created_at.split(' ')[0]);
        $('.num').html(res.num);
      };
    });

  // 大图点赞
  $('.like').on('click', function() {
    $.ajax({
        url: apiList.imgLike,
        type: 'POST',
        dataType: 'json',
        data: {
          photo_id: photoId,
          open_id: '<?php echo $data["openid"]?>'
        }
      })
      .done(function(res) {
        if (res.msg === 'exists') {
          $alert.fadeIn().find('.alert-msg').html('您已为该图片点赞过了').next().hide();
        } else {
          var num = $large.find('.num').html();
          $large.find('.num').html(parseInt(num) + 1);
        }
      });
  });



  // 跳转首页
  $iconPlay.on('click', function() {
    location.href = mainPage;
  });
});
