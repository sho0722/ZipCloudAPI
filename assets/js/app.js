$(function() {
  $('#search-btn').on('click', function() {
    // 入力された郵便番号を取得
    let zipcode = $('#search-word').val();

    // ajax開始（郵便番号検索APIへ通信）
    $.ajax({
      url:'http://zipcloud.ibsnet.co.jp/api/search',  // 郵便番号検索APIのURL（通信先）
      type:'GET', // 検索した取得なので、通信方法にGETを指定
      dataType: 'jsonp',  // 検索結果の形式にjsonpを指定
      data:{  // 郵便番号検索APIに必要なパラメータ設定
        zipcode: zipcode
      }
    })
    // Ajaxリクエストが成功した時発動
    .done( (data) => {
      $('#prefecture').text(data.results[0].address1);
      $('#city').text(data.results[0].address2);
      $('#address').text(data.results[0].address3);
    })
    // Ajaxリクエストが失敗した時発動
    .fail( (error) => {
      console.log('エラーが発生しました');
      console.log(error);
    })
  });
});