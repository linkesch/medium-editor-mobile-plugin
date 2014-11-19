;(function (window, document, undefined) {
    
    'use strict';
    
    MediumEditor.prototype._bindSelect = MediumEditor.prototype.bindSelect;

    MediumEditor.prototype.bindSelect = function () {
        this._bindSelect();
        
        document.documentElement.addEventListener('touchend', this.checkSelectionWrapper);
        
        return this;
    };
    
})(window, document);