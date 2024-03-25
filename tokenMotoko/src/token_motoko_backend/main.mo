import Icrc1Ledger "canister:icrc1_ledger_canister";
import Debug "mo:base/Debug";
import Result "mo:base/Result";
import Option "mo:base/Option";
import Blob "mo:base/Blob";
import Error "mo:base/Error";
import Principal "mo:base/Principal";
import Nat8 "mo:base/Nat8";

actor {

  // alıcı verici ve kurum

  type Account = {
    owner : Principal; //bu owner kim nerde yer alıyor, bütün smart contracti kontrol eder, izninden geçer
    subaccount: ?[Nat8];
  };

  type TransferArgs = {
    amount: Nat;
    toAccount: Account; // hangi hesaba para geçirilecek biliyor olmamız için
  };

//iki kullanıcı arasında bu bilgi paylaşılsın çağırılan kısmı paylaşsın, para transferi varsa caller parametresi kullanılması lazım
  public shared ({caller}) func transfer(args: TransferArgs) : async Result.Result<Icrc1Ledger.BlockIndex, Text> {
      Debug.print("Transferring"
      # debug_show(args.amount)
      " token to amount "
      # debug_show (args.toAccount)
      );
  };


  //para miktarı değişmesin, sadece değişkenin türünü oluşturduk
  let transferArgs : Icrc1Ledger.TransferArgs = {
    memo = null;
    amount = args.amount;

    // subaccountta tutalım
    from_subaccount = null;
    fee = null;
    to = args.toAccount;
    created_at_time = null;
  };

  try {
      //işlemi başlat ve dene, transfer gerçekleşti mi gerçekleşmedi mi
      let transferResult =  await Icrc1Ledger.icrc1_transfer(transferArgs);

      switch (transferResult) {
          case (#Err(transferError)) {
            #err("could not transfer funds\n" # debub_show(transferError))
          };
          case (#Ok(blockIndex)) {
            return #ok blockIndex
          };


      }
  } catch (error: Error ) {
    #err("Reject message: " # Error.message(error))
  };


}

