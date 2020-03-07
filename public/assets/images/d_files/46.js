webpackJsonp([46],{

/***/ "./src/pages/city/Form.js":
/*!********************************!*\
  !*** ./src/pages/city/Form.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Services__ = __webpack_require__(/*! ../../config/Services */ "./src/config/Services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_RequestService__ = __webpack_require__(/*! ../../utilities/RequestService */ "./src/utilities/RequestService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__ = __webpack_require__(/*! ../../components/Base/BaseComponent */ "./src/components/Base/BaseComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = '/Applications/MAMP/htdocs/amala/src/pages/city/Form.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Title = __WEBPACK_IMPORTED_MODULE_5_antd__["J" /* Typography */].Title;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getDetail = function (citycode, actionspage) {
            var url = __WEBPACK_IMPORTED_MODULE_1__config_Services__["a" /* api */].url.city.list;
            var criteria = { citycode: citycode };
            //call loader
            _this.setState({ isLoading: true });
            Object(__WEBPACK_IMPORTED_MODULE_3__utilities_RequestService__["f" /* RetrieveRequest */])(url, criteria).then(function (response) {
                var status = response.status,
                    result = response.result;

                if (status.responsecode.substring(0, 1) === '0') {
                    if (result.length !== 0) {
                        var _citycode = result[0].citycode ? result[0].citycode : null;
                        var cityname = result[0].cityname ? result[0].cityname : null;
                        var countrycode = result[0].countrycode ? result[0].countrycode : null;
                        var countryname = result[0].countryname ? result[0].countryname : null;
                        var statecode = result[0].statecode ? result[0].statecode : null;
                        var statename = result[0].statename ? result[0].statename : null;
                        var active = result[0].active !== undefined ? result[0].active : null;
                        var generalfielddisabled = actionspage !== "view" ? !active : true;
                        var statecodefielddisabled = actionspage !== "view" ? !active : true;

                        var setValue = { citycode: _citycode, cityname: cityname, countrycode: countrycode, statecode: statecode };
                        _this.props.form.setFieldsValue(setValue);
                        var fieldvalue = { citycode: _citycode, active: active };
                        var fielddisabled = Object.assign({}, _this.state.fielddisabled, { generalfielddisabled: generalfielddisabled, statecodefielddisabled: statecodefielddisabled });
                        _this.setState({ fieldvalue: fieldvalue, fielddisabled: fielddisabled });

                        //add select inactive
                        _this.componentCountrySelect.retrieveData({}, { countrycode: countrycode, countryname: countryname }, actionspage);
                        _this.componentStateSelect.retrieveData({}, { statecode: statecode, statename: statename }, actionspage);
                    } else {
                        _this.setState({ responseMessage: 'Data not found', formrender: false });
                    }
                } else {
                    _this.setState({ responseCode: status.responsecode, responseMessage: status.responsemessage, formrender: false });
                }
                _this.setState({ isLoading: false });
            });
        };

        _this.saveAction = function (e) {
            e.preventDefault();
            var actionspage = _this.state.actionspage;


            _this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this.setState({ isLoading: true });

                    var data = {};
                    Object.keys(values).map(function (key) {
                        var exclude = ['citycode'];
                        if (exclude.includes(key)) {
                            return data[key] = values[key] !== undefined ? values[key].toUpperCase() : null;
                        } else {
                            return data[key] = values[key] !== undefined ? values[key] : null;
                        }
                    });

                    var message = '';
                    var url = '';
                    if (actionspage === 'create') {
                        message = 'New data has been created';
                        url = __WEBPACK_IMPORTED_MODULE_1__config_Services__["a" /* api */].url.city.create;
                    } else {
                        data.citycode = _this.props.match.params.ID;
                        message = 'Data has been updated';
                        url = __WEBPACK_IMPORTED_MODULE_1__config_Services__["a" /* api */].url.city.update;
                    }

                    Object(__WEBPACK_IMPORTED_MODULE_3__utilities_RequestService__["g" /* SaveRequest */])(url, data).then(function (response) {
                        var _response$status = response.status,
                            responsecode = _response$status.responsecode,
                            responsemessage = _response$status.responsemessage;

                        if (responsecode.substring(0, 1) === '0') {
                            message = responsemessage ? responsemessage : message;
                            __WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["d" /* Alert */].success(message);
                            _this.props.history.push('/city');
                        } else {
                            __WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["d" /* Alert */].error(responsemessage);
                        }
                        _this.setState({ isLoading: false });
                    });
                }
            });
        };

        _this.onChangeCountry = function (countrycode) {
            var criteria = { countrycode: countrycode };
            _this.componentStateSelect.retrieveData(criteria);
            _this.props.form.setFieldsValue({ statecode: undefined });
            var statecodefielddisabled = countrycode ? false : true;
            _this.setState({ fielddisabled: Object.assign({}, _this.state.fielddisabled, { statecodefielddisabled: statecodefielddisabled }) });
        };

        _this.state = {
            isLoading: false,
            titlepage: 'Create',
            actionspage: 'create',
            formrender: true,
            fieldvalue: {
                citycode: null,
                active: true
            },
            fielddisabled: {
                specialfielddisabled: false,
                generalfielddisabled: false,
                statecodefielddisabled: true
            }
        };
        return _this;
    }

    _createClass(App, [{
        key: 'checkPermission',
        value: function checkPermission() {
            var id = this.props.match.params.ID;
            var _props = this.props,
                menucode = _props.menucode,
                permission = _props.permission,
                prefixmenuname = _props.prefixmenuname;
            var usermenu = permission.usermenu;

            if (id) {
                var titlepage = 'Edit';
                var actionspage = 'update';
                var specialfielddisabled = true;
                var generalfielddisabled = false;
                var statecodefielddisabled = false;

                if (!usermenu[menucode][prefixmenuname + "_UPDATE"]) {
                    titlepage = 'View';
                    actionspage = 'view';
                    generalfielddisabled = true;
                    statecodefielddisabled = true;
                }
                //change into update page
                var fielddisabled = { specialfielddisabled: specialfielddisabled, generalfielddisabled: generalfielddisabled, statecodefielddisabled: statecodefielddisabled };
                this.setState({ titlepage: titlepage, actionspage: actionspage, fielddisabled: fielddisabled });
                this.getDetail(id, actionspage);
            } else {
                if (!usermenu[menucode][prefixmenuname + "_CREATE"]) {
                    this.setState({ responseMessage: "Sorry, your role can't perform this action", formrender: false });
                } else {
                    this.componentCountrySelect.retrieveData();
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.checkPermission();
        }
    }, {
        key: 'deleteData',
        value: function deleteData(citycode, active) {
            var _this2 = this;

            var url = active ? __WEBPACK_IMPORTED_MODULE_1__config_Services__["a" /* api */].url.city.deactivate : __WEBPACK_IMPORTED_MODULE_1__config_Services__["a" /* api */].url.city.activate;
            var data = { citycode: citycode };
            var callback = function callback(response) {
                var _response$status2 = response.status,
                    responsecode = _response$status2.responsecode,
                    responsemessage = _response$status2.responsemessage;

                if (responsecode.substring(0, 1) === '0') {
                    var message = responsemessage ? responsemessage : 'Selected data has been deleted';
                    __WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["d" /* Alert */].success(message);
                } else {
                    __WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["d" /* Alert */].error(responsemessage);
                }
                _this2.checkPermission();
            };
            Object(__WEBPACK_IMPORTED_MODULE_3__utilities_RequestService__["b" /* DeleteRequest */])(url, data, callback, active);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var formItemLayout = {
                labelCol: { xs: { span: 24 }, sm: { span: 8 } },
                wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
            };
            var _state = this.state,
                titlepage = _state.titlepage,
                actionspage = _state.actionspage,
                formrender = _state.formrender;
            var _state$fielddisabled = this.state.fielddisabled,
                specialfielddisabled = _state$fielddisabled.specialfielddisabled,
                generalfielddisabled = _state$fielddisabled.generalfielddisabled,
                statecodefielddisabled = _state$fielddisabled.statecodefielddisabled;
            var _props2 = this.props,
                menucode = _props2.menucode,
                prefixmenuname = _props2.prefixmenuname;
            var _state$fieldvalue = this.state.fieldvalue,
                citycode = _state$fieldvalue.citycode,
                active = _state$fieldvalue.active;


            if (formrender) {
                document.title = titlepage + " City | Loyalty Management System";
                //render form
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_antd__["A" /* Row */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 185
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5_antd__["A" /* Row */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 186
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5_antd__["h" /* Col */],
                            { xs: 24, xl: 22, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 187
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                Title,
                                { level: 3, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 188
                                    },
                                    __self: this
                                },
                                titlepage,
                                ' City'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["k" /* Divider */], {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 190
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5_antd__["D" /* Spin */],
                        { spinning: this.state.isLoading, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 192
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5_antd__["n" /* Form */],
                            Object.assign({}, formItemLayout, { onSubmit: this.saveAction, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 193
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_5_antd__["A" /* Row */],
                                { gutter: 24, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 194
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_5_antd__["h" /* Col */],
                                    { className: 'gutter-row', xs: 24, sm: 24, md: 24, lg: { span: 12, offset: 4 }, xl: { span: 12, offset: 4 }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 195
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["E" /* InputText */], { labeltext: 'City Code', datafield: 'citycode', form: this.props.form, maxLength: 10, validationrules: ['required', 'max.10', 'pattern.nospace'], disabled: specialfielddisabled, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 196
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["E" /* InputText */], { labeltext: 'City Name', datafield: 'cityname', form: this.props.form, maxLength: 45, validationrules: ['required', 'max.45', 'pattern.letterspace'], disabled: generalfielddisabled, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 197
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["t" /* CountrySelect */], { ref: function ref(e) {
                                            _this3.componentCountrySelect = e;
                                        }, labeltext: 'Country', datafield: 'countrycode', form: this.props.form, validationrules: ['required'], onChange: this.onChangeCountry, disabled: generalfielddisabled, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 198
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["Z" /* StateSelect */], { ref: function ref(e) {
                                            _this3.componentStateSelect = e;
                                        }, labeltext: 'State', datafield: 'statecode', form: this.props.form, validationrules: ['required'], onChange: this.onChangeState, disabled: statecodefielddisabled, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 199
                                        },
                                        __self: this
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_5_antd__["A" /* Row */],
                                { gutter: 24, type: 'flex', justify: 'center', style: { marginTop: 10 }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 202
                                    },
                                    __self: this
                                },
                                actionspage === 'create' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["g" /* Button */], { htmlType: 'submit', type: 'default', label: 'Save', menucode: menucode, prefixmenuname: prefixmenuname, actioncode: 'CREATE', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 205
                                    },
                                    __self: this
                                }) : actionspage === 'update' && active ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["g" /* Button */], { htmlType: 'submit', type: 'default', label: 'Save', menucode: menucode, prefixmenuname: prefixmenuname, actioncode: 'UPDATE', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 207
                                    },
                                    __self: this
                                }) : null,
                                actionspage !== 'create' ? active ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["g" /* Button */], { htmlType: 'button', type: 'danger', label: 'Deactivate', menucode: menucode, prefixmenuname: prefixmenuname, actioncode: 'DELETE', onClick: function onClick() {
                                        return _this3.deleteData(citycode, active);
                                    }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 213
                                    },
                                    __self: this
                                }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["g" /* Button */], { htmlType: 'button', type: 'primary', label: 'Activate', menucode: menucode, prefixmenuname: prefixmenuname, actioncode: 'DELETE', onClick: function onClick() {
                                        return _this3.deleteData(citycode, active);
                                    }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 214
                                    },
                                    __self: this
                                }) : "",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["g" /* Button */], { url: '/city', htmlType: 'link', type: 'default', label: 'Back', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 216
                                    },
                                    __self: this
                                })
                            )
                        )
                    )
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Base_BaseComponent__["z" /* ErrorGeneral */], Object.assign({}, this.props, { message: this.state.responseMessage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 223
                    },
                    __self: this
                }));
            }
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return Object.assign({}, state);
};
// export default connect(mapStateToProps)(Layout);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_5_antd__["n" /* Form */].create()(App)));

/***/ }),

