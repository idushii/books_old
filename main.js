$(document).ready(function () {
	$("#main").bind("click", function() {
		$("#text").empty();
	});
	$("#books").bind("click", function() {
		load_books_gallery();
	});
});

function load_books_gallery() {
    $.ajax({
        type: "GET",
        url: "books/index.xml",
        dataType: "xml",
        success: load_books_annotation
    });
}

function load_books_annotation(xml) {
var i = 0;
	$(xml).find("book").each(function () {
		var id_book = "book_"+i;
		$("#text").append("<div class='book_preview' id='"+id_book+"'></div>");
		$("#"+id_book).append("<div class='title_book_preview'>" + $(this).find("title").text() + "</div>");
		$("#"+id_book).append("<div class='description_book_preview'>" + $(this).find("description").text() + "</div>");
		$("#"+id_book).append("<div class='pairing_book_preview'>" + $(this).find("pairing").text() + "</div>");
		$("#"+id_book).append("<div class='button_book_open_preview'>Читать</div>");
		i++;
	});
}