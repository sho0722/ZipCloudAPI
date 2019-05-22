$(function() {
  $('#search-btn').on('click', function() {
    let zipcode = $('#search-word').val();
    $.ajax({
      url:'//zipcloud.ibsnet.co.jp/api/search',
      type:'GET',
      dataType: 'jsonp',
      data:{
        zipcode: zipcode
      }
    })
    // Ajaxリクエストが成功した時発動
    .done( (data) => {
      console.log(data);
      $('#prefecture').text(data.results[0].address1);
      $('#city').text(data.results[0].address2);
      $('#address').text(data.results[0].address3);
    })
    // Ajaxリクエストが失敗した時発動
    .fail( (data) => {
        console.log('fail');
    })
    // Ajaxリクエストが成功・失敗どちらでも発動
    .always( (data) => {

    });
  });
});