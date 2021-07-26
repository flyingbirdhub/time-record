import * as t from "babel-types";
import template from "babel-template";

const ast = template(`
record.start = performance.now();
record.time = performance.now() - record.start;
`)();

export default function () {
    return {
        visitor: {
            AwaitExpression(path) {
                path.insertBefore(ast);
                path.insertAfter(ast);
            },
        },
    };
}
