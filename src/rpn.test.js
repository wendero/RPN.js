RPN.Test = function (name, exp, expected) {
    this.Test(name, exp, expected, null);
};
RPN.Test = function (name, exp, expected, objects) {
    let val = this.Eval(exp, objects);
    let status = (expected == val ? "PASS" : "FAIL");

    if (!this.Summary) {
        this.Summary = {
            Success: 0,
            Fail: 0,
            Total: 0
        };
    }
    this.Summary.Total++;

    if (status == "PASS") {
        this.Summary.Success++;
    } else {
        this.Summary.Fail++;
    }

    let includeObjects = "";
    if (objects != null) {
        includeObjects = `<div><div>Objects:</div><code class="objects">${JSON.stringify(objects, null, 4)}</code></div>`;
    }
    document.write(`<div class="test ${status}"><span>${status}</span><span>Test: ${name}</span><div>RPN: <code>${exp}</code></div>${includeObjects}<div><div>Expected: ${expected}</div><div>Value: ${val.toString()}</div></div></div>`);
};
RPN.getSummary = function() {
    let rate = RPN.Eval(`$0.Total $0.Success perc`, [this.Summary]);
    return `Summary: Total: ${this.Summary.Total}, Success: ${this.Summary.Success}, Failures: ${this.Summary.Fail}, Success Rate: ${rate}%`;
}