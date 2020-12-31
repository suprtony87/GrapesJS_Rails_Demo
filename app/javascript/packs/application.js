// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


import 'grapesjs/dist/css/grapes.min.css'
import grapesJS from 'grapesjs'
import grapesJSMJML from 'grapesjs-mjml' 
import grapesjspresetnewsletter from 'grapesjs-preset-newsletter' 

window.addEventListener('DOMContentLoaded', (event) => {





var editor = grapesJS.init({
   fromElement: 1,
   container : '#gjs',
   avoidInlineStyle : true,
   height: '900px',
   width: 'auto',
   noticeOnUnload: true,
       modalLabelImport: '',
    modalLabelExport: '',
    modalBtnImport: 'Import',
   // Disable the storage manager for the moment
   storageManager: false,
   plugins: [grapesJSMJML],
   pluginsOpts: {
      [grapesJSMJML]: {/* ...options */}
   },

   // Layer Manager


   // End Layer Manager

});

// Block 1



// Block 2



// Block 3







	});