/***/ "./src/pages/city/Index.js":
/*!*********************************!*\
  !*** ./src/pages/city/Index.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_Services__ = __webpack_require__(/*! ../../config/Services */ "./src/config/Services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Base_BaseComponent__ = __webpack_require__(/*! ../../components/Base/BaseComponent */ "./src/components/Base/BaseComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = '/Applications/MAMP/htdocs/amala/src/pages/city/Index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Title = __WEBPACK_IMPORTED_MODULE_3_antd__["J" /* Typography */].Title;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearchForm = function (criteria) {
            _this.componentTable.handleSearchForm(criteria);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = "Manage City | Loyalty Management System";
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                menucode = _props.menucode,
                prefixmenuname = _props.prefixmenuname;

            var configurationTable = {
                url: __WEBPACK_IMPORTED_MODULE_1__config_Services__["a" /* api */].url.city.list,
                columns: [{ type: 'field', title: 'City Code', dataIndex: 'citycode', sorter: true }, { type: 'field', title: 'City Name', dataIndex: 'cityname', sorter: true }, { type: 'field', title: 'State Name', dataIndex: 'statename', sorter: true }, { type: 'field', title: 'Country Name', dataIndex: 'countryname', sorter: true }, {
                    type: 'html', title: 'Status', dataIndex: 'active',
                    render: function render(value, row, index) {
                        return value ? 'Active' : 'Inactive';
                    }
                }, {
                    type: 'html', title: 'Action', dataIndex: 'action',
                    render: function render(value, row, index) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 35
                                },
                                __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Base_BaseComponent__["g" /* Button */], { url: '/city/form/' + row.citycode, size: 'small', label: 'Edit', menucode: menucode, prefixmenuname: prefixmenuname, actioncode: 'UPDATE', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 36
                                },
                                __self: _this2
                            })
                        );
                    }
                }]
            };

            var configurationSearchForm = [{ labeltext: "City Code", datafield: "citycode", type: 'text', placeholder: 'City Code', showDefaultSearch: true }, { labeltext: "City Name", datafield: "cityname", type: 'text', placeholder: 'City Name', showDefaultSearch: true }, { labeltext: "State Name", datafield: "statename", type: 'text', placeholder: 'State Name', showDefaultSearch: true }, { labeltext: "Country Name", datafield: "countryname", type: 'text', placeholder: 'Country Name', showDefaultSearch: true }];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["A" /* Row */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_antd__["h" /* Col */],
                        { xs: 24, xl: 22, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            Title,
                            { level: 3, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 54
                                },
                                __self: this
                            },
                            'Manage City'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_antd__["h" /* Col */],
                        { xs: 24, xl: 2, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Base_BaseComponent__["g" /* Button */], { type: 'primary', url: '/city/form/', size: 'default', label: 'Add New', menucode: menucode, prefixmenuname: prefixmenuname, actioncode: 'CREATE', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["k" /* Divider */], {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        },
                        __self: this
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Base_BaseComponent__["X" /* SearchForm */], { form: this.props.form, showAdvanceSearch: false, optionsConfiguration: configurationSearchForm, onSubmit: this.handleSearchForm, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Base_BaseComponent__["_3" /* TableBase */], { ref: function ref(e) {
                        _this2.componentTable = e;
                    }, configuration: configurationTable, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    },
                    __self: this
                })
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_antd__["n" /* Form */].create()(App));

/***/ }),

