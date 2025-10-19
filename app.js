
(function () {
  'use strict';
  var app = angular.module('spiceVillageApp', []);

  app.controller('AppCtrl', ['$window', '$timeout', function ($window, $timeout) {

    var vm = this;
    vm.creds = { username: '', password: '' };
    vm.AUTH_KEY = 'sv_auth';
    vm.menu = [{ "category": "Veg Appetizers", "items": [{ "name": "Gobi/BabyCorn 65", "price": "$120.00/$130" }, { "name": "Gobi/BabyCorn/Paneer Manchurian", "price": "$120.00/$130/$150" }, { "name": "Gobi Curry Leaf", "price": "$120.00" }, { "name": "Babycorn/Paneer/Mushroom Chilly", "price": "$120.00/$150" }, { "name": "Chilly Corn", "price": "$120.00" }, { "name": "Cut Mirchi", "price": "$120.00" }, { "name": "Veg/Onion/Spinach Pakora", "price": "$120.00" }, { "name": "Samosa (2 pieces)", "price": "$1.15" }] }, { "category": "Non-Veg Appetizers", "items": [{ "name": "Chicken 65 (Dry/Wet)", "price": "$150.00" }, { "name": "Chicken Lollipop", "price": "$150.00" }, { "name": "Chilly Chicken", "price": "$150.00" }, { "name": "Bangalore Chicken", "price": "$150.00" }, { "name": "Jalapeno Chicken", "price": "$150.00" }, { "name": "Chicken Majestic", "price": "$150.00" }, { "name": "Curry Leaf Chicken", "price": "$150.00" }, { "name": "Afghani Chicken Bites", "price": "$150.00" }, { "name": "Karapodi Chicken Fry", "price": "$150.00" }, { "name": "Chicken Chinthamani", "price": "$150.00" }, { "name": "Andhra Kodi Vepudu", "price": "$150.00" }, { "name": "Mutton Sukka", "price": "$270.00" }, { "name": "Goat Pepper Fry", "price": "$270.00" }, { "name": "Apollo Fish", "price": "$170.00" }, { "name": "Tawa Fish Fry (Tilapia/Pomfret/King)", "price": "$170.00" }, { "name": "Chilly Fish", "price": "$170.00" }, { "name": "Nethili Fry", "price": "$170.00" }, { "name": "Loose Prawns (Shrimp Fry)", "price": "$210.00" }] }, { "category": "Veg Entr\u00e9es", "items": [{ "name": "Dal Tadka", "price": "$110.00" }, { "name": "Dal Makhani", "price": "$130.00" }, { "name": "Paneer Tikka Masala", "price": "$140.00" }, { "name": "Kadai Paneer", "price": "$140.00" }, { "name": "Paneer Butter Masala", "price": "$140.00" }, { "name": "Methi Chaman Paneer", "price": "$140.00" }, { "name": "Palak Paneer / Saag Paneer", "price": "$140.00" }, { "name": "Aloo Gobi", "price": "$130.00" }, { "name": "Chana Masala", "price": "$110.00" }, { "name": "Malai Kofta", "price": "$150.00" }, { "name": "Navratan Korma", "price": "$140.00" }, { "name": "Veg Chettinadu", "price": "$140.00" }, { "name": "Guthi Vankaya", "price": "$140.00" }] }, { "category": "Chicken/Goat/Lamb Curries", "items": [{ "name": "Butter Chicken", "price": "$150.00" }, { "name": "Chicken Tikka Masala", "price": "$150.00" }, { "name": "Chettinadu Chicken/Mutton (Bone-in)", "price": "$150.00 / $210.00" }, { "name": "Andhra Curry Chicken/Mutton (Bone-in)", "price": "$150.00 / $210.00" }, { "name": "Gongura Curry Chicken/Mutton (Bone-in)", "price": "$150.00 / $210.00" }, { "name": "Mughlai Chicken/Mutton (Bone-in)", "price": "$150.00 / $210.00" }, { "name": "Chicken Lababdar (Bone-in)", "price": "$150.00" }, { "name": "Chicken Chatpata", "price": "$150.00" }, { "name": "Kadai Chicken/Mutton (Bone-in)", "price": "$150.00 / $210.00" }, { "name": "Saag Chicken", "price": "$150.00" }, { "name": "Chicken/Mutton Khorma (Bone-in)", "price": "$150.00 / $210.00" }, { "name": "Malabar Chicken/Fish Curry", "price": "$150.00 / $170.00" }, { "name": "Mutton Rogan Josh", "price": "$210.00" }, { "name": "Chicken Vindaloo", "price": "$150.00" }, { "name": "Tandoori Chicken Curry (Bone-In)", "price": "$150.00" }, { "name": "Hyderabadi Curry Chicken/Mutton", "price": "$150.00 / $210.00" }, { "name": "Rayalaseema Naatukodi Pulusu", "price": "$210.00" }, { "name": "Nattu Kozhi Kuzhambu", "price": "$210.00" }, { "name": "Shadi Wala Green Chicken Curry (Weekend Special)", "price": "$210.00" }] }, { "category": "Seafood Entr\u00e9es (Fish/Shrimp)", "items": [{ "name": "Rajugari Royyala Iguru (Shrimp)", "price": "$210.00" }, { "name": "Nellore Fish Curry", "price": "$170.00" }, { "name": "Fish Moilee", "price": "$170.00" }, { "name": "Nethili Meen Kulambu", "price": "$170.00" }, { "name": "Shrimp Masala", "price": "$210.00" }, { "name": "Shrimp Ghee Roast", "price": "$210.00" }] }, { "category": "Indo-Chinese (Fried Rice/Noodles)", "items": [{ "name": "Fried Rice / Noodles", "price": "$120.00/130.00" }, { "name": "Schezwan Fried Rice / Noodles", "price": "$120.00/130.00" }, { "name": "Street Style Fried Rice / Noodles", "price": "$120.00/130.00" }, { "name": "Singapore Noodles", "price": "$120.00/130.00" }] }, { "category": "Pulavs (Weekend Specials Only)", "items": [{ "name": "Gongura Pulav", "price": "$150.00" }, { "name": "Raju Gari Kodi Pulav", "price": "$150.00" }, { "name": "Jackfruit Biryani", "price": "$150.00" }, { "name": "Natu Kodi Pulav", "price": "$150.00" }] }, { "category": "Biryani", "items": [{ "name": "Veg Keema Biryani (Weekend Special)", "price": "$150.00" }, { "name": "Gutti Vankaya Biryani (Weekend Special)", "price": "$150.00" }, { "name": "Paneer Biryani", "price": "$150.00" }, { "name": "Kofta Biryani", "price": "$150.00" }, { "name": "Ulavacharu / Avakaya / Gongura Biryani", "price": "$150.00" }, { "name": "Hyderabad Dum Biryani", "price": "$150.00 (Chicken) / $210.00 (Mutton) / $140.00 (Veg)" }, { "name": "Vijayawada Special Biryani (Boneless)", "price": "$160.00" }, { "name": "Fry Piece Biryani", "price": "$160.00" }, { "name": "Nalli Ghost Biryani (Weekend Special)", "price": "$210.00" }, { "name": "Mutton Ghee Roast Biryani", "price": "$210.00" }, { "name": "Bhai Veetu/Shadi Wala Biryani", "price": "$210.00" }, { "name": "Ambur Chicken Biryani", "price": "$140.00" }, { "name": "Thalappakattu Goat Biryani", "price": "$210.00" }] }, { "category": "Indian Tiffin Specials (Available All Time)", "items": [{ "name": "Idly", "price": "$1.50" }, { "name": "Vada", "price": "$2.00" }, { "name": "Mysore Bonda", "price": "$2.00" }] }, { "category": "Breads", "items": [{ "name": "Naan (Plain/Butter/Garlic/Bullet/Onion/Peshawari/Cheese)", "price": "$2.25 to $2.75" }, { "name": "Poori", "price": "$2.25" }, { "name": "Malabar Parotta", "price": "$2.25" }, { "name": "Bhatura", "price": "$2.25" }, { "name": "Kulcha (Paneer/Onion/Amritsari)", "price": "$2.50" }, { "name": "Tandoori Roti", "price": "$2.25" }] }, { "category": "Desserts", "items": [{ "name": "Rasmalai", "price": "$2" }, { "name": "Carrot Halwa", "price": "$120.00" }, { "name": "Gulab Jamun with Ice Cream", "price": "$2.50" }, { "name": "Mango Kulfi", "price": "$2.50" }, { "name": "Rice Kheer", "price": "$120.00" }, { "name": "Double Ka Meetha", "price": "$120.00" }] }, { "category": "Drinks", "items": [{ "name": "Tea", "price": "$100.00 5GL" }, { "name": "Lassi (Salt/Sugar/Mango)", "price": "$120.00/140" }, { "name": "Chikoo Shake", "price": "$140.00" }] }];
    vm.activeIndex = 0;
    vm.newCategoryName = '';
    vm.newItem = { name: '', price: '' };
    vm.selectedItems = [];
    vm.printBuffer = [];

    vm.isAuthed = function () { return !!$window.sessionStorage.getItem(vm.AUTH_KEY); };
    vm.login = function () { if (vm.creds.username === 'admin' && vm.creds.password === 'spice123') { $window.sessionStorage.setItem(vm.AUTH_KEY, '1'); } else { alert('Invalid credentials'); } };
    vm.logout = function () { $window.sessionStorage.removeItem(vm.AUTH_KEY); };

    vm.setActive = function (i) { vm.activeIndex = i; };
    vm.active = function () { return vm.menu[vm.activeIndex]; };

    vm.addCategory = function () { if (!vm.newCategoryName) return; vm.menu.push({ category: vm.newCategoryName, items: [] }); vm.newCategoryName = ''; vm.activeIndex = vm.menu.length - 1; };
    vm.deleteItem = function (i) { vm.active().items.splice(i, 1); vm.syncSelected(); };
    vm.addItem = function () { if (!vm.newItem.name || !vm.newItem.price) return; vm.active().items.push({ name: vm.newItem.name, price: vm.newItem.price }); vm.newItem = { name: '', price: '' }; };

    vm.syncSelected = function () { vm.selectedItems = []; vm.menu.forEach(function (c) { c.items.forEach(function (i) { if (i.__selected) vm.selectedItems.push({ name: i.name, price: i.price, category: c.category }); }); }); };
    vm.clearSelections = function () { vm.menu.forEach(function (c) { c.items.forEach(function (i) { i.__selected = false; }); }); vm.syncSelected(); };

    function buildPrintBuffer(mode) {
      if (mode === 'selected') {
        var g = {};
        vm.menu.forEach(function (c) { c.items.forEach(function (i) { if (i.__selected) { (g[c.category] = g[c.category] || []).push({ name: i.name, price: i.price }); } }); });
        vm.printBuffer = Object.keys(g).map(function (k) { return { category: k, items: g[k] }; });
      } else {
        vm.printBuffer = vm.menu.map(function (c) { return { category: c.category, items: c.items.map(function (i) { return { name: i.name, price: i.price }; }) }; });
      }
    }

    vm.openPrintPreview = function () { buildPrintBuffer('all'); alert('Use Print Full Menu to print or Download PDF to save a PDF. This preview mirrors the print layout.'); };
    vm.printSelected = function () {
      buildPrintBuffer('selected');
      if (vm.printBuffer.length === 0) {
        alert('Please select at least one item to print.');
        return;
      }
      $timeout(function () { window.print(); }, 40);
    };
    vm.totalSelectedPrice = function () {
      let total = 0;
      vm.selectedItems.forEach(function (item) {
        // ensure price is numeric
        let price = parseFloat(item.price.toString().replace(/[^0-9.]/g, ""));
        if (!isNaN(price)) total += price;
      });
      return total;
    };
    vm.printTotal = function () {
      let total = 0;
      if (vm.printBuffer && vm.printBuffer.length > 0) {
        vm.printBuffer.forEach(function (cat) {
          cat.items.forEach(function (item) {
            let price = parseFloat(item.price.toString().replace(/[^0-9.]/g, ""));
            if (!isNaN(price)) total += price;
          });
        });
      }
      return total;
    };
    vm.toggleSelect = function (item) {
      const idx = vm.selectedItems.indexOf(item);
      if (idx === -1) {
        vm.selectedItems.push({
          name: item.name,
          price: item.price
        });
      } else {
        vm.selectedItems.splice(idx, 1);
      }
    };



    vm.printAll = function () { buildPrintBuffer('all'); $timeout(function () { window.print(); }, 40); };

    // PDF export (single A4 page) using html2canvas + jsPDF
    vm.downloadPdf = function () {
      buildPrintBuffer('all');
      var node = document.getElementById('print-root');
      // ensure it's visible for capture
      node.style.display = 'block';
      html2canvas(node, { scale: 2, backgroundColor: '#ffffff' }).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        var { jsPDF } = window.jspdf;
        var pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
        var pageWidth = pdf.internal.pageSize.getWidth();
        var pageHeight = pdf.internal.pageSize.getHeight();
        var w = canvas.width, h = canvas.height;
        var ratio = Math.min(pageWidth / w, pageHeight / h);
        var imgW = w * ratio, imgH = h * ratio;
        var x = (pageWidth - imgW) / 2, y = (pageHeight - imgH) / 2;
        pdf.addImage(imgData, 'PNG', x, y, imgW, imgH);
        pdf.save('SpiceVillage_Catering_Menu.pdf');
        node.style.display = 'none';
      }).catch(function (err) { console.error(err); node.style.display = 'none'; });
    };

  }]);
})();
