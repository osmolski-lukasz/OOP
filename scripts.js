function Telefon(marka, cena, kolor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to "  + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
};

var SamsungGalaxyS6 = new Telefon("Samsung", "2500", "czarny");
var iPhone6s = new Telefon("Apple", "2250", "srebrny");
var OnePlusOne = new Telefon("Plus", "1500", "biały");

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();