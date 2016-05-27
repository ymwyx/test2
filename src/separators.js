function thousands_separators(num) {

    num = num + "";

    var str1 = "";
    var sign_sum;

    var place;

    var arr = [];

    var arr_after = [];

    for (i = 0; i < num.length; i++) {

        arr[i] = num[i];
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '.')
        {
            arr_after = arr.splice(i, arr.length - i);

            str1 = arr_after.join("");
        }
    }


    sign_sum = parseInt(arr.length / 3);

    place = -3;

    if (arr.length % 3 == 0) {
        sign_sum -= 1;
    }

    for (var j = 0; j < sign_sum; j++) {

        arr.splice(place - j, 0, ',');
        place -= 3;
    }

    var str = arr.join("");

    str = str + str1;

    return str;
}

module.exports = thousands_separators;