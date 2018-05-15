// const binance = require('node-binance-api');

// import IBalance from '../../interfaces/IBalance/IBalance';
interface IBalance {
  [token: string]: {
    available: string;
    onOrder: string;
  };
}

export default class Binance {
  // constructor() {
  //   binance.options({
  //     APIKEY: '',
  //     APISECRET: '',
  //     useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  //     test: true // If you want to use sandbox mode where orders are simulated
  //   });
  // }

  public getBalance(cb) {
    return cb(this.removeEmptyFromBalance(this.getBalanceFake()));
/*
    binance.balance((error, balances) => {
      if (error) {
        throw error; // TODO: обработка ошибок
      }

      cb(this.removeEmptyFromBalance(balances));
    });
*/
  }

  private removeEmptyFromBalance(balance: IBalance) {
    return Object.keys(balance).reduce(function(acc: IBalance, item: string): IBalance {
      if (parseFloat(balance[item].available) > 0) {
        acc[item] = balance[item];
      }

      return acc;
    }, {});
  }

  private addRandomToBalance(balance: IBalance): IBalance {
    return Object.keys(balance).reduce(function(acc: IBalance, item: string): IBalance {
      const available = parseFloat(balance[item].available);

      if (available > 0) {
        acc[item] = balance[item];
        acc[item].available = String(available + Math.random());
      }

      return acc;
    }, {});
  }

