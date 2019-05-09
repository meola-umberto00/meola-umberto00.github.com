(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Tris</h1>\n<app-tabella-di-gioco></app-tabella-di-gioco>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tris';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tabella_di_gioco_tabella_di_gioco_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabella-di-gioco/tabella-di-gioco.component */ "./src/app/tabella-di-gioco/tabella-di-gioco.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _tabella_di_gioco_tabella_di_gioco_component__WEBPACK_IMPORTED_MODULE_4__["TabellaDiGiocoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tabella-di-gioco/tabella-di-gioco.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tabella-di-gioco/tabella-di-gioco.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell-btn {\r\n  display: block;\r\n  background: #b8b8b8;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.bordoR{\r\n  border-right-width: 0px;\r\n}\r\n\r\n.bordoB{\r\n  border-bottom-width: 0px;\r\n}\r\n\r\n.tabella{\r\n  width: 10%;\r\n  height: 30px;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\ntd {\r\n  width: 40px;\r\n  height: 40px;\r\n  background: #f5f5f5;\r\n  border: 1px solid darkslategray;\r\n  border-left-width: 0px;\r\n  border-top-width: 0px;\r\n}\r\n\r\n.linea {\r\n  position: absolute;\r\nwidth: 200px;\r\nleft: 580px;\r\ntop: 0px;\r\nheight: 3px;\r\nbackground: green;\r\nz-index: 100;\r\n}\r\n\r\n.table-wrapper {\r\n  position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiZWxsYS1kaS1naW9jby90YWJlbGxhLWRpLWdpb2NvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIsWUFBWTtBQUNaLFdBQVc7QUFDWCxRQUFRO0FBQ1IsV0FBVztBQUNYLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90YWJlbGxhLWRpLWdpb2NvL3RhYmVsbGEtZGktZ2lvY28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZWxsLWJ0biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2I4YjhiODtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5ib3Jkb1J7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi5ib3Jkb0J7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xyXG59XHJcblxyXG4udGFiZWxsYXtcclxuICB3aWR0aDogMTAlO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRkIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrc2xhdGVncmF5O1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwcHg7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xyXG59XHJcblxyXG4ubGluZWEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxud2lkdGg6IDIwMHB4O1xyXG5sZWZ0OiA1ODBweDtcclxudG9wOiAwcHg7XHJcbmhlaWdodDogM3B4O1xyXG5iYWNrZ3JvdW5kOiBncmVlbjtcclxuei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabella-di-gioco/tabella-di-gioco.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tabella-di-gioco/tabella-di-gioco.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\n  <table align=\"center\" class=\"table tabella\">\n    <tr>\n      <td><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[0]}\" (click)=\"eseguiMossa(0,0,'0')\" >{{ griglia[0][0]==0 ? \"\" : griglia[0][0]==1 ? \"X\" : \"O\" }}</button></td>\n      <td><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[1]}\" (click)=\"eseguiMossa(0,1,'1')\" >{{ griglia[0][1]==0 ? \"\" : griglia[0][1]==1 ? \"X\" : \"O\" }}</button></td>\n      <td class=\"bordoR\"><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[2]}\" (click)=\"eseguiMossa(0,2,'2')\" >{{ griglia[0][2]==0 ? \"\" : griglia[0][2]==1 ? \"X\" : \"O\" }}</button></td>\n    </tr>\n    <tr>\n      <td><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[3]}\" (click)=\"eseguiMossa(1,0,'3')\" >{{ griglia[1][0]==0 ? \"\" : griglia[1][0]==1 ? \"X\" : \"O\" }}</button></td>\n      <td><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[4]}\" (click)=\"eseguiMossa(1,1,'4')\" >{{ griglia[1][1]==0 ? \"\" : griglia[1][1]==1 ? \"X\" : \"O\" }}</button></td>\n      <td class=\"bordoR\"><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[5]}\" (click)=\"eseguiMossa(1,2,'5')\" >{{ griglia[1][2]==0 ? \"\" : griglia[1][2]==1 ? \"X\" : \"O\" }}</button></td>\n    </tr>\n    <tr>\n      <td class=\"bordoB\"><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[6]}\" (click)=\"eseguiMossa(2,0,'6')\" >{{ griglia[2][0]==0 ? \"\" : griglia[2][0]==1 ? \"X\" : \"O\" }}</button></td>\n      <td class=\"bordoB\"><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[7]}\" (click)=\"eseguiMossa(2,1,'7')\" >{{ griglia[2][1]==0 ? \"\" : griglia[2][1]==1 ? \"X\" : \"O\" }}</button></td>\n      <td class=\"bordoR bordoB\"><button class=\"btn cell-btn\" [ngStyle]=\"{background: btn[8]}\" (click)=\"eseguiMossa(2,2,'8')\" >{{ griglia[2][2]==0 ? \"\" : griglia[2][2]==1 ? \"X\" : \"O\" }}</button></td>\n    </tr>\n  </table>\n  <div *ngIf=\"stato === 1 || stato === 2\" class=\"linea\" [ngStyle]=\"{top: spostaLinea, transform: ruotaLinea, left: leftLinea, width: widthLinea}\" >  </div>\n</div>\n<p align=\"center\">{{ statoPartita() }}</p>\n<div align=\"center\" *ngIf=\"stato!=0\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"nuovaPartita()\">Nuova partita</button>\n</div>\n"

/***/ }),

