module('mobile', {
    setup: function () {
        this.clock = sinon.useFakeTimers();
        
        document.getElementById('qunit-fixture').innerHTML = '<div id="editable">Donec id elit non mi porta gravida at eget metus.</div>';
        
        this.editor = new MediumEditor('#editable');
        this.el = document.getElementById('editable');
    },
    teardown: function () {
        this.clock.restore();
        this.editor.deactivate();
    }
});

test('touchend with selected text shows toolbar', function () {
    var event = document.createEvent("HTMLEvents"),
        range, selection;
    
    // Select text    
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(this.el);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(this.el);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    event.initEvent('touchend', true, true);
    this.el.dispatchEvent(event);
    this.clock.tick(500);
    
    ok(document.getElementById('medium-editor-toolbar-1').classList.contains('medium-editor-toolbar-active'), 'toolbar is visible');
});