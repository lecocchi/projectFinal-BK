webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__persona_persona__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fechas_fechas__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comentarios_comentarios__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var IssuePage = /** @class */ (function () {
    function IssuePage(navCtrl, navParams, issueProvider, utils, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueProvider = issueProvider;
        this.utils = utils;
        this.storage = storage;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__["a" /* DetallePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_4__persona_persona__["a" /* PersonaPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_5__fechas_fechas__["a" /* FechasPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_6__comentarios_comentarios__["a" /* ComentariosPage */];
        this.update = this.navParams.get('update');
        this.backlog = this.navParams.get("backlog");
        if (this.update) {
            this.issueProvider.issue = this.navParams.get('issue');
            this.titleNavBar = 'SID-' + this.issueProvider.issue.id;
            this.issueInactive = (this.issueProvider.issue.state === 'FINALIZADO') ? true : false;
        }
        else {
            this.cleanIssue();
            this.issueProvider.issue.id = null;
            this.issueInactive = false;
            this.storage.get('firstName').then(function (f) {
                _this.firstName = f;
                _this.storage.get('lastName').then(function (l) {
                    _this.lastName = l;
                    _this.issueProvider.issue.reporter = _this.firstName + ' ' + _this.lastName;
                });
            });
        }
    }
    IssuePage.prototype.accept = function () {
        var _this = this;
        if (this.issueProvider.issue.title == undefined) {
            this.utils.presentToast("El t\u00EDtulo no puede estar vac\u00EDo");
        }
        else {
            if (this.update) {
                this.issueProvider.updateIssue(this.issueProvider.issueToUpdate, this.issueProvider.issue.id)
                    .subscribe(function (data) {
                    _this.utils.presentToast("Se modific\u00F3 el issue SID- " + _this.issueProvider.issue.id + " con \u00E9xito");
                });
            }
            else {
                this.issueProvider.issue.backlog = this.backlog;
                this.issueProvider.createNewIssue(this.issueProvider.issue)
                    .subscribe(function (data) {
                    _this.utils.presentToast("Se cre\u00F3 el issue con \u00E9xito");
                });
            }
            this.navCtrl.pop();
        }
    };
    IssuePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    IssuePage.prototype.cleanIssue = function () {
        this.issueProvider.issue.id = null;
        this.issueProvider.issue.label = null;
        this.issueProvider.issue.plannedEnd = null;
        this.issueProvider.issue.plannedStart = null;
        this.issueProvider.issue.priority = null;
        this.issueProvider.issue.remaining = null;
        this.issueProvider.issue.reporter = null;
        this.issueProvider.issue.resolved = null;
        this.issueProvider.issue.sprint = null;
        this.issueProvider.issue.state = null;
        this.issueProvider.issue.title = null;
        this.issueProvider.issue.updated = null;
        this.issueProvider.issue.version = null;
        this.issueProvider.issue.watcher = null;
        this.issueProvider.issue.assignee = null;
        this.issueProvider.issue.avatar = null;
        this.issueProvider.issue.backlog = null;
        this.issueProvider.issue.created = null;
        this.issueProvider.issue.description = null;
        this.issueProvider.issue.enabled = true;
        this.issueProvider.issue.estimated = null;
        this.issueProvider.issue.label = null;
        this.issueProvider.issue.phase = null;
    };
    IssuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-issue',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/issue/issue.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ titleNavBar }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="accept()" *ngIf="!issueInactive">\n        <ion-icon name="checkmark" class="accept"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close" class="cancel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs class="tabs">\n  <ion-tab [root]="tab1" tabTitle="Detalles" [rootParams]="update"></ion-tab>\n  <ion-tab [root]="tab2" tabTitle="Personas" [rootParams]="update"></ion-tab>\n  <ion-tab [root]="tab3" tabTitle="Fechas" [rootParams]="update"></ion-tab>\n  <!--<ion-tab [root]="tab4" tabTitle="Comentarios"></ion-tab>-->\n</ion-tabs>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/issue/issue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], IssuePage);
    return IssuePage;
}());

//# sourceMappingURL=issue.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyProvider = /** @class */ (function () {
    function DailyProvider(http) {
        this.http = http;
    }
    DailyProvider.prototype.getAllDailies = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/daily/");
    };
    DailyProvider.prototype.createDaily = function () {
        delete this.daily.created_at;
        this.daily.daily_items.forEach(function (item) {
            delete item.created_at;
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/daily/", this.daily);
    };
    DailyProvider.prototype.isThereDailyToday = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/daily/today");
    };
    DailyProvider.prototype.sendMail = function (dailyId) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/daily/" + dailyId + "/mail/", null);
    };
    DailyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DailyProvider);
    return DailyProvider;
}());

//# sourceMappingURL=daily.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateProvider = /** @class */ (function () {
    function StateProvider(http) {
        this.http = http;
    }
    StateProvider.prototype.getAllState = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/state/");
    };
    StateProvider.prototype.createNewState = function (name, description) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/state/", {
            name: name,
            description: description
        });
    };
    StateProvider.prototype.updateState = function (id, name, description) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/state/" + id, {
            name: name,
            description: description
        });
    };
    StateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StateProvider);
    return StateProvider;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrioritiesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrioritiesProvider = /** @class */ (function () {
    function PrioritiesProvider(http) {
        this.http = http;
    }
    PrioritiesProvider.prototype.getAllPriority = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/priority/");
    };
    PrioritiesProvider.prototype.createNewPriority = function (name, description) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/priority/", {
            name: name,
            description: description
        });
    };
    PrioritiesProvider.prototype.updatePriority = function (id, name, description) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/priority/" + id, {
            name: name,
            description: description
        });
    };
    PrioritiesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PrioritiesProvider);
    return PrioritiesProvider;
}());

//# sourceMappingURL=priority.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the VersionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VersionsProvider = /** @class */ (function () {
    function VersionsProvider(http) {
        this.http = http;
    }
    VersionsProvider.prototype.getAllVersion = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/version/");
    };
    VersionsProvider.prototype.createNewVersion = function (name, description) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/version/", {
            name: name,
            description: description
        });
    };
    VersionsProvider.prototype.updateVersion = function (id, name, description) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/version/" + id, {
            name: name,
            description: description
        });
    };
    VersionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VersionsProvider);
    return VersionsProvider;
}());

//# sourceMappingURL=versions.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsProvider = /** @class */ (function () {
    function UtilsProvider(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        this.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    }
    UtilsProvider.prototype.isEmpty = function (object) {
        return object === undefined || object == "";
    };
    UtilsProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2500
        });
        toast.present();
    };
    UtilsProvider.prototype.traslatorLenguajeSpanish = function (date) {
        return {
            "day": date.dayOfMonth,
            "month": this.months[date.monthValue - 1],
            "year": date.year,
            "dayWeek": date.dayOfWeek
        };
    };
    UtilsProvider.prototype.presentPrompt = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [{ text: 'Aceptar' }
            ]
        });
        alert.present();
    };
    UtilsProvider.prototype.getDayInSpanish = function (day) {
        switch (day) {
            case "MONDAY": {
                return "Lunes";
            }
            case "TUESDAY": {
                return "Martes";
            }
            case "WEDNESDAY": {
                return "Miércoles";
            }
            case "THURSDAY": {
                return "Jueves";
            }
            case "FRIDAY": {
                return "Viernes";
            }
            case "SATURDAY": {
                return "Sábado";
            }
            case "SUNDAY": {
                return "Domingo";
            }
        }
    };
    UtilsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UtilsProvider);
    return UtilsProvider;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DateProvider = /** @class */ (function () {
    function DateProvider(http) {
        this.http = http;
    }
    DateProvider.prototype.now = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/date/now");
    };
    DateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DateProvider);
    return DateProvider;
}());

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_versions_versions__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__version_description_version_description__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VersionsPage = /** @class */ (function () {
    function VersionsPage(navCtrl, navParams, version) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.version = version;
        this.versions = null;
        this.versionDescriptionPage = __WEBPACK_IMPORTED_MODULE_3__version_description_version_description__["a" /* VersionDescriptionPage */];
    }
    VersionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.version.getAllVersion()
            .subscribe(function (data) {
            _this.versions = data;
        });
    };
    VersionsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.version.getAllVersion()
            .subscribe(function (data) {
            _this.versions = data;
        });
    };
    VersionsPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page, { update: false });
    };
    VersionsPage.prototype.itemSelected = function (version) {
        this.navCtrl.push(this.versionDescriptionPage, { version: version, update: true });
    };
    VersionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-versions',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/versions/versions.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Versiones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let version of versions" (click)="itemSelected(version)">\n      <h2 class="name">{{ version.name }}</h2>\n      <p>{{ version.description }}</p>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right>\n    <button ion-fab (click)="goToPage(versionDescriptionPage)"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/versions/versions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_versions_versions__["a" /* VersionsProvider */]])
    ], VersionsPage);
    return VersionsPage;
}());

//# sourceMappingURL=versions.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabelProvider = /** @class */ (function () {
    function LabelProvider(http) {
        this.http = http;
    }
    LabelProvider.prototype.getAllLabel = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/label/");
    };
    LabelProvider.prototype.createNewLabel = function (name, description) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/label/", {
            name: name,
            description: description
        });
    };
    LabelProvider.prototype.updateLabel = function (id, name, description) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/label/" + id, {
            name: name,
            description: description
        });
    };
    LabelProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LabelProvider);
    return LabelProvider;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhaseProvider = /** @class */ (function () {
    function PhaseProvider(http) {
        this.http = http;
    }
    PhaseProvider.prototype.getAllPhase = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/phase/");
    };
    PhaseProvider.prototype.createNewPhase = function (name, description) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/phase/", {
            name: name,
            description: description
        });
    };
    PhaseProvider.prototype.updatePhase = function (id, name, description) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/phase/" + id, {
            name: name,
            description: description
        });
    };
    PhaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PhaseProvider);
    return PhaseProvider;
}());

//# sourceMappingURL=phase.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolProvider = /** @class */ (function () {
    function RolProvider(http) {
        this.http = http;
    }
    RolProvider.prototype.getAllRol = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/rol/");
    };
    RolProvider.prototype.createNewRol = function (name, description) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/rol/", {
            name: name,
            description: description
        });
    };
    RolProvider.prototype.updateRol = function (id, name, description) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/rol/" + id, {
            name: name,
            description: description
        });
    };
    RolProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RolProvider);
    return RolProvider;
}());

//# sourceMappingURL=rol.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__velocity_velocity__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprint_report_sprint_report__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsPage = /** @class */ (function () {
    function ReportsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.velocityPage = __WEBPACK_IMPORTED_MODULE_2__velocity_velocity__["a" /* VelocityPage */];
        this.sprintReportPage = __WEBPACK_IMPORTED_MODULE_3__sprint_report_sprint_report__["a" /* SprintReportPage */];
    }
    ReportsPage.prototype.ionViewDidLoad = function () {
    };
    ReportsPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page);
    };
    ReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reports',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/reports/reports.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Reportes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="container">\n    <button ion-button round (click)="goToPage(velocityPage)" class="velocity">Velocity Chart</button>\n    <button ion-button round (click)="goToPage(sprintReportPage)" class="report">Sprint Report</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/reports/reports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ReportsPage);
    return ReportsPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 285;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/reports/reports.module": [
		851,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 328;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VelocityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VelocityPage = /** @class */ (function () {
    function VelocityPage(navCtrl, navParams, sprintProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sprintProvider = sprintProvider;
        this.velocities = [];
        this.sprintProvider.velocityChart()
            .subscribe(function (v) {
            _this.velocities = v;
        });
    }
    VelocityPage.prototype.ionViewDidLoad = function () {
    };
    VelocityPage.prototype.goToPage = function () {
    };
    VelocityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-velocity',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/velocity/velocity.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Velocity Chart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <table>\n        <tr>\n          <th>Sprint</th>\n          <th>Story Points</th>\n        </tr>\n        <tr *ngFor="let velocity of velocities">\n          <td>{{velocity.sprint}}</td>\n          <td>{{velocity.story}}</td>\n        </tr>\n      </table>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/velocity/velocity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__["a" /* SprintProvider */]])
    ], VelocityPage);
    return VelocityPage;
}());

//# sourceMappingURL=velocity.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issue_issue__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SprintReportPage = /** @class */ (function () {
    function SprintReportPage(navCtrl, navParams, sprintProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sprintProvider = sprintProvider;
        this.sprintReports = [];
        this.sprintProvider.sprintReports()
            .subscribe(function (reports) {
            _this.sprintReports = reports;
        });
    }
    SprintReportPage.prototype.ionViewDidLoad = function () {
    };
    SprintReportPage.prototype.openDetail = function (issue) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__issue_issue__["a" /* IssuePage */], { "issue": issue, "update": true });
    };
    SprintReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sprint-report',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/sprint-report/sprint-report.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Sprint Report</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list *ngFor="let report of sprintReports">\n    <ion-list-header>\n      {{report.sprint}}\n    </ion-list-header>\n    <ion-item *ngFor="let issue of report.issues">\n      <div>\n        <div class="issue-code">SID-{{ issue.id }}</div>\n        <div class="issue-summary">\n          {{ issue.title }}\n        </div>\n      </div>\n    </ion-item>\n    <br>\n    <br>\n    <br>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/sprint-report/sprint-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__["a" /* SprintProvider */]])
    ], SprintReportPage);
    return SprintReportPage;
}());

