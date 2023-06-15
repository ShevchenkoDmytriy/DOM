// 1 //
// document.addEventListener('DOMContentLoaded', function() {
//       var links = document.querySelectorAll('#link-list a');
//       links.forEach(function(link) {
//         if (link.getAttribute('href').startsWith('http://')) {
//           link.classList.add('external-link');
//         }});
//     });


// 3//
//  var bookList = document.getElementById('bookList');
//         var selectedBooks = [];
//         var previousClickedIndex = null;
      
//         bookList.addEventListener('click', function(event) {
//           var target = event.target;
//           var isCtrlPressed = event.ctrlKey;
//           var isShiftPressed = event.shiftKey;
//           var clickedIndex = Array.from(target.parentNode.children).indexOf(target);
      
//           if (isCtrlPressed) {
//             if (selectedBooks.includes(target)) {
//               target.classList.remove('selected');
//               selectedBooks.splice(selectedBooks.indexOf(target), 1);
//             } else {
//               target.classList.add('selected');
//               selectedBooks.push(target);
//             }
//           } else if (isShiftPressed) {
//             if (previousClickedIndex !== null) {
//               var start = Math.min(previousClickedIndex, clickedIndex);
//               var end = Math.max(previousClickedIndex, clickedIndex);
      
//               for (var i = start; i <= end; i++) {
//                 var book = target.parentNode.children[i];
//                 if (!selectedBooks.includes(book)) {
//                   book.classList.add('selected');
//                   selectedBooks.push(book);
//                 }
//               }
//             }
//           } else {
//             selectedBooks.forEach(function(book) {
//               book.classList.remove('selected');
//             });
//             selectedBooks = [];
//             target.classList.add('selected');
//             selectedBooks.push(target);
//           }
      
//           previousClickedIndex = clickedIndex;
//         });

// 4 //
  // var textContainer = document.getElementById('textContainer');
  //       var editContainer = document.getElementById('editContainer');
  //       var textContent = document.getElementById('textContent');
  //       var editContent = document.getElementById('editContent');
  //       var isEditing = false;
      
  //       // Отображение textarea
  //       function startEditing() {
  //         isEditing = true;
  //         textContainer.style.display = 'none';
  //         editContainer.style.display = 'block';
  //         editContent.value = textContent.textContent;
  //         editContent.focus();
  //       }
  //       function stopEditing() {
  //         isEditing = false;
  //         textContainer.style.display = 'block';
  //         editContainer.style.display = 'none';
  //         textContent.textContent = editContent.value;
  //       }
  //       document.addEventListener('keydown', function(event) {
  //         if (event.ctrlKey && event.key === 'e') {
  //           event.preventDefault();
  //           startEditing();
  //         }
  //         if (event.ctrlKey && event.key === 's') {
  //           event.preventDefault();
  //           stopEditing();
  //         }
  //       });

  // 5 //
    // function sortTable(columnIndex) {
    //       var table, rows, switching, i, x, y, shouldSwitch;
    //       table = document.getElementById("dataTable");
    //       switching = true;
      
    //       while (switching) {
    //         switching = false;
    //         rows = table.getElementsByTagName("tr");
      
    //         for (i = 1; i < (rows.length - 1); i++) {
    //           shouldSwitch = false;
    //           x = rows[i].getElementsByTagName("td")[columnIndex];
    //           y = rows[i + 1].getElementsByTagName("td")[columnIndex];
      
    //           if (columnIndex === 1) {
    //             x = parseInt(x.textContent);
    //             y = parseInt(y.textContent);
    //           } else {
    //             x = x.textContent.toLowerCase();
    //             y = y.textContent.toLowerCase();
    //           }
      
    //           if (x > y) {
    //             shouldSwitch = true;
    //             break;
    //           }
    //         }
      
    //         if (shouldSwitch) {
    //           rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //           switching = true;
    //         }
    //       }
    //     }

    // 6 //
      // var resizableBox = document.getElementById('resizableBox');
      //   var isResizing = false;
      //   var startX, startY, startWidth, startHeight;
      
      //   resizableBox.addEventListener('mousedown', function(e) {
      //     if (e.target === resizableBox) {
      //       isResizing = true;
      //       startX = e.clientX;
      //       startY = e.clientY;
      //       startWidth = parseInt(document.defaultView.getComputedStyle(resizableBox).width, 10);
      //       startHeight = parseInt(document.defaultView.getComputedStyle(resizableBox).height, 10);
      //     }
      //   });
      
      //   document.addEventListener('mousemove', function(e) {
      //     if (!isResizing) return;
      
      //     var width = startWidth + (e.clientX - startX);
      //     var height = startHeight + (e.clientY - startY);
      
      //     resizableBox.style.width = width + 'px';
      //     resizableBox.style.height = height + 'px';
      //   });
      
      //   document.addEventListener('mouseup', function() {
      //     isResizing = false;
      //   });