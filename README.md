# Mobile support for MediumEditor

This is a simple plugin that adds mobile support to [MediumEditor](https://github.com/daviferreira/medium-editor) (a clone of medium.com WYSIWYG editor). 
According to an [issue #81](https://github.com/daviferreira/medium-editor/issues/81) in MediumEditor there is no plan to add mobile support to the editor any time soon.

This plugin is a work in progress. Currently it solves an issue when after selecting text (longer touch), editor's toolbar isn't visible.

The plugin was tested in Chrome 39 in Android and PhantomJS.


## Download

Bower (recommended): ```bower install medium-editor-mobile-plugin --save```

Manual: [Download the latest release as ZIP](https://github.com/orthes/medium-editor-mobile-plugin/archive/master.zip)


## Usage

```
<script src="bower_components/medium-editor-mobile-plugin/dist/medium-editor-mobile-plugin.min.js"></script>
```

That's it. No need for initialization, just make sure the script is placed after MediumEditor's script and before the editor is called for the first time.


## Author

Pavel Linkesch | [@linkesch](http://twitter.com/linkesch) | [http://www.linkesch.sk](http://www.linkesch.sk)