function terimainput() {
 var x = document.forms ['biodata']['NamaDepan'].value;
 var x1 = document.forms ['biodata']['NamaBelakang'].value;
 var y = document.forms ['biodata']['Nim'].value;
 var z = document.forms ['biodata']['Prodi'].value;
 var a = document.forms ['biodata']['tgl'].value;
 var b = document.forms ['biodata']['telephone'].value;
 var c = document.forms ['biodata']['alamatj'].value;
 var d = document.forms ['biodata']['email'].value;
 var e = document.forms ['biodata']['alasan'].value;
 var f = document.forms ['biodata']['motto'].value;
 var g = document.forms ['biodata']['pengalaman'].value;
 var h = document.forms ['biodata']['divisi'].value;
 var i = document.forms ['biodata']['deskripsi'].value;


 if (x =="" || x1 =="" || y =="" || z =="" || a =="" || b =="" || c =="" || d =="" || e =="" || f =="" || g =="" || h =="" || i =="") {
    alert("Terdapat data kosong, harap diisi kembali");
  }
      else {
        alert("Data Berhasil di Entry");
        var table = document.getElementById ('tableinput');
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4= row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);

        cell1.innerHTML = x+ " " +x1 ;
        cell2.innerHTML = y ;
        cell3.innerHTML = z ;
        cell4.innerHTML = a ;
        cell5.innerHTML = b ;
        cell6.innerHTML = c ;
        cell7.innerHTML = d ;
        cell8.innerHTML = e ;
        cell9.innerHTML = f ;
        cell10.innerHTML = g ;
        cell11.innerHTML = h ;
        cell12.innerHTML = i ;

 };
}