//# sourceMappingURL=sprint-report.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_state_state__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_priority_priority__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_versions_versions__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetallePage = /** @class */ (function () {
    function DetallePage(navCtrl, navParams, stateProvider, priorityProvider, versionProvider, alertCtrl, issueProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stateProvider = stateProvider;
        this.priorityProvider = priorityProvider;
        this.versionProvider = versionProvider;
        this.alertCtrl = alertCtrl;
        this.issueProvider = issueProvider;
        this.states = [];
        this.priorities = [];
        this.versions = [];
        this.title = "";
        this.estimatedList = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        this.update = this.navParams.data;
        if (this.update) {
            this.issueInactive = (this.issueProvider.issue.state === 'FINALIZADO') ? true : false;
            this.disabledState = this.issueInactive || this.issueProvider.issue.backlog;
            this.issueProvider.issueToUpdate = this.issueProvider.issue;
            this.title = this.issueProvider.issue.title;
            this.description = this.issueProvider.issue.description;
            this.state = this.issueProvider.issue.state;
            this.priority = this.issueProvider.issue.priority;
            this.version = this.issueProvider.issue.version;
            this.estimated = this.issueProvider.issue.estimated;
        }
        else {
            this.issueInactive = false;
            this.state = 'CREADO';
            this.issueProvider.issue.state = this.state;
            this.disabledState = true;
        }
        // var i:number = 0;
        //
        // for (i ; i < 50 ; i ++){
        //   this.estimatedList.push(i);
        // }
        //STATES
        this.stateProvider.getAllState()
            .subscribe(function (s) {
            s.forEach(function (state) {
                _this.states.push({
                    value: state.name
                });
            });
        });
        //PRIORITY
        this.priorityProvider.getAllPriority()
            .subscribe(function (p) {
            _this.priorities.push({
                value: 'Sin prioridad'
            });
            p.forEach(function (pri) {
                _this.priorities.push({
                    value: pri.name
                });
            });
        });
        //VERSION
        this.versionProvider.getAllVersion()
            .subscribe(function (v) {
            _this.versions.push({
                value: 'Sin versión'
            });
            v.forEach(function (ve) {
                _this.versions.push({
                    value: ve.name
                });
            });
        });
    }
    DetallePage.prototype.onChangePriority = function ($event) {
        this.issueProvider.issueToUpdate.priority = $event;
    };
    DetallePage.prototype.onChangeState = function ($event) {
        this.issueProvider.issueToUpdate.state = $event;
    };
    DetallePage.prototype.onChangeVersion = function ($event) {
        this.issueProvider.issueToUpdate.version = $event;
    };
    DetallePage.prototype.changeTitle = function ($event) {
        this.issueProvider.issue.title = $event.value;
    };
    DetallePage.prototype.changeDescription = function ($event) {
        this.issueProvider.issue.description = $event.value;
    };
    DetallePage.prototype.onChangeEstimated = function ($event) {
        this.issueProvider.issue.estimated = $event;
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/detalle/detalle.html"*/'<ion-content padding>\n\n  <ion-list class="title">\n\n    <ion-item>\n      <ion-label floating>Título <span class="required">(requerido)</span></ion-label>\n      <ion-input type="text" [(ngModel)]= \'title\' (ionChange)="changeTitle($event)" [disabled]="issueInactive"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Descripción</ion-label>\n      <ion-textarea  class="area" [(ngModel)]=\'description\' (ionChange)="changeDescription($event)" [disabled]="issueInactive"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n  <ion-item>\n    <ion-label>Prioridad</ion-label>\n    <ion-select [(ngModel)]="priority" [disabled]="issueInactive" (ionChange)="onChangePriority($event)">\n      <ion-option  *ngFor="let priority of priorities" [value]=priority.value>{{priority.value}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>Estado</ion-label>\n    <ion-select [(ngModel)]="state" [disabled]="disabledState" (ionChange)="onChangeState($event)">\n      <ion-option  *ngFor="let state of states" [value]=state.value>{{state.value}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>Versión</ion-label>\n    <ion-select [(ngModel)]="version" [disabled]="issueInactive" (ionChange)="onChangeVersion($event)">\n      <ion-option  *ngFor="let version of versions" [value]=version.value>{{version.value}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Estimación</ion-label>\n    <ion-select [(ngModel)]="estimated" [disabled]="issueInactive" (ionChange)="onChangeEstimated($event)">\n      <ion-option  *ngFor="let estimated of estimatedList" [value]=estimated>{{estimated}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n</ion-content>estimated\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/detalle/detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_state_state__["a" /* StateProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_priority_priority__["a" /* PrioritiesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_versions_versions__["a" /* VersionsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__["a" /* IssueProvider */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonaPage = /** @class */ (function () {
    function PersonaPage(navCtrl, navParams, issueProvider, alertCtrl, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueProvider = issueProvider;
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.assignees = [];
        this.update = this.navParams.data;
        if (this.update) {
            this.reporter = this.issueProvider.issue.reporter;
            this.assignee = this.issueProvider.issue.assignee;
            this.issueInactive = (this.issueProvider.issue.state === 'FINALIZADO') ? true : false;
            this.disabledAssignee = this.issueInactive || this.issueProvider.issue.backlog;
        }
        else {
            this.issueInactive = false;
            this.disabledAssignee = true;
        }
        this.userProvider.getAllUser()
            .subscribe(function (u) {
            u.forEach(function (us) {
                _this.assignees.push({
                    type: 'radio',
                    value: us.firstName + " " + us.lastName,
                    label: us.firstName + " " + us.lastName,
                });
            });
        });
    }
    PersonaPage.prototype.ionViewDidEnter = function () {
        this.reporter = this.issueProvider.issue.reporter;
    };
    PersonaPage.prototype.onChangeAssignee = function ($event) {
        this.issueProvider.issueToUpdate.assignee = $event;
    };
    PersonaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-persona',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/persona/persona.html"*/'<ion-content padding>\n\n  <ion-item>\n    <ion-label stacked>Creado por</ion-label>\n    <ion-input type="text" [(ngModel)]="reporter" [disabled]="true"></ion-input>\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-label stacked>Asignado a</ion-label>\n    <ion-input type="text" [(ngModel)]="assignee" [disabled]="issueInactive" (click)="selectAssignee()"></ion-input>\n  </ion-item> -->\n\n  <ion-item>\n      <ion-label>Asignado a</ion-label>\n      <ion-select [(ngModel)]="assignee" [disabled]="disabledAssignee" (ionChange)="onChangeAssignee($event)">\n        <ion-option  *ngFor="let assignee of assignees" [value]=assignee.value>{{assignee.value}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/persona/persona.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], PersonaPage);
    return PersonaPage;
}());

//# sourceMappingURL=persona.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FechasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FechasPage = /** @class */ (function () {
    function FechasPage(navCtrl, navParams, issueProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueProvider = issueProvider;
        this.update = this.navParams.data;
        if (this.update) {
            this.createdDate = new Date(this.issueProvider.issue.created).toISOString();
            this.updatedDate = new Date(this.issueProvider.issue.updated).toISOString();
            if (this.issueProvider.issue.resolved != null)
                this.resolvedDate = new Date(this.issueProvider.issue.resolved).toISOString();
        }
        else {
            this.createdDate = new Date().toISOString();
            this.updatedDate = new Date().toISOString();
        }
    }
    FechasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fechas',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/fechas/fechas.html"*/'<ion-content padding>\n  <ion-item>\n    <ion-label>Creado</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="createdDate" disabled></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Última Modificación</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="updatedDate" disabled></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Resuelto</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="resolvedDate" disabled></ion-datetime>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/fechas/fechas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */]])
    ], FechasPage);
    return FechasPage;
}());

//# sourceMappingURL=fechas.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComentariosPage = /** @class */ (function () {
    function ComentariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComentariosPage.prototype.ionViewDidLoad = function () {
    };
    ComentariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comentarios',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/comentarios/comentarios.html"*/'<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/comentarios/comentarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ComentariosPage);
    return ComentariosPage;
}());

