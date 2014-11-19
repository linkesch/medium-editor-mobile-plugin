/*! 
 * medium-editor-mobile-plugin v0.0.1 - Mobile support for MediumEditor
 *
 * https://github.com/orthes/medium-editor-mobile-plugin
 * 
 * Copyright (c) 2014 Pavel Linkesch (http://linkesch.sk)
 * Released under the MIT license
 */

;(function (window, document, undefined) {
    
    'use strict';
    
    MediumEditor.prototype._bindSelect = MediumEditor.prototype.bindSelect;

    MediumEditor.prototype.bindSelect = function () {
        this._bindSelect();
        
        document.documentElement.addEventListener('touchend', this.checkSelectionWrapper);
        
        return this;
    };
    
})(window, document);