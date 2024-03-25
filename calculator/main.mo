// hesap makinesi
// değişkenler (let => immutable, var => mutable)
// operatörler
// async method
// if condition

// canister > akıllı sözleşme

actor hesap_makinesi {

var hucre: Int = 0;
// toplama
public func toplama (s: Int) : async Int {
  hucre += s;
  hucre;
 //(Debug.print(debug_show (hucre));)
};

//çıkarma
public func cikarma (s: Int) : async Int {
  hucre -= s;
  hucre;
 //(Debug.print(debug_show (hucre));)
};

//çarpma
public func carpma (s: Int) : async Int {
  hucre *= s;
  hucre;
 //(Debug.print(debug_show (hucre));)
};

//bölme
public func bolme (s: Int) : async ?Int {
  if(s == 0) {
    null
  } else {
    hucre /= s;
    ?hucre;
  //(Debug.print(debug_show (hucre));)
  }; 
};

// temizle
  public func temizle() : async() {
    hucre := 0;
  }

};