//# sourceMappingURL=comentarios.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, userProvider, utilProvider, storage, platform, gp, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.utilProvider = utilProvider;
        this.storage = storage;
        this.platform = platform;
        this.gp = gp;
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.userInfo = {};
    }
    LoginPage.prototype.goToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.loginForUserAndPass = function () {
        var _this = this;
        console.log("Click under button login with mail");
        var user = {
            "user_name": this.userName,
            "password": this.password
        };
        this.userProvider.loginForUserAndPass(user)
            .subscribe(function (u) {
            _this.storage.remove("id");
            _this.storage.remove("email");
            _this.storage.remove("firstName");
            _this.storage.remove("lastName");
            _this.storage.remove("rol");
            _this.storage.remove("userName");
            _this.storage.remove("leandro");
            _this.storage.set("id", u.id);
            _this.storage.set("email", u.email);
            _this.storage.set("firstName", u.firstName);
            _this.storage.set("lastName", u.lastName);
            _this.storage.set("rol", u.rol);
            _this.storage.set("userName", u.userName);
            _this.storage.set("isNetwork", u.isNetwork);
            _this.navCtrl.push(_this.rootPage, { "rol": u.rol });
        }, function (err) {
            _this.utilProvider.presentPrompt(err.error.title, err.error.message);
        });
    };
    LoginPage.prototype.loginGP = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.gp.login({}).then(function (res) {
                var userLoginGooglePlus = {
                    "email": res.email
                };
                _this.userProvider.loginForGooglePlus(userLoginGooglePlus)
                    .subscribe(function (u) {
                    _this.storage.remove("id");
                    _this.storage.remove("email");
                    _this.storage.remove("firstName");
                    _this.storage.remove("lastName");
                    _this.storage.remove("rol");
                    _this.storage.remove("userName");
                    _this.storage.set("id", u.id);
                    _this.storage.set("email", u.email);
                    _this.storage.set("firstName", u.firstName);
                    _this.storage.set("lastName", u.lastName);
                    _this.storage.set("rol", u.rol);
                    _this.storage.set("userName", u.userName);
                    _this.storage.set("isNetwork", u.isNetwork);
                    _this.navCtrl.push(_this.rootPage, { "rol": u.rol });
                }, function (err) {
                    _this.gp.logout().then(function (res) { });
                    _this.utilProvider.presentPrompt(err.error.title, err.error.message);
                });
            }).catch(function (err) { return console.log(err); });
        }
        else {
            this.doGoogleLogin();
            // this.afAuth.auth.signOut().then(res =>{
            //   console.log(res)
            // })
        }
    };
    LoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                var userLoginGooglePlus = {
                    "email": res.user.email
                };
                _this.userProvider.loginForGooglePlus(userLoginGooglePlus)
                    .subscribe(function (u) {
                    _this.storage.remove("id");
                    _this.storage.remove("email");
                    _this.storage.remove("firstName");
                    _this.storage.remove("lastName");
                    _this.storage.remove("rol");
                    _this.storage.remove("userName");
                    _this.storage.set("id", u.id);
                    _this.storage.set("email", u.email);
                    _this.storage.set("firstName", u.firstName);
                    _this.storage.set("lastName", u.lastName);
                    _this.storage.set("rol", u.rol);
                    _this.storage.set("userName", u.userName);
                    _this.storage.set("isNetwork", u.isNetwork);
                    _this.navCtrl.push(_this.rootPage, { "rol": u.rol });
                }, function (err) {
                    _this.gp.logout().then(function (res) { });
                    _this.utilProvider.presentPrompt(err.error.title, err.error.message);
                });
            })
                .catch(function (err) {
                console.log(err);
                _this.utilProvider.presentPrompt("ERROR", "Error al intentar conectarse a google");
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/login/login.html"*/'\n<ion-content>\n\n  <div class="container">\n    <header class="login">\n      <h1 class="login-title">Iniciar Sesión</h1>\n      <div class="login-body">\n        <section class="login-net">\n          <div class="login-net-title">Iniciar sesión con</div>\n          <div class="login-net-body">\n            <button ion-button color="google" icon-left block class="btn-login-google" (click)="loginGP()">\n              <ion-icon name="logo-google"></ion-icon>\n              Google\n            </button>\n          </div>\n        </section>\n\n        <section class="login-email">\n          <div class="login-email-title">O con una cuenta de Email</div>\n          <div class="login-email-body">\n            <ion-list class="margin">\n\n              <ion-item>\n                <ion-label floating>Usuario</ion-label>\n                <ion-input type="text" [(ngModel)]="userName"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Contraseña</ion-label>\n                <ion-input type="password" [(ngModel)]="password"></ion-input>\n              </ion-item>\n\n            </ion-list>\n          </div>\n        </section>\n\n        <div class="login-net-body">\n          <button ion-button class="btn-login-google btn-user" block (click)="loginForUserAndPass()">Iniciar Sesión</button>\n        </div>\n\n      </div>\n    </header>\n  </div>\n</ion-content>\n  '/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlog_backlog__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__active_sprint_active_sprint__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__daily_daily__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_reports__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sprints_sprints__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perfil_perfil__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__versions_versions__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, menuCtrl, platform, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.navTitle = "Home";
        this.backlogPage = __WEBPACK_IMPORTED_MODULE_2__backlog_backlog__["a" /* BacklogPage */];
        this.activeSprintPage = __WEBPACK_IMPORTED_MODULE_3__active_sprint_active_sprint__["a" /* ActiveSprintPage */];
        this.dailyPage = __WEBPACK_IMPORTED_MODULE_4__daily_daily__["a" /* DailyPage */];
        this.reportsPage = __WEBPACK_IMPORTED_MODULE_5__reports_reports__["a" /* ReportsPage */];
        this.usersPage = __WEBPACK_IMPORTED_MODULE_6__users_users__["a" /* UsersPage */];
        this.SprintsPage = __WEBPACK_IMPORTED_MODULE_8__sprints_sprints__["a" /* SprintsPage */];
        this.configPage = __WEBPACK_IMPORTED_MODULE_7__config_config__["a" /* ConfigPage */];
        this.perfilPage = __WEBPACK_IMPORTED_MODULE_9__perfil_perfil__["a" /* PerfilPage */];
        this.versionPage = __WEBPACK_IMPORTED_MODULE_10__versions_versions__["a" /* VersionsPage */];
        this.alertShown = false;
        this.rol = this.navParams.get("rol");
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getActive().id == 'n4-1') {
                _this.alertCtrl.create({
                    title: 'Salir',
                    subTitle: '¿Desea  salir de la app?',
                    buttons: [{
                            text: 'Si',
                            handler: function (data) {
                                _this.platform.exitApp();
                            }
                        }, {
                            text: 'No'
                        }]
                }).present();
            }
            else {
                _this.navCtrl.pop();
            }
        });
    }
    HomePage.prototype.ionViewCanEnter = function () { };
    HomePage.prototype.goToPage = function (page) {
        this.navCtrl.push(page);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar color=\'primary\' hideBackButton="true" #content>\n    <ion-title>\n      {{ navTitle}}\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="background">\n\n  <div class="option-group">\n\n    <div class="content" (click)="goToPage(backlogPage)">\n      <div class="avatar1 backlog">BK</div>\n      <div class="avatar1-text">\n        Backlog\n      </div>\n    </div>\n\n    <div class="content" (click)="goToPage(SprintsPage)">\n      <div class="avatar1 active-sprint">SP</div>\n      <div class="avatar1-text">\n        Sprints\n      </div>\n    </div>\n\n    <div class="content" (click)="goToPage(dailyPage)" *ngIf="rol == 2 || rol == 3">\n      <div class="avatar1 daily">DY</div>\n      <div class="avatar1-text">\n        Daily\n      </div>\n    </div>\n\n    <div class="content" (click)="goToPage(reportsPage)">\n      <div class="avatar1 report">RE</div>\n      <div class="avatar1-text">\n        Reportes\n      </div>\n    </div>\n\n    <div class="content" (click)="goToPage(perfilPage)">\n      <div class="avatar1 report">MP</div>\n      <div class="avatar1-text">\n        Mi perfil\n      </div>\n    </div>\n\n    <!-- <div class="content" (click)="goToPage(configPage)" *ngIf="rol == 2 || rol == 3">\n      <div class="avatar1 config">CF</div>\n      <div class="avatar1-text">\n        Configuración\n      </div>\n    </div> -->\n\n    <div class="content" (click)="goToPage(versionPage)">\n      <div class="avatar1 config">VE</div>\n      <div class="avatar1-text">\n        Versiones\n      </div>\n    </div>\n\n    <div class="content" (click)="goToPage(usersPage)" *ngIf="rol == 3">\n      <div class="avatar1 config">US</div>\n      <div class="avatar1-text">\n        Usuarios\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issue_issue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BacklogPage = /** @class */ (function () {
    function BacklogPage(navCtrl, issueProvider, loadingCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.issueProvider = issueProvider;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.issues = [];
        this.avatar = 'https://picsum.photos/300/300?image=0';
        this.issuePage = __WEBPACK_IMPORTED_MODULE_2__issue_issue__["a" /* IssuePage */];
    }
    BacklogPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'ios',
            content: 'Cargando...'
        });
        loading.present();
        this.issueProvider.getAllIssueBacklog()
            .subscribe(function (data) {
            _this.issues = data;
            loading.dismiss();
        });
    };
    BacklogPage.prototype.openDetail = function (issue) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__issue_issue__["a" /* IssuePage */], { "issue": issue, "update": true });
    };
    BacklogPage.prototype.createNewIssue = function () {
        // this.issueProvider.issue.reporter = 'Leandro Sebastian Cocchi';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__issue_issue__["a" /* IssuePage */], { "issue": null, "update": false, "backlog": true });
    };
    BacklogPage.prototype.presentPopover = function (myEvent, id) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */], { 'id': id });
        popover.onDidDismiss(function () {
            var loading = _this.loadingCtrl.create({ spinner: 'ios',
                content: 'Cargando...'
            });
            loading.present();
            _this.issueProvider.getAllIssueBacklog()
                .subscribe(function (data) {
                _this.issues = data;
                loading.dismiss();
            });
        });
        popover.present({
            ev: myEvent
        });
    };
    BacklogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backlog',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/backlog/backlog.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Backlog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="lean">\n\n  <ion-list>\n    <ion-item  *ngFor="let issue of issues, let i = index">\n      <ion-avatar item-start>\n        <avatar>{{ issue.reporter.substring(0,1) | uppercase }}</avatar>\n      </ion-avatar>\n      <div (click)="openDetail(issue)">\n        <div class="issue-code">SID-{{ issue.id }}</div>\n        <div class="issue-summary">\n          {{ issue.title }}\n        </div>\n      </div>\n      <button  icon-only (click)="presentPopover($event, issue.id)" item-end class="more" *ngIf="issue.state != \'FINALIZADO\'">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right (click)="createNewIssue()">\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/backlog/backlog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], BacklogPage);
    return BacklogPage;
}());

//# sourceMappingURL=backlog.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl, issueProvider, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.issueProvider = issueProvider;
        this.utils = utils;
    }
    PopoverPage.prototype.sendToSprint = function () {
        var _this = this;
        this.issueProvider.addIssueInActiveSprint(this.viewCtrl.getNavParams().get("id"))
            .subscribe(function (i) {
            _this.utils.presentToast("Se envi\u00F3 el issue SID-" + i.id + " al sprint");
        }, function (err) {
            _this.utils.presentPrompt(err.error.title, err.error.message);
        });
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.delete = function () {
        var _this = this;
        this.issueProvider.deleteIssue(this.viewCtrl.getNavParams().get("id"))
            .subscribe(function (i) {
            _this.utils.presentToast("Se elimin\u00F3 el issue SID-" + i.id);
        });
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/popover/popover.html"*/'<ion-list>\n  <ion-list-header>Menu</ion-list-header>\n  <button ion-item (click)="sendToSprint()">Enviar a Sprint</button>\n  <button ion-item (click)="delete()">Eliminar Issue</button>\n</ion-list>\n\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveSprintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issue_issue__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActiveSprintPage = /** @class */ (function () {
    function ActiveSprintPage(navCtrl, issueProvider) {
        this.navCtrl = navCtrl;
        this.issueProvider = issueProvider;
        this.issues = [];
        this.avatar = 'https://picsum.photos/300/300?image=0';
        this.loading = true;
        this.issuePage = __WEBPACK_IMPORTED_MODULE_3__issue_issue__["a" /* IssuePage */];
    }
    ActiveSprintPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.issueProvider.getAllIssueActiveSprint()
            .subscribe(function (data) {
            _this.issues = data;
            _this.loading = false;
        });
    };
    ActiveSprintPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.issueProvider.getAllIssueActiveSprint()
            .subscribe(function (data) {
            _this.issues = data;
            _this.loading = false;
        });
    };
    ActiveSprintPage.prototype.openDetail = function (issue) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__issue_issue__["a" /* IssuePage */], { "issue": issue, "update": true, "backlog": false });
    };
    ActiveSprintPage.prototype.createNewIssue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__issue_issue__["a" /* IssuePage */], { "issue": null, "update": false, "backlog": false });
    };
    ActiveSprintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-active-sprint-tab',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/active-sprint/active-sprint.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Active Sprint</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-spinner name="ios" *ngIf="loading"></ion-spinner>\n\n  <div *ngIf="!loading">\n    <ion-list>\n      <ion-item-sliding *ngFor="let issue of issues, let i = index">\n        <ion-item (click)="openDetail(issue)">\n          <ion-avatar item-start>\n            <img [src]="issue.avatar">\n          </ion-avatar>\n          <div class="issue-code">SID-{{ issue.id }}</div>\n          <div class="issue-summary">\n            {{ issue.title }}\n          </div>\n        </ion-item>\n        <ion-item-options side="rigth">\n          <button ion-button color="primary">\n            <ion-icon name="text"></ion-icon>\n            Item1\n          </button>\n          <button ion-button color="secondary">\n            <ion-icon name="call"></ion-icon>\n            Item2\n          </button>\n          <button ion-button color="secondary">\n            <ion-icon name="call"></ion-icon>\n            Item3\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n    <!-- this fab is placed at top right -->\n    <ion-fab bottom right (click)="createNewIssue()">\n      <button ion-fab><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/active-sprint/active-sprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */]])
    ], ActiveSprintPage);
    return ActiveSprintPage;
}());

//# sourceMappingURL=active-sprint.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_item_daily_item__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_daily_daily__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DailyPage = /** @class */ (function () {
    function DailyPage(navCtrl, navParams, dailyProvider, utils, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dailyProvider = dailyProvider;
        this.utils = utils;
        this.loadingCtrl = loadingCtrl;
        this.dailyItemPage = __WEBPACK_IMPORTED_MODULE_2__daily_item_daily_item__["a" /* DailyItemPage */];
        this.dailies = [];
    }
    DailyPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'Cargando...'
        });
        loading.present();
        this.dailyProvider.getAllDailies()
            .subscribe(function (data) {
            _this.dailies = data.reverse();
            _this.dailies.forEach(function (d) {
                d.created_at.dayOfWeek = _this.utils.getDayInSpanish(d.created_at.dayOfWeek);
            });
            loading.dismiss();
        });
    };
    DailyPage.prototype.createNewDaily = function () {
        var _this = this;
        this.dailyProvider.isThereDailyToday()
            .subscribe(function (isThereDaily) {
            if (isThereDaily) {
                _this.utils.presentToast("Ya existe una daily activa para el día de hoy");
            }
            else {
                var daily = {
                    "firstName": "Leandro",
                    "lastName": "Cocchi",
                    "userName": "lecocchi",
                    "daily_items": []
                };
                _this.dailyProvider.daily = daily;
                _this.navCtrl.push(_this.dailyItemPage);
            }
        });
    };
    DailyPage.prototype.openDetail = function (daily) {
        this.dailyProvider.daily = daily;
        this.navCtrl.push(this.dailyItemPage);
    };
    DailyPage.prototype.sendMail = function (dailyId) {
        var _this = this;
        this.utils.presentToast("Enviando mails .......");
        this.dailyProvider.sendMail(dailyId)
            .subscribe(function (m) {
            _this.utils.presentToast("Se han enviado los mails correctamente");
        }, function (err) {
            _this.utils.presentPrompt("Error", "Error al enviar los mails");
        });
    };
    DailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daily-tab',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/daily/daily.html"*/'<ion-header>\n  <ion-navbar color=\'primary\'>\n    <ion-title>Dailies</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let daily of dailies">\n      <ion-avatar item-start>\n        <avatar>{{ daily.created_at.dayOfWeek.substring(0,1) | uppercase }}</avatar>\n      </ion-avatar>\n      <h2 class="date" (click)="openDetail(daily)">{{daily.created_at | formatDate}}</h2>\n\n      <button  icon-only (click)="sendMail(daily.id)" item-end class="send">\n          <ion-icon name="send" *ngIf="false"></ion-icon>\n        </button>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right (click)="createNewDaily()">\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/daily/daily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_daily_daily__["a" /* DailyProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DailyPage);
    return DailyPage;
}());

