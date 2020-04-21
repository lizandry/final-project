"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TeamDash_1 = require("./Components/TeamDash");
var get_fetchers_1 = require("./helpers/get-fetchers");
var App_callbacks_1 = require("./helpers/App-callbacks");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            users: Array,
            teams: Array,
            team: Array
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        get_fetchers_1.fetchAllUsers()
            .then(function (users) { return _this.setState({ users: users }); })
            .catch(function (err) { return console.log(err); });
        get_fetchers_1.fetchAllTeams()
            .then(function (teams) { return _this.setState({ teams: teams }); })
            .catch(function (err) { return console.log(err); });
    };
    App.prototype.render = function () {
        // const friendship: string = 'friendship';
        // console.log(this.state)
        return (React.createElement("div", { className: 'App' },
            React.createElement(TeamDash_1.default, { action: App_callbacks_1.displayTeam })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map