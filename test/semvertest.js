'use strict';
const assert = require('assert');
const Semver = require('../semver');
const isValidVersion = require('../semver').isValidVersion;
const SemverException = require('../semver').SemverException;

//テストコード
describe('semver', () => {
  describe('引数がメジャーバージョンのみの場合', () => {
    it('メジャーバージョンに１を与えて初期化すると文字列を取得できる', () => {
      const semver = new Semver(1);
      assert(semver.getMajor() === '1');
    });
    it('メジャーバージョンに１を与えバージョンの文字列を取得すると文字列1.0.0を取得できる', () => {
      const semver = new Semver(1);
      assert(semver.getVersion() === '1.0.0');
    });
  });
  describe('引数がメジャー,マイナーの場合', () => {
    it('メジャーに１,マイナーに２を与えるとマイナーの文字列２が取得できる', () => {
      assert(new Semver(1, 2).getMinor() === '2');
    });
    it('メジャーに１,マイナーに２を与えるとバージョンの文字列を取得すると文字列1.2.0を取得できる', () => {
      const semver = new Semver(1, 2);
      assert(semver.getVersion() === '1.2.0');
    });
  });
  describe('引数がメジャー,マイナー、パッチの場合', () => {
    it('メジャーに１,マイナーに２,パッチに３を与えるとパッチの文字列３が取得できる', () => {
      assert(new Semver(1, 2, 3).getPatch() === '3');
    });
    it('メジャーに１,マイナーに２,パッチに３を与えバージョンの文字列を取得すると文字列1.2.3を取得できる', () => {
      const semver = new Semver(1, 2, 3);
      assert(semver.getVersion() === '1.2.3');
    });
  });

  describe('正の整数以外のものが与えられたら例外が発生する', () => {
    it('バージョンオブジェクト生成時に major に -1 を与えると例外を発生させる', () => {
      assert.throws(() => {
        new Semver(-1)
      }, SemverException);
    });
    it('バージョンオブジェクト生成時に minor に -1 を与えると例外を発生させる', () => {
      assert.throws(() => {
        new Semver(1, -1, 1)
      }, SemverException);
    });
    it('バージョンオブジェクト生成時に patch に -1 を与えると例外を発生させる', () => {
      assert.throws(() => {
        new Semver(1, 1, -1)
      }, SemverException);
    });
  });

  describe('バージョン値チェック', () => {
    it('-1を与えた場合falseを返す', () => {
      assert(isValidVersion(-1) === false)
    });
    it('0を与えた場合はtrueを返す', () => {
      assert(isValidVersion(0) === true)
    });
    it('nullを与えた場合falseを返す', () => {
      assert(isValidVersion(null) === false)
    });
    it('文字列を与えた場合falseを返す', () => {
      assert(isValidVersion('1') === false)
    });
    it('小数値を与えた場合falseを返す', () => {
      assert(isValidVersion(1.1) === false)
    });
    it('引数がない場合falseを返す', () => {
      assert(isValidVersion() === false)
    });
  });

  describe('あるバージョンオブジェクトが、他のバージョンオブジェクトと等しいかどうかを判定', () => {
    it("バージョン 1.4.2 は バージョン 2.1.0 と等しくない", () => {
      assert(new Semver(1, 4, 2).equals(new Semver(2, 1, 0)) === false);
    });
    it("バージョン 1.4.2 は バージョン 1.4.2 と等しい", () => {
      assert(new Semver(1, 4, 2).equals(new Semver(1, 4, 2)) === true);
    });
    it("比較対象がバージョンオブジェクトでない場合、falseを返す", () => {
      assert(new Semver(1, 4, 2).equals(1) === false);
    })
  });

  describe('バージョンアップ', () => {
    let semver;
    beforeEach(() => {
      semver = new Semver(1, 1, 1)
    });
    describe('パッチバージョンアップ', () => {
      it(" patch フィールドをインクリメントする (パッチバージョンアップ)", () => {
        assert();
      });
    });

    describe('マイナーバージョンアップ', () => {
      it("minor フィールドをインクリメントし、 patch フィールドを 0 にする (マイナーバージョンアップ)", () => {
        assert();
      });
    });

    describe('メジャーバージョンアップ', () => {
      it("major フィールドをインクリメントし、 minor, および patch フィールドを 0 にする (メジャーバージョンアップ)", () => {
        assert();
      });
    });

  });




});