//# sourceMappingURL=daily.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_description_daily_description__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_daily_daily__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_person_filter_person__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_date_date__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DailyItemPage = /** @class */ (function () {
    function DailyItemPage(navCtrl, navParams, dailyProvider, dateProvider, utils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dailyProvider = dailyProvider;
        this.dateProvider = dateProvider;
        this.utils = utils;
        this.members = [];
        this.members = this.dailyProvider.daily.daily_items;
        if (this.dailyProvider.daily.created_at == undefined) {
            this.dateProvider.now()
                .subscribe(function (date) {
                date.dayOfWeek = _this.utils.getDayInSpanish(date.dayOfWeek);
                _this.dailyCreated = date;
            });
        }
        else {
            this.dailyCreated = this.dailyProvider.daily.created_at;
        }
    }
    DailyItemPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.members = this.dailyProvider.daily.daily_items;
        if (this.dailyProvider.daily.created_at != undefined) {
            this.dateProvider.now()
                .subscribe(function (date) {
                _this.dailyActive = (_this.dailyProvider.daily.created_at.dayOfMonth === date.dayOfMonth && _this.dailyProvider.daily.created_at.monthValues === date.monthValues && _this.dailyProvider.daily.created_at.year === date.year);
            });
        }
        else {
            this.dailyActive = true;
        }
    };
    DailyItemPage.prototype.push = function (member) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__daily_description_daily_description__["a" /* DailyDescriptionPage */], { "member": member });
    };
    DailyItemPage.prototype.pushFilter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__filter_person_filter_person__["a" /* FilterPersonPage */]);
    };
    DailyItemPage.prototype.createDaily = function () {
        var _this = this;
        this.dailyProvider.createDaily()
            .subscribe(function (data) {
            _this.navCtrl.pop();
        });
    };
    DailyItemPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    DailyItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daily-item',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/daily-item/daily-item.html"*/'<ion-header>\n\n    <ion-navbar color=\'primary\'>\n      <ion-title>Daily</ion-title>\n      <div class="daily-date">{{dailyCreated | formatDate}}</div>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="createDaily()" *ngIf="dailyActive">\n          <ion-icon name="checkmark" class="accept"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-buttons end>\n        <button ion-button icon-only (click)="cancel()">\n          <ion-icon name="close" class="cancel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let member of members, let i = index" (click)=\'push(member)\' class="items">\n\n            <ion-avatar item-start >\n              <avatar>{{member.firstName.substring(0,1) | uppercase }}</avatar>\n            </ion-avatar>\n\n            <div class="name">{{member.firstName}} {{member.lastName}}  </div>\n\n            <div class="content">\n                <div class="day">\n                    <span class="active" *ngIf="member.yesterday.length > 0">Ayer</span>\n                    <span class="inactive" *ngIf="member.yesterday.length == 0">Ayer</span>\n                </div>\n                <div class="day">\n                    <span class="active" *ngIf="member.today.length > 0">Hoy</span>\n                    <span class="inactive" *ngIf="member.today.length == 0">Hoy</span>\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-fab bottom right (click)="pushFilter()" *ngIf="dailyActive">\n      <button ion-fab><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/daily-item/daily-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_daily_daily__["a" /* DailyProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_date_date__["a" /* DateProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils_utils__["a" /* UtilsProvider */]])
    ], DailyItemPage);
    return DailyItemPage;
}());

//# sourceMappingURL=daily-item.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_daily_daily__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_date_date__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DailyDescriptionPage = /** @class */ (function () {
    function DailyDescriptionPage(navCtrl, navParams, dailyProvider, dateProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dailyProvider = dailyProvider;
        this.dateProvider = dateProvider;
        this.member = this.navParams.get("member");
    }
    DailyDescriptionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dailyProvider.daily.daily_items.filter(function (m) {
            if (m.userName === _this.member.userName) {
                _this.today = m.today;
                _this.yesterday = m.yesterday;
            }
        });
        if (this.dailyProvider.daily.created_at != undefined) {
            this.dateProvider.now()
                .subscribe(function (date) {
                _this.dailyActive = (_this.dailyProvider.daily.created_at.dayOfMonth === date.dayOfMonth && _this.dailyProvider.daily.created_at.monthValues === date.monthValues && _this.dailyProvider.daily.created_at.year === date.year);
            });
        }
        else {
            this.dailyActive = true;
        }
    };
    DailyDescriptionPage.prototype.accept = function () {
        var _this = this;
        this.dailyProvider.daily.daily_items.filter(function (m) {
            if (m.userName == _this.member.userName) {
                m.today = _this.today;
                m.yesterday = _this.yesterday;
            }
        });
        this.navCtrl.pop();
    };
    DailyDescriptionPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    DailyDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daily-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/daily-description/daily-description.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Descripción</ion-title>\n    <div class="member">{{member.firstName}} {{member.lastName}}</div>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="accept()" *ngIf="dailyActive">\n        <ion-icon name="checkmark" class="accept"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close" class="cancel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="primary" stacked>Ayer</ion-label>\n    <ion-textarea type="text" placeholder="¿Qué hiciste ayer?" [(ngModel)]="yesterday" [readonly]="!dailyActive"></ion-textarea>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Hoy</ion-label>\n    <ion-textarea type="text" placeholder="¿Qué vas a hacer hoy?" [(ngModel)]="today" [readonly]="!dailyActive"></ion-textarea>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/daily-description/daily-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_daily_daily__["a" /* DailyProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_date_date__["a" /* DateProvider */]])
    ], DailyDescriptionPage);
    return DailyDescriptionPage;
}());

//# sourceMappingURL=daily-description.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_daily_daily__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterPersonPage = /** @class */ (function () {
    function FilterPersonPage(navCtrl, navParams, userProvider, dailyProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.dailyProvider = dailyProvider;
        this.persons = [];
        this.personsToShow = [];
    }
    FilterPersonPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.personsToShow = [];
        this.userProvider.getAllUser()
            .subscribe(function (users) {
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                var personToShow = {
                    "firstName": user.firstName,
                    "lastName": user.lastName,
                    "userName": user.userName,
                    "avatar": user.avatar,
                    "yesterday": "",
                    "today": "",
                    "checked": false
                };
                _this.personsToShow.push(personToShow);
            }
            _this.persons = _this.personsToShow;
            _this.dailyProvider.daily.daily_items
                .forEach(function (itemProvider) {
                _this.personsToShow.forEach(function (itemShow) {
                    if (itemProvider.userName === itemShow.userName)
                        itemShow.checked = true;
                });
            });
        });
    };
    FilterPersonPage.prototype.filterItems = function () {
        var _this = this;
        this.personsToShow = this.persons.filter(function (item) {
            return (item.firstName.toLowerCase().indexOf(_this.personToSearch.toLowerCase()) >= 0 || item.lastName.toLowerCase().indexOf(_this.personToSearch.toLowerCase()) >= 0);
        });
    };
    FilterPersonPage.prototype.changeStatusChecked = function (person) {
        this.personsToShow
            .filter(function (item) { return person.userName === item.userName; })
            .map(function (item) {
            item.checked = !item.checked;
        });
    };
    FilterPersonPage.prototype.accept = function () {
        var _this = this;
        this.personsToShow.map(function (itemShow) {
            if (itemShow.checked) {
                if (!_this.dailyProvider.daily.daily_items.some(function (itemOrigin) { return itemShow.userName === itemOrigin.userName; })) {
                    _this.dailyProvider.daily.daily_items.push(itemShow);
                }
            }
        });
        this.dailyProvider.daily.daily_items.map(function (itemOrigin) {
            _this.personsToShow.filter(function (itemShow) { return itemShow.userName === itemOrigin.userName; })
                .map(function (item) {
                if (!item.checked)
                    _this.dailyProvider.daily.daily_items.splice(_this.dailyProvider.daily.daily_items.indexOf(itemOrigin), 1);
            });
        });
        this.navCtrl.pop();
    };
    FilterPersonPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    FilterPersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter-person',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/filter-person/filter-person.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Buscar personas\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="accept()">\n        <ion-icon name="checkmark" class="accept"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close" class="cancel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="personToSearch" (ionInput)="filterItems()"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let person of personsToShow" (click)="changeStatusChecked(person)">\n      <ion-avatar item-start>\n        <avatar>{{person.firstName.substring(0,1) | uppercase}}</avatar>\n      </ion-avatar>\n      <div class="issue-summary full-name">\n        {{ person.firstName }} {{ person.lastName}}\n      </div>\n      <p class="user-name">{{ person.userName}}</p>\n      <ion-icon *ngIf="person.checked" name="checkmark-circle" item-end class="checked"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/filter-person/filter-person.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_daily_daily__["a" /* DailyProvider */]])
    ], FilterPersonPage);
    return FilterPersonPage;
}());

//# sourceMappingURL=filter-person.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_description_user_description__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersPage = /** @class */ (function () {
    function UsersPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.users = [];
        this.userDescriptionPage = __WEBPACK_IMPORTED_MODULE_2__user_description_user_description__["a" /* UserDescriptionPage */];
    }
    UsersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userProvider.getAllUser()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersPage.prototype.openDetail = function (user) {
        this.navCtrl.push(this.userDescriptionPage, {
            'id': user.id,
            'firstName': user.firstName,
            'lastName': user.lastName,
            'dni': user.dni,
            'email': user.email,
            'userName': user.userName,
            'rol': user.rol,
            'avatar': user.avatar,
            'mode': 'detail',
            'isEnabled': user.enabled,
            'isNetwork': user.isNetwork,
            'password': user.password
        });
    };
    UsersPage.prototype.createUser = function () {
        this.navCtrl.push(this.userDescriptionPage, { mode: 'create' });
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/users/users.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Administración de Usuarios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let user of users" (click)="openDetail(user)">\n      <ion-avatar item-start>\n        <avatar>{{user.firstName.substring(0,1) | uppercase}}</avatar>\n      </ion-avatar>\n      <div class="issue-summary full-name">\n        {{ user.firstName }} {{ user.lastName}}\n      </div>\n      <p class="user-name">{{ user.userName}}</p>\n      <ion-icon *ngIf="user.checked" name="checkmark-circle" item-end class="checked"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right>\n    <button ion-fab (click)="createUser()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/users/users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDescriptionPage = /** @class */ (function () {
    function UserDescriptionPage(navCtrl, navParams, userProvider, utilProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.utilProvider = utilProvider;
        this.firstName = "";
        this.class = 'login';
        this.mode = this.navParams.get('mode');
        this.role = "1";
        if (this.mode === 'create') {
            this.firstName = "";
            this.fullName = 'Nuevo Usuario';
            this.isEnabled = true;
            this.enabledText = 'Habilitado';
            this.isNetwork = false;
        }
        else {
            this.id = this.navParams.get('id');
            this.firstName = this.navParams.get('firstName');
            this.lastName = this.navParams.get('lastName');
            this.dni = this.navParams.get('dni');
            this.email = this.navParams.get('email');
            this.fullName = this.firstName + ' ' + this.lastName;
            this.userName = this.navParams.get('userName');
            this.isEnabled = this.navParams.get('isEnabled');
            this.isNetwork = this.navParams.get('isNetwork');
            this.role = this.navParams.get('rol');
            this.password = this.navParams.get('password');
        }
        this.class = (this.isNetwork) ? 'enabled' : 'disabled';
        if (this.isEnabled) {
            this.classEnabled = 'enabledToggle';
            this.enabledText = 'Habilitado';
        }
        else {
            this.classEnabled = 'disabledToggle';
            this.enabledText = 'No habilitado';
        }
    }
    UserDescriptionPage.prototype.change = function () {
        this.class = (this.isNetwork) ? 'enabled' : 'disabled';
        this.password = '';
    };
    UserDescriptionPage.prototype.accept = function () {
        console.log("Crear usuario");
    };
    UserDescriptionPage.prototype.changeEnabled = function () {
        if (this.isEnabled) {
            this.classEnabled = 'enabledToggle';
            this.enabledText = 'Habilitado';
        }
        else {
            this.classEnabled = 'disabledToggle';
            this.enabledText = 'No habilitado';
        }
    };
    UserDescriptionPage.prototype.createUser = function () {
        var _this = this;
        var user = {
            "id": this.id,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "dni": this.dni,
            "email": this.email,
            "userName": this.userName,
            "rol": this.role,
            "password": this.password,
            "enabled": this.isEnabled,
            "isNetwork": this.isNetwork
        };
        if (this.mode === 'create') {
            this.userProvider.createUser(user)
                .subscribe(function (u) {
                _this.utilProvider.presentToast("Se creó el usuario " + u.firstName + " " + u.lastName);
                _this.navCtrl.pop();
            }, function (err) {
                _this.utilProvider.presentPrompt(err.error.title, err.error.message);
            });
        }
        else {
            this.userProvider.updateUser(user)
                .subscribe(function (u) {
                _this.utilProvider.presentToast("Se modificó el usuario " + user.firstName + " " + user.lastName);
                _this.navCtrl.pop();
            }, function (err) {
                _this.utilProvider.presentPrompt(err.error.title, err.error.message);
            });
        }
    };
    UserDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/user-description/user-description.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ fullName }}</ion-title>\n\n    <ion-buttons end *ngIf="!readonly">\n      <button ion-button icon-only (click)="createUser()">\n        <ion-icon name="checkmark" class="accept"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only navPop>\n        <ion-icon name="close" class="cancel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-avatar class="avatar">\n    <avatar>{{ firstName. substring(0,1) | uppercase}}</avatar>\n  </ion-avatar> -->\n    <ion-item class="toggle">\n      <ion-label class="{{class}}">Login por redes sociales</ion-label>\n      <ion-toggle [(ngModel)]="isNetwork" (ionChange)="change()"></ion-toggle>\n    </ion-item>\n\n  <ion-item>\n    <ion-label floating>Nombre</ion-label>\n    <ion-input type="text" [(ngModel)]="firstName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Apellido</ion-label>\n    <ion-input type="text" [(ngModel)]="lastName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Usuario</ion-label>\n    <ion-input type="text" [(ngModel)]="userName"></ion-input>\n  </ion-item>\n\n  <ion-item class="item-leave-height">\n    <ion-label>Rol</ion-label>\n    <ion-select [(ngModel)]="role">\n        <ion-option value="1">Desarrollador</ion-option>\n        <ion-option value="2">Scrum Master</ion-option>\n        <ion-option value="3">Admin</ion-option>\n    </ion-select>\n</ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf="!isNetwork">\n    <ion-label floating>Password</ion-label>\n    <ion-input type="text" [(ngModel)]="password"></ion-input>\n  </ion-item>\n\n  <ion-item class="toggle">\n    <ion-label class="{{classEnabled}}">{{enabledText}}</ion-label>\n    <ion-toggle [(ngModel)]="isEnabled" (ionChange)="changeEnabled()"></ion-toggle>\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/user-description/user-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */]])
    ], UserDescriptionPage);
    return UserDescriptionPage;
}());

