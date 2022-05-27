var kullanicilar = [{ kullaniciAdi : "admin" , parola: "admin" },
{ kullaniciAdi : "tugba" , parola: "1234" },
{ kullaniciAdi : "javascript" , parola: "abcdef" }


];

var girilenKullaniciAdi;
var girilenParola ;

var x ;

function kontrolEt (){

    girilenKullaniciAdi = document.getElementById("kullaniciAdi").value ;
    girilenParola = document.getElementById("parola").value;

    for (x of kullanicilar){

        if((x.kullaniciAdi == girilenKullaniciAdi) && (x.parola == girilenParola)){

            return true;
        }


    }

};

function girisOnayi(){

kontrolEt()

if(kontrolEt()){

alert("HOŞŞGELDİNİZ EFENİİİMM");

}

else{

    alert("YANLIŞ KULLANICI ADI YADA PAROLA");
    document.getElementById("kullaniciAdi").value = "";
    document.getElementById("parola").value = "";

}


};