  private getBalanceFake(): IBalance {
    return this.addRandomToBalance({
      '123': { available: '0.00000000', onOrder: '0.00000000' },
      '456': { available: '0.00000000', onOrder: '0.00000000' },
      BTC: { available: '0.00000000', onOrder: '0.00000000' },
      LTC: { available: '0.00000000', onOrder: '0.00000000' },
      ETH: { available: '0.00039704', onOrder: '0.00000000' },
      BNC: { available: '0.00000000', onOrder: '0.00000000' },
      ICO: { available: '0.00000000', onOrder: '0.00000000' },
      NEO: { available: '0.00000000', onOrder: '0.00000000' },
      BNB: { available: '0.99706050', onOrder: '0.00000000' },
      QTUM: { available: '0.00000000', onOrder: '0.00000000' },
      EOS: { available: '0.01000000', onOrder: '0.49000000' },
      SNT: { available: '0.00000000', onOrder: '0.00000000' },
      BNT: { available: '0.00000000', onOrder: '0.00000000' },
      GAS: { available: '0.00000000', onOrder: '0.00000000' },
      BCC: { available: '0.00000000', onOrder: '0.00000000' },
      BTM: { available: '0.00000000', onOrder: '0.00000000' },
      USDT: { available: '0.00000000', onOrder: '0.00000000' },
      HCC: { available: '0.00000000', onOrder: '0.00000000' },
      HSR: { available: '0.00000000', onOrder: '0.00000000' },
      OAX: { available: '0.00000000', onOrder: '0.00000000' },
      DNT: { available: '0.00000000', onOrder: '0.00000000' },
      MCO: { available: '0.00000000', onOrder: '0.00000000' },
      ICN: { available: '0.00000000', onOrder: '0.00000000' },
      ELC: { available: '0.00000000', onOrder: '0.00000000' },
      PAY: { available: '0.00000000', onOrder: '0.00000000' },
      ZRX: { available: '0.00000000', onOrder: '0.00000000' },
      OMG: { available: '0.00000000', onOrder: '0.00000000' },
      WTC: { available: '0.00000000', onOrder: '0.00000000' },
      LRX: { available: '0.00000000', onOrder: '0.00000000' },
      YOYO: { available: '0.00000000', onOrder: '0.00000000' },
      LRC: { available: '0.00000000', onOrder: '0.00000000' },
      LLT: { available: '0.00000000', onOrder: '0.00000000' },
      TRX: { available: '0.00000000', onOrder: '0.00000000' },
      FID: { available: '0.00000000', onOrder: '0.00000000' },
      SNGLS: { available: '0.00000000', onOrder: '0.00000000' },
      STRAT: { available: '0.00000000', onOrder: '0.00000000' },
      BQX: { available: '0.00000000', onOrder: '0.00000000' },
      FUN: { available: '0.00000000', onOrder: '0.00000000' },
      KNC: { available: '0.00000000', onOrder: '0.00000000' },
      CDT: { available: '0.00000000', onOrder: '0.00000000' },
      XVG: { available: '0.00000000', onOrder: '0.00000000' },
      IOTA: { available: '0.00000000', onOrder: '0.00000000' },
      SNM: { available: '0.00000000', onOrder: '0.00000000' },
      LINK: { available: '0.00000000', onOrder: '0.00000000' },
      CVC: { available: '0.00000000', onOrder: '0.00000000' },
      TNT: { available: '0.00000000', onOrder: '0.00000000' },
      REP: { available: '0.00000000', onOrder: '0.00000000' },
      CTR: { available: '0.00000000', onOrder: '0.00000000' },
      MDA: { available: '0.00000000', onOrder: '0.00000000' },
      MTL: { available: '0.00000000', onOrder: '0.00000000' },
      SALT: { available: '0.00000000', onOrder: '0.00000000' },
      NULS: { available: '0.00000000', onOrder: '0.00000000' },
      SUB: { available: '0.00000000', onOrder: '0.00000000' },
      STX: { available: '0.00000000', onOrder: '0.00000000' },
      MTH: { available: '0.00000000', onOrder: '0.00000000' },
      CAT: { available: '0.00000000', onOrder: '0.00000000' },
      ADX: { available: '0.00000000', onOrder: '0.00000000' },
      PIX: { available: '0.00000000', onOrder: '0.00000000' },
      ETC: { available: '0.01000000', onOrder: '0.39000000' },
      ENG: { available: '0.00000000', onOrder: '0.00000000' },
      ZEC: { available: '0.00000000', onOrder: '0.00000000' },
      AST: { available: '1.00000000', onOrder: '18.00000000' },
      '1ST': { available: '0.00000000', onOrder: '0.00000000' },
      GNT: { available: '0.00000000', onOrder: '0.00000000' },
      DGD: { available: '0.00000000', onOrder: '0.00000000' },
      BAT: { available: '0.00000000', onOrder: '0.00000000' },
      DASH: { available: '0.00000000', onOrder: '0.00000000' },
      POWR: { available: '0.00000000', onOrder: '0.00000000' },
      BTG: { available: '0.00000000', onOrder: '0.00000000' },
      REQ: { available: '0.00000000', onOrder: '0.00000000' },
      XMR: { available: '0.00000000', onOrder: '0.00000000' },
      EVX: { available: '0.00000000', onOrder: '0.00000000' },
      VIB: { available: '0.00000000', onOrder: '0.00000000' },
      ENJ: { available: '0.00000000', onOrder: '0.00000000' },
      VEN: { available: '0.00000000', onOrder: '0.00000000' },
      CAG: { available: '0.00000000', onOrder: '0.00000000' },
      EDG: { available: '0.00000000', onOrder: '0.00000000' },
      ARK: { available: '0.00000000', onOrder: '0.00000000' },
      XRP: { available: '0.00000000', onOrder: '0.00000000' },
      MOD: { available: '0.00000000', onOrder: '0.00000000' },
      AVT: { available: '0.00000000', onOrder: '0.00000000' },
      STORJ: { available: '0.00000000', onOrder: '0.00000000' },
      KMD: { available: '0.00000000', onOrder: '0.00000000' },
      RCN: { available: '0.00000000', onOrder: '0.00000000' },
      EDO: { available: '0.00000000', onOrder: '0.00000000' },
      QASH: { available: '0.00000000', onOrder: '0.00000000' },
      SAN: { available: '0.00000000', onOrder: '0.00000000' },
      DATA: { available: '0.00000000', onOrder: '0.00000000' },
      DLT: { available: '0.00000000', onOrder: '0.00000000' },
      GUP: { available: '0.00000000', onOrder: '0.00000000' },
      MCAP: { available: '0.00000000', onOrder: '0.00000000' },
      MANA: { available: '0.00000000', onOrder: '0.00000000' },
      PPT: { available: '0.00000000', onOrder: '0.00000000' },
      OTN: { available: '0.00000000', onOrder: '0.00000000' },
      CFD: { available: '0.00000000', onOrder: '0.00000000' },
      RDN: { available: '0.00000000', onOrder: '0.00000000' },
      GXS: { available: '0.00000000', onOrder: '0.00000000' },
      AMB: { available: '0.00000000', onOrder: '0.00000000' },
      ARN: { available: '0.00000000', onOrder: '0.00000000' },
      BCPT: { available: '0.00000000', onOrder: '0.00000000' },
      CND: { available: '0.00000000', onOrder: '0.00000000' },
      GVT: { available: '0.00000000', onOrder: '0.00000000' },
      POE: { available: '0.00000000', onOrder: '0.00000000' },
      ALIS: { available: '0.00000000', onOrder: '0.00000000' },
      BTS: { available: '0.00000000', onOrder: '0.00000000' },
      FUEL: { available: '0.00000000', onOrder: '0.00000000' },
      XZC: { available: '0.00000000', onOrder: '0.00000000' },
      QSP: { available: '0.00000000', onOrder: '0.00000000' },
      LSK: { available: '0.00000000', onOrder: '0.00000000' },
      BCD: { available: '0.00000000', onOrder: '0.00000000' },
      TNB: { available: '0.00000000', onOrder: '0.00000000' },
      GRX: { available: '0.00000000', onOrder: '0.00000000' },
      STAR: { available: '0.00000000', onOrder: '0.00000000' },
      ADA: { available: '1.00000000', onOrder: '25.00000000' },
      LEND: { available: '0.00000000', onOrder: '0.00000000' },
      IFT: { available: '0.00000000', onOrder: '0.00000000' },
      KICK: { available: '0.00000000', onOrder: '0.00000000' },
      UKG: { available: '0.00000000', onOrder: '0.00000000' },
      VOISE: { available: '0.00000000', onOrder: '0.00000000' },
      XLM: { available: '0.00000000', onOrder: '0.00000000' },
      CMT: { available: '0.00000000', onOrder: '0.00000000' },
      WAVES: { available: '0.00000000', onOrder: '0.00000000' },
      WABI: { available: '0.00000000', onOrder: '0.00000000' },
      SBTC: { available: '0.00000000', onOrder: '0.00000000' },
      BCX: { available: '0.00000000', onOrder: '0.00000000' },
      GTO: { available: '0.00000000', onOrder: '0.00000000' },
      ETF: { available: '0.00000000', onOrder: '0.00000000' },
      ICX: { available: '0.00000000', onOrder: '0.00000000' },
      OST: { available: '0.00000000', onOrder: '0.00000000' },
      ELF: { available: '0.00000000', onOrder: '0.00000000' },
      AION: { available: '0.00000000', onOrder: '0.00000000' },
      WINGS: { available: '0.00000000', onOrder: '0.00000000' },
      BRD: { available: '0.00000000', onOrder: '0.00000000' },
      NEBL: { available: '0.00000000', onOrder: '0.00000000' },
      NAV: { available: '0.00000000', onOrder: '0.00000000' },
      VIBE: { available: '0.00000000', onOrder: '0.00000000' },
      LUN: { available: '0.00000000', onOrder: '0.00000000' },
      TRIG: { available: '0.00000000', onOrder: '0.00000000' },
      APPC: { available: '0.00000000', onOrder: '0.00000000' },
      CHAT: { available: '0.00000000', onOrder: '0.00000000' },
      RLC: { available: '0.00000000', onOrder: '0.00000000' },
      INS: { available: '0.00000000', onOrder: '0.00000000' },
      PIVX: { available: '0.00000000', onOrder: '0.00000000' },
      IOST: { available: '0.00000000', onOrder: '0.00000000' },
      STEEM: { available: '0.00000000', onOrder: '0.00000000' },
      NANO: { available: '0.00000000', onOrder: '0.00000000' },
      AE: { available: '0.00000000', onOrder: '0.00000000' },
      VIA: { available: '0.00000000', onOrder: '0.00000000' },
      BLZ: { available: '1.00000000', onOrder: '35.00000000' },
      SYS: { available: '0.00000000', onOrder: '0.00000000' },
      RPX: { available: '0.00000000', onOrder: '0.00000000' },
      NCASH: { available: '0.00000000', onOrder: '0.00000000' },
      POA: { available: '0.00000000', onOrder: '0.00000000' },
      ONT: { available: '0.00000000', onOrder: '0.00000000' },
      ZIL: { available: '0.00000000', onOrder: '0.00000000' },
      STORM: { available: '0.00000000', onOrder: '0.00000000' },
      XEM: { available: '0.00000000', onOrder: '0.00000000' },
      WAN: { available: '0.00000000', onOrder: '0.00000000' },
      WPR: { available: '0.00000000', onOrder: '0.00000000' },
      QLC: { available: '0.00000000', onOrder: '0.00000000' },
      GRS: { available: '0.00000000', onOrder: '0.00000000' },
      CLOAK: { available: '0.00000000', onOrder: '0.00000000' },
      LOOM: { available: '0.00000000', onOrder: '0.00000000' },
      BCN: { available: '0.00000000', onOrder: '0.00000000' }
    });
  }
}
