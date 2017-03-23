/**
 * @fileoverview Ensures no sync xhr calls are performed
 * @author tobiasso85
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-sync-xhr"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-sync-xhr", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "jQuery.sap.requireSync(...)",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
