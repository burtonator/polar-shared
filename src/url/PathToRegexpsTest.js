"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const PathToRegexps_1 = require("./PathToRegexps");
const Rewrites_1 = require("../../../polar-shared-webserver/src/webserver/Rewrites");
describe('PathToRegexps', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(PathToRegexps_1.PathToRegexps.pathToRegexp("/:foo"), "/([^/]+)");
            chai_1.assert.equal(PathToRegexps_1.PathToRegexps.pathToRegexp("/products/:product/page/:page"), "/products/([^/]+)/page/([^/]+)");
            const regexp = PathToRegexps_1.PathToRegexps.pathToRegexp("/webapp/icon.png");
            chai_1.assert.ok(Rewrites_1.Rewrites.matchesRegex(regexp, '/webapp/icon.png'));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aFRvUmVnZXhwc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXRoVG9SZWdleHBzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixtREFBOEM7QUFDOUMscUZBQWdGO0FBRWhGLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFFdEIsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzlELGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQWEsQ0FBQyxZQUFZLENBQUMsK0JBQStCLENBQUMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1lBRTVHLE1BQU0sTUFBTSxHQUFHLDZCQUFhLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFOUQsYUFBTSxDQUFDLEVBQUUsQ0FBQyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRWpFLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7UGF0aFRvUmVnZXhwc30gZnJvbSBcIi4vUGF0aFRvUmVnZXhwc1wiO1xuaW1wb3J0IHtSZXdyaXRlc30gZnJvbSBcIi4uLy4uLy4uL3BvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9SZXdyaXRlc1wiO1xuXG5kZXNjcmliZSgnUGF0aFRvUmVnZXhwcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoUGF0aFRvUmVnZXhwcy5wYXRoVG9SZWdleHAoXCIvOmZvb1wiKSwgXCIvKFteL10rKVwiKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKFBhdGhUb1JlZ2V4cHMucGF0aFRvUmVnZXhwKFwiL3Byb2R1Y3RzLzpwcm9kdWN0L3BhZ2UvOnBhZ2VcIiksIFwiL3Byb2R1Y3RzLyhbXi9dKykvcGFnZS8oW14vXSspXCIpO1xuXG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IFBhdGhUb1JlZ2V4cHMucGF0aFRvUmVnZXhwKFwiL3dlYmFwcC9pY29uLnBuZ1wiKTtcblxuICAgICAgICBhc3NlcnQub2soUmV3cml0ZXMubWF0Y2hlc1JlZ2V4KHJlZ2V4cCwgJy93ZWJhcHAvaWNvbi5wbmcnKSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=