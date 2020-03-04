import {identity} from "./index";

describe("`identity` function", function(){
 test("should return the value passed to it", function (){
    const input = 1;
    const output = identity(input);
    expect(output).toEqual(input);
 });
});