//# sourceMappingURL=user-description.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__versions_versions__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__label_label__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase_phase__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__priority_priority__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rol_rol__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_state__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.versionsPage = __WEBPACK_IMPORTED_MODULE_2__versions_versions__["a" /* VersionsPage */];
        this.labelPage = __WEBPACK_IMPORTED_MODULE_3__label_label__["a" /* LabelPage */];
        this.phasePage = __WEBPACK_IMPORTED_MODULE_4__phase_phase__["a" /* PhasePage */];
        this.priorityPage = __WEBPACK_IMPORTED_MODULE_5__priority_priority__["a" /* PriorityPage */];
        this.rolPage = __WEBPACK_IMPORTED_MODULE_6__rol_rol__["a" /* RolPage */];
        this.statePage = __WEBPACK_IMPORTED_MODULE_7__state_state__["a" /* StatePage */];
    }
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/config/config.html"*/'<!--\n  Generated template for the ConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Panel de configuración</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block large [navPush]="versionsPage">Versiones</button>\n  <!-- <button ion-button block large [navPush]="labelPage">Etiquetas</button>\n  <button ion-button block large [navPush]="phasePage">Fases</button>\n  <button ion-button block large [navPush]="priorityPage">Prioridades</button>\n  <button ion-button block large [navPush]="rolPage">Roles</button>\n  <button ion-button block large [navPush]="statePage">Estados</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/config/config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_versions_versions__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VersionDescriptionPage = /** @class */ (function () {
    function VersionDescriptionPage(navCtrl, navParams, versionProvider, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.versionProvider = versionProvider;
        this.utils = utils;
        this.title = 'Crear una nueva versión';
        this.readonly = false;
        this.update = this.navParams.get('update');
        if (this.update == true) {
            this.version = this.navParams.get('version');
            this.id = this.version.id;
            this.name = this.version.name;
            this.description = this.version.description;
            this.title = "Editar versi\u00F3n " + this.name;
            this.readonly = true;
        }
    }
    VersionDescriptionPage.prototype.accept = function () {
        var _this = this;
        if (this.utils.isEmpty(this.name)) {
            this.utils.presentToast('El nombre no puede estar vacío');
        }
        else if (this.utils.isEmpty(this.description)) {
            this.utils.presentToast('La descripción no puede estar vacía');
        }
        else {
            if (this.update) {
                this.versionProvider.updateVersion(this.id, this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.utils.presentToast("Se modific\u00F3 la versi\u00F3n " + _this.name + " con \u00E9xito");
                });
            }
            else {
                this.versionProvider.createNewVersion(this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.utils.presentToast("Se cre\u00F3 la versi\u00F3n " + _this.name + " con \u00E9xito");
                });
            }
        }
    };
    VersionDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-version-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/version-description/version-description.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> {{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nombre <span *ngIf="readonly">(solo lectura)</span></ion-label>\n    <ion-input type="text" [(ngModel)]="name" [readonly]="readonly"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Descripción</ion-label>\n    <ion-input type="text" [(ngModel)]="description" ></ion-input>\n  </ion-item>\n\n  <button ion-button color="secondary" block class="btn-aceptar" (click)="accept()">Aceptar</button>\n  <button ion-button color="danger" block class="btn-cancelar" navPop>Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/version-description/version-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_versions_versions__["a" /* VersionsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */]])
    ], VersionDescriptionPage);
    return VersionDescriptionPage;
}());

//# sourceMappingURL=version-description.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_label_label__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__label_description_label_description__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LabelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LabelPage = /** @class */ (function () {
    function LabelPage(navCtrl, navParams, labelProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.labelProvider = labelProvider;
        this.labels = null;
        this.labelDescriptionPage = __WEBPACK_IMPORTED_MODULE_3__label_description_label_description__["a" /* LabelDescriptionPage */];
    }
    LabelPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.labelProvider.getAllLabel()
            .subscribe(function (data) {
            _this.labels = data;
        });
    };
    LabelPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.labelProvider.getAllLabel()
            .subscribe(function (data) {
            _this.labels = data;
        });
    };
    LabelPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page, { update: false });
    };
    LabelPage.prototype.itemSelected = function (version) {
        this.navCtrl.push(this.labelDescriptionPage, { version: version, update: true });
    };
    LabelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-label',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/label/label.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Etiquetas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let label of labels" (click)="itemSelected(label)">\n      <h2 class="name">{{ label.name }}</h2>\n      <p>{{ label.description }}</p>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right>\n    <button ion-fab (click)="goToPage(labelDescriptionPage)"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/label/label.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_label_label__["a" /* LabelProvider */]])
    ], LabelPage);
    return LabelPage;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_label_label__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LabelDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LabelDescriptionPage = /** @class */ (function () {
    function LabelDescriptionPage(navCtrl, navParams, labelProvider, toastCtrl, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.labelProvider = labelProvider;
        this.toastCtrl = toastCtrl;
        this.utils = utils;
        this.title = 'Crear una nueva etiqueta';
        this.readonly = false;
        this.update = this.navParams.get('update');
        if (this.update == true) {
            this.label = this.navParams.get('version');
            this.id = this.label.id;
            this.name = this.label.name;
            this.description = this.label.description;
            this.title = "Editar etiqueta " + this.name;
            this.readonly = true;
        }
    }
    LabelDescriptionPage.prototype.accept = function () {
        var _this = this;
        if (this.utils.isEmpty(this.name)) {
            this.presentToast('El nombre no puede estar vacío');
        }
        else if (this.utils.isEmpty(this.description)) {
            this.presentToast('La descripción no puede estar vacía');
        }
        else {
            if (this.update) {
                this.labelProvider.updateLabel(this.id, this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se modific\u00F3 la etiqueta " + _this.name + " con \u00E9xito");
                });
            }
            else {
                this.labelProvider.createNewLabel(this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se cre\u00F3 la etiqueta " + _this.name + " con \u00E9xito");
                });
            }
        }
    };
    LabelDescriptionPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LabelDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-label-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/label-description/label-description.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> {{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nombre <span *ngIf="readonly">(solo lectura)</span></ion-label>\n    <ion-input type="text" [(ngModel)]="name" [readonly]="readonly"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Descripción</ion-label>\n    <ion-input type="text" [(ngModel)]="description" ></ion-input>\n  </ion-item>\n\n  <button ion-button color="secondary" block class="btn-aceptar" (click)="accept()">Aceptar</button>\n  <button ion-button color="danger" block class="btn-cancelar" navPop>Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/label-description/label-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_label_label__["a" /* LabelProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */]])
    ], LabelDescriptionPage);
    return LabelDescriptionPage;
}());

//# sourceMappingURL=label-description.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_phase_phase__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phase_description_phase_description__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LabelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhasePage = /** @class */ (function () {
    function PhasePage(navCtrl, navParams, phaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.phaseProvider = phaseProvider;
        this.phases = null;
        this.phaseDescriptionPage = __WEBPACK_IMPORTED_MODULE_3__phase_description_phase_description__["a" /* PhaseDescriptionPage */];
    }
    PhasePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.phaseProvider.getAllPhase()
            .subscribe(function (data) {
            _this.phases = data;
        });
    };
    PhasePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.phaseProvider.getAllPhase()
            .subscribe(function (data) {
            _this.phases = data;
        });
    };
    PhasePage.prototype.goToPage = function (page) {
        this.navCtrl.push(page, { update: false });
    };
    PhasePage.prototype.itemSelected = function (phase) {
        this.navCtrl.push(this.phaseDescriptionPage, { phase: phase, update: true });
    };
    PhasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phase',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/phase/phase.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Fases</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let phase of phases" (click)="itemSelected(phase)">\n      <h2 class="name">{{ phase.name }}</h2>\n      <p>{{ phase.description }}</p>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right>\n    <button ion-fab (click)="goToPage(phaseDescriptionPage)"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/phase/phase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_phase_phase__["a" /* PhaseProvider */]])
    ], PhasePage);
    return PhasePage;
}());

//# sourceMappingURL=phase.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_phase_phase__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LabelDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhaseDescriptionPage = /** @class */ (function () {
    function PhaseDescriptionPage(navCtrl, navParams, phaseProvider, toastCtrl, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.phaseProvider = phaseProvider;
        this.toastCtrl = toastCtrl;
        this.utils = utils;
        this.title = 'Crear una nueva fase';
        this.readonly = false;
        this.update = this.navParams.get('update');
        if (this.update == true) {
            this.phase = this.navParams.get('phase');
            this.id = this.phase.id;
            this.name = this.phase.name;
            this.description = this.phase.description;
            this.title = "Editar etiqueta " + this.name;
            this.readonly = true;
        }
    }
    PhaseDescriptionPage.prototype.accept = function () {
        var _this = this;
        if (this.utils.isEmpty(this.name)) {
            this.presentToast('El nombre no puede estar vacío');
        }
        else if (this.utils.isEmpty(this.description)) {
            this.presentToast('La descripción no puede estar vacía');
        }
        else {
            if (this.update) {
                this.phaseProvider.updatePhase(this.id, this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se modific\u00F3 la fase " + _this.name + " con \u00E9xito");
                });
            }
            else {
                this.phaseProvider.createNewPhase(this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se cre\u00F3 la fase " + _this.name + " con \u00E9xito");
                });
            }
        }
    };
    PhaseDescriptionPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    PhaseDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phase-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/phase-description/phase-description.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> {{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nombre <span *ngIf="readonly">(solo lectura)</span></ion-label>\n    <ion-input type="text" [(ngModel)]="name" [readonly]="readonly"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Descripción</ion-label>\n    <ion-input type="text" [(ngModel)]="description" ></ion-input>\n  </ion-item>\n\n  <button ion-button color="secondary" block class="btn-aceptar" (click)="accept()">Aceptar</button>\n  <button ion-button color="danger" block class="btn-cancelar" navPop>Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/phase-description/phase-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_phase_phase__["a" /* PhaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */]])
    ], PhaseDescriptionPage);
    return PhaseDescriptionPage;
}());

//# sourceMappingURL=phase-description.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriorityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__priority_description_priority_description__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_priority_priority__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PriorityPage = /** @class */ (function () {
    function PriorityPage(navCtrl, navParams, priorityProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.priorityProvider = priorityProvider;
        this.priorities = null;
        this.priorityDescriptionPage = __WEBPACK_IMPORTED_MODULE_2__priority_description_priority_description__["a" /* PriorityDescriptionPage */];
    }
    PriorityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.priorityProvider.getAllPriority()
            .subscribe(function (data) {
            _this.priorities = data;
        });
    };
    PriorityPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.priorityProvider.getAllPriority()
            .subscribe(function (data) {
            _this.priorities = data;
        });
    };
    PriorityPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page, { update: false });
    };
    PriorityPage.prototype.itemSelected = function (priority) {
        this.navCtrl.push(this.priorityDescriptionPage, { priority: priority, update: true });
    };
    PriorityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-priority',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/priority/priority.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Etiquetas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let priority of priorities" (click)="itemSelected(priority)">\n      <h2 class="name">{{ priority.name }}</h2>\n      <p>{{ priority.description }}</p>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right>\n    <button ion-fab (click)="goToPage(priorityDescriptionPage)"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/priority/priority.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_priority_priority__["a" /* PrioritiesProvider */]])
    ], PriorityPage);
    return PriorityPage;
}());

