$(function() {

    //検索ボタンをくリックした時の処理
    $("#search-btn").on("click", function() {

        //検索ワードを取得する
        let searchWord = $("#search-word").val();

        //郵便番号の検索をしに行く
        $.ajax({
            //データの通信をするところ
            url: "http://zipcloud.ibsnet.co.jp/api/search",
            type: "GET",
            dataType: "jsonp",
            data: {
                zipcode: searchWord
            }

        }).done( (data) => {
            //通信が成功した時

            for (item of data.results) {

                let prefecture = item.address1;
                let city = item.address2;
                let address = item.address3;

                $("#prefecture").text(prefecture);
                $("#city").text(city);
                $("#address").text(address);
            }
        

        }).fail( (error) => {
            // 通信が失敗した時
            console.log(error);
        })
    })
})