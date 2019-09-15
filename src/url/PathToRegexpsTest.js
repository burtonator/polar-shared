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
function matchesRegex(regex, path) {
    const re = new RegExp(regex);
    const matches = re.exec(path);
    if (matches && matches[0] === path) {
        return true;
    }
    return false;
}
describe('PathToRegexps', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(PathToRegexps_1.PathToRegexps.pathToRegexp("/:foo"), "/([^/]+)");
            chai_1.assert.equal(PathToRegexps_1.PathToRegexps.pathToRegexp("/products/:product/page/:page"), "/products/([^/]+)/page/([^/]+)");
            const regexp = PathToRegexps_1.PathToRegexps.pathToRegexp("/webapp/icon.png");
            chai_1.assert.ok(matchesRegex(regexp, '/webapp/icon.png'));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aFRvUmVnZXhwc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXRoVG9SZWdleHBzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixtREFBbUY7QUFFbkYsU0FBUyxZQUFZLENBQUMsS0FBOEIsRUFBRSxJQUFnQjtJQUVsRSxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDaEMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBRWpCLENBQUM7QUFFRCxRQUFRLENBQUMsZUFBZSxFQUFFO0lBRXRCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsYUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM5RCxhQUFNLENBQUMsS0FBSyxDQUFDLDZCQUFhLENBQUMsWUFBWSxDQUFDLCtCQUErQixDQUFDLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztZQUU1RyxNQUFNLE1BQU0sR0FBRyw2QkFBYSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRTlELGFBQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFeEQsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtQYXRoVG9SZWdleHBzLCBVUkxQYXRoU3RyLCBVUkxSZWd1bGFyRXhwcmVzc2lvblN0cn0gZnJvbSBcIi4vUGF0aFRvUmVnZXhwc1wiO1xuXG5mdW5jdGlvbiBtYXRjaGVzUmVnZXgocmVnZXg6IFVSTFJlZ3VsYXJFeHByZXNzaW9uU3RyLCBwYXRoOiBVUkxQYXRoU3RyKTogYm9vbGVhbiB7XG5cbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAocmVnZXgpO1xuICAgIGNvbnN0IG1hdGNoZXMgPSByZS5leGVjKHBhdGgpO1xuXG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlc1swXSA9PT0gcGF0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbn1cblxuZGVzY3JpYmUoJ1BhdGhUb1JlZ2V4cHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKFBhdGhUb1JlZ2V4cHMucGF0aFRvUmVnZXhwKFwiLzpmb29cIiksIFwiLyhbXi9dKylcIik7XG4gICAgICAgIGFzc2VydC5lcXVhbChQYXRoVG9SZWdleHBzLnBhdGhUb1JlZ2V4cChcIi9wcm9kdWN0cy86cHJvZHVjdC9wYWdlLzpwYWdlXCIpLCBcIi9wcm9kdWN0cy8oW14vXSspL3BhZ2UvKFteL10rKVwiKTtcblxuICAgICAgICBjb25zdCByZWdleHAgPSBQYXRoVG9SZWdleHBzLnBhdGhUb1JlZ2V4cChcIi93ZWJhcHAvaWNvbi5wbmdcIik7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKG1hdGNoZXNSZWdleChyZWdleHAsICcvd2ViYXBwL2ljb24ucG5nJykpO1xuXG4gICAgfSk7XG5cbn0pO1xuXG4iXX0=