//# sourceMappingURL=priority.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriorityDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_priority_priority__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PriorityDescriptionPage = /** @class */ (function () {
    function PriorityDescriptionPage(navCtrl, navParams, priorityProvider, toastCtrl, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.priorityProvider = priorityProvider;
        this.toastCtrl = toastCtrl;
        this.utils = utils;
        this.title = 'Crear una nueva prioridad';
        this.readonly = false;
        this.update = this.navParams.get('update');
        if (this.update == true) {
            this.priority = this.navParams.get('priority');
            this.id = this.priority.id;
            this.name = this.priority.name;
            this.description = this.priority.description;
            this.title = "Editar prioridad " + this.name;
            this.readonly = true;
        }
    }
    PriorityDescriptionPage.prototype.accept = function () {
        var _this = this;
        if (this.utils.isEmpty(this.name)) {
            this.presentToast('El nombre no puede estar vacío');
        }
        else if (this.utils.isEmpty(this.description)) {
            this.presentToast('La descripción no puede estar vacía');
        }
        else {
            if (this.update) {
                this.priorityProvider.updatePriority(this.id, this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se modific\u00F3 la prioridad " + _this.name + " con \u00E9xito");
                });
            }
            else {
                this.priorityProvider.createNewPriority(this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se cre\u00F3 la prioridad " + _this.name + " con \u00E9xito");
                });
            }
        }
    };
    PriorityDescriptionPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    PriorityDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-priority-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/priority-description/priority-description.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> {{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nombre <span *ngIf="readonly">(solo lectura)</span></ion-label>\n    <ion-input type="text" [(ngModel)]="name" [readonly]="readonly"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Descripción</ion-label>\n    <ion-input type="text" [(ngModel)]="description" ></ion-input>\n  </ion-item>\n\n  <button ion-button color="secondary" block class="btn-aceptar" (click)="accept()">Aceptar</button>\n  <button ion-button color="danger" block class="btn-cancelar" navPop>Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/priority-description/priority-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_priority_priority__["a" /* PrioritiesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */]])
    ], PriorityDescriptionPage);
    return PriorityDescriptionPage;
}());

//# sourceMappingURL=priority-description.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rol_description_rol_description__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rol_rol__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolPage = /** @class */ (function () {
    function RolPage(navCtrl, navParams, rolProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rolProvider = rolProvider;
        this.roles = null;
        this.rolDescriptionPage = __WEBPACK_IMPORTED_MODULE_2__rol_description_rol_description__["a" /* RolDescriptionPage */];
    }
    RolPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.rolProvider.getAllRol()
            .subscribe(function (data) {
            _this.roles = data;
        });
    };
    RolPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.rolProvider.getAllRol()
            .subscribe(function (data) {
            _this.roles = data;
        });
    };
    RolPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page, { update: false });
    };
    RolPage.prototype.itemSelected = function (rol) {
        this.navCtrl.push(this.rolDescriptionPage, { rol: rol, update: true });
    };
    RolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rol',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/rol/rol.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Roles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let rol of roles" (click)="itemSelected(rol)">\n      <h2 class="name">{{ rol.name }}</h2>\n      <p>{{ rol.description }}</p>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right>\n    <button ion-fab (click)="goToPage(rolDescriptionPage)"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/rol/rol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rol_rol__["a" /* RolProvider */]])
    ], RolPage);
    return RolPage;
}());

//# sourceMappingURL=rol.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rol_rol__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LabelDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RolDescriptionPage = /** @class */ (function () {
    function RolDescriptionPage(navCtrl, navParams, rolProvider, toastCtrl, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rolProvider = rolProvider;
        this.toastCtrl = toastCtrl;
        this.utils = utils;
        this.title = 'Crear una nuevo rol';
        this.readonly = false;
        this.update = this.navParams.get('update');
        if (this.update == true) {
            this.rol = this.navParams.get('rol');
            this.id = this.rol.id;
            this.name = this.rol.name;
            this.description = this.rol.description;
            this.title = "Editar rol " + this.name;
            this.readonly = true;
        }
    }
    RolDescriptionPage.prototype.accept = function () {
        var _this = this;
        if (this.utils.isEmpty(this.name)) {
            this.presentToast('El nombre no puede estar vacío');
        }
        else if (this.utils.isEmpty(this.description)) {
            this.presentToast('La descripción no puede estar vacía');
        }
        else {
            if (this.update) {
                this.rolProvider.updateRol(this.id, this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se modific\u00F3 el rol " + _this.name + " con \u00E9xito");
                });
            }
            else {
                this.rolProvider.createNewRol(this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se cre\u00F3 el rol " + _this.name + " con \u00E9xito");
                });
            }
        }
    };
    RolDescriptionPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    RolDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rol-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/rol-description/rol-description.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> {{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nombre <span *ngIf="readonly">(solo lectura)</span></ion-label>\n    <ion-input type="text" [(ngModel)]="name" [readonly]="readonly"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Descripción</ion-label>\n    <ion-input type="text" [(ngModel)]="description" ></ion-input>\n  </ion-item>\n\n  <button ion-button color="secondary" block class="btn-aceptar" (click)="accept()">Aceptar</button>\n  <button ion-button color="danger" block class="btn-cancelar" navPop>Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/rol-description/rol-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rol_rol__["a" /* RolProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */]])
    ], RolDescriptionPage);
    return RolDescriptionPage;
}());

//# sourceMappingURL=rol-description.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_state_state__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_description_state_description__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatePage = /** @class */ (function () {
    function StatePage(navCtrl, navParams, stateProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stateProvider = stateProvider;
        this.states = null;
        this.stateDescriptionPage = __WEBPACK_IMPORTED_MODULE_3__state_description_state_description__["a" /* StateDescriptionPage */];
    }
    StatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.stateProvider.getAllState()
            .subscribe(function (data) {
            _this.states = data;
        });
    };
    StatePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.stateProvider.getAllState()
            .subscribe(function (data) {
            _this.states = data;
        });
    };
    StatePage.prototype.goToPage = function (page) {
        this.navCtrl.push(page, { update: false });
    };
    StatePage.prototype.itemSelected = function (rol) {
        this.navCtrl.push(this.stateDescriptionPage, { rol: rol, update: true });
    };
    StatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-state',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/state/state.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Estados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let state of states" (click)="itemSelected(state)">\n      <h2 class="name">{{ state.name }}</h2>\n      <p>{{ state.description }}</p>\n    </ion-item>\n  </ion-list>\n\n  <!-- this fab is placed at top right -->\n  <ion-fab bottom right>\n    <button ion-fab (click)="goToPage(stateDescriptionPage)"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/state/state.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_state_state__["a" /* StateProvider */]])
    ], StatePage);
    return StatePage;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_state_state__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LabelDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StateDescriptionPage = /** @class */ (function () {
    function StateDescriptionPage(navCtrl, navParams, stateProvider, toastCtrl, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stateProvider = stateProvider;
        this.toastCtrl = toastCtrl;
        this.utils = utils;
        this.title = 'Crear una nuevo estado';
        this.readonly = false;
        this.update = this.navParams.get('update');
        if (this.update == true) {
            this.state = this.navParams.get('rol');
            this.id = this.state.id;
            this.name = this.state.name;
            this.description = this.state.description;
            this.title = "Editar estado " + this.name;
            this.readonly = true;
        }
    }
    StateDescriptionPage.prototype.accept = function () {
        var _this = this;
        if (this.utils.isEmpty(this.name)) {
            this.presentToast('El nombre no puede estar vacío');
        }
        else if (this.utils.isEmpty(this.description)) {
            this.presentToast('La descripción no puede estar vacía');
        }
        else {
            if (this.update) {
                this.stateProvider.updateState(this.id, this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se modific\u00F3 el estado " + _this.name + " con \u00E9xito");
                });
            }
            else {
                this.stateProvider.createNewState(this.name, this.description)
                    .subscribe(function (data) {
                    _this.navCtrl.pop();
                    _this.presentToast("Se cre\u00F3 el estado " + _this.name + " con \u00E9xito");
                });
            }
        }
    };
    StateDescriptionPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    StateDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-state-description',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/state-description/state-description.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> {{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nombre <span *ngIf="readonly">(solo lectura)</span></ion-label>\n    <ion-input type="text" [(ngModel)]="name" [readonly]="readonly"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Descripción</ion-label>\n    <ion-input type="text" [(ngModel)]="description" ></ion-input>\n  </ion-item>\n\n  <button ion-button color="secondary" block class="btn-aceptar" (click)="accept()">Aceptar</button>\n  <button ion-button color="danger" block class="btn-cancelar" navPop>Cancelar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/state-description/state-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_state_state__["a" /* StateProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */]])
    ], StateDescriptionPage);
    return StateDescriptionPage;
}());

//# sourceMappingURL=state-description.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprint_sprint__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_sprint_popover_sprint__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SprintsPage = /** @class */ (function () {
    function SprintsPage(navCtrl, navParams, sprintProvider, loadingCtrl, popoverCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sprintProvider = sprintProvider;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.sprints = [];
        this.sprintPage = __WEBPACK_IMPORTED_MODULE_3__sprint_sprint__["a" /* SprintPage */];
        this.storage.get("rol").then(function (r) {
            _this.role = r;
        });
    }
    SprintsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'Cargando...'
        });
        loading.present();
        this.sprintProvider.getAllSprints()
            .subscribe(function (s) {
            _this.sprints = s;
            _this.sprints.reverse();
            _this.sprintProvider.sprints = s;
            loading.dismiss();
        });
    };
    SprintsPage.prototype.createSprint = function () {
        this.navCtrl.push(this.sprintPage, { 'sprint': null, 'readonly': false, 'create': true });
    };
    SprintsPage.prototype.openSprint = function (id) {
        var _this = this;
        this.sprintProvider.getSprintById(id)
            .subscribe(function (s) {
            _this.navCtrl.push(_this.sprintPage, { 'sprint': s, 'readonly': true, 'create': false });
        });
    };
    SprintsPage.prototype.presentPopover = function (myEvent, sprint) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_sprint_popover_sprint__["a" /* PopoverSprintPage */], { 'sprint': sprint });
        popover.onDidDismiss(function () {
            var loading = _this.loadingCtrl.create({ spinner: 'ios',
                content: 'Cargando...'
            });
            loading.present();
            _this.sprintProvider.getAllSprints()
                .subscribe(function (s) {
                _this.sprints = s;
                _this.sprints.reverse();
                _this.sprintProvider.sprints = s;
                loading.dismiss();
            });
        });
        popover.present({
            ev: myEvent
        });
    };
    SprintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sprints',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/sprints/sprints.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Sprints</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list ion-item *ngFor="let sprint of sprints">\n    <div  (click)="openSprint(sprint.id)">\n      <h3 class="sprint-name">{{ sprint.name }}</h3>\n      <div>\n        <span class="sprint-range-from">Desde: <span\n            class="sprint-range-from-label">{{ sprint.dateFrom | formatDateMillisecond}}</span></span>\n        <span class="sprint-range-from">Hasta: <span\n            class="sprint-range-from-label">{{ sprint.dateTo | formatDateMillisecond}}</span></span>\n      </div>\n    </div>\n    <button icon-only  (click)="presentPopover($event, sprint)"item-end class="more" *ngIf="sprint.isActive">\n      <ion-icon name="more"></ion-icon>\n    </button>\n  </ion-list>\n\n  <ion-fab bottom right (click)="createSprint()" *ngIf="role == 2 || role == 3">\n    <button ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/sprints/sprints.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__["a" /* SprintProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], SprintsPage);
    return SprintsPage;
}());