/***/ "./src/app/tabella-di-gioco/tabella-di-gioco.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tabella-di-gioco/tabella-di-gioco.component.ts ***!
  \****************************************************************/
/*! exports provided: TabellaDiGiocoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabellaDiGiocoComponent", function() { return TabellaDiGiocoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabellaDiGiocoComponent = /** @class */ (function () {
    function TabellaDiGiocoComponent() {
        this.griglia = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.giocatoreCorrente = 1;
        this.stato = 0;
        this.contaMosse = 0;
        this.btn = [
            '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8'
        ];
    }
    TabellaDiGiocoComponent.prototype.ngOnInit = function () {
    };
    TabellaDiGiocoComponent.prototype.nuovaPartita = function () {
        this.griglia = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.giocatoreCorrente = 1;
        this.stato = 0;
        this.contaMosse = 0;
        this.btn = [
            '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8', '#b8b8b8'
        ];
        this.spostaLinea = '0px';
        this.ruotaLinea = 'rotate(0deg)';
        this.widthLinea = '200px';
        this.leftLinea = '580px';
    };
    TabellaDiGiocoComponent.prototype.verificaStatoPartita = function () {
        // tslint:disable-next-line: one-variable-per-declaration
        var riga = [0, 0, 0], colonna = [0, 0, 0], diagonale1 = 0, diagonale2 = 0;
        for (var i = 0; i < 3; i++) {
            riga[i] = 0;
            colonna[i] = 0;
            for (var j = 0; j < 3; j++) {
                // verifico righe e colonne
                riga[i] = riga[i] + this.griglia[i][j];
                colonna[i] = colonna[i] + this.griglia[j][i];
                // verifico la diagonale principale
                if (i === j) {
                    diagonale1 = diagonale1 + this.griglia[i][j];
                }
                // verifico la diagonale secondario
                if (i + j === 2) {
                    diagonale2 = diagonale2 + this.griglia[i][j];
                }
            }
            if (riga[i] === 3 || colonna[i] === 3 || diagonale1 === 3 || diagonale2 === 3) {
                this.stato = 1;
            }
            if (riga[i] === -3 || colonna[i] === -3 || diagonale1 === -3 || diagonale2 === -3) {
                this.stato = 2;
            }
        }
        if (riga[0] === 3 || riga[0] === -3) {
            this.coloreVittoria(0, 1, 2);
            this.spostaLinea = '24px';
            this.ruotaLinea = 'rotate(0deg)';
        }
        if (riga[1] === 3 || riga[1] === -3) {
            this.coloreVittoria(3, 4, 5);
            this.spostaLinea = '76px';
            this.ruotaLinea = 'rotate(0deg)';
        }
        if (riga[2] === 3 || riga[2] === -3) {
            this.coloreVittoria(6, 7, 8);
            this.spostaLinea = '128px';
            this.ruotaLinea = 'rotate(0deg)';
        }
        if (colonna[0] === 3 || colonna[0] === -3) {
            this.coloreVittoria(0, 3, 6);
            this.widthLinea = '170px';
            this.spostaLinea = '72px';
            this.leftLinea = '546px';
            this.ruotaLinea = 'rotate(90deg)';
        }
        if (colonna[1] === 3 || colonna[1] === -3) {
            this.coloreVittoria(1, 4, 7);
            this.widthLinea = '170px';
            this.spostaLinea = '72px';
            this.leftLinea = '599px';
            this.ruotaLinea = 'rotate(90deg)';
        }
        if (colonna[2] === 3 || colonna[2] === -3) {
            this.coloreVittoria(2, 5, 8);
            this.widthLinea = '170px';
            this.spostaLinea = '72px';
            this.leftLinea = '650px';
            this.ruotaLinea = 'rotate(90deg)';
        }
        if (diagonale1 === 3 || diagonale1 === -3) {
            this.coloreVittoria(0, 4, 8);
            this.widthLinea = '230px';
            this.spostaLinea = '74px';
            this.leftLinea = '565px';
            this.ruotaLinea = 'rotate(45deg)';
        }
        if (diagonale2 === 3 || diagonale2 === -3) {
            this.coloreVittoria(2, 4, 6);
            this.widthLinea = '230px';
            this.spostaLinea = '76px';
            this.leftLinea = '571px';
            this.ruotaLinea = 'rotate(-47deg)';
        }
        if (this.contaMosse === 9 && this.stato === 0) {
            this.stato = 3;
        }
    };
    TabellaDiGiocoComponent.prototype.coloreVittoria = function (id1, id2, id3) {
        this.btn[id1] = 'red';
        this.btn[id2] = 'red';
        this.btn[id3] = 'red';
    };
    TabellaDiGiocoComponent.prototype.cambioColore = function (id) {
        this.btn[id] = '#f5f5f5';
    };
    TabellaDiGiocoComponent.prototype.eseguiMossa = function (x, y, id) {
        if (this.griglia[x][y] === 0 && this.stato === 0) {
            this.griglia[x][y] = this.giocatoreCorrente;
            this.contaMosse++;
            this.cambioColore(id);
            if (this.contaMosse >= 5) {
                this.verificaStatoPartita();
            }
            this.giocatoreCorrente = -1 * this.giocatoreCorrente;
        }
    };
    TabellaDiGiocoComponent.prototype.statoPartita = function () {
        var risultato = '';
        switch (this.stato) {
            case 0:
                risultato = 'Partita in corso';
                break;
            case 1:
                risultato = 'Ha vinto X';
                break;
            case 2:
                risultato = 'Ha vinto O';
                break;
            case 3:
                risultato = 'Pareggio';
                break;
            default:
                risultato = 'qualcosa non va...';
        }
        this.stampaGriglia();
        return risultato;
    };
    TabellaDiGiocoComponent.prototype.stampaGriglia = function () {
        console.log(this.griglia[0]);
        console.log(this.griglia[1]);
        console.log(this.griglia[2]);
    };
    TabellaDiGiocoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabella-di-gioco',
            template: __webpack_require__(/*! ./tabella-di-gioco.component.html */ "./src/app/tabella-di-gioco/tabella-di-gioco.component.html"),
            styles: [__webpack_require__(/*! ./tabella-di-gioco.component.css */ "./src/app/tabella-di-gioco/tabella-di-gioco.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabellaDiGiocoComponent);
    return TabellaDiGiocoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Umberto Meola\Desktop\Corso Angular\Angular\tris\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map