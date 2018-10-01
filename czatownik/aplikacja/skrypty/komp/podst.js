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

  _wsKlient.default.zarejestrujObslugeOtwarcia(function () {
    var komunikat = new CzatKomunikat({
      komunikat: 'Hej!'
    });

    _wsKlient.default.wyslijKomunikat(komunikat.serializuj());
  });

  _wsKlient.default.zarejestrujObslugeKomunikatu(function (dane) {
    console.log(dane);
  });
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

function zarejestrujObslugeOtwarcia(funkcjaObslugi) {
  gniazdo.onopen = function () {
    console.log('nawiązanie');
    funkcjaObslugi();
  };
}

function zarejestrujObslugeKomunikatu(funkcjaObslugi) {
  gniazdo.onmessage = function (e) {
    console.log('komunikat', e.data);
    var dane = JSON.parse(e.data);
    funkcjaObslugi(dane);
  };
}

function wyslijKomunikat(zawartosc) {
  gniazdo.send(JSON.stringify(zawartosc));
}

var _default = {
  inicjuj: inicjuj,
  zarejestrujObslugeOtwarcia: zarejestrujObslugeOtwarcia,
  zarejestrujObslugeKomunikatu: zarejestrujObslugeKomunikatu,
  wyslijKomunikat: wyslijKomunikat
};
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcGxpa2FjamEvc2tyeXB0eS9vcnlnL2FwbGlrYWNqYS5qcyIsImFwbGlrYWNqYS9za3J5cHR5L29yeWcvcG9kc3QuanMiLCJhcGxpa2FjamEvc2tyeXB0eS9vcnlnL3dzLWtsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7SUFDTSxhLEdBQ0Y7QUFDQTtBQUNBO0FBQ0EseUJBQWM7QUFBQTs7QUFDVixvQkFBUSxPQUFSLENBQWdCLHFCQUFoQjs7QUFDQSxvQkFBUSwwQkFBUixDQUFtQyxZQUFNO0FBQ3JDLFFBQUksU0FBUyxHQUFHLElBQUksYUFBSixDQUFrQjtBQUFDLE1BQUEsU0FBUyxFQUFFO0FBQVosS0FBbEIsQ0FBaEI7O0FBQ0Esc0JBQVEsZUFBUixDQUF3QixTQUFTLENBQUMsVUFBVixFQUF4QjtBQUNILEdBSEQ7O0FBSUEsb0JBQVEsNEJBQVIsQ0FBcUMsVUFBQyxJQUFELEVBQVU7QUFDM0MsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFDSCxHQUZEO0FBR0gsQzs7ZUFFVSxhOzs7SUFFVCxhOzs7QUFDRiwrQkFBbUY7QUFBQSxRQUEzRCxDQUEyRCxRQUF0RSxTQUFzRTtBQUFBLCtCQUF4RCxVQUF3RDtBQUFBLFFBQTVDLENBQTRDLGdDQUExQyxTQUEwQztBQUFBLHlCQUEvQixJQUErQjtBQUFBLFFBQXpCLENBQXlCLDBCQUF2QixJQUFJLElBQUosR0FBVyxPQUFYLEVBQXVCOztBQUFBOztBQUMvRSxTQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0g7Ozs7aUNBRVk7QUFDVCxhQUFPO0FBQ0gsUUFBQSxTQUFTLEVBQUUsS0FBSyxTQURiO0FBRUgsUUFBQSxVQUFVLEVBQUUsS0FBSyxVQUZkO0FBR0gsUUFBQSxJQUFJLEVBQUUsS0FBSztBQUhSLE9BQVA7QUFLSDs7Ozs7Ozs7O0FDbENMOzs7O0FBRUEsSUFBSSxrQkFBSjs7Ozs7Ozs7O0FDRkEsSUFBSSxPQUFKOztBQUVBLFNBQVMsT0FBVCxDQUFpQixHQUFqQixFQUFzQjtBQUNsQixFQUFBLE9BQU8sR0FBRyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVY7QUFDQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksNEJBQVo7QUFDSDs7QUFFRCxTQUFTLDBCQUFULENBQW9DLGNBQXBDLEVBQW9EO0FBQ2hELEVBQUEsT0FBTyxDQUFDLE1BQVIsR0FBaUIsWUFBTTtBQUNuQixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUNBLElBQUEsY0FBYztBQUNqQixHQUhEO0FBSUg7O0FBRUQsU0FBUyw0QkFBVCxDQUFzQyxjQUF0QyxFQUFzRDtBQUNsRCxFQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLFVBQUMsQ0FBRCxFQUFPO0FBQ3ZCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLENBQUMsQ0FBQyxJQUEzQjtBQUNBLFFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQyxDQUFDLElBQWIsQ0FBWDtBQUNBLElBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEdBSkQ7QUFLSDs7QUFFRCxTQUFTLGVBQVQsQ0FBeUIsU0FBekIsRUFBb0M7QUFDaEMsRUFBQSxPQUFPLENBQUMsSUFBUixDQUFhLElBQUksQ0FBQyxTQUFMLENBQWUsU0FBZixDQUFiO0FBQ0g7O2VBRWM7QUFDWCxFQUFBLE9BQU8sRUFBUCxPQURXO0FBRVgsRUFBQSwwQkFBMEIsRUFBMUIsMEJBRlc7QUFHWCxFQUFBLDRCQUE0QixFQUE1Qiw0QkFIVztBQUlYLEVBQUEsZUFBZSxFQUFmO0FBSlcsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBnbmlhemRvIGZyb20gXCIuL3dzLWtsaWVudFwiO1xuXG4vL01vZHXFgiB6ZGVmaW5vd2FueSBqYWtvIGNsYXNzXG4vL1RvIGplc3QgZGVmaW5pY2phXG5jbGFzcyBDemF0QXBsaWthY2phIHtcbiAgICAvL1phIHBvbW9jxIUga29uc3RydWt0b3JhIHR3b3J6xJkgaW5zdGFuY2rEmSBtb2R1xYJ1XG4gICAgLy9BYnkgc3R3b3J6ecSHIG5vd8SFIGluc3RuY2rEmSB0ZWdvIG1vZHXFgnUgdHJ6ZWJhIHXFvHnEhyBrb25zdHJ1a3RvcmFcbiAgICAvL1ByenlrxYJhZG93ZSB1xbx5Y2llIGtvbnN0cnVrdG9yYSBuZXcgQ3phdEFwbGlrYWNqYSgpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBnbmlhemRvLmluaWNqdWooJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcbiAgICAgICAgZ25pYXpkby56YXJlamVzdHJ1ak9ic2x1Z2VPdHdhcmNpYSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQga29tdW5pa2F0ID0gbmV3IEN6YXRLb211bmlrYXQoe2tvbXVuaWthdDogJ0hlaiEnfSk7XG4gICAgICAgICAgICBnbmlhemRvLnd5c2xpaktvbXVuaWthdChrb211bmlrYXQuc2VyaWFsaXp1aigpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGduaWF6ZG8uemFyZWplc3RydWpPYnNsdWdlS29tdW5pa2F0dSgoZGFuZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGFuZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEN6YXRBcGxpa2FjamE7XG5cbmNsYXNzIEN6YXRLb211bmlrYXQge1xuICAgIGNvbnN0cnVjdG9yKHtrb211bmlrYXQ6IGssIHV6eXRrb3duaWs6IHU9J0FuZHJ6ZWonLCBjemFzOiBjPW5ldyBEYXRlKCkuZ2V0VGltZSgpfSkge1xuICAgICAgICB0aGlzLmtvbXVuaWthdCA9IGs7XG4gICAgICAgIHRoaXMudXp5dGtvd25payA9IHU7XG4gICAgICAgIHRoaXMuY3phcyA9IGM7XG4gICAgfVxuXG4gICAgc2VyaWFsaXp1aigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtvbXVuaWthdDogdGhpcy5rb211bmlrYXQsXG4gICAgICAgICAgICB1enl0a293bmlrOiB0aGlzLnV6eXRrb3duaWssXG4gICAgICAgICAgICBjemFzOiB0aGlzLmN6YXNcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQ3phdEFwbGlrYWNqYSBmcm9tICcuL2FwbGlrYWNqYSc7XG5cbm5ldyBDemF0QXBsaWthY2phKCk7IiwibGV0IGduaWF6ZG87XG5cbmZ1bmN0aW9uIGluaWNqdWoodXJsKSB7XG4gICAgZ25pYXpkbyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICBjb25zb2xlLmxvZygnTmF3acSFenl3YW5pZSBwb8WCxIVjemVuaWEuLi4nKTtcbn1cblxuZnVuY3Rpb24gemFyZWplc3RydWpPYnNsdWdlT3R3YXJjaWEoZnVua2NqYU9ic2x1Z2kpIHtcbiAgICBnbmlhemRvLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ25hd2nEhXphbmllJyk7XG4gICAgICAgIGZ1bmtjamFPYnNsdWdpKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB6YXJlamVzdHJ1ak9ic2x1Z2VLb211bmlrYXR1KGZ1bmtjamFPYnNsdWdpKSB7XG4gICAgZ25pYXpkby5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygna29tdW5pa2F0JywgZS5kYXRhKTtcbiAgICAgICAgbGV0IGRhbmUgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgIGZ1bmtjamFPYnNsdWdpKGRhbmUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd3lzbGlqS29tdW5pa2F0KHphd2FydG9zYykge1xuICAgIGduaWF6ZG8uc2VuZChKU09OLnN0cmluZ2lmeSh6YXdhcnRvc2MpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaWNqdWosXG4gICAgemFyZWplc3RydWpPYnNsdWdlT3R3YXJjaWEsXG4gICAgemFyZWplc3RydWpPYnNsdWdlS29tdW5pa2F0dSxcbiAgICB3eXNsaWpLb211bmlrYXRcbn0iXX0=
