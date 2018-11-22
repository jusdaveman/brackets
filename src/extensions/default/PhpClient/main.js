/*
 * Copyright (c) 2012 - present Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

define(function (require, exports, module) {
    "use strict";
    var  AppInit            = brackets.getModule("utils/AppInit"),
    ExtensionUtils          = brackets.getModule("utils/ExtensionUtils"),
    LanguageTool            = brackets.getModule("lsp/LanguageTool"),
    Client                  = brackets.getModule("lsp/ClientTemplate");

    var _serverName = "PhpServer";
    var _serverPath = "node/server.js";
    var _capabilities = {};
    var phpClient = null;

    class PhpClient extends Client{

        getServerName(){
            return _serverName;
        }

        getServerPath(){
            return ExtensionUtils.getModulePath(module, _serverPath);
        }

        getLanguageId(){
            return "php";
        }
    }

    AppInit.appReady(function () {
        phpClient = new PhpClient();
        LanguageTool.initLanguageTooling(phpClient);
    });
});