//# sourceMappingURL=sprints.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__issue_issue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_backlog_popover_backlog__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SprintPage = /** @class */ (function () {
    function SprintPage(navCtrl, navParams, sprintProvider, utilsProvider, alertCtrl, popoverCtrl, issueProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sprintProvider = sprintProvider;
        this.utilsProvider = utilsProvider;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.issueProvider = issueProvider;
        this.loadingCtrl = loadingCtrl;
        this.readonly = false;
        this.issues = [];
        this.sprint = this.navParams.get('sprint');
        this.readonly = this.navParams.get('readonly');
        this.create = this.navParams.get('create');
        if (this.create) {
        }
        else {
            this.issueProvider.getIssueBySprintId(this.sprint.id)
                .subscribe(function (i) {
                _this.issues = i;
            });
        }
        if (this.readonly) {
            this.name = this.sprint.name;
            this.description = this.sprint.description;
            this.from = new Date(this.sprint.dateFrom).toISOString();
            this.to = new Date(this.sprint.dateTo).toISOString();
        }
    }
    SprintPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!this.create) {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'ios',
                content: 'Cargando...'
            });
            loading_1.present();
            this.issueProvider.getIssueBySprintId(this.sprint.id)
                .subscribe(function (data) {
                _this.issues = data;
                loading_1.dismiss();
            });
        }
    };
    SprintPage.prototype.createSprint = function () {
        // if (this.name == undefined || this.name == null) {
        //   this.utilsProvider.presentToast("Falta ingresar el 'NOMBRE' del sprint")
        // } else 
        var _this = this;
        if (this.from == undefined || this.from == null) {
            this.utilsProvider.presentPrompt("Error", "Falta ingresar la fecha 'DESDE' del sprint");
        }
        else if (this.to == undefined || this.to == null) {
            this.utilsProvider.presentPrompt("Error", "Falta ingresar la fecha 'HASTA' del sprint");
        }
        else {
            var fromDate = this.from.toString().split("-");
            var toDate = this.to.toString().split("-");
            var sprint = {
                "name": this.name,
                "description": this.description,
                "date_from": new Date(fromDate[1] + "/" + fromDate[2] + "/" + fromDate[0]).getTime(),
                "date_to": new Date(toDate[1] + "/" + toDate[2] + "/" + toDate[0]).getTime(),
            };
            this.sprintProvider.createSprint(sprint)
                .subscribe(function (s) {
                _this.utilsProvider.presentToast("Se ha generado con éxito " + s.name);
                _this.cancel();
            }, function (err) {
                _this.utilsProvider.presentPrompt(err.error.title, err.error.message);
            });
        }
    };
    SprintPage.prototype.validateDateFrom = function (date) {
        var _this = this;
        if (date != null) {
            var isValid_1 = true;
            var dateArray = date.toString().split("-");
            var dateToString = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
            var dateMillisecond_1 = new Date(dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0]).getTime();
            this.sprintProvider.sprints.forEach(function (s) {
                if (dateMillisecond_1 >= s.dateFrom && dateMillisecond_1 <= s.dateTo)
                    isValid_1 = false;
            });
            if (!isValid_1) {
                this.alertCtrl.create({
                    title: "Error",
                    subTitle: "La fecha " + dateToString + " ya está contenida en otro Sprint",
                    buttons: [{
                            text: 'Aceptar',
                            handler: function (data) {
                                _this.from = null;
                            }
                        }]
                }).present();
            }
        }
    };
    SprintPage.prototype.validateDateTo = function (date) {
        var _this = this;
        if (date != null) {
            var isValid_2 = true;
            var dateArray = date.toString().split("-");
            var dateToString = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
            var dateMillisecond_2 = new Date(dateArray[1] + "/" + dateArray[2] + "/" + dateArray[0]).getTime();
            this.sprintProvider.sprints.forEach(function (s) {
                if (dateMillisecond_2 >= s.dateFrom && dateMillisecond_2 <= s.dateTo)
                    isValid_2 = false;
            });
            if (!isValid_2) {
                this.alertCtrl.create({
                    title: "Error",
                    subTitle: "La fecha " + dateToString + " ya está contenida en otro Sprint",
                    buttons: [{
                            text: 'Aceptar',
                            handler: function (data) {
                                _this.to = null;
                            }
                        }]
                }).present();
            }
        }
    };
    SprintPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    SprintPage.prototype.openDetail = function (issue) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__issue_issue__["a" /* IssuePage */], { "issue": issue, "update": true });
    };
    SprintPage.prototype.createNewIssue = function () {
        this.issueProvider.issue.reporter = 'Leandro Sebastian Cocchi';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__issue_issue__["a" /* IssuePage */], { "issue": null, "update": false, "backlog": false });
    };
    SprintPage.prototype.presentPopover = function (myEvent, issue) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popover_backlog_popover_backlog__["a" /* PopoverBacklogPage */], { 'issue': issue });
        popover.onDidDismiss(function () {
            var loading = _this.loadingCtrl.create({
                spinner: 'ios',
                content: 'Cargando...'
            });
            loading.present();
            _this.issueProvider.getIssueBySprintId(_this.sprint.id)
                .subscribe(function (data) {
                _this.issues = data;
                loading.dismiss();
            });
        });
        popover.present({
            ev: myEvent
        });
    };
    SprintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sprint',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/sprint/sprint.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{name}}\n      <div class="sprint-range" *ngIf=\'!create\'>\n        <span class="sprint-range-from-label">Del: {{ sprint.dateFrom | formatDateMillisecond}}</span>\n        <span class="sprint-range-from-label">Al: {{ sprint.dateTo | formatDateMillisecond}}</span>\n      </div>\n      <div class="sprint-range" *ngIf=\'create\'>\n        Crear Sprint\n      </div>\n    </ion-title>\n    <ion-buttons end *ngIf="!readonly">\n      <button ion-button icon-only (click)="createSprint()">\n        <ion-icon name="checkmark" class="accept"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close" class="cancel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="!create">\n    <ion-list>\n      <ion-item *ngFor="let issue of issues, let i = index">\n        <!-- <ion-avatar item-start>\n        <img [src]="issue.avatar">\n      </ion-avatar> -->\n        <div (click)="openDetail(issue)">\n          <div class="issue-code">SID-{{ issue.id }}</div>\n          <div class="issue-summary">\n            {{ issue.title }}\n          </div>\n        </div>\n        <button icon-only (click)="presentPopover($event, issue)" item-end class="more" *ngIf="issue.state != \'FINALIZADO\'">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n    <!-- this fab is placed at top right -->\n    <ion-fab bottom right (click)="createNewIssue()">\n      <button ion-fab>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n\n  <div *ngIf="create">\n\n    <ion-item>\n      <ion-label>Desde</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" placeholder="" [(ngModel)]="from"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hasta</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" placeholder="" [(ngModel)]="to"></ion-datetime>\n    </ion-item>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/sprint/sprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sprint_sprint__["a" /* SprintProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SprintPage);
    return SprintPage;
}());

//# sourceMappingURL=sprint.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverBacklogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverBacklogPage = /** @class */ (function () {
    function PopoverBacklogPage(navCtrl, navParams, issueProvider, viewCtrl, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.issueProvider = issueProvider;
        this.viewCtrl = viewCtrl;
        this.utils = utils;
    }
    PopoverBacklogPage.prototype.sendToBacklog = function () {
        var _this = this;
        this.issue = this.viewCtrl.getNavParams().get("issue");
        this.issueProvider.addIssueInBacklog(this.issue)
            .subscribe(function (i) {
            _this.utils.presentToast("Se envi\u00F3 el issue SID-" + i.id + " al Backlog");
        });
        this.viewCtrl.dismiss();
    };
    PopoverBacklogPage.prototype.delete = function () {
        var _this = this;
        this.issue = this.viewCtrl.getNavParams().get("issue");
        this.issueProvider.deleteIssue(this.issue.id)
            .subscribe(function (i) {
            _this.utils.presentToast("Se elimin\u00F3 el issue SID-" + i.id);
        });
        this.viewCtrl.dismiss();
    };
    PopoverBacklogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-backlog',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/popover-backlog/popover-backlog.html"*/'<ion-list>\n  <ion-list-header>Menu</ion-list-header>\n  <button ion-item (click)="sendToBacklog()">Enviar a Backlog</button>\n  <button ion-item (click)="delete()">Eliminar Issue</button>\n</ion-list>'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/popover-backlog/popover-backlog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_issue_issue__["a" /* IssueProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */]])
    ], PopoverBacklogPage);
    return PopoverBacklogPage;
}());

//# sourceMappingURL=popover-backlog.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverSprintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sprint_sprint__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_issue_issue__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopoverSprintPage = /** @class */ (function () {
    function PopoverSprintPage(navCtrl, navParams, viewCtrl, sprintProvider, utils, utilProvider, alertCtrl, issueProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.sprintProvider = sprintProvider;
        this.utils = utils;
        this.utilProvider = utilProvider;
        this.alertCtrl = alertCtrl;
        this.issueProvider = issueProvider;
        this.issues = [];
    }
    PopoverSprintPage.prototype.finish = function () {
        var _this = this;
        this.issueProvider.getAllIssueOpenInActiveSprint()
            .subscribe(function (is) {
            _this.issues = is;
            if (_this.issues.length > 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Finalizar Sprint',
                    subTitle: 'Existen issues abiertos que se van a enviar al backlog.\n¿Desea cerrar el sprint?',
                    buttons: [
                        {
                            text: 'Aceptar',
                            handler: function () {
                                _this.sprintProvider.finishSprint(_this.viewCtrl.getNavParams().get("sprint"))
                                    .subscribe(function (i) {
                                    _this.utils.presentToast("Se finaliz\u00F3 el Sprint " + i.id);
                                    _this.viewCtrl.dismiss();
                                }, function (err) {
                                    _this.utilProvider.presentPrompt(err.error.title, err.error.message);
                                });
                            }
                        },
                        {
                            text: 'Cancelar',
                            role: 'Cancel',
                            handler: function () {
                                _this.viewCtrl.dismiss();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.sprintProvider.finishSprint(_this.viewCtrl.getNavParams().get("sprint"))
                    .subscribe(function (i) {
                    _this.utils.presentToast("Se finaliz\u00F3 el Sprint " + i.id);
                    _this.viewCtrl.dismiss();
                }, function (err) {
                    _this.utilProvider.presentPrompt(err.error.title, err.error.message);
                });
            }
        }, function (err) {
            _this.utils.presentPrompt('Error', 'Se produjo un error al intentar obtener los issues abiertos para el sprint');
        });
    };
    PopoverSprintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-sprint',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/popover-sprint/popover-sprint.html"*/'<ion-list>\n  <ion-list-header>Menu</ion-list-header>\n  <button ion-item (click)="finish()">Finalizar Sprint</button>\n</ion-list>\n\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/popover-sprint/popover-sprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_sprint_sprint__["a" /* SprintProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_issue_issue__["a" /* IssueProvider */]])
    ], PopoverSprintPage);
    return PopoverSprintPage;
}());

//# sourceMappingURL=popover-sprint.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, storage, alertCtrl, utilProvider, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.utilProvider = utilProvider;
        this.userProvider = userProvider;
        this.storage.get("firstName").then(function (f) {
            _this.firstName = f;
        });
        this.storage.get("lastName").then(function (l) {
            _this.lastName = l;
        });
        this.storage.get("userName").then(function (u) {
            _this.userName = u;
        });
        this.storage.get("rol").then(function (r) {
            if (r === '1')
                _this.role = 'Desarrollador';
            else if (r === '2')
                _this.role = 'Scrum master';
            else
                _this.role = 'Admin';
        });
        this.storage.get("email").then(function (e) {
            _this.email = e;
        });
        this.storage.get("isNetwork").then(function (n) {
            _this.isNetwork = n;
        });
    }
    PerfilPage.prototype.ionViewCanEnter = function () { };
    PerfilPage.prototype.accept = function () {
    };
    PerfilPage.prototype.changePassword = function () {
        this.showConfirm();
    };
    PerfilPage.prototype.showConfirm = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Contraseña',
            message: "Cambiar la contraseña",
            inputs: [
                {
                    name: 'newPassword',
                    type: 'password',
                    placeholder: 'Nueva contraseña'
                },
                {
                    name: 'repeatNewPassword',
                    type: 'password',
                    placeholder: 'Repetir la nueva contraseña'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Cambiar',
                    handler: function (data) {
                        if (data.newPassword != data.repeatNewPassword) {
                            _this.utilProvider.presentPrompt("Error", "Las contraseñas no son iguales, por favor de intentar de nuevo");
                        }
                        else {
                            var changePassword = {
                                "email": _this.email,
                                "password": data.newPassword
                            };
                            _this.userProvider.changePassword(changePassword)
                                .subscribe(function (res) {
                                _this.utilProvider.presentToast("Se cambió con exito la contraseña");
                            }, function (err) {
                                _this.utilProvider.presentPrompt(err.error.title, err.error.message);
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Mi perfil</ion-title>\n\n    <!-- <ion-buttons end *ngIf="!readonly">\n      <button ion-button icon-only (click)="accept()">\n        <ion-icon name="checkmark" class="accept"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only navPop>\n        <ion-icon name="close" class="cancel"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Nombre</ion-label>\n    <ion-input type="text" [(ngModel)]="firstName" [disabled]=true></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Apellido</ion-label>\n    <ion-input type="text" [(ngModel)]="lastName" [disabled]=true></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Usuario</ion-label>\n    <ion-input type="text" [(ngModel)]="userName" [disabled]=true></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Rol</ion-label>\n    <ion-input type="text" [(ngModel)]="role" [disabled]=true></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email" [disabled]=true></ion-input>\n  </ion-item>\n\n  <button ion-button class="changePassword" (click)="changePassword()" *ngIf="!isNetwork">\n    Cambiar contraseña\n  </button>\n    \n</ion-content>'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["a" /* UtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_BASE; });
// export const URL_BASE = "http://localhost:8090";
var URL_BASE = "http://scrumapp.hopto.org:8090";
// export const URL_BASE = "http:192.168.0.6:8090";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssueProvider = /** @class */ (function () {
    function IssueProvider(http) {
        this.http = http;
        this.issue = {};
        this.issueToUpdate = {};
        this.issueToUpdate.reporter = 'Leandro Cocchi';
    }
    IssueProvider.prototype.getAllIssueActiveSprint = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/active-sprint");
    };
    IssueProvider.prototype.getAllIssueBacklog = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/backlog");
    };
    IssueProvider.prototype.getIssueById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/" + id);
    };
    IssueProvider.prototype.createNewIssue = function (issue) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/", issue);
    };
    IssueProvider.prototype.updateIssue = function (issue, id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/" + id, issue);
    };
    IssueProvider.prototype.addIssueInActiveSprint = function (id) {
        // @ts-ignore
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/sprint/" + id);
    };
    IssueProvider.prototype.addIssueInBacklog = function (issue) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/sprint/issues/backlog/", issue);
    };
    IssueProvider.prototype.deleteIssue = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/" + id);
    };
    IssueProvider.prototype.getIssueBySprintId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/issues/" + id);
    };
    IssueProvider.prototype.getAllIssueOpenInActiveSprint = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/issue/open/");
    };
    IssueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], IssueProvider);
    return IssueProvider;
}());

//# sourceMappingURL=issue.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(591);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_active_sprint_active_sprint__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_daily_daily__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_daily_description_daily_description__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_backlog_backlog__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_avatar_avatar__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reports_reports__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_users_users__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_issue_issue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_user_description_user_description__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_config_config__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_versions_versions__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_versions_versions__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_version_description_version_description__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_utils_utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_label_label__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_label_label__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_label_description_label_description__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_phase_phase__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_phase_description_phase_description__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_phase_phase__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_priority_priority__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_priority_description_priority_description__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_priority_priority__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_rol_rol__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_rol_rol__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_rol_description_rol_description__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_state_state__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_state_state__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_state_description_state_description__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_issue_issue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_daily_item_daily_item__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_daily_daily__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_user_user__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_filter_person_filter_person__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pipes_format_date_format_date__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_date_date__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_sprints_sprints__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_sprint_sprint__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_format_date_millisecond_format_date_millisecond__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_sprint_sprint__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_popover_popover__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_modal_modal__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_detalle_detalle__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_fechas_fechas__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_persona_persona__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_comentarios_comentarios__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__angular_fire__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_fire_firestore__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_fire_storage__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__config_firebase_config__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_fire_auth__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_camera__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_image_picker__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_load_file_load_file__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__services_auth_service__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ionic_native_google_plus__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_popover_backlog_popover_backlog__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_popover_sprint_popover_sprint__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_perfil_perfil__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_velocity_velocity__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_sprint_report_sprint_report__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































//firebase





//plugins











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_active_sprint_active_sprint__["a" /* ActiveSprintPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_daily_daily__["a" /* DailyPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_daily_description_daily_description__["a" /* DailyDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_backlog_backlog__["a" /* BacklogPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_avatar_avatar__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_issue_issue__["a" /* IssuePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_description_user_description__["a" /* UserDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_versions_versions__["a" /* VersionsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_version_description_version_description__["a" /* VersionDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_label_label__["a" /* LabelPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_label_description_label_description__["a" /* LabelDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_phase_phase__["a" /* PhasePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_phase_description_phase_description__["a" /* PhaseDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_priority_priority__["a" /* PriorityPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_priority_description_priority_description__["a" /* PriorityDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_rol_rol__["a" /* RolPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rol_description_rol_description__["a" /* RolDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_state_state__["a" /* StatePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_state_description_state_description__["a" /* StateDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_daily_item_daily_item__["a" /* DailyItemPage */],
                __WEBPACK_IMPORTED_MODULE_43__pipes_format_date_format_date__["a" /* FormatDatePipe */],
                __WEBPACK_IMPORTED_MODULE_42__pages_filter_person_filter_person__["a" /* FilterPersonPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_sprints_sprints__["a" /* SprintsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pipes_format_date_millisecond_format_date_millisecond__["a" /* FormatDateMillisecondPipe */],
                __WEBPACK_IMPORTED_MODULE_48__pages_sprint_sprint__["a" /* SprintPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_fechas_fechas__["a" /* FechasPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_persona_persona__["a" /* PersonaPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_comentarios_comentarios__["a" /* ComentariosPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_popover_backlog_popover_backlog__["a" /* PopoverBacklogPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_popover_sprint_popover_sprint__["a" /* PopoverSprintPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_velocity_velocity__["a" /* VelocityPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_sprint_report_sprint_report__["a" /* SprintReportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_55__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_58__config_firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_56__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_59__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_57__angular_fire_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_active_sprint_active_sprint__["a" /* ActiveSprintPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_daily_daily__["a" /* DailyPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_daily_description_daily_description__["a" /* DailyDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_backlog_backlog__["a" /* BacklogPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_avatar_avatar__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_issue_issue__["a" /* IssuePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_user_description_user_description__["a" /* UserDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_versions_versions__["a" /* VersionsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_version_description_version_description__["a" /* VersionDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_label_label__["a" /* LabelPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_label_description_label_description__["a" /* LabelDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_phase_phase__["a" /* PhasePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_phase_description_phase_description__["a" /* PhaseDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_priority_priority__["a" /* PriorityPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_priority_description_priority_description__["a" /* PriorityDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_rol_rol__["a" /* RolPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rol_description_rol_description__["a" /* RolDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_state_state__["a" /* StatePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_state_description_state_description__["a" /* StateDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_daily_item_daily_item__["a" /* DailyItemPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_filter_person_filter_person__["a" /* FilterPersonPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_sprints_sprints__["a" /* SprintsPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_sprint_sprint__["a" /* SprintPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_fechas_fechas__["a" /* FechasPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_persona_persona__["a" /* PersonaPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_comentarios_comentarios__["a" /* ComentariosPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_popover_backlog_popover_backlog__["a" /* PopoverBacklogPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_popover_sprint_popover_sprint__["a" /* PopoverSprintPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_velocity_velocity__["a" /* VelocityPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_sprint_report_sprint_report__["a" /* SprintReportPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_versions_versions__["a" /* VersionsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_utils_utils__["a" /* UtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_label_label__["a" /* LabelProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_phase_phase__["a" /* PhaseProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_priority_priority__["a" /* PrioritiesProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_rol_rol__["a" /* RolProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_state_state__["a" /* StateProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_issue_issue__["a" /* IssueProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_daily_daily__["a" /* DailyProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_daily_daily__["a" /* DailyProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_date_date__["a" /* DateProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_sprint_sprint__["a" /* SprintProvider */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_62__providers_load_file_load_file__["a" /* LoadFileProvider */],
                __WEBPACK_IMPORTED_MODULE_63__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_65__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_38__providers_issue_issue__["a" /* IssueProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProvider = /** @class */ (function () {
    function UserProvider(http, afDB) {
        this.http = http;
        this.afDB = afDB;
    }
    UserProvider.prototype.getAllUser = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/user/");
    };
    UserProvider.prototype.verificaUsuario = function (clave) {
        var _this = this;
        clave = clave.toLowerCase();
        return new Promise(function (resolve, reject) {
            _this.afDB.collection('tesis').doc('users')
                .valueChanges().subscribe(function (data) {
                resolve();
            });
        });
    };
    UserProvider.prototype.createUser = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/user/", user);
    };
    UserProvider.prototype.updateUser = function (user) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/user/" + user.id, user);
    };
    UserProvider.prototype.loginForUserAndPass = function (userLogin) {
        console.log("LOGIN WITH MAIL ==>> " + __WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/user/login-mail");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/user/login-mail", userLogin);
    };
    UserProvider.prototype.changePassword = function (changePassword) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/user/password", changePassword);
    };
    UserProvider.prototype.loginForGooglePlus = function (userLoginGooglePlus) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/user/google-plus", userLoginGooglePlus);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        // rootPage:any = DashboardPage;
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            platform.ready().then(function () {
                statusBar.styleDefault();
                splashScreen.hide();
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/app/app.html"*/'<!--<div *ngIf="showSplash" class="splash">\n  <div class="sk-folding-cube">\n    <div class="sk-cube1 sk-cube"></div>\n    <div class="sk-cube2 sk-cube"></div>\n    <div class="sk-cube4 sk-cube"></div>\n    <div class="sk-cube3 sk-cube"></div>\n  </div>\n</div>-->\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('avatar-text'),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "avatarText", void 0);
    AvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'avatar',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/components/avatar/avatar.html"*/'<!-- Generated template for the AvatarComponent component -->\n\n<div class="content">\n  <div class="avatar">\n    <ng-content></ng-content>\n  </div>\n  <div class="avatar-text">\n    {{ avatarText }}\n  </div>\n</div>\n\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/components/avatar/avatar.html"*/
        })
    ], AvatarComponent);
    return AvatarComponent;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_utils_utils__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormatDatePipe = /** @class */ (function () {
    function FormatDatePipe(utils) {
        this.utils = utils;
    }
    FormatDatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value != undefined) {
            this.now = this.utils.traslatorLenguajeSpanish(value);
            this.createAt = this.now.dayWeek + ", " + this.now.day + " de " + this.now.month;
            return this.createAt;
        }
    };
    FormatDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'formatDate',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_utils_utils__["a" /* UtilsProvider */]])
    ], FormatDatePipe);
    return FormatDatePipe;
}());

//# sourceMappingURL=format-date.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDateMillisecondPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatDateMillisecondPipe = /** @class */ (function () {
    function FormatDateMillisecondPipe() {
    }
    FormatDateMillisecondPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var date = new Date(value);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    };
    FormatDateMillisecondPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'formatDateMillisecond',
        })
    ], FormatDateMillisecondPipe);
    return FormatDateMillisecondPipe;
}());

//# sourceMappingURL=format-date-millisecond.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/home/leandro/WebStorm/projectFinal-Android/src/pages/modal/modal.html"*/'<ion-content color="primary">\n\n</ion-content>\n'/*ion-inline-end:"/home/leandro/WebStorm/projectFinal-Android/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBuk6d3NDkKeF9Co7r7aoYldlZGKG6Ch_k",
    authDomain: "tesis-6bfcc.firebaseapp.com",
    databaseURL: "https://tesis-6bfcc.firebaseio.com",
    projectId: "tesis-6bfcc",
    storageBucket: "tesis-6bfcc.appspot.com",
    messagingSenderId: "319058628236"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadFileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadFileProvider = /** @class */ (function () {
    function LoadFileProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    LoadFileProvider.prototype.loadFileFirebase = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.showToast('Cargando...');
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var fileName = new Date().valueOf().toString();
            var uploadTask = storageRef.child("img/" + fileName)
                .putString(file.imgUrl, 'base64', { contentType: 'image/jpeg' });
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskEvent.STATE_CHANGED, function () { }, //saber el % de cuantos Mbs se ha subido
            function (error) {
                _this.showToast(JSON.stringify(error));
                reject();
            }, function () {
                _this.showToast('Imagen cargada correctamente');
                resolve();
            });
        });
    };
    LoadFileProvider.prototype.showToast = function (mensage) {
        this.toastCtrl.create({
            message: mensage,
            duration: 2000
        }).present();
    };
    LoadFileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */]])
    ], LoadFileProvider);
    return LoadFileProvider;
}());

//# sourceMappingURL=load-file.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_cordova__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__auth0_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import Auth0Cordova and auth0.js


var AUTH_CONFIG = {
    // Needed for Auth0 (capitalization: ID):
    clientID: 'KsNjRx6yrmSKSgXEYTfX4VMK0fYpHkoc',
    // Needed for Auth0Cordova (capitalization: Id):
    clientId: 'KsNjRx6yrmSKSgXEYTfX4VMK0fYpHkoc',
    domain: 'leandro-cocchi.auth0.com',
    callbackURL: location.href,
    packageIdentifier: 'com.davinci.tesis' // config.xml widget ID
};
var AuthService = /** @class */ (function () {
    function AuthService(zone, storage) {
        var _this = this;
        this.zone = zone;
        this.storage = storage;
        this.Auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"](AUTH_CONFIG);
        this.Client = new __WEBPACK_IMPORTED_MODULE_2__auth0_cordova___default.a(AUTH_CONFIG);
        this.loading = true;
        this.storage.get('profile').then(function (user) { return _this.user = user; });
        this.storage.get('access_token').then(function (token) { return _this.accessToken = token; });
        this.storage.get('expires_at').then(function (exp) {
            _this.loggedIn = Date.now() < JSON.parse(exp);
            _this.loading = false;
        });
    }
    AuthService.prototype.login = function () {
        var _this = this;
        this.loading = true;
        var options = {
            scope: 'openid profile offline_access'
        };
        // Authorize login request with Auth0: open login page and get auth results
        this.Client.authorize(options, function (err, authResult) {
            if (err) {
                throw err;
            }
            // Set Access Token
            _this.storage.set('access_token', authResult.accessToken);
            _this.accessToken = authResult.accessToken;
            // Set Access Token expiration
            var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            _this.storage.set('expires_at', expiresAt);
            // Set logged in
            _this.loading = false;
            _this.loggedIn = true;
            // Fetch user's profile info
            _this.Auth0.client.userInfo(_this.accessToken, function (err, profile) {
                if (err) {
                    throw err;
                }
                _this.storage.set('profile', profile).then(function (val) {
                    return _this.zone.run(function () { return _this.user = profile; });
                });
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.storage.remove('profile');
        this.storage.remove('access_token');
        this.storage.remove('expires_at');
        this.accessToken = null;
        this.user = null;
        this.loggedIn = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_config_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SprintProvider = /** @class */ (function () {
    function SprintProvider(http) {
        this.http = http;
        this.sprints = [];
    }
    SprintProvider.prototype.getAllSprints = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/sprint/");
    };
    SprintProvider.prototype.createSprint = function (sprint) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/sprint/", sprint);
    };
    SprintProvider.prototype.getSprintById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/sprint/" + id);
    };
    SprintProvider.prototype.finishSprint = function (sprint) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/sprint/finish", sprint);
    };
    SprintProvider.prototype.velocityChart = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/sprint/velocity");
    };
    SprintProvider.prototype.sprintReports = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__components_config_config__["a" /* URL_BASE */] + "/sprint/sprint-report");
    };
    SprintProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SprintProvider);
    return SprintProvider;
}());

//# sourceMappingURL=sprint.js.map

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[469]);
//# sourceMappingURL=main.js.map