(function(){
    $(document).ready(function() {
        $('#navbar-wrapper .search-bar .fa-search').bind('click', function(e){
            e.target.previousElementSibling.focus()
        })
    })    
})();