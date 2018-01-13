function myFunction() {


    var area = document.getElementById("text").value;


    var n1 = area.substring(0, 1);
    var n2 = area.substring(1, 2);
    var n3 = area.substring(2, 3);
    var n4 = area.substring(3, 4);

    var n5 = area.substring(4, 5);
    var n6 = area.substring(5, 6);
    var n7 = area.substring(6, 7);
    var n8 = area.substring(7, 8);

    var n9 = area.substring(8, 9);
    var n10 = area.substring(9, 10);
    var n11 = area.substring(10, 11);

    var sum1 = (1 * n1) + (2 * n2) + (3 * n3) + (4 * n4) + (5 * n5) + (6 * n6) + (7 * n7) + (8 * n8) + (9 * n9) + (1 * n10);


    var sum2 = (3 * n1) + (4 * n2) + (5 * n3) + (6 * n4) + (7 * n5) + (8 * n6) + (9 * n7) + (1 * n8) + (2 * n9) + (3 * n10);

    

    if (area.length === 11 && area.match(/^\d+$/) && sum1 % 11 != 10 && 1*n11 === sum1 % 11) {
        alert("asmens kodas tinka");
        
    } else if (area.length === 11 && area.match(/^\d+$/) && sum2 % 11 != 10 && 1*n11 === sum2 % 11) {
        alert("asmens kodas tinka");

    } else if (area.length === 11 && area.match(/^\d+$/) && sum2 % 11 === 10 && 1*n11 === 0) {
        alert("asmens kodas tinka");

    } else alert(" asmens kodas netinka");


}