/***/ "./src/routers/City.router.js":
/*!************************************!*\
  !*** ./src/routers/City.router.js ***!
  \************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_city_Index__ = __webpack_require__(/*! ../pages/city/Index */ "./src/pages/city/Index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_city_Form__ = __webpack_require__(/*! ../pages/city/Form */ "./src/pages/city/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_error_Error404__ = __webpack_require__(/*! ../pages/error/Error404 */ "./src/pages/error/Error404.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_error_Error403__ = __webpack_require__(/*! ../pages/error/Error403 */ "./src/pages/error/Error403.js");
var _jsxFileName = '/Applications/MAMP/htdocs/amala/src/routers/City.router.js',
    _this = this;








var Router = function Router(_ref) {
	var match = _ref.match,
	    permission = _ref.permission;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["e" /* Switch */],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			},
			__self: _this
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { exact: true, path: match.url, render: function render(props) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__pages_city_Index__["a" /* default */], Object.assign({ menucode: 'MSDTCITY', prefixmenuname: 'CITY' }, props, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 10
					},
					__self: _this
				}));
			}, __source: {
				fileName: _jsxFileName,
				lineNumber: 10
			},
			__self: _this
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { exact: true, path: match.url + '/form', render: function render(props) {
				return permission !== undefined && permission["MSDTCITY"]["CITY_CREATE"] ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__pages_city_Form__["a" /* default */], Object.assign({ menucode: 'MSDTCITY', prefixmenuname: 'CITY' }, props, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 11
					},
					__self: _this
				})) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__pages_error_Error403__["a" /* default */], Object.assign({}, props, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 11
					},
					__self: _this
				}));
			}, __source: {
				fileName: _jsxFileName,
				lineNumber: 11
			},
			__self: _this
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { exact: true, path: match.url + '/form/:ID', render: function render(props) {
				return permission !== undefined && (permission["MSDTCITY"]["CITY_ACCESS"] || permission["MSDTCITY"]["CITY_UPDATE"]) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__pages_city_Form__["a" /* default */], Object.assign({ menucode: 'MSDTCITY', prefixmenuname: 'CITY' }, props, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					},
					__self: _this
				})) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__pages_error_Error403__["a" /* default */], Object.assign({}, props, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					},
					__self: _this
				}));
			}, __source: {
				fileName: _jsxFileName,
				lineNumber: 12
			},
			__self: _this
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["d" /* Route */], { component: __WEBPACK_IMPORTED_MODULE_4__pages_error_Error404__["a" /* default */], __source: {
				fileName: _jsxFileName,
				lineNumber: 13
			},
			__self: _this
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ })

});
//# sourceMappingURL=46.chunk.js.map