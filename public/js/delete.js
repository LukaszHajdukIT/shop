/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy na pewno chcesz usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      CancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\") // data: {id: $(this).data(\"id\")}\n\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oops...', data.responseJSON.message, 'error');\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsIkNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVc7QUFDWEEsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxLQUFiLENBQW1CLFlBQVc7QUFBQTs7QUFDNUJDLElBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1ZDLE1BQUFBLEtBQUssRUFBRSxvQ0FERztBQUVWQyxNQUFBQSxJQUFJLEVBQUUsU0FGSTtBQUdWQyxNQUFBQSxnQkFBZ0IsRUFBRSxJQUhSO0FBSVZDLE1BQUFBLGtCQUFrQixFQUFFLFNBSlY7QUFLVkMsTUFBQUEsaUJBQWlCLEVBQUUsTUFMVDtBQU1WQyxNQUFBQSxpQkFBaUIsRUFBRSxLQU5UO0FBT1ZDLE1BQUFBLGdCQUFnQixFQUFFO0FBUFIsS0FBVixFQVFDQyxJQVJELENBUU0sVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCLFVBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUN0QmIsUUFBQUEsQ0FBQyxDQUFDYyxJQUFGLENBQU87QUFDTEMsVUFBQUEsTUFBTSxFQUFFLFFBREg7QUFFTEMsVUFBQUEsR0FBRyxFQUFFQyxTQUFTLEdBQUlqQixDQUFDLENBQUMsS0FBRCxDQUFELENBQVFrQixJQUFSLENBQWEsSUFBYixDQUZiLENBR0o7O0FBSEksU0FBUCxFQUtDQyxJQUxELENBS00sVUFBVUQsSUFBVixFQUFpQjtBQUNyQkUsVUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNELFNBUEQsRUFRQ0MsSUFSRCxDQVFNLFVBQVVMLElBQVYsRUFBZTtBQUNuQmhCLFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUNFLFNBREYsRUFFRWUsSUFBSSxDQUFDTSxZQUFMLENBQWtCQyxPQUZwQixFQUdFLE9BSEY7QUFLRCxTQWREO0FBZUQ7QUFDRixLQTFCQztBQTJCRCxHQTVCRDtBQTZCRCxDQTlCQSxDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgdGl0bGU6ICdDenkgbmEgcGV3bm8gY2hjZXN6IHVzdW7EhcSHIHJla29yZD8nLFxyXG4gICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnVGFrJyxcclxuICAgIENhbmNlbEJ1dHRvblRleHQ6ICdOaWUnXHJcbiAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIHVybDogZGVsZXRlVXJsICArICQodGhpcykuZGF0YShcImlkXCIpLFxyXG4gICAgICAgICAvLyBkYXRhOiB7aWQ6ICQodGhpcykuZGF0YShcImlkXCIpfVxyXG4gICAgICB9KVxyXG4gICAgICAuZG9uZShmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5mYWlsKGZ1bmN0aW9uIChkYXRhKXtcclxuICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAnT29wcy4uLicsXHJcbiAgICAgICAgICBkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlLFxyXG4gICAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;