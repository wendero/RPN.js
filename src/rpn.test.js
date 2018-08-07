RPN.Test = function(name, exp, expected) {
        this.Test(name, exp, expected, null);
};
RPN.Test = function(name, exp, expected, objects) {
    let val = this.Eval(exp, objects);
    let status = (expected == val ? "PASS" : "FAIL");
    let includeObjects = "";
    if(objects != null)
    {
        includeObjects = `<div><div>Objects:</div><code class="objects">${JSON.stringify(objects, null, 4)}</code></div>`;
    }
document.write(`<div class="test ${status}"><span>${status}</span><span>Test: ${name}</span><div>RPN: <code>${exp}</code></div>${includeObjects}<div><div>Expected: ${expected}</div><div>Value: ${val.toString()}</div></div></div>`);
};