(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wsKlient = _interopRequireDefault(require("./ws-klient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Moduł zdefinowany jako class
//To jest definicja
var CzatAplikacja = //Za pomocą konstruktora tworzę instancję modułu
//Aby stworzyć nową instncję tego modułu trzeba użyć konstruktora
//Przykładowe użycie konstruktora new CzatAplikacja();
function CzatAplikacja() {
  _classCallCheck(this, CzatAplikacja);

  _wsKlient.default.inicjuj('ws://localhost:3001');
};

var _default = CzatAplikacja;
exports.default = _default;

var CzatKomunikat =
/*#__PURE__*/
function () {
  function CzatKomunikat(_ref) {
    var k = _ref.komunikat,
        _ref$uzytkownik = _ref.uzytkownik,
        u = _ref$uzytkownik === void 0 ? 'Andrzej' : _ref$uzytkownik,
        _ref$czas = _ref.czas,
        c = _ref$czas === void 0 ? new Date().getTime() : _ref$czas;

    _classCallCheck(this, CzatKomunikat);

    this.komunikat = k;
    this.uzytkownik = u;
    this.czas = c;
  }

  _createClass(CzatKomunikat, [{
    key: "serializuj",
    value: function serializuj() {
      return {
        komunikat: this.komunikat,
        uzytkownik: this.uzytkownik,
        czas: this.czas
      };
    }
  }]);

  return CzatKomunikat;
}();

},{"./ws-klient":3}],2:[function(require,module,exports){
"use strict";

var _aplikacja = _interopRequireDefault(require("./aplikacja"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _aplikacja.default();

},{"./aplikacja":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var gniazdo;

function inicjuj(url) {
  gniazdo = new WebSocket(url);
  console.log('Nawiązywanie połączenia...');
}

var _default = {
  inicjuj: inicjuj
};
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcGxpa2FjamEvc2tyeXB0eS9vcnlnL2FwbGlrYWNqYS5qcyIsImFwbGlrYWNqYS9za3J5cHR5L29yeWcvcG9kc3QuanMiLCJhcGxpa2FjamEvc2tyeXB0eS9vcnlnL3dzLWtsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7SUFDTSxhLEdBQ0Y7QUFDQTtBQUNBO0FBQ0EseUJBQWM7QUFBQTs7QUFDVixvQkFBUSxPQUFSLENBQWdCLHFCQUFoQjtBQUNILEM7O2VBRVUsYTs7O0lBRVQsYTs7O0FBQ0YsK0JBQW1GO0FBQUEsUUFBM0QsQ0FBMkQsUUFBdEUsU0FBc0U7QUFBQSwrQkFBeEQsVUFBd0Q7QUFBQSxRQUE1QyxDQUE0QyxnQ0FBMUMsU0FBMEM7QUFBQSx5QkFBL0IsSUFBK0I7QUFBQSxRQUF6QixDQUF5QiwwQkFBdkIsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUF1Qjs7QUFBQTs7QUFDL0UsU0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNIOzs7O2lDQUVZO0FBQ1QsYUFBTztBQUNILFFBQUEsU0FBUyxFQUFFLEtBQUssU0FEYjtBQUVILFFBQUEsVUFBVSxFQUFFLEtBQUssVUFGZDtBQUdILFFBQUEsSUFBSSxFQUFFLEtBQUs7QUFIUixPQUFQO0FBS0g7Ozs7Ozs7OztBQzNCTDs7OztBQUVBLElBQUksa0JBQUo7Ozs7Ozs7OztBQ0ZBLElBQUksT0FBSjs7QUFFQSxTQUFTLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0I7QUFDbEIsRUFBQSxPQUFPLEdBQUcsSUFBSSxTQUFKLENBQWMsR0FBZCxDQUFWO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLDRCQUFaO0FBQ0g7O2VBRWM7QUFDWCxFQUFBLE9BQU8sRUFBUDtBQURXLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZ25pYXpkbyBmcm9tIFwiLi93cy1rbGllbnRcIjtcblxuLy9Nb2R1xYIgemRlZmlub3dhbnkgamFrbyBjbGFzc1xuLy9UbyBqZXN0IGRlZmluaWNqYVxuY2xhc3MgQ3phdEFwbGlrYWNqYSB7XG4gICAgLy9aYSBwb21vY8SFIGtvbnN0cnVrdG9yYSB0d29yesSZIGluc3RhbmNqxJkgbW9kdcWCdVxuICAgIC8vQWJ5IHN0d29yennEhyBub3fEhSBpbnN0bmNqxJkgdGVnbyBtb2R1xYJ1IHRyemViYSB1xbx5xIcga29uc3RydWt0b3JhXG4gICAgLy9Qcnp5a8WCYWRvd2UgdcW8eWNpZSBrb25zdHJ1a3RvcmEgbmV3IEN6YXRBcGxpa2FjamEoKTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZ25pYXpkby5pbmljanVqKCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ3phdEFwbGlrYWNqYTtcblxuY2xhc3MgQ3phdEtvbXVuaWthdCB7XG4gICAgY29uc3RydWN0b3Ioe2tvbXVuaWthdDogaywgdXp5dGtvd25pazogdT0nQW5kcnplaicsIGN6YXM6IGM9bmV3IERhdGUoKS5nZXRUaW1lKCl9KSB7XG4gICAgICAgIHRoaXMua29tdW5pa2F0ID0gaztcbiAgICAgICAgdGhpcy51enl0a293bmlrID0gdTtcbiAgICAgICAgdGhpcy5jemFzID0gYztcbiAgICB9XG5cbiAgICBzZXJpYWxpenVqKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga29tdW5pa2F0OiB0aGlzLmtvbXVuaWthdCxcbiAgICAgICAgICAgIHV6eXRrb3duaWs6IHRoaXMudXp5dGtvd25payxcbiAgICAgICAgICAgIGN6YXM6IHRoaXMuY3phc1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBDemF0QXBsaWthY2phIGZyb20gJy4vYXBsaWthY2phJztcblxubmV3IEN6YXRBcGxpa2FjamEoKTsiLCJsZXQgZ25pYXpkbztcblxuZnVuY3Rpb24gaW5pY2p1aih1cmwpIHtcbiAgICBnbmlhemRvID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKCdOYXdpxIV6eXdhbmllIHBvxYLEhWN6ZW5pYS4uLicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pY2p1alxufSJdfQ==
