 document.addEventListener("DOMContentLoaded", function () {
           
var hamburgerIcon = document.querySelector('.hamburger-icon');
var navLinks = document.querySelector('nav ul');

            hamburgerIcon.addEventListener('click', function () {
                navLinks.classList.toggle('show');
            });

         
            var searchInput = document.querySelector('input[name="search"]');
            var searchForm = document.querySelector('form[action="#"]');
            
            searchForm.addEventListener('submit', function (event) {
                event.preventDefault();
                var searchTerm = searchInput.value;
              
                console.log('Search term:', searchTerm);
            });

            var statusForms = document.querySelectorAll('.form');

            statusForms.forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    var selectedStatus = form.querySelector('input[list="status"]').value;

                    console.log('Selected Status:', selectedStatus);
                });
            });

         
            var todoForm = document.querySelector('.todo form');
            
            todoForm.addEventListener('submit', function (event) {
                event.preventDefault();
                var checkboxes = todoForm.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(function (checkbox) {
                    if (checkbox.checked) {
                        console.log('To-Do Item:', checkbox.name);
                    }
                });
            });

           
        });